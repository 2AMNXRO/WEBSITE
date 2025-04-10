import { useState } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { insertBookingSchema } from "@shared/schema";

// Extended booking schema with validation for form
const bookingFormSchema = insertBookingSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  hours: z.number().min(1, "Minimum booking is 1 hour").max(8, "Maximum booking is 8 hours"),
  projectDetails: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

// Generate time slots from 9 AM to 5 PM
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour <= 17; hour++) {
    const formattedHour = hour > 12 ? hour - 12 : hour;
    const amPm = hour >= 12 ? "PM" : "AM";
    slots.push(`${formattedHour}:00 ${amPm}`);
  }
  return slots;
};

const timeSlots = generateTimeSlots();

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | undefined>(undefined);
  const [, navigate] = useLocation();
  const { toast } = useToast();

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      date: "",
      time: "",
      hours: 1,
      projectDetails: "",
    },
  });
  
  const isSubmitting = form.formState.isSubmitting;

  // Handle date selection
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      form.setValue("date", format(date, "yyyy-MM-dd"));
    } else {
      form.setValue("date", "");
    }
  };

  // Handle time slot selection
  const handleTimeSelect = (time: string) => {
    setSelectedTimeSlot(time);
    form.setValue("time", time);
  };

  // Handle form submission
  const onSubmit = async (data: BookingFormValues) => {
    try {
      const response = await apiRequest("POST", "/api/bookings", data);
      const result = await response.json();
      
      toast({
        title: "Booking Confirmed!",
        description: "You'll receive an email with booking details shortly.",
      });
      
      // Navigate to booking confirmation page
      navigate(`/booking/confirm/${result.booking.id}`);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Booking Failed",
        description: error instanceof Error ? error.message : "Please try again later.",
      });
    }
  };

  // Handle hours adjustment
  const adjustHours = (increment: boolean) => {
    const currentHours = form.getValues("hours");
    const newHours = increment 
      ? Math.min(currentHours + 1, 8) 
      : Math.max(currentHours - 1, 1);
    form.setValue("hours", newHours);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Book Your Session</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Select a date and time that works for you. After booking, you'll receive a confirmation email with a link to our live chat.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Select a Date</CardTitle>
              <CardDescription>Choose an available date for your booking</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                disabled={(date) => {
                  // Disable past dates, Sundays, and dates more than 60 days in the future
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  const maxDate = new Date();
                  maxDate.setDate(today.getDate() + 60);
                  return (
                    date < today ||
                    date > maxDate ||
                    date.getDay() === 0 // Sunday
                  );
                }}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Complete Your Booking</CardTitle>
                <CardDescription>Provide your details to confirm the booking</CardDescription>
              </CardHeader>
              <CardContent>
                {selectedDate && (
                  <Alert className="mb-6 bg-blue-50 border-blue-200">
                    <AlertCircle className="h-4 w-4 text-blue-800" />
                    <AlertTitle className="text-blue-800 text-sm font-medium">
                      Selected Date
                    </AlertTitle>
                    <AlertDescription className="text-blue-800 text-sm">
                      {format(selectedDate, "MMMM d, yyyy")}
                    </AlertDescription>
                  </Alert>
                )}
                
                {/* Time Slots */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-2">Select Time Slot</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTimeSlot === time ? "default" : "outline"}
                        className="text-sm h-9"
                        onClick={() => handleTimeSelect(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
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
                            <Input placeholder="you@example.com" {...field} />
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
                              placeholder="Tell us about your project" 
                              className="resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="hours"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Hours</FormLabel>
                          <div className="flex items-center">
                            <Button 
                              type="button" 
                              variant="outline" 
                              size="icon"
                              onClick={() => adjustHours(false)}
                              disabled={field.value <= 1}
                              className="rounded-r-none"
                            >
                              -
                            </Button>
                            <Input
                              type="number"
                              min={1}
                              max={8}
                              className="w-16 text-center rounded-none"
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value))}
                            />
                            <Button 
                              type="button" 
                              variant="outline" 
                              size="icon"
                              onClick={() => adjustHours(true)}
                              disabled={field.value >= 8}
                              className="rounded-l-none"
                            >
                              +
                            </Button>
                            
                            <div className="ml-4 text-muted-foreground">
                              Total: <span className="font-bold text-primary">${(field.value * 10).toFixed(2)}</span>
                            </div>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Confirm Booking"}
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
