
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Mail, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (!formData.email.includes('@')) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create mailto link with the form data
      const subject = `Contact from ${formData.name} via Portfolio`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:garisas336@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open the mail client
      window.open(mailtoLink, '_blank');
      
      // Show success message
      toast({
        title: "Message sent!",
        description: "Your email client has been opened with your message",
      });
      
      // Reset the form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <form onSubmit={handleSubmit}>
                    <h4 className="text-xl font-medium text-gray-800 mb-4">
                      Quick Message
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</Label>
                        <Input 
                          type="text" 
                          id="name" 
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full bg-white/90"
                          disabled={isSubmitting}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</Label>
                        <Input 
                          type="email" 
                          id="email" 
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          className="w-full bg-white/90"
                          disabled={isSubmitting}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</Label>
                        <Textarea 
                          id="message" 
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your message"
                          className="w-full bg-white/90 resize-none"
                          disabled={isSubmitting}
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full bg-backend-600 hover:bg-backend-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                      
                      <p className="text-xs text-gray-500 text-center">
                        Your message will open in your default email client
                      </p>
                    </div>
                  </form>
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
