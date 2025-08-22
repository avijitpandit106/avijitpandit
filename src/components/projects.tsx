'use client';

import dynamic from 'next/dynamic';
import ProjectCard from './projectcard';
import { images } from '../../public/assets/assets'; // Import your images array
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import React from 'react';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: '400',
});

// Define the repo type
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

const APIURL = 'https://api.github.com/users/avijitpandit106/repos';

export default function Projects() {
  const [repos, setRepos] = React.useState<GitHubRepo[]>([]);
  const [loading, setLoading] = React.useState(true);

  // Function to get project image from assets
  const getProjectImage = (repoName: string) => {
    const imageName = `/${repoName.toLowerCase()}.png`;
    const foundImage = images.find((img) => img.src === imageName);
    return foundImage ? foundImage.src : '/default.png'; // fallback if not found
  };

  React.useEffect(() => {
    fetch(APIURL)
      .then((res) => res.json())
      .then((data: GitHubRepo[]) => {
        // Filter out forks and sort by updated date
        const filteredRepos = data
          .filter((repo: GitHubRepo) => !repo.fork)
          .sort(
            (a: GitHubRepo, b: GitHubRepo) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
          )
          .slice(0, 6); // Show only top 6 repos for slider

        setRepos(filteredRepos);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching repos:', err);
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px',
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    useTransform: true,
    useCSS: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '60px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '80px',
          centerMode: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '20px',
          centerMode: false,
        },
      },
    ],
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-gray-900 flex flex-col justify-center items-center py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-14"
      id="projects"
    >
      <div className="container mx-auto max-w-7xl">
        <h1
          className={`${spaceGrotesk.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-gray-100 font-bold pb-10 sm:pb-14`}
        >
          My Projects
        </h1>

        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto"></div>
            <p className="mt-4 text-gray-300">Loading projects...</p>
          </div>
        ) : (
          <div className="w-full flex justify-center">
            <Slider {...settings} className="w-full max-w-6xl custom-dots">
              {repos.map((repo) => (
                <div key={repo.id} className="flex justify-center px-2">
                  <ProjectCard
                    projectName={repo.name.replace(/-/g, ' ')}
                    projectDescription={
                      repo.description || 'No description available'
                    }
                    projectImage={getProjectImage(repo.name)}
                    githubRepo={repo.html_url}
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>

      <div className="mt-10 sm:mt-12">
        <Link
          href="/projects"
          className="group relative text-blue-400 hover:text-blue-500 rounded-md transition-colors duration-300 ease-in-out text-lg sm:text-xl"
        >
          Browse all my projects &rarr;
          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-500 origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-hover:shadow-md"></span>
        </Link>
      </div>
    </motion.section>
  );
}
