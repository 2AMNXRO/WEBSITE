import { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { useChat } from "@/hooks/useChat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Loader2 } from "lucide-react";

export default function LiveChat() {
  const { chatKey } = useParams();
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [isInvalidKey, setIsInvalidKey] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [, navigate] = useLocation();
  const { toast } = useToast();

  const {
    messages,
    sendMessage,
    connected,
    connecting,
    error
  } = useChat(chatKey || "");

  // Check if the chat key is valid
  useEffect(() => {
    async function validateChatKey() {
      try {
        const response = await fetch(`/api/chat/validate/${chatKey}`);
        const data = await response.json();
        
        if (!data.valid) {
          setIsInvalidKey(true);
        } else {
          setName(data.name || "Client");
        }
      } catch (error) {
        console.error("Error validating chat key:", error);
        setIsInvalidKey(true);
      }
    }

    if (chatKey) {
      validateChatKey();
    }
  }, [chatKey]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Show error toast when connection fails
  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: "Connection Error",
        description: "Failed to connect to chat. Please try again.",
      });
    }
  }, [error, toast]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && connected) {
      sendMessage(message, name || "Client");
      setMessage("");
    }
  };

  const handleCloseInvalidDialog = () => {
    navigate("/booking");
  };

  // Format timestamp
  const formatTime = (timestamp: Date) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  if (isInvalidKey) {
    return (
      <AlertDialog open={true}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Invalid Chat Key</AlertDialogTitle>
            <AlertDialogDescription>
              The chat key you provided is invalid or has expired. Please make a booking to get a valid chat key.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleCloseInvalidDialog}>Go to Booking</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <Card className="h-[80vh] flex flex-col">
        <CardHeader className="bg-primary text-white">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
              <i className="fas fa-headset"></i>
            </div>
            <div>
              <CardTitle>Codenova Support</CardTitle>
              <CardDescription className="text-white/80">
                {connected ? "Online - Typically replies within minutes" : connecting ? "Connecting..." : "Offline"}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow overflow-auto p-4 bg-gray-50" ref={chatContainerRef}>
          {connecting ? (
            <div className="flex h-full justify-center items-center">
              <Loader2 className="h-8 w-8 text-primary animate-spin" />
              <p className="ml-2 text-muted-foreground">Connecting to chat...</p>
            </div>
          ) : (
            <>
              {messages.length === 0 ? (
                <div className="h-full flex items-center justify-center">
                  <p className="text-muted-foreground">No messages yet. Start the conversation!</p>
                </div>
              ) : (
                messages.map((msg, index) => (
                  <div 
                    key={index}
                    className={`flex mb-4 ${msg.sender === 'system' ? 'justify-center' : msg.sender === name ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.sender === 'system' ? (
                      <div className="bg-gray-100 rounded-lg py-2 px-4 max-w-[90%] text-center">
                        <p className="text-sm text-muted-foreground">{msg.message}</p>
                      </div>
                    ) : (
                      <div 
                        className={`${
                          msg.sender === name 
                            ? 'bg-primary text-white' 
                            : 'bg-gray-200 text-gray-800'
                        } rounded-lg py-2 px-4 max-w-[80%]`}
                      >
                        <p className="text-sm">{msg.message}</p>
                        <p className={`text-xs mt-1 ${msg.sender === name ? 'text-white/80' : 'text-gray-500'}`}>
                          {formatTime(msg.timestamp)}
                        </p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </>
          )}
        </CardContent>
        
        <CardFooter className="p-4 border-t">
          <form className="flex w-full" onSubmit={handleSendMessage}>
            <Input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={!connected}
              className="flex-1 rounded-r-none"
            />
            <Button 
              type="submit" 
              disabled={!connected || !message.trim()} 
              className="rounded-l-none"
            >
              <i className="fas fa-paper-plane"></i>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
