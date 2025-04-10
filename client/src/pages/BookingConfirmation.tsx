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
      <div className="flex justify-center items-center min-h-[70vh] bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="py-16 px-4 max-w-3xl mx-auto text-center bg-black min-h-screen">
        <h1 className="text-2xl font-bold text-red-500">Booking Not Found</h1>
        <p className="mt-4 text-gray-400">The booking you're looking for doesn't exist or has been removed.</p>
        <Button className="mt-6 bg-red-600 hover:bg-red-700" asChild>
          <Link href="/booking">Make a New Booking</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 max-w-3xl mx-auto bg-black min-h-screen">
      <Card className="bg-zinc-900 border-red-900/30">
        <CardHeader className="text-center bg-gradient-to-r from-red-700 to-red-600 text-white rounded-t-lg">
          <CheckCircle className="h-16 w-16 mx-auto mb-2" />
          <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
          <CardDescription className="text-white/90">
            Your session has been successfully booked
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 text-gray-300">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-400">Booking Reference</h3>
              <p className="text-lg font-semibold">#{booking.id}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-400">Name</h3>
              <p className="text-lg">{booking.name}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-400">Date & Time</h3>
              <p className="text-lg">{booking.date} at {booking.time}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-400">Duration</h3>
              <p className="text-lg">{booking.hours} hour{booking.hours > 1 ? 's' : ''}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-400">Total Cost</h3>
              <p className="text-lg font-semibold text-red-500">$45.00</p>
            </div>
            
            <div className="border-t border-zinc-700 pt-4 mt-4">
              <h3 className="text-sm font-medium text-red-500 mb-1">Your Chat Link</h3>
              <div className="flex items-center justify-between p-3 bg-zinc-800 rounded-md border border-zinc-700">
                <p className="text-sm text-gray-300 truncate">
                  {window.location.origin}/chat/{booking.chatKey}
                </p>
                <Button variant="ghost" size="sm" onClick={copyToClipboard} className="text-gray-300 hover:bg-zinc-700 hover:text-white">
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy link</span>
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Use this link to access your dedicated chat channel with the developer.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4 border-t border-zinc-700">
          <Button asChild className="flex-1 bg-red-600 hover:bg-red-700">
            <Link href={`/chat/${booking.chatKey}`}>Join Chat Now</Link>
          </Button>
          <Button variant="outline" asChild className="flex-1 border-zinc-700 text-gray-300 hover:bg-zinc-800 hover:text-white">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
