
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen pt-32 pb-16 flex items-center bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 animate-fade-up">
            <p className="text-backend-600 font-medium mb-3">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Endricho Folabessy
            </h1>
            <div className="h-1 w-20 bg-backend-500 mb-6"></div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 mb-6">
              Building robust and scalable backend solutions
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl">
              I'm passionate about crafting efficient server-side architectures and APIs that power seamless user experiences. With expertise in modern backend technologies, I transform complex business logic into reliable digital solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-backend-600 hover:bg-backend-700">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="outline" className="border-backend-600 text-backend-600 hover:text-backend-700 hover:border-backend-700">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:block animate-fade-in">
            <div className="relative">
              <div className="absolute -top-16 -left-16 w-64 h-64 bg-backend-400/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-backend-500/10 rounded-full blur-3xl"></div>
              <div className="w-full aspect-square bg-gradient-to-br from-backend-100 to-backend-200 rounded-2xl shadow-xl border border-backend-200/50 flex items-center justify-center p-12 relative z-10">
                <div className="w-full h-full rounded-xl bg-white flex items-center justify-center shadow-lg">
                  <span className="text-4xl md:text-5xl text-backend-500 font-bold">
                    &lt;/&gt;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
