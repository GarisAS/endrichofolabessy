
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-backend-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-backend-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-lg bg-white overflow-hidden">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Let's Connect
                  </h3>
                  <p className="text-gray-600">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the following channels:
                  </p>
                  
                  <div className="flex flex-col gap-4 mt-8">
                    <a 
                      href="mailto:garisas336@gmail.com"
                      className="flex items-center gap-3 text-gray-700 hover:text-backend-600 transition-colors"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-backend-100 text-backend-600 rounded-lg">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-gray-600">garisas336@gmail.com</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://github.com/garisas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-700 hover:text-backend-600 transition-colors"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-backend-100 text-backend-600 rounded-lg">
                        <Github className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">GitHub</p>
                        <p className="text-sm text-gray-600">github.com/garisas</p>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-backend-50 to-backend-100 p-6 rounded-lg">
                  <h4 className="text-xl font-medium text-gray-800 mb-4">
                    Quick Message
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-backend-500 focus:border-backend-500 outline-none transition-colors" 
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-backend-500 focus:border-backend-500 outline-none transition-colors" 
                        placeholder="Your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea 
                        id="message" 
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-backend-500 focus:border-backend-500 outline-none transition-colors resize-none" 
                        placeholder="Your message"
                      />
                    </div>
                    
                    <Button className="w-full bg-backend-600 hover:bg-backend-700">
                      Send Message
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      This is a demo form for display purposes only
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
