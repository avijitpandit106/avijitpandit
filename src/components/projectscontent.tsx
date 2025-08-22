'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '../../public/assets/assets'; 
import { Space_Grotesk } from 'next/font/google';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: '400',
});

const APIURL = 'https://api.github.com/users/avijitpandit106/repos';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  updated_at: string;
}

export default function ProjectsContent() {
  const [repos, setRepos] = React.useState<GitHubRepo[]>([]);
  const [loading, setLoading] = React.useState(true);

  const getProjectImage = (repoName: string) => {
    const imageName = `/${repoName.toLowerCase()}.png`;
    const foundImage = images.find((img) => img.src === imageName);
    return foundImage ? foundImage.src : '/default.png'; 
  };

  React.useEffect(() => {
    fetch(APIURL)
      .then((res) => res.json())
      .then((data: GitHubRepo[]) => {
        const filteredRepos = data
          .filter((repo: GitHubRepo) => !repo.fork)
          .sort(
            (a: GitHubRepo, b: GitHubRepo) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
          )
          .slice(0, 6); 

        setRepos(filteredRepos);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching repos:', err);
        setLoading(false);
      });
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="bg-gradient-to-b from-cyan-700 to-teal-700 px-4 pt-20 pb-16 md:px-10 min-h-screen"
    >
      <section className="max-w-7xl mx-auto bg-white text-black py-8 px-4 sm:py-12 sm:px-8 md:px-12 lg:px-16 xl:px-20 shadow-2xl rounded-lg">
        <div className="mb-8 md:mb-12 text-center">
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl ${spaceGrotesk.className} font-bold`}
          >
            My Projects
          </h1>
        </div>

        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-700 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading projects...</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="group transition-all duration-300 bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100"
              >
                <div className="overflow-hidden rounded-t-xl">
                  <Image
                    src={getProjectImage(repo.name)}
                    alt={repo.name}
                    width={600}
                    height={300}
                    className="object-cover w-full h-48 sm:h-52 lg:h-56 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-1">
                    {repo.name.replace(/-/g, ' ')}
                  </h2>
                  <p className="text-sm text-neutral-600 mb-3 line-clamp-2 min-h-[2.5rem]">
                    {repo.description || 'No description available'}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.language && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
                        {repo.language}
                      </span>
                    )}
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium">
                      ⭐ {repo.stargazers_count}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {repo.homepage && (
                      <Link
                        href={repo.homepage}
                        target="_blank"
                        className="flex-1 bg-cyan-700 text-white py-2 px-4 rounded-lg hover:bg-cyan-800 transition duration-300 flex justify-center items-center gap-2 text-sm font-medium"
                      >
                        Live Demo{' '}
                        <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
                      </Link>
                    )}
                    <Link
                      href={repo.html_url}
                      target="_blank"
                      className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition duration-300 flex justify-center items-center gap-2 text-sm font-medium"
                    >
                      Code{' '}
                      <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </motion.main>
  );
}
