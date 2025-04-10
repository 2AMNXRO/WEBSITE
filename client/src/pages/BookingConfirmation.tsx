import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Copy } from "lucide-react";

interface BookingDetails {
  id: number;
  name: string;
  date: string;
  time: string;
  hours: number;
  chatKey: string;
}

export default function BookingConfirmation() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState<BookingDetails | null>(null);
  const { toast } = useToast();
  const [, navigate] = useLocation();

  useEffect(() => {
    async function fetchBookingDetails() {
      try {
        if (!id || isNaN(parseInt(id))) {
          navigate("/booking");
          return;
        }

        const response = await fetch(`/api/bookings/${id}`);
        if (!response.ok) {
          throw new Error("Booking not found");
        }

        const data = await response.json();
        setBooking(data);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Could not load booking details. Please try again.",
        });
        navigate("/booking");
      } finally {
        setLoading(false);
      }
    }

    fetchBookingDetails();
  }, [id, toast, navigate]);

  const copyToClipboard = () => {
    if (booking) {
      navigator.clipboard.writeText(`${window.location.origin}/chat/${booking.chatKey}`);
      toast({
        title: "Link Copied!",
        description: "Chat link copied to clipboard",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h1 className="text-2xl font-bold text-red-600">Booking Not Found</h1>
        <p className="mt-4 text-muted-foreground">The booking you're looking for doesn't exist or has been removed.</p>
        <Button className="mt-6" asChild>
          <Link href="/booking">Make a New Booking</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 max-w-3xl mx-auto">
      <Card>
        <CardHeader className="text-center bg-primary text-white rounded-t-lg">
          <CheckCircle className="h-16 w-16 mx-auto mb-2" />
          <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
          <CardDescription className="text-white/90">
            Your session has been successfully booked
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Booking Reference</h3>
              <p className="text-lg font-semibold">#{booking.id}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Name</h3>
              <p className="text-lg">{booking.name}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Date & Time</h3>
              <p className="text-lg">{booking.date} at {booking.time}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Duration</h3>
              <p className="text-lg">{booking.hours} hour{booking.hours > 1 ? 's' : ''}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Total Cost</h3>
              <p className="text-lg font-semibold">${(booking.hours * 10).toFixed(2)}</p>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mt-4">
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Your Chat Link</h3>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <p className="text-sm text-gray-600 truncate">
                  {window.location.origin}/chat/{booking.chatKey}
                </p>
                <Button variant="ghost" size="sm" onClick={copyToClipboard}>
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy link</span>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Use this link to access your dedicated chat channel with the developer.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="flex-1">
            <Link href={`/chat/${booking.chatKey}`}>Join Chat Now</Link>
          </Button>
          <Button variant="outline" asChild className="flex-1">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
