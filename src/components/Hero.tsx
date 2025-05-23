
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* Profile Image */}
        <div className="w-40 h-40 mx-auto mb-12 relative group">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-slate-800 transition-all duration-300">
              <span className="text-5xl font-bold text-white">JD</span>
            </div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                John
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent font-bold">
                Developer
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
              <div className="text-3xl font-bold text-purple-400">50+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Projects</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">5+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Years</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400">100%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              View My Work
              <ArrowDown className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300"
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
              className="text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 rounded-full transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-full transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-gray-400 hover:text-teal-400 hover:bg-teal-500/10 rounded-full transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-gray-400"></div>
          <ArrowDown className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
