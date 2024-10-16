import React from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useState } from 'react';


function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
      <nav className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white font-bold text-xl">Sportify</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4 items-center">
              <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Dashboard</a>
              <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Bookings</a>
              <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Settings</a>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Dashboard</a>
              <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Bookings</a>
              <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Settings</a>
            </div>
          </div>
        )}
      </nav>
    );
}

export default Navbar