'use client';

import dynamic from 'next/dynamic';
import ProjectCard from './projectcard';
import { workData } from '../../public/assets/assets';
import Link from 'next/link';
import { Itim } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const itim = Itim({
  subsets: ['latin'],
  weight: '400',
});

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '15px',
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '10px',
        },
      },
    ],
  };

  return (
    <section
      className="bg-gray-900 flex flex-col justify-center items-center py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-14"
      id="projects"
    >
      <div className="container mx-auto max-w-7xl">
      <h1
        className={`${itim.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-gray-100 font-bold pb-10 sm:pb-14`}
      >
        My Projects
      </h1>
      <div className="w-full flex justify-center">
        <Slider {...settings} className="w-full max-w-6xl custom-dots">
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
      <div className="mt-10 sm:mt-12">
      <Link
        href="/projects"
        className="group relative text-blue-400 hover:text-blue-500 rounded-md transition-colors duration-300 ease-in-out text-lg sm:text-xl"
      >
        Browse all my projects &rarr;
        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-500 origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-hover:shadow-md"></span>
      </Link>
      </div>
    </section>
  );
}
