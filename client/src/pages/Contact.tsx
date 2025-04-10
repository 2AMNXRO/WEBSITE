import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Extended contact schema with validation for form
const contactFormSchema = insertContactSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  const isSubmitting = form.formState.isSubmitting;
  
  const onSubmit = async (data: ContactFormValues) => {
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to Send Message",
        description: error instanceof Error ? error.message : "Please try again later.",
      });
    }
  };
  
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions or custom requests? Reach out and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <p className="text-muted-foreground">Feel free to reach out via the form or through any of the channels below:</p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="text-primary text-xl mt-1">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-muted-foreground">contact@codenova.dev</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="text-primary text-xl mt-1">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">Remote Services Worldwide</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="text-primary text-xl mt-1">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <h4 className="font-medium">Working Hours</h4>
                <p className="text-muted-foreground">Monday - Friday: 9 AM - 5 PM</p>
                <p className="text-muted-foreground">Weekends: By appointment</p>
              </div>
            </div>
            
            <div className="pt-4">
              <h4 className="font-medium mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-primary text-xl">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-primary text-xl">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-primary text-xl">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="bg-gray-50 p-8 rounded-lg shadow-md"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="How can we help you?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us more about your project or question..." 
                          rows={5}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
