'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { assets } from '../../public/assets/assets'; // Adjust based on your asset location

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = ['About', 'Blog', 'Projects', 'Gears'];

  return (
    <nav className="static flex justify-between items-center p-6 md:p-8 lg:p-12 mx-4 md:mx-16 lg:mx-40 text-gray-200">
      <Link href="/" className="flex items-center gap-2 group">
        <h1 className="font-light text-3xl md:text-5xl">Avijit Pandit</h1>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-between items-center gap-8">
        {navItems.map((item) => {
          const path = `/${item.toLowerCase()}`;
          const isActive = pathname === path;

          return (
            <li
              key={item}
              className={`text-lg md:text-2xl relative group font-medium ${
                isActive ? 'text-white' : 'text-gray-200'
              }`}
            >
              <Link href={path} className="relative">
                {item}
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] bg-gray-200 transition-transform duration-300 ease-in-out ${
                    isActive
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu Button */}
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="block md:hidden">
          <Image src={assets.menu_white} alt="Menu" className="w-7" />
        </button>
      )}

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-white z-50 transition-all duration-500 ease-in-out">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-10 w-7 cursor-pointer"
            aria-label="Close Menu"
          >
            <Image src={assets.close_white} alt="Close" className="w-7" />
          </button>

          {/* Menu Items */}
          {navItems.map((item) => {
            const path = `/${item.toLowerCase()}`;
            const isActive = pathname === path;

            return (
              <Link
                key={item}
                href={path}
                className={`text-3xl font-light transition-transform hover:scale-110 ${
                  isActive ? 'underline underline-offset-4' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
