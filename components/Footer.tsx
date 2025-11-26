"use client";

import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 md:py-16">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-4">
              Cascade Fencing & Repair
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Expert wood fence installation and repair in Sumner, WA
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="tel:+1-253-228-9101"
                className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors duration-200"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                (253) 228-9101
              </a>
              <a
                href="mailto:cascadefencing3@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors duration-200"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                cascadefencing3@gmail.com
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href="/services/wood-fence-installation"
                  className="text-gray-300 hover:text-accent transition-colors duration-200"
                >
                  Wood Fence Installation
                </a>
              </li>
              <li>
                <a
                  href="/services/wood-fence-repair"
                  className="text-gray-300 hover:text-accent transition-colors duration-200"
                >
                  Wood Fence Repair
                </a>
              </li>
              <li>
                <a
                  href="/services/specialty-fencing"
                  className="text-gray-300 hover:text-accent transition-colors duration-200"
                >
                  Specialty Fencing
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-gray-300 hover:text-accent transition-colors duration-200"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/service-areas"
                  className="text-gray-300 hover:text-accent transition-colors duration-200"
                >
                  Service Areas
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-accent transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-accent transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Service Areas</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href="/service-areas/sumner"
                  className="text-gray-300 hover:text-accent transition-colors duration-200 flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Sumner
                </a>
              </li>
              <li>
                <a
                  href="/service-areas/bonney-lake"
                  className="text-gray-300 hover:text-accent transition-colors duration-200 flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Bonney Lake
                </a>
              </li>
              <li>
                <a
                  href="/service-areas/puyallup"
                  className="text-gray-300 hover:text-accent transition-colors duration-200 flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Puyallup
                </a>
              </li>
              <li>
                <a
                  href="/service-areas/lake-tapps"
                  className="text-gray-300 hover:text-accent transition-colors duration-200 flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Lake Tapps
                </a>
              </li>
              <li>
                <a
                  href="/service-areas/auburn"
                  className="text-gray-300 hover:text-accent transition-colors duration-200 flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Auburn
                </a>
              </li>
              <li>
                <a
                  href="/service-areas/kent"
                  className="text-gray-300 hover:text-accent transition-colors duration-200 flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Kent
                </a>
              </li>
              <li>
                <a
                  href="/service-areas/federal-way"
                  className="text-gray-300 hover:text-accent transition-colors duration-200 flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Federal Way
                </a>
              </li>
              <li>
                <a
                  href="/service-areas/edgewood"
                  className="text-gray-300 hover:text-accent transition-colors duration-200 flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Edgewood
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Business Hours & Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Hours & Social</h3>
            <div className="mb-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="font-medium">Monday - Saturday:</span>
                <br />
                7:00 AM - 6:00 PM
                <br />
                <br />
                <span className="font-medium">Sunday:</span>
                <br />
                Closed
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/cascade_fencing/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-accent hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1CXdLhrpdc/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-accent hover:text-white transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <p className="text-gray-300">
              © 2025 Cascade Fencing & Repair. All rights reserved.
            </p>
            <span className="hidden sm:inline text-gray-500">|</span>
            <a
              href="/privacy-policy"
              className="text-gray-300 hover:text-accent transition-colors duration-200"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
