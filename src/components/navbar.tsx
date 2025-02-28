'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '../../public/assets/assets'; // Adjust based on your asset location

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="static flex justify-between items-center p-6 md:p-8 lg:p-12 mx-4 md:mx-16 lg:mx-40 text-gray-200">
      <h1 className="font-light text-3xl md:text-5xl transition-transform duration-300 ease-in-out transform group-hover:scale-110">
        Avijit Pandit
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-between items-center gap-8">
        {['About', 'Blog', 'Projects', 'Gears'].map((item) => (
          <li key={item} className="text-lg md:text-2xl relative group text-gray-200 font-medium">
            <Link href={''} className="relative">
              {item}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-200 scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="block md:hidden"
        >
          <Image src={assets.menu_white} alt="Menu" className="w-7" />
        </button>
      )}
      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs flex flex-col items-center justify-center gap-8 text-white z-50 transition-transform transform duration-500 ease-in-out"
          style={{ transition: 'transform 0.5s ease-in-out' }}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-10"
          >
            <Image src={assets.close_white} alt="" className="w-7" />
          </button>

          {/* Menu Items */}
          {['About', 'Blog', 'Projects', 'Gears'].map((item) => (
            <Link
              key={item}
              href={''}
              className="text-3xl font-light transition-transform hover:scale-110"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
