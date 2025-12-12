import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-background">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-foreground">Pawsitive Care</h1>
          <p className="text-xs text-muted-foreground">Dog Care & Wellness</p>
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#services" className="text-foreground hover:text-primary transition-colors">
          Services
        </a>
        <a href="#about" className="text-foreground hover:text-primary transition-colors">
          About
        </a>
        <a href="#reviews" className="text-foreground hover:text-primary transition-colors">
          Reviews
        </a>
        <a href="#contact" className="text-foreground hover:text-primary transition-colors">
          Contact
        </a>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm">
          Login
        </Button>
        <Button size="sm">
          Book Now
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;