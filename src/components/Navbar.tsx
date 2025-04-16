import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

interface NavLinkProps {
  to: string;
  label: string;
  onClick?: () => void;
}

interface NavLinkItem {
  to: string;
  label: string;
}

const Navbar: React.FC = () => {
  // Check initial dark mode preference
  const [isDark, setIsDark] = useState<boolean>(
    () =>
      localStorage.getItem("theme") === "dark" ||
      (localStorage.getItem("theme") === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Handle dark mode toggle
  const toggleDarkMode = (): void => {
    setIsDark((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  // Apply dark mode on load and state changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  const navLinks: NavLinkItem[] = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "experience", label: "Experience" },
    { to: "contact", label: "Contact" },
  ];

  const NavLink: React.FC<NavLinkProps> = ({ to, label, onClick }) => (
    <a
      href={`#${to}`}
      onClick={onClick}
      className="relative text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 px-1 py-2 group"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
    </a>
  );

  return (
    <nav
      className={`fixed w-full z-50
        ${
          isScrolled
            ? "py-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg"
            : "py-4 bg-transparent"
        } transition-all duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center"
          >
            <span className="mr-1 text-3xl">SP</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} label={link.label} />
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-blue-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun size={18} className="text-yellow-500" />
              ) : (
                <Moon size={18} className="text-blue-600" />
              )}
            </button>

            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Open menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 py-2 space-y-1">
          {navLinks.map((link) => (
            <div
              key={link.to}
              className="py-2 border-b border-gray-100 dark:border-gray-800"
            >
              <NavLink
                to={link.to}
                label={link.label}
                onClick={closeMobileMenu}
              />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
