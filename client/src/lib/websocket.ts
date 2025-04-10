import { useEffect, useState, useRef, useCallback } from 'react';
import { Message } from '@shared/schema';

type WebSocketStatus = 'disconnected' | 'connecting' | 'connected';

interface ChatMessage {
  type: string;
  message?: Message;
  messages?: Message[];
  booking?: any;
  error?: string;
}

export function useWebSocket(token: string | null) {
  const [status, setStatus] = useState<WebSocketStatus>('disconnected');
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [booking, setBooking] = useState<any | null>(null);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!token) return;

    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}/ws`;
    
    const connectWebSocket = () => {
      setStatus('connecting');
      wsRef.current = new WebSocket(wsUrl);
      
      wsRef.current.onopen = () => {
        setStatus('connected');
        setError(null);
        // Authenticate with booking token
        wsRef.current?.send(
          JSON.stringify({
            type: 'auth',
            token
          })
        );
      };
      
      wsRef.current.onmessage = (event) => {
        try {
          const data: ChatMessage = JSON.parse(event.data);
          
          if (data.type === 'error') {
            setError(data.error || 'Unknown error');
          } else if (data.type === 'auth_success' && data.booking) {
            setBooking(data.booking);
          } else if (data.type === 'message_history' && data.messages) {
            setMessages(data.messages);
          } else if (data.type === 'new_message' && data.message) {
            setMessages(prev => [...prev, data.message!]);
          }
        } catch (err) {
          console.error('Failed to parse WebSocket message', err);
        }
      };
      
      wsRef.current.onclose = () => {
        setStatus('disconnected');
        // Attempt to reconnect after a delay
        setTimeout(connectWebSocket, 3000);
      };
      
      wsRef.current.onerror = () => {
        setError('WebSocket connection error');
        wsRef.current?.close();
      };
    };
    
    connectWebSocket();
    
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, [token]);
  
  const sendMessage = useCallback((content: string) => {
    if (status !== 'connected' || !wsRef.current) {
      setError('Not connected to chat');
      return false;
    }
    
    wsRef.current.send(
      JSON.stringify({
        type: 'chat_message',
        sender: 'client',
        content
      })
    );
    
    return true;
  }, [status]);
  
  return {
    status,
    messages,
    error,
    booking,
    sendMessage
  };
}
