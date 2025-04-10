import { Switch, Route } from "wouter";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "./pages/Home"; // Using direct import to avoid casing issues
import About from "./pages/About"; // Using direct import to avoid casing issues
import BookingPage from "@/pages/BookingPage";
import Contact from "@/pages/Contact";
import LiveChat from "@/pages/LiveChat";
import BookingConfirmation from "@/pages/BookingConfirmation";
import Services from "@/pages/services";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/booking" component={BookingPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/chat/:chatKey" component={LiveChat} />
          <Route path="/booking/confirm/:id" component={BookingConfirmation} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
