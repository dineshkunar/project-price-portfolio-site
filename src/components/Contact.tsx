
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="contact">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Get in touch and let's discuss your next project.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Send Message</CardTitle>
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
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Subject</label>
                <Input 
                  placeholder="Project inquiry" 
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                />
              </div>
              
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..." 
                  rows={5}
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-300">john.developer@email.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white mr-4">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-300">San Francisco, CA</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-blue-500 border-0">
            <CardContent className="p-6 text-center">
              <h3 className="text-white font-bold text-xl mb-2">Ready to Start?</h3>
              <p className="text-white/90 mb-4">
                Let's discuss your project and create something amazing together.
              </p>
              <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                Schedule a Call
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-slate-700 text-center">
        <p className="text-gray-400">
          © 2024 John Developer. All rights reserved. Built with ❤️ using React & Tailwind CSS
        </p>
      </div>
    </section>
  );
};

export default Contact;
