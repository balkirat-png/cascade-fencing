"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, Phone, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface HeaderProps {
  onEstimateClick: () => void;
}

export function Header({ onEstimateClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToServiceAreas = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeMenu();

    // Check if we're on the home page
    const isHomePage = window.location.pathname === '/';

    if (!isHomePage) {
      // Navigate to home page, the useEffect there will handle scrolling
      router.push('/?scrollTo=service-areas');
      return;
    }

    // Already on home page, scroll to section
    const serviceAreasSection = document.getElementById("service-areas");
    if (serviceAreasSection) {
      const headerOffset = 150; // Offset for sticky header + extra breathing room
      const elementPosition = serviceAreasSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`sticky top-0 w-full z-50 bg-primary transition-all duration-300 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto pr-4 sm:pr-6 lg:pr-8 pl-0">
        <div className="flex justify-between items-center h-24 py-4">
          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0">
            <div className="relative w-56 h-56">
              <Image
                src="/images/logo.png"
                alt="Cascade Fencing & Repair Logo"
                fill
                className="object-contain"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
            <div className="relative group">
              <button className="text-white font-medium hover:text-accent transition-colors duration-200">
                Services
              </button>
              <div className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-10">
                <a
                  href="/services/wood-fence-installation"
                  className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                >
                  Wood Fence Installation
                </a>
                <a
                  href="/services/wood-fence-repair"
                  className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                >
                  Wood Fence Repair
                </a>
              </div>
            </div>

            <a
              href="/gallery"
              className="text-white font-medium hover:text-accent transition-colors duration-200"
            >
              Gallery
            </a>

            <a
              href="/#service-areas"
              onClick={scrollToServiceAreas}
              className="text-white font-medium hover:text-accent transition-colors duration-200"
            >
              Service Areas
            </a>

            <a
              href="/about"
              className="text-white font-medium hover:text-accent transition-colors duration-200"
            >
              About
            </a>

            <a
              href="/contact"
              className="text-white font-medium hover:text-accent transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Right Side - Social, Phone and Button */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/1CXdLhrpdc/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/cascade_fencing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-white/30"></div>

            <a
              href="tel:+1-253-228-9101"
              className="flex items-center gap-2 text-white font-medium hover:text-accent transition-colors duration-200"
            >
              <Phone className="w-5 h-5 text-accent" />
              (253) 228-9101
            </a>

            <button
              onClick={onEstimateClick}
              className="bg-accent text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-accent-dark shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              Get Free Estimate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-white/20">
            <nav className="flex flex-col gap-1 pt-4">
              <a
                href="/services/wood-fence-installation"
                onClick={closeMenu}
                className="px-4 py-2 text-white hover:bg-primary-light rounded transition-colors"
              >
                Installation
              </a>
              <a
                href="/services/wood-fence-repair"
                onClick={closeMenu}
                className="px-4 py-2 text-white hover:bg-primary-light rounded transition-colors"
              >
                Repair
              </a>
              <a
                href="/gallery"
                onClick={closeMenu}
                className="px-4 py-2 text-white hover:bg-primary-light rounded transition-colors"
              >
                Gallery
              </a>
              <a
                href="/#service-areas"
                onClick={scrollToServiceAreas}
                className="px-4 py-2 text-white hover:bg-primary-light rounded transition-colors"
              >
                Service Areas
              </a>
              <a
                href="/about"
                onClick={closeMenu}
                className="px-4 py-2 text-white hover:bg-primary-light rounded transition-colors"
              >
                About
              </a>
              <a
                href="/contact"
                onClick={closeMenu}
                className="px-4 py-2 text-white hover:bg-primary-light rounded transition-colors"
              >
                Contact
              </a>

              <div className="border-t border-white/20 mt-4 pt-4">
                <a
                  href="tel:+1-253-228-9101"
                  onClick={closeMenu}
                  className="flex items-center gap-2 text-white font-medium mb-4 px-4 py-2"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  (253) 228-9101
                </a>

                <button
                  onClick={() => {
                    closeMenu();
                    onEstimateClick();
                  }}
                  className="w-full bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-dark shadow-lg"
                >
                  Get Free Estimate
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
