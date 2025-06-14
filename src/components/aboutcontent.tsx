'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '../../public/assets/assets';
import AboutSkills from '@/components/aboutskills';
import { motion } from 'framer-motion';
import { Briefcase, Users } from 'lucide-react';

export default function AboutContent() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-gradient-to-b from-cyan-700 to-teal-700 text-white"
    >
      <main className="min-h-screen text-white px-6 sm:px-16 py-20 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
            <div className="flex-1 text-left">
              <h1 className="text-7xl font-extrabold mb-6">About Me</h1>
              <p className="text-lg leading-relaxed text-white/90">
                Fuelled by a passion for building elegant and scalable web
                applications, I&apos;m a{' '}
                <span className="font-semibold text-yellow-300">
                  Full Stack Developer
                </span>{' '}
                with a love for solving real-world problems through technology.
                I strive to continuously grow and push my creative boundaries
                every day.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-[400px] h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white/10 backdrop-blur-sm">
                <Image
                  src={assets.user_image}
                  alt="Avijit Pandit"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Career Section */}
          <section className="mt-24">
            <h2 className="text-3xl font-semibold mb-6 border-b-4 border-white inline-block pb-1">
              My Career So Far
            </h2>
            <p className="text-lg text-white/90 leading-relaxed max-w-3xl">
              Always up for a challenge, I&apos;ve worked on projects ranging
              from dynamic web dashboards to full-scale SaaS products. My core
              stack includes React, Node.js, MongoDB, and Next.js. Whether
              I&apos;m designing UIs or optimizing backend performance, I bring
              creativity and clarity to every project.
            </p>

            <AboutSkills />

            {/* Experience & Education Section */}
            <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Experience */}
              <div className="rounded-xl border border-white/20 bg-white/10 p-6 text-center shadow-md backdrop-blur-sm">
                <Briefcase className="mx-auto mb-2 text-yellow-300" size={32} />
                <h3 className="text-xl font-bold text-white mb-1">
                  Experience
                </h3>
                <p className="text-white/80">2+ years</p>
                <p className="text-white/70">Frontend & Backend Development</p>
              </div>

              {/* Education */}
              <div className="rounded-xl border border-white/20 bg-white/10 p-6 text-center shadow-md backdrop-blur-sm">
                <Users className="mx-auto mb-2 text-yellow-300" size={32} />
                <h3 className="text-xl font-bold text-white mb-1">Education</h3>
                <p className="text-white/80">
                  B.Tech in Computer Science and Engineering
                </p>
                <p className="text-white/70">(Cyber Security)</p>
              </div>
            </section>
          </section>
        </div>
      </main>
    </motion.main>
  );
}
