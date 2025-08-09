import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-backend-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Learn about my approach to backend development and engineering principles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <Card className="border-none shadow-lg bg-gradient-to-br from-backend-50 to-backend-100 overflow-hidden">
              <CardContent className="p-8">
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <div className="flex flex-col gap-3 mb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="h-5 bg-gray-100 rounded w-3/4"></div>
                  </div>

                  <div className="space-y-3 font-mono text-sm text-gray-800">
                    <p>
                      <span className="text-backend-600">class</span>{" "}
                      <span className="text-green-600">AboutMe</span>{" "}
                      {"{"}
                    </p>
                    <p className="pl-4">
                      <span className="text-backend-600">constructor</span>() {"{"}
                    </p>
                    <p className="pl-8">
                      <span className="text-purple-600">this</span>.name ={" "}
                      <span className="text-orange-600">"Endricho Folabessy"</span>;
                    </p>
                    <p className="pl-8">
                      <span className="text-purple-600">this</span>.location ={" "}
                      <span className="text-orange-600">"Pontianak, Kalimantan Barat, Indonesia"</span>;
                    </p>
                    
                    <p className="pl-8">
                      <span className="text-purple-600">this</span>.education ={" "}
                      <span className="text-orange-600">"STMIK Pontianak (2021-2025)"</span>;
                    </p>
                     <p className="pl-8">
                      <span className="text-purple-600">this</span>.major ={" "}
                      <span className="text-orange-600">"Teknik Informatika"</span>;
                    </p>
                     <p className="pl-8">
                      <span className="text-purple-600">this</span>.gpa ={" "}
                      <span className="text-orange-600">"3.43"</span>;
                    </p>

                    <p className="pl-4">{"}"}</p>
                    <p>{"}"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Reliable backend systems for real-world applications
            </h3>
            <p className="text-gray-600 mb-4">
              I design and implement backend systems focused on reliability, performance, and maintainability. My work covers API development, business logic implementation, and database optimization to support scalable applications.
            </p>
            <p className="text-gray-600 mb-4">
              I primarily work with the PHP and JavaScript ecosystems, with extensive experience in Laravel and RESTful API design. I follow best practices for testing, documentation, and deployment to ensure production-ready outcomes.
            </p>
            <p className="text-gray-600 mb-6">
              Beyond coding, I emphasise clear communication, pragmatic problem-solving, and continuous learning to deliver solutions that meet both technical and business needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-backend-500"></div>
                <span className="text-gray-700 font-medium">API Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;