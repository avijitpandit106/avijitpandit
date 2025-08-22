'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';

interface ProjectCardProps {
  projectName: string;
  projectDescription: string;
  projectImage: string;
  githubRepo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  projectDescription,
  projectImage,
  githubRepo,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-3xl p-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-center mx-auto h-96 flex flex-col">
      <div className="relative w-full h-40 mb-4 overflow-hidden rounded-3xl ring-4 ring-slate-900">
        <Image
          src={projectImage}
          alt="Project Image"
          fill
          className="object-cover"
          onError={(e) => {
            e.currentTarget.src = '/default.png';
          }}
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
          {projectName}
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base flex-1 line-clamp-3">
          {projectDescription}
        </p>
        <div className="mt-4 flex justify-center">
          <Link
            href={githubRepo}
            target="_blank"
            className="px-8 py-3 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600 hover:scale-105 transition duration-300 flex justify-center items-center gap-2 font-medium"
          >
            Github <HiOutlineArrowTopRightOnSquare />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
