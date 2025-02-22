'use client';
import Link from 'next/link';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import { FaGithubSquare, FaLinkedin, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default function Footer() {
  return (
    <footer className="bg-black min-h-32 flex flex-col justify-between items-center py-16 px-6 md:py-28 md:px-16">
      <div className="relative container mx-auto py-4 text-white pt-10 flex justify-between after:block after:w-full after:h-[2px] after:bg-gray-500 after:absolute after:bottom-0 after:left-0">
        <div className="container mx-auto flex justify-between mb-10">
          <div className="flex gap-24">
            <div className="flex flex-col gap-6">
              <h1 className="font-bold text-5xl pt-2">Avijit Pandit</h1>
              <p className="text-xs w-96">
                Crafting seamless digital experiences from front to back.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="relative text-lg font-semibold pb-2 after:block after:w-[80%] after:h-[2px] after:bg-red-500 after:absolute after:bottom-0 after:left-0">
                Quick Links
              </h1>
              <ul className="flex flex-col justify-between items-center gap-6">
                {['About', 'Blog', 'Projects', 'Gears'].map((item) => (
                  <li
                    key={item}
                    className="text-sm relative group text-gray-400 font-medium hover:text-white transition duration-300"
                  >
                    <Link href={''} className="relative">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-lg font-semibold pb-2 relative">
                <span className="relative pb-2 after:block after:w-[90%] after:h-[2px] after:bg-red-500 after:absolute after:bottom-0 after:left-0">
                  Contact
                </span>
              </h1>
              <ul className="flex flex-col justify-between gap-6 pt-5">
                <li className="text-sm text-gray-400">
                  dev.avijitpandit@proton.me
                </li>
                <li>
                  <Link
                    href={'#'}
                    target="_blank"
                    className=" text-gray-400 hover:text-white transition duration-300 flex items-center gap-1"
                  >
                    Contact me <HiOutlineArrowTopRightOnSquare />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto">
            <h1 className="text-lg font-semibold pb-2 relative">
              <span className="relative pb-2 after:block after:w-[90%] after:h-[2px] after:bg-red-500 after:absolute after:bottom-0 after:left-0">
                Newsletter
              </span>
            </h1>
            <p className="text-sm text-gray-400 mt-4">
              Subscribe to our newsletter to stay updated.
            </p>
            <form className="flex gap-4 mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-black bg-white min-w-72"
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
      </div>
      <div className="text-white flex flex-col justify-between items-center gap-6 pt-10">
        <h1 className="text-lg font-semibold pb-2 relative">
          <span className="relative pb-2 after:block after:w-[90%] after:h-[2px] after:bg-red-500 after:absolute after:bottom-0 after:left-0">
            Follow me
          </span>
        </h1>
        <div className="flex gap-6 items-center py-4">
          <Link
            href={'https://github.com/avijitpandit106'}
            target="_blank"
            className="transition duration-300 ease-in hover:scale-105"
          >
            <IconContext.Provider value={{ size: '2em' }}>
              <FaGithubSquare className="text-gray-400 hover:text-white transition ease-in duration-300" />
            </IconContext.Provider>
          </Link>
          <Link
            href={'https://www.linkedin.com/in/avijit-pandit-917947335/'}
            target="_blank"
            className="transition duration-300 ease-in hover:scale-105"
          >
            <IconContext.Provider value={{ size: '2em' }}>
              <FaLinkedin className="text-gray-400 hover:text-white transition ease-in duration-300" />
            </IconContext.Provider>
          </Link>
          <Link
            href={'https://www.linkedin.com/in/avijit-pandit-917947335/'}
            target="_blank"
            className="transition duration-300 ease-in hover:scale-105"
          >
            <IconContext.Provider value={{ size: '2em' }}>
              <FaInstagramSquare className="text-gray-400 hover:text-white transition ease-in duration-300" />
            </IconContext.Provider>
          </Link>
          <Link
            href={'https://www.linkedin.com/in/avijit-pandit-917947335/'}
            target="_blank"
            className="transition duration-300 ease-in hover:scale-105"
          >
            <IconContext.Provider value={{ size: '2em' }}>
              <FaYoutubeSquare className="text-gray-400 hover:text-white transition ease-in duration-300" />
            </IconContext.Provider>
          </Link>
        </div>
      </div>
    </footer>
  );
}
