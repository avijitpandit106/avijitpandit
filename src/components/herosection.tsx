'use client';
import Image from 'next/image';
import { assets } from '../../public/assets/assets';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default function HeroSection() {
  return (
    <section className="flex flex-wrap lg:flex-nowrap justify-center items-center text-center py-16 px-6 md:py-28 md:px-16 ">
      <div className="flex justify-center w-full md:w-auto">
        <Image
          src={assets.user_image}
          alt="Profile Picture"
          className="rounded-full max-w-xs sm:max-w-sm lg:max-w-md shadow-[0_0_15px_rgba(255,255,255,0.4)]"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center items-center py-6 lg:py-0 lg:px-12">
        <span className="text-gray-300 text-lg md:text-xl">
          Hello, I&apos;m
        </span>
        <span className="text-white font-black text-[clamp(2.5rem,6vw,4rem)]">
          Avijit Pandit
        </span>
        <span className="text-white font-normal text-[clamp(1.75rem,5vw,3rem)]">
          Full Stack Developer
        </span>

        {/* Buttons */}
        <div className="flex gap-6 items-center py-4">
          <Link
            href={'#'}
            className="border-2 px-5 py-2 border-gray-200 bg-gray-200 text-black rounded-full text-sm font-semibold transition duration-300  hover:bg-white hover:text-black hover:scale-105"
          >
            Download CV
          </Link>
          <Link
            href={'#'}
            className="border-2 px-6 py-2 border-black bg-black text-white font-semibold rounded-full text-sm transition duration-300 ease-in hover:scale-105"
          >
            Contact Me
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 items-center py-4">
          <Link
            href={'https://github.com/avijitpandit106'}
            target="_blank"
            className="transition duration-300 ease-in hover:scale-105"
          >
            <IconContext.Provider value={{ size: '3em', color: 'white' }}>
              <FaGithub />
            </IconContext.Provider>
          </Link>
          <Link
            href={'https://www.linkedin.com/in/avijit-pandit-917947335/'}
            target="_blank"
            className="transition duration-300 ease-in hover:scale-105"
          >
            <IconContext.Provider value={{ size: '3em', color: 'white' }}>
              <FaLinkedin />
            </IconContext.Provider>
          </Link>
        </div>
      </div>
    </section>
  );
}
