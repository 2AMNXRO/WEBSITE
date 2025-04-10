import { useState, useEffect, useCallback } from "react";

interface ChatMessage {
  id: number;
  bookingId: number;
  sender: string;
  message: string;
  timestamp: Date;
}

export function useChat(chatKey: string) {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Initialize WebSocket connection
  useEffect(() => {
    if (!chatKey) return;
    
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const wsUrl = `${protocol}//${window.location.host}/ws`;
    
    const ws = new WebSocket(wsUrl);
    setSocket(ws);
    
    // Connection opened
    ws.addEventListener("open", () => {
      console.log("WebSocket connection established");
      // Join chat room with chat key
      ws.send(JSON.stringify({ type: "join", chatKey }));
    });
    
    // Connection closed
    ws.addEventListener("close", () => {
      console.log("WebSocket connection closed");
      setConnected(false);
      setConnecting(false);
    });
    
    // Connection error
    ws.addEventListener("error", (event) => {
      console.error("WebSocket error:", event);
      setError("Failed to connect to chat server");
      setConnecting(false);
      setConnected(false);
    });
    
    // Listen for messages
    ws.addEventListener("message", (event) => {
      try {
        const data = JSON.parse(event.data);
        
        if (data.type === "history") {
          setMessages(data.messages.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
          })));
          setConnected(true);
          setConnecting(false);
        }
        else if (data.type === "message") {
          setMessages((prev) => [...prev, {
            ...data.message,
            timestamp: new Date(data.message.timestamp)
          }]);
          setConnected(true);
          setConnecting(false);
        }
        else if (data.type === "error") {
          setError(data.message);
          setConnecting(false);
        }
      } catch (err) {
        console.error("Error parsing message:", err);
      }
    });
    
    // Clean up on unmount
    return () => {
      if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) {
        ws.close();
      }
    };
  }, [chatKey]);
  
  // Send a message
  const sendMessage = useCallback((message: string, sender: string) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({
        type: "message",
        sender,
        message
      }));
    }
  }, [socket]);
  
  return {
    messages,
    sendMessage,
    connected,
    connecting,
    error
  };
}
