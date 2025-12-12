import { Button } from "@/components/ui/button";
import { Star, Heart } from "lucide-react";
import heroImage from "@/assets/hero-dog.png";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-accent min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Pawsitive Care for Your{" "}
              <span className="text-orange-200">Best Friend</span>
            </h1>
            
            <p className="text-xl mb-8 leading-relaxed text-orange-100">
              Professional dog grooming, health checkups, and boarding services. 
              Book online and give your pup the care they deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-white text-primary hover:bg-orange-50">
                📅 Book Appointment
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                ❤️ Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-white">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                  ))}
                </div>
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              
              <div className="border-l border-orange-200 pl-8">
                <span className="font-semibold">500+ Happy Dogs</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Happy golden retriever at veterinary clinic" 
                className="w-full rounded-3xl shadow-2xl"
              />
              
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" fill="currentColor" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">24/7 Care</h3>
                    <p className="text-sm text-muted-foreground">Always here for you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;