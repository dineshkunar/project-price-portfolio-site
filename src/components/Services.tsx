
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap, Users, Rocket } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Basic Website",
      price: "$1,500 - $3,000",
      duration: "2-3 weeks",
      icon: <Zap className="w-8 h-8" />,
      description: "Perfect for small businesses and personal portfolios",
      features: [
        "Responsive design",
        "5-10 pages",
        "Contact forms",
        "SEO optimization",
        "Basic animations",
        "1 month support"
      ],
      popular: false
    },
    {
      title: "Custom Web App",
      price: "$5,000 - $15,000",
      duration: "1-3 months",
      icon: <Users className="w-8 h-8" />,
      description: "Full-featured web applications with custom functionality",
      features: [
        "Custom backend API",
        "User authentication",
        "Database integration",
        "Admin dashboard",
        "Payment integration",
        "3 months support",
        "Performance optimization",
        "Security implementation"
      ],
      popular: true
    },
    {
      title: "Enterprise Solution",
      price: "$15,000+",
      duration: "3-6 months",
      icon: <Rocket className="w-8 h-8" />,
      description: "Scalable enterprise applications with advanced features",
      features: [
        "Microservices architecture",
        "Cloud deployment",
        "Advanced security",
        "API integrations",
        "Real-time features",
        "Analytics dashboard",
        "6 months support",
        "Team training",
        "Documentation"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" id="services">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Services & Pricing
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Professional web development services tailored to your needs. Quality code, modern design, and excellent support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className={`bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-all duration-300 relative ${
              service.popular ? 'ring-2 ring-purple-500 transform scale-105' : ''
            }`}
          >
            {service.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white">
                  {service.icon}
                </div>
              </div>
              <CardTitle className="text-white text-2xl mb-2">{service.title}</CardTitle>
              <CardDescription className="text-gray-300 mb-4">
                {service.description}
              </CardDescription>
              <div className="text-center">
                <span className="text-3xl font-bold text-purple-400">{service.price}</span>
                <p className="text-gray-400 mt-1">{service.duration}</p>
              </div>
            </CardHeader>
            
            <CardContent>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  service.popular 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600' 
                    : 'bg-slate-700 hover:bg-slate-600'
                } text-white`}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Card className="bg-slate-800/50 border-slate-700 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose My Services?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-purple-400 text-3xl font-bold mb-2">100%</div>
                <p className="text-gray-300">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-blue-400 text-3xl font-bold mb-2">24/7</div>
                <p className="text-gray-300">Support Available</p>
              </div>
              <div>
                <div className="text-green-400 text-3xl font-bold mb-2">Fast</div>
                <p className="text-gray-300">Delivery Timeline</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;
