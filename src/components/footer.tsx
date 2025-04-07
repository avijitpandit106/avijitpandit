'use client';
import Link from 'next/link';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import {
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare,
  
} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IconContext } from 'react-icons';

export default function Footer() {
  return (
    <footer className="bg-black flex flex-col items-center py-12 px-6 md:py-20 md:px-10">
      <div className="container mx-auto text-white flex flex-wrap justify-between gap-10 border-b border-gray-500 pb-10">
        <div className="flex flex-col gap-6 w-full md:w-auto">
          <h1 className="font-bold text-3xl md:text-5xl">Avijit Pandit</h1>
          <p className="text-sm md:text-base max-w-xs">
            Crafting seamless digital experiences from front to back.
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full md:w-auto">
          <h1 className="text-lg font-semibold pb-2 border-b-2 border-red-500 w-fit">
            Quick Links
          </h1>
          <ul className="flex flex-col gap-4">
            <li className="text-sm text-gray-400 hover:text-white transition">
              <Link href={'/'}>Home</Link>
            </li>
            {['About', 'Blog', 'Projects', 'Gears'].map((item) => (
              <li
                key={item}
                className="text-sm text-gray-400 hover:text-white transition"
              >
                <Link href={`${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6 w-full md:w-auto">
          <h1 className="text-lg font-semibold pb-2 border-b-2 border-red-500 w-fit">
            Contact
          </h1>
          <ul className="flex flex-col gap-4">
            <li className="text-sm text-gray-400">
              dev.avijit404@gmail.com
            </li>
            <li>
              <Link
                href={'/contact'}
                target="_blank"
                className="text-gray-400 hover:text-white transition flex items-center gap-1"
              >
                Contact me <HiOutlineArrowTopRightOnSquare />
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-auto">
          <h1 className="text-lg font-semibold pb-2 border-b-2 border-red-500 w-fit">
            Newsletter
          </h1>
          <p className="text-sm text-gray-400 mt-4">
            Subscribe to stay updated.
          </p>
          <form className="flex flex-col md:flex-row gap-4 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-black bg-white w-full md:w-72"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-white flex flex-col items-center gap-6 pt-10 w-full">
        <h1 className="text-lg font-semibold pb-2 border-b-2 border-red-500 w-fit">
          Follow me
        </h1>
        <div className="flex gap-6 items-center">
          {[
            {
              href: 'https://github.com/avijitpandit106',
              icon: <FaGithubSquare />,
            },
            {
              href: 'https://www.linkedin.com/in/avijit-pandit-917947335/',
              icon: <FaLinkedin />,
            },
            {
              href: 'https://www.instagram.com/avijitpandit106/',
              icon: <FaInstagramSquare />,
            },
            {
              href: 'https://x.com/avijitpandit106',
              icon: <FaSquareXTwitter />,
            },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              className="transition duration-300 ease-in hover:scale-105"
            >
              <IconContext.Provider value={{ size: '2em' }}>
                <div className="text-gray-400 hover:text-white transition">
                  {social.icon}
                </div>
              </IconContext.Provider>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
