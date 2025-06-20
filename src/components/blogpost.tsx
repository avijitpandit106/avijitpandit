'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark-dimmed.css';
import type { ArticleItems } from '@/types/index';

type BlogPostProps = {
  article: ArticleItems & {
    contentHtml: string;
  };
};

export default function BlogPost({ article }: BlogPostProps) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="bg-gradient-to-b from-cyan-700 to-teal-700 px-4 pt-20 pb-16 md:px-10"
    >
      <article className="bg-white text-black max-w-6xl mx-auto py-10 px-20 rounded-2xl shadow-2xl">
        <div className="py-4 mb-6 flex justify-between items-center">
          <Link
            href="/blog"
            className="group relative text-black rounded-md transition-colors duration-300 ease-in-out"
          >
            &larr; Back to Blog
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-hover:shadow-md"></span>
          </Link>
        </div>

        <Image
          src={article.image}
          alt={article.title}
          width={1200}
          height={600}
          className="rounded-xl w-full h-auto mb-8"
        />

        <span className="inline-block mb-3 px-3 py-1 text-sm font-medium bg-cyan-100 text-cyan-800 rounded-full uppercase tracking-wide">
          #{article.tag}
        </span>

        <h1 className="text-4xl text-cyan-900 font-bold mb-2">
          {article.title}
        </h1>
        <p className="text-sm text-gray-500 mb-6">{article.date}</p>

        <div
          className="article prose max-w-none"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
      </article>
    </motion.main>
  );
}
