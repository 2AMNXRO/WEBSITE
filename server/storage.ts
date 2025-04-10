import { 
  users, type User, type InsertUser,
  bookings, type Booking, type InsertBooking,
  contacts, type Contact, type InsertContact,
  chatMessages, type ChatMessage, type InsertChatMessage 
} from "@shared/schema";
import { nanoid } from 'nanoid';

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Booking related methods
  getBookings(): Promise<Booking[]>;
  getBooking(id: number): Promise<Booking | undefined>;
  getBookingByEmail(email: string): Promise<Booking[]>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  updateBooking(id: number, booking: Partial<Booking>): Promise<Booking | undefined>;
  deleteBooking(id: number): Promise<boolean>;
  getBookingByChatKey(chatKey: string): Promise<Booking | undefined>;
  
  // Contact form methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Chat messages methods
  getChatMessages(bookingId: number): Promise<ChatMessage[]>;
  createChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private bookingsStore: Map<number, Booking>;
  private contactsStore: Map<number, Contact>;
  private chatMessagesStore: Map<number, ChatMessage>;
  private currentUserId: number;
  private currentBookingId: number;
  private currentContactId: number;
  private currentChatMessageId: number;

  constructor() {
    this.users = new Map();
    this.bookingsStore = new Map();
    this.contactsStore = new Map();
    this.chatMessagesStore = new Map();
    this.currentUserId = 1;
    this.currentBookingId = 1;
    this.currentContactId = 1;
    this.currentChatMessageId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Booking methods
  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookingsStore.values());
  }

  async getBooking(id: number): Promise<Booking | undefined> {
    return this.bookingsStore.get(id);
  }

  async getBookingByEmail(email: string): Promise<Booking[]> {
    return Array.from(this.bookingsStore.values()).filter(
      (booking) => booking.email === email
    );
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = this.currentBookingId++;
    const chatKey = nanoid();
    const booking: Booking = { 
      ...insertBooking, 
      id, 
      chatKey,
      isConfirmed: true // For simplicity, we'll auto-confirm bookings
    };
    this.bookingsStore.set(id, booking);
    return booking;
  }

  async updateBooking(id: number, bookingUpdate: Partial<Booking>): Promise<Booking | undefined> {
    const booking = this.bookingsStore.get(id);
    if (!booking) return undefined;
    
    const updatedBooking = { ...booking, ...bookingUpdate };
    this.bookingsStore.set(id, updatedBooking);
    return updatedBooking;
  }

  async deleteBooking(id: number): Promise<boolean> {
    return this.bookingsStore.delete(id);
  }

  async getBookingByChatKey(chatKey: string): Promise<Booking | undefined> {
    return Array.from(this.bookingsStore.values()).find(
      (booking) => booking.chatKey === chatKey
    );
  }

  // Contact form methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date()
    };
    this.contactsStore.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contactsStore.values());
  }

  // Chat messages methods
  async getChatMessages(bookingId: number): Promise<ChatMessage[]> {
    return Array.from(this.chatMessagesStore.values())
      .filter(message => message.bookingId === bookingId)
      .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  }

  async createChatMessage(insertMessage: InsertChatMessage): Promise<ChatMessage> {
    const id = this.currentChatMessageId++;
    const message: ChatMessage = {
      ...insertMessage,
      id,
      timestamp: new Date()
    };
    this.chatMessagesStore.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
