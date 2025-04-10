import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertBookingSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { format, addDays, isBefore, startOfDay } from "date-fns";
import { Loader2 } from "lucide-react";

// Time slots available for booking
const TIME_SLOTS = [
  "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", 
  "15:00", "16:00", "17:00"
];

// Extend the booking schema with validation
const bookingFormSchema = insertBookingSchema.extend({
  hours: z.number().min(1, "Minimum booking is 1 hour").max(8, "Maximum booking is 8 hours"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time slot"),
});

export default function Booking() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [hours, setHours] = useState(1);
  
  // Calculate total price based on hours
  const totalPrice = hours * 10;
  
  // Create form
  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      projectDetails: "",
      hours: 1,
      date: "",
      time: "",
      totalPrice: 10,
    },
  });
  
  // Update form values when hours or selected date/time changes
  useEffect(() => {
    if (selectedDate) {
      form.setValue("date", format(selectedDate, "yyyy-MM-dd"));
    }
    if (selectedTime) {
      form.setValue("time", selectedTime);
    }
    form.setValue("hours", hours);
    form.setValue("totalPrice", totalPrice);
  }, [selectedDate, selectedTime, hours, totalPrice, form]);

  // Create booking mutation
  const bookingMutation = useMutation({
    mutationFn: async (data: z.infer<typeof bookingFormSchema>) => {
      const response = await apiRequest('POST', '/api/bookings', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Booking Successful!",
        description: "You'll receive a confirmation email shortly.",
      });
      // Navigate to chat with the booking token
      navigate(`/chat/${data.chatToken}`);
    },
    onError: (error) => {
      toast({
        title: "Booking Failed",
        description: error.message || "There was an error processing your booking. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Handle form submission
  const onSubmit = (data: z.infer<typeof bookingFormSchema>) => {
    bookingMutation.mutate(data);
  };

  // Decrement hours (minimum 1)
  const decrementHours = () => {
    if (hours > 1) {
      setHours(hours - 1);
    }
  };

  // Increment hours (maximum 8)
  const incrementHours = () => {
    if (hours < 8) {
      setHours(hours + 1);
    }
  };

  // Get disabled dates (past dates)
  const isDateDisabled = (date: Date) => {
    return isBefore(date, startOfDay(new Date()));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Book Your Session</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Select a date and time that works for you. After booking, you'll receive a confirmation email with a link to our live chat.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Select a Date</CardTitle>
              <CardDescription>
                Choose from available dates on the calendar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
                disabled={isDateDisabled}
                fromDate={new Date()}
                toDate={addDays(new Date(), 60)}
              />
              
              {selectedDate && (
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-3">Select Time Slot</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {TIME_SLOTS.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTime === time ? "default" : "outline"}
                        className="text-sm py-2"
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Complete Your Booking</CardTitle>
                <CardDescription>
                  Fill in your details to confirm your session
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedDate && selectedTime ? (
                  <Alert className="mb-6 bg-blue-50 border-blue-200">
                    <AlertDescription className="text-blue-800">
                      You've selected: {format(selectedDate, "MMMM d, yyyy")} at {selectedTime}
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Alert className="mb-6 bg-amber-50 border-amber-200">
                    <AlertDescription className="text-amber-800">
                      Please select a date and time from the calendar
                    </AlertDescription>
                  </Alert>
                )}
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="projectDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Details</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project or what you need help with" 
                              rows={3}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div>
                      <FormLabel>Number of Hours</FormLabel>
                      <div className="flex items-center mt-1">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={decrementHours}
                          disabled={hours <= 1}
                        >
                          -
                        </Button>
                        <Input
                          type="number"
                          className="w-16 mx-2 text-center"
                          value={hours}
                          onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (!isNaN(value) && value >= 1 && value <= 8) {
                              setHours(value);
                            }
                          }}
                          min={1}
                          max={8}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={incrementHours}
                          disabled={hours >= 8}
                        >
                          +
                        </Button>
                        
                        <div className="ml-4 text-gray-700">
                          Total: <span className="font-bold text-primary">${totalPrice.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full mt-6" 
                      disabled={!selectedDate || !selectedTime || bookingMutation.isPending}
                    >
                      {bookingMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Confirm Booking"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
