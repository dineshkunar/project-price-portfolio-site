
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap, Users, Rocket, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Basic Website",
      price: "$1,500 - $3,000",
      duration: "2-3 weeks",
      icon: <Zap className="w-6 h-6" />,
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
      icon: <Users className="w-6 h-6" />,
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
      icon: <Rocket className="w-6 h-6" />,
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
    <section className="py-32 px-4 max-w-7xl mx-auto" id="services">
      <div className="text-center mb-20">
        <div className="inline-block mb-4">
          <span className="text-sm uppercase tracking-wider text-purple-400 font-medium">Services</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Services &
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-bold">
            Pricing
          </span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
          Professional web development services tailored to your needs. Quality code, 
          modern design, and excellent support guaranteed.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className={`relative bg-slate-800/30 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden ${
              service.popular ? 'ring-2 ring-purple-500/50 lg:scale-110' : ''
            }`}
          >
            {service.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium tracking-wide">
                  Most Popular
                </span>
              </div>
            )}
            
            <CardHeader className="text-center pb-8 pt-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/20">
                  <div className="text-purple-400">
                    {service.icon}
                  </div>
                </div>
              </div>
              <CardTitle className="text-white text-2xl font-light tracking-wide mb-2">{service.title}</CardTitle>
              <CardDescription className="text-gray-400 mb-6 font-light leading-relaxed">
                {service.description}
              </CardDescription>
              <div className="text-center">
                <span className="text-4xl font-light text-white">{service.price}</span>
                <p className="text-gray-400 mt-2 text-sm uppercase tracking-wider">{service.duration}</p>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-light">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full rounded-full font-medium transition-all duration-300 ${
                  service.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl' 
                    : 'bg-slate-700/50 hover:bg-slate-600 text-white border border-slate-600/50 hover:border-slate-500'
                }`}
                size="lg"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50 max-w-5xl mx-auto">
          <CardContent className="p-12">
            <h3 className="text-3xl font-light text-white mb-8 tracking-wide">Why Choose My Services?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-light text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
                <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">Client Satisfaction</p>
              </div>
              <div className="group">
                <div className="text-4xl font-light text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">Support Available</p>
              </div>
              <div className="group">
                <div className="text-4xl font-light text-teal-400 mb-3 group-hover:scale-110 transition-transform duration-300">Fast</div>
                <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">Delivery Timeline</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;
