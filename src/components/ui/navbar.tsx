"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="project-200-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/path-to-your-logo.png" // Replace with the correct logo path
                alt="Project 200 Logo"
                width={50}
                height={50}
                className="h-10 w-auto"
              />
              <h3 className="text-2xl">Project 200</h3>
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="default-text hover:text-project-200-red">
              Home
            </Link>
            <Link href="/about" className="default-text hover:text-project-200-red">
              About Us
            </Link>
            <Link href="/projects" className="default-text hover:text-project-200-red">
              Projects
            </Link>
            <Link href="/contact" className="default-text hover:text-project-200-red">
              Contact
            </Link>
          </div>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              className="default-text hover:text-project-200-red focus:outline-none"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md default-text hover:bg-gray-100">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md default-text hover:bg-gray-100">
              About Us
            </Link>
            <Link href="/projects" className="block px-3 py-2 rounded-md default-text hover:bg-gray-100">
              Projects
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md default-text hover:bg-gray-100">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
