import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, DollarSign } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: "🐕",
      title: "Premium Grooming",
      description: "Full-service grooming including bath, cut, nail trim, and ear cleaning",
      price: "$45-80",
      duration: "2-3 hours",
      includes: [
        "Professional Cut",
        "Ear Cleaning",
        "Nail Trimming",
        "Aromatherapy Bath"
      ]
    },
    {
      icon: "🏥",
      title: "Health Checkups",
      description: "Comprehensive wellness exams with our certified veterinarians",
      price: "$65-120",
      duration: "45 mins",
      includes: [
        "Full Physical Exam",
        "Health Records",
        "Vaccination Updates",
        "Nutrition Advice"
      ]
    },
    {
      icon: "🏠",
      title: "Day Boarding",
      description: "Safe, supervised daycare with playtime and socialization",
      price: "$35-50",
      duration: "Full day",
      includes: [
        "Supervised Play",
        "Exercise Time",
        "Feeding Included",
        "Social Activities"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Everything Your Dog Needs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From routine grooming to comprehensive health care, we provide 
            professional services tailored to your dog's unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span className="font-bold text-lg">{service.price}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{service.duration}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Includes:</h4>
                  <ul className="space-y-1">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full" size="lg">
                  📅 Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;