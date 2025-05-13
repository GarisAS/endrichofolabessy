import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="text-xl font-bold text-backend-700">
              Endricho<span className="text-backend-500"> Folabessy</span>
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-backend-600 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-backend-600 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-backend-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-backend-600 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="mt-6 md:mt-0 text-sm text-gray-500">
            &copy; {currentYear} Endricho Folabessy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
