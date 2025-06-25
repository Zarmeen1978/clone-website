'use client';
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaStar, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#0C0E2F] text-white py-10 px-6 md:px-16">
      <div className="grid md:grid-cols-5 gap-10">
        {/* Contact */}
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Direct Call</h3>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-400" />
              <span>+1 786 753 7752</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Email Us</h3>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <span>sales@invozone.com</span>
            </div>
          </div>
          <div>
            <p className="text-yellow-400 flex items-center gap-2">
              ★ 5 Star Reviews
            </p>
            <div className="flex gap-4 mt-2 text-xl">
              <FaFacebookF />
              <FaStar />
              <BsGlobe />
              <FaLinkedinIn />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">Our Socials</h3>
            <div className="flex gap-4 text-xl">
              <FaLinkedinIn />
              <FaFacebookF />
              <FaInstagram />
              <BsGlobe />
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Web App Development</li>
            <li>Mobile App Development</li>
            <li>Enterprise App Development</li>
            <li>AI Development Services</li>
            <li>DevOps Services</li>
            <li>Software Quality Assurance</li>
            <li>UI UX Design Services</li>
            <li>Product Development Services</li>
          </ul>
        </div>

        {/* Hire Developers */}
        <div>
          <h3 className="font-bold text-lg mb-4">Hire Developers</h3>
          <ul className="space-y-2 text-sm">
            <li>Elixir Developer</li>
            <li>MERN Stack Developer</li>
            <li>Node Js Developer</li>
            <li>Python Developer</li>
            <li>ROR Developer</li>
            <li>Flutter Developer</li>
            <li>React Js Developer</li>
            <li>SaaS Developer</li>
          </ul>
        </div>

        {/* Industry */}
        <div>
          <h3 className="font-bold text-lg mb-4">Industry</h3>
          <ul className="space-y-2 text-sm">
            <li>Fintech</li>
            <li>Ecommerce</li>
            <li>On-Demand</li>
            <li>Real Estate</li>
            <li>Healthcare</li>
            <li>Food & Grocery</li>
            <li>Education</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li className="text-blue-400">Careers</li>
            <li>Pricing</li>
            <li>Contact Us</li>
            <li>Events</li>
          </ul>
        </div>
      </div>

      {/* Address */}
      <div className="grid md:grid-cols-3 gap-6 text-sm text-white mt-10 border-t border-gray-700 pt-6">
        <div className="flex items-center gap-2">
          <span role="img" aria-label="flag">🇺🇸</span>
          130 NW 77th Ave Pembroke Pines, Florida 33024
        </div>
        <div className="flex items-center gap-2">
          <span role="img" aria-label="flag">🇨🇦</span>
          220 Duncan Mill Road, Toronto, Ontario M3B 3J5
        </div>
        <div className="flex items-center gap-2">
          <span role="img" aria-label="flag">🇲🇾</span>
          Unit 10, Jalan Kerinchi, Bangsar South, 59200 Kuala Lumpur
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 mt-6 border-t border-gray-700 pt-4">
        <p>© 2025 All Rights Reserved By InvoZone</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#">Sitemap</a>
          <a href="#">Privacy Policy</a>
          <a href="#">IMS Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
