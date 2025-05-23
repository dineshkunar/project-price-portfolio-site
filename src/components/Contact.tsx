
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto relative" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-48 h-48 bg-yellow-400/5 rounded-2xl rotate-12"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 border border-yellow-400/10 rounded-full"></div>
      </div>

      <div className="text-center mb-16 relative z-10">
        <div className="inline-block mb-4">
          <span className="text-sm uppercase tracking-wider text-yellow-400 font-medium">Get In Touch</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Let's Work
          </span>
          <br />
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent font-bold">
            Together
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's discuss your next project and create something amazing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Email Module */}
        <Card className="bg-black/40 border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm group hover:shadow-xl hover:shadow-yellow-500/10">
          <CardContent className="p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full text-black mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
            <p className="text-yellow-300 font-medium">dinesh.kumar@email.com</p>
            <p className="text-gray-400 text-sm mt-1">Available 24/7</p>
          </CardContent>
        </Card>

        {/* Phone Module */}
        <Card className="bg-black/40 border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm group hover:shadow-xl hover:shadow-yellow-500/10">
          <CardContent className="p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full text-black mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Phone</h3>
            <p className="text-yellow-300 font-medium">+1 (555) 123-4567</p>
            <p className="text-gray-400 text-sm mt-1">Mon - Fri, 9AM - 6PM</p>
          </CardContent>
        </Card>

        {/* Location Module */}
        <Card className="bg-black/40 border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm group hover:shadow-xl hover:shadow-yellow-500/10">
          <CardContent className="p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full text-black mb-4 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Location</h3>
            <p className="text-yellow-300 font-medium">San Francisco, CA</p>
            <p className="text-gray-400 text-sm mt-1">Open to remote work</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="bg-black/40 border-yellow-500/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <MessageCircle className="w-6 h-6 text-yellow-400 mr-2" />
              Send Message
            </CardTitle>
            <CardDescription className="text-gray-300">
              Fill out the form below and I'll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="bg-gray-900/50 border-yellow-500/30 text-white placeholder-gray-400 focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="bg-gray-900/50 border-yellow-500/30 text-white placeholder-gray-400 focus:border-yellow-400"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Subject</label>
                <Input 
                  placeholder="Project inquiry" 
                  className="bg-gray-900/50 border-yellow-500/30 text-white placeholder-gray-400 focus:border-yellow-400"
                />
              </div>
              
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..." 
                  rows={5}
                  className="bg-gray-900/50 border-yellow-500/30 text-white placeholder-gray-400 focus:border-yellow-400"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="space-y-6">
          <Card className="bg-gradient-to-r from-yellow-400 to-yellow-500 border-0">
            <CardContent className="p-6 text-center">
              <h3 className="text-black font-bold text-xl mb-2">Ready to Start?</h3>
              <p className="text-black/80 mb-4">
                Let's discuss your project and create something amazing together.
              </p>
              <Button variant="secondary" className="bg-black text-yellow-400 hover:bg-gray-900 font-semibold">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-yellow-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-white font-semibold text-lg mb-4">Why Choose Me?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-300 text-sm">5+ years of experience</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-300 text-sm">50+ successful projects</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-300 text-sm">100% client satisfaction</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-300 text-sm">24/7 support available</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-yellow-500/20 text-center">
        <p className="text-gray-400">
          © 2024 Dinesh Kumar. All rights reserved. Built with ❤️ using React & Tailwind CSS
        </p>
      </div>
    </section>
  );
};

export default Contact;
