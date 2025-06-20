'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import type { ArticleItems } from '@/types/index';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: '400',
});

export default function BlogContent({
  articles,
}: {
  articles: Record<string, ArticleItems[]>;
}) {

  const allPosts = Object.values(articles).flat();
  const featuredPosts = allPosts.find((post) => post.featured);
  const nonFeaturedPosts = allPosts.filter((post) => !post.featured);
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-gradient-to-b from-cyan-700 to-teal-700 text-white min-h-screen py-12 px-4 md:px-12"
    >
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1
          className={`${spaceGrotesk.className} text-5xl font-extrabold mb-4 tracking-tight`}
        >
          Blog
        </h1>
        <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
          Thoughts, tutorials, and dev insights—crafted for curious minds.
        </p>
      </section>

      {/* Featured Post */}
      {featuredPosts && (
        <motion.section
          key={featuredPosts.id}
          whileHover={{ scale: 1.03, y: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="bg-white text-cyan-900 p-8 rounded-2xl shadow-xl mb-20 max-w-5xl mx-auto"
        >
          <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden shadow-md">
            <Image
              src={featuredPosts.image}
              alt={featuredPosts.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="inline-block mb-2 px-3 py-1 text-sm font-medium bg-cyan-100 text-cyan-800 rounded-full uppercase tracking-wide">
            Featured Post
          </span>
          <h2 className="text-3xl font-bold mt-2">{featuredPosts.title}</h2>
          <p className="text-gray-700 mt-3">{featuredPosts.excerpt}</p>
          <p className="text-sm mt-4 text-gray-500">
            {featuredPosts.date} •{' '}
            <span className="inline-block mb-1 px-2 py-0.5 text-xs font-semibold bg-cyan-100 text-cyan-800 rounded-full uppercase tracking-wide">
              #{featuredPosts.tag}
            </span>
          </p>
          <Link
            href={`/blog/${featuredPosts.id}`}
            className="group relative text-cyan-700 hover:text-cyan-900 mt-6 inline-block"
          >
            Read more &rarr;
            <span className="absolute left-1/2 -bottom-1 w-0 group-hover:w-full h-[2px] bg-cyan-800 transition-all duration-300 ease-in-out transform -translate-x-1/2 origin-center"></span>
          </Link>
        </motion.section>
      )}

      {/* Blog Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {nonFeaturedPosts.map((post) => (
          <motion.article
            key={post.id}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-white text-cyan-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mt-1">{post.title}</h3>
            <p className="text-sm mt-1 text-gray-500">
              {post.date} •{' '}
              <span className="inline-block mb-1 px-2 py-0.5 text-xs font-semibold bg-cyan-100 text-cyan-800 rounded-full uppercase tracking-wide">
                #{post.tag}
              </span>
            </p>
            <p className="text-gray-700 mt-2 text-sm">{post.excerpt}</p>
            <Link
              href={`/blog/${post.id}`}
              className="group relative text-cyan-700 hover:text-cyan-900 mt-4 inline-block"
            >
              Read more &rarr;
              <span className="absolute left-1/2 -bottom-1 w-0 group-hover:w-full h-[2px] bg-cyan-800 transition-all duration-300 ease-in-out transform -translate-x-1/2 origin-center"></span>
            </Link>
          </motion.article>
        ))}
      </section>
    </motion.main>
  );
}
