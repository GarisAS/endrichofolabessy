
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();

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
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Let's Connect
                </h3>
                <p className="text-gray-600 text-center max-w-lg mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the following channels:
                </p>
                
                <div className="flex flex-col md:flex-row gap-6 mt-4 w-full max-w-md justify-center">
                  <a 
                    href="mailto:garisas336@gmail.com"
                    className="flex items-center gap-3 text-gray-700 hover:text-backend-600 transition-colors p-4 rounded-lg bg-backend-50 hover:bg-backend-100"
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
                    className="flex items-center gap-3 text-gray-700 hover:text-backend-600 transition-colors p-4 rounded-lg bg-backend-50 hover:bg-backend-100"
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
