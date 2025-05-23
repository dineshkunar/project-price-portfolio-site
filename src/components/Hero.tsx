
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-pulse"></div>
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Profile Image */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1">
          <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">JD</span>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          John Developer
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Full Stack Developer & UI/UX Designer
        </p>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          I create modern, responsive web applications with cutting-edge technologies. 
          Specializing in React, Node.js, and cloud solutions. Let's build something amazing together.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <Button variant="outline" size="lg" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300">
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
          <Button variant="outline" size="lg" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300">
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300">
            <Mail className="w-5 h-5 mr-2" />
            Contact
          </Button>
        </div>

        {/* CTA */}
        <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 text-lg">
          View My Work
          <ArrowDown className="w-5 h-5 ml-2" />
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
