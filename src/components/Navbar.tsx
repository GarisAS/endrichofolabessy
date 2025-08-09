import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Github, Mail } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const 

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <a
          href="#hero"
          className="text-xl md:text-2xl font-bold text-backend-700"
        >
          Endricho<span className="text-backend-500"> Folabessy</span>
        </a>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-backend-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/garisas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-backend-700 hover:text-backend-500 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:garisas336@gmail.com"
              className="text-backend-700 hover:text-backend-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md py-4 px-4 md:hidden flex flex-col gap-4">
            <MobileNavLink
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </MobileNavLink>
            <MobileNavLink
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </MobileNavLink>
            <MobileNavLink
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </MobileNavLink>
            <MobileNavLink
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </MobileNavLink>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/garisas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-backend-700 hover:text-backend-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:garisas336@gmail.com"
                className="text-backend-700 hover:text-backend-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    className="font-medium text-gray-700 hover:text-backend-600 transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink: React.FC<{
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ href, onClick, children }) => (
  <a
    href={href}
    className="block font-medium text-gray-700 hover:text-backend-600 transition-colors py-2 border-b border-gray-100 dark:border-gray-800"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
