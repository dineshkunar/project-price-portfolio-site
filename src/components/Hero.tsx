
import { ArrowDown, Github, Linkedin, Mail, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Professional Photo - Top Right */}
      <div className="absolute top-8 right-8 z-20">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl hover:scale-105 transition-transform duration-300">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
            alt="Dinesh Kumar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* Profile Image */}
        <div className="w-40 h-40 mx-auto mb-12 relative group">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center group-hover:bg-gray-900 transition-all duration-300">
              <span className="text-5xl font-bold text-yellow-400">DK</span>
            </div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-yellow-100 bg-clip-text text-transparent">
                Dinesh
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-bold">
                Kumar
              </span>
            </h1>
            
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">
                Full Stack Developer & Creative Technologist
              </p>
              
              <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                I craft digital experiences that merge innovative technology with beautiful design. 
                Specializing in React, Node.js, and modern web solutions that bring ideas to life.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center items-center space-x-12 py-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">50+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Projects</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">5+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Years</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">100%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <Eye className="w-5 h-5 mr-2" />
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 pt-8">
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/10 rounded-full transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/10 rounded-full transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/10 rounded-full transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-yellow-400"></div>
          <ArrowDown className="w-5 h-5 text-yellow-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
