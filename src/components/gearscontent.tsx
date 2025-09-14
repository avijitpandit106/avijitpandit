'use client';
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';

export default function GearsContent() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-gradient-to-b from-cyan-700 to-teal-700 text-white min-h-screen"
    >
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 text-center">
            What I Use
          </h1>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            Here are some of the tools I frequently use to build my projects:
          </p>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {/* Editor Section */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
                Editor
              </h2>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/90 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-white mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="flex-1">
                    For my go-to editor I prefer{' '}
                    <Link
                      href="https://code.visualstudio.com/Download"
                      target="_blank"
                      className="group relative text-blue-300 hover:text-blue-200 rounded-md transition-colors duration-300 ease-in-out"
                    >
                      Visual Studio Code
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-300 origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                    </Link>{' '}
                    by Microsoft with a mountain of{' '}
                    <Link
                      href="https://howivscode.com/avijitpandit106"
                      target="_blank"
                      className="group relative text-blue-300 hover:text-blue-200 rounded-md transition-colors duration-300 ease-in-out"
                    >
                      extensions
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-300 origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                    </Link>
                    .
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="flex-1">
                    For my editor theme I use{' '}
                    <Link
                      href="https://marketplace.visualstudio.com/items?itemName=keksiqc.idx-monospace-theme"
                      target="_blank"
                      className="group relative text-blue-300 hover:text-blue-200 rounded-md transition-colors duration-300 ease-in-out"
                    >
                      Monospace Dark
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-300 origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                    </Link>
                    .
                  </p>
                </li>
              </ul>
            </section>

            {/* Terminal Section */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
                Terminal
              </h2>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/90 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-white mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="flex-1">
                    I use Ubuntu&apos;s bash for the default terminal in Ubuntu.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="flex-1">
                    For working on Windows I use{' '}
                    <Link
                      href="https://aka.ms/terminal"
                      target="_blank"
                      className="group relative text-blue-300 hover:text-blue-200 rounded-md transition-colors duration-300 ease-in-out"
                    >
                      Windows Terminal
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-300 origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                    </Link>
                    .
                  </p>
                </li>
              </ul>
            </section>

            {/* Desktop Apps Section */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
                Desktop Apps
              </h2>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/90 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-white mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="flex-1">
                    For my day-to-day browser I prefer{' '}
                    <Link
                      href="https://arc.net/download"
                      target="_blank"
                      className="group relative text-blue-300 hover:text-blue-200 rounded-md transition-colors duration-300 ease-in-out"
                    >
                      Arc Browser
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-300 origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                    </Link>{' '}
                    by The Browser Company.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="flex-1">
                    <Link
                      href="https://www.postman.com/downloads/"
                      target="_blank"
                      className="group relative text-blue-300 hover:text-blue-200 rounded-md transition-colors duration-300 ease-in-out"
                    >
                      Postman
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-300 origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                    </Link>{' '}
                    for API development and testing.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="flex-1">
                    <Link
                      href="https://www.figma.com/downloads/"
                      target="_blank"
                      className="group relative text-blue-300 hover:text-blue-200 rounded-md transition-colors duration-300 ease-in-out"
                    >
                      Figma
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-300 origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                    </Link>{' '}
                    for designing.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="flex-1">
                    <Link
                      href="https://discord.com/download"
                      target="_blank"
                      className="group relative text-blue-300 hover:text-blue-200 rounded-md transition-colors duration-300 ease-in-out"
                    >
                      Discord
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-300 origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                    </Link>{' '}
                    and{' '}
                    <Link
                      href="https://meet.google.com/"
                      target="_blank"
                      className="group relative text-blue-300 hover:text-blue-200 rounded-md transition-colors duration-300 ease-in-out"
                    >
                      Google Meet
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-300 origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                    </Link>{' '}
                    for calls and meetings.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="flex-1">
                    <Link
                      href="https://www.notion.so/product"
                      target="_blank"
                      className="group relative text-blue-300 hover:text-blue-200 rounded-md transition-colors duration-300 ease-in-out"
                    >
                      Notion
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-300 origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                    </Link>{' '}
                    for note-keeping and project management.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    •
                  </span>
                  <p className="flex-1">
                    For listening to music I use{' '}
                    <Link
                      href="https://music.youtube.com/"
                      target="_blank"
                      className="group relative text-blue-300 hover:text-blue-200 rounded-md transition-colors duration-300 ease-in-out"
                    >
                      YouTube Music
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-300 origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                    </Link>
                    .
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
