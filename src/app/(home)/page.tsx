"use client";

import About from '@/components/about';
import HeroSection from '@/components/herosection';
import Projects from '@/components/projects';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-gradient-to-b from-cyan-700 to-teal-700 text-white"
    >
      <header className="min-h-screen ">
        <HeroSection />
      </header>
      <section className="">
        <About />
        <Projects />
      </section>
    </motion.main>
  );
}
