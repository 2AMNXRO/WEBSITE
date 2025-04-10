import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { WebSocketServer, WebSocket } from "ws";
import { 
  insertBookingSchema, 
  insertContactSchema, 
  insertChatMessageSchema 
} from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

// Store active chat connections
interface ChatConnection {
  bookingId: number;
  ws: WebSocket;
}

const activeChats: ChatConnection[] = [];

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);

  // WebSocket server for live chat
  const wss = new WebSocketServer({ server: httpServer, path: '/ws' });
  
  wss.on('connection', (ws) => {
    let bookingId: number | null = null;
    
    ws.on('message', async (message) => {
      try {
        const data = JSON.parse(message.toString());
        
        if (data.type === 'join') {
          // Authenticate and join a chat room
          const booking = await storage.getBookingByChatKey(data.chatKey);
          if (booking) {
            bookingId = booking.id;
            
            // Register the connection
            activeChats.push({ bookingId: booking.id, ws });
            
            // Send chat history
            const messages = await storage.getChatMessages(booking.id);
            ws.send(JSON.stringify({
              type: 'history',
              messages
            }));
            
            // Send welcome message
            const welcome = await storage.createChatMessage({
              bookingId: booking.id,
              sender: 'system',
              message: `Welcome to your Codenova chat session! How can I help with your project today?`
            });
            
            broadcastToBooking(booking.id, {
              type: 'message',
              message: welcome
            });
          } else {
            ws.send(JSON.stringify({
              type: 'error',
              message: 'Invalid chat key'
            }));
          }
        } else if (data.type === 'message' && bookingId) {
          // Process and broadcast chat message
          try {
            const messageData = insertChatMessageSchema.parse({
              bookingId,
              sender: data.sender,
              message: data.message
            });
            
            const savedMessage = await storage.createChatMessage(messageData);
            
            broadcastToBooking(bookingId, {
              type: 'message',
              message: savedMessage
            });
          } catch (error) {
            if (error instanceof ZodError) {
              ws.send(JSON.stringify({
                type: 'error',
                message: fromZodError(error).message
              }));
            } else {
              ws.send(JSON.stringify({
                type: 'error',
                message: 'Failed to send message'
              }));
            }
          }
        }
      } catch (error) {
        console.error('WebSocket error:', error);
      }
    });
    
    ws.on('close', () => {
      // Clean up connection when client disconnects
      if (bookingId) {
        const index = activeChats.findIndex(
          conn => conn.bookingId === bookingId && conn.ws === ws
        );
        if (index !== -1) {
          activeChats.splice(index, 1);
        }
      }
    });
  });
  
  function broadcastToBooking(bookingId: number, data: any) {
    const connections = activeChats.filter(conn => conn.bookingId === bookingId);
    const message = JSON.stringify(data);
    
    connections.forEach(conn => {
      if (conn.ws.readyState === WebSocket.OPEN) {
        conn.ws.send(message);
      }
    });
  }

  // Booking API routes
  app.post('/api/bookings', async (req: Request, res: Response) => {
    try {
      const bookingData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(bookingData);
      
      // In a real application, you would send emails here
      // to both the client and service provider
      
      res.status(201).json({
        message: 'Booking confirmed successfully!',
        booking: {
          id: booking.id,
          name: booking.name,
          date: booking.date,
          time: booking.time,
          chatKey: booking.chatKey
        }
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          message: 'Invalid booking data',
          errors: fromZodError(error).message
        });
      } else {
        res.status(500).json({ message: 'Failed to create booking' });
      }
    }
  });

  app.get('/api/bookings/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid booking ID' });
    }
    
    const booking = await storage.getBooking(id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    
    res.json({
      id: booking.id,
      name: booking.name,
      date: booking.date,
      time: booking.time,
      hours: booking.hours,
      chatKey: booking.chatKey
    });
  });

  // Contact form API route
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      await storage.createContact(contactData);
      
      // In a real application, you would send an email notification here
      
      res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          message: 'Invalid contact data',
          errors: fromZodError(error).message
        });
      } else {
        res.status(500).json({ message: 'Failed to send message' });
      }
    }
  });

  // Validate chat key
  app.get('/api/chat/validate/:chatKey', async (req: Request, res: Response) => {
    const { chatKey } = req.params;
    
    const booking = await storage.getBookingByChatKey(chatKey);
    if (!booking) {
      return res.status(404).json({ valid: false });
    }
    
    res.json({ 
      valid: true, 
      bookingId: booking.id,
      name: booking.name
    });
  });

  return httpServer;
}
