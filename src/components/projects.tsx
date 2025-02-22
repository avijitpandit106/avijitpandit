'use client';

import dynamic from 'next/dynamic';
import ProjectCard from './projectcard';
import { workData } from '../../public/assets/assets';
import Link from 'next/link';
import { Itim } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Dynamically import react-slick to avoid SSR issues
const Slider = dynamic(() => import('react-slick'), { ssr: false });

// Font configuration
const itim = Itim({
  subsets: ['latin'],
  weight: '400',
});

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default to 1 for mobile
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px', // Adds spacing around the slides

    responsive: [
      {
        breakpoint: 640, // Small screens (sm)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '10px',
        },
      },
      {
        breakpoint: 768, // Medium screens (md)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '15px',
        },
      },
      {
        breakpoint: 1024, // Large screens (lg)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '10px',
        },
      },
    ],
  };

  return (
    <section
      className="bg-gradient-to-b from-gray-900 to-slate-900 flex flex-col justify-center items-center py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-8 md:px-12 lg:px-16"
      id="projects"
    >
      <div className="container mx-auto">
        <h1
          className={`${itim.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-white font-bold pb-12 sm:pb-16`}
        >
          My Projects
        </h1>
        <div className="w-full flex justify-center">
          <Slider {...settings} className="w-full max-w-6xl">
            {workData.map((project) => (
              <div key={project.index} className="flex justify-center px-2">
                <ProjectCard
                  projectName={project.title}
                  projectDescription={project.description}
                  projectImage={project.bgImage}
                  projectSite={project.site}
                  githubRepo={project.github}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="mt-10">
        <Link
          href="#"
          className="group relative text-blue-200 hover:text-blue-300 rounded-md transition-colors duration-300 ease-in-out text-lg"
        >
          Browse all my projects &rarr;
          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-300 origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-hover:shadow-md"></span>
        </Link>
      </div>
    </section>
  );
}
