'use client';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import FancyButton from './button';
import MegaMenu from './dropdownContent';

const navItems = [
  { title: 'What We Do', dropdown: ['Startups', 'Enterprises', 'Agencies'] },
  { title: 'Who We Serve', dropdown: ['Startups', 'Enterprises', 'Agencies'] },
  { title: 'How We Engage', dropdown: ['Dedicated Teams', 'Time & Material', 'Fixed Price'] },
  { title: 'Hire Dev', dropdown: ['Hire React Devs', 'Hire Node Devs'] },
  { title: 'Company', dropdown: ['About Us', 'Blog', 'News'] },
  { title: 'Careers', dropdown: ['mmkkmkmk'] },
];

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left side: Logo and Desktop Nav */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-center gap-2 text-xl font-bold">
            <img src="/assests/images/invo-logo.png" alt="Logo" className="h-8" />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden [@media(min-width:1283px)]:flex items-center gap-6 text-sm font-medium text-gray-700">
            {navItems.map((item, idx) => (
              <li
                key={item.title}
                className="relative group"
                onMouseEnter={() => setOpenIndex(idx)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <span className="cursor-pointer hover:text-purple-600 transition duration-200">
                  {item.title}
                  {item.dropdown?.length > 0 && ' ▾'}
                </span>
                <span className="block h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>

                {openIndex === idx &&
                  item.dropdown?.length > 0 &&
                  idx !== 0 && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md border rounded-md z-50">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  )}

                {openIndex === 0 && idx === 0 && <MegaMenu />}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side: Hamburger + Button */}
        <div className="flex items-center gap-4">
          <button
            className="[@media(min-width:236px)]:[@media(max-width:1282px)]:block hidden text-2xl text-gray-700"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiMenu />
          </button>
          <FancyButton className="hidden [@media(min-width:1283px)]:inline-flex ml-4 gap-2 border !rounded-full">
            View All
          </FancyButton>
        </div>
      </div>

      {/* Fullscreen Right Slide Menu (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-white shadow-lg transition-transform duration-300 z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setIsMenuOpen(false)} className="text-2xl">
            <HiX />
          </button>
        </div>

        <ul className="p-4 space-y-4 text-sm font-medium text-gray-700">
          {navItems.map((item, index) => (
            <li key={item.title}>
              <div
                onClick={() => toggleDropdown(index)}
                className="flex justify-between items-center cursor-pointer font-semibold hover:text-purple-600"
              >
                {item.title}
                {item.dropdown.length > 0 && (
                  <span>{activeDropdown === index ? '▲' : '▼'}</span>
                )}
              </div>

              {activeDropdown === index && item.dropdown.length > 0 && (
                <ul className="ml-3 mt-1 space-y-1 text-gray-600">
                  {item.dropdown.map((subItem) => (
                    <li key={subItem} className="hover:underline cursor-pointer">
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          <li>
            <button className="mt-4 w-full flex items-center justify-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition duration-200">
              Contact Us <FaArrowRight size={12} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
