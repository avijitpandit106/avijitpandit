'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';

interface ProjectCardProps {
  projectName: string;
  projectDescription: string;
  projectImage: string;
  projectSite: string;
  githubRepo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  projectDescription,
  projectImage,
  projectSite,
  githubRepo,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-3xl p-6 w-80 text-center mx-auto">
      <Image
        src={projectImage}
        alt="Project Image"
        width={150}
        height={150}
        className="mx-auto mb-4 rounded-3xl ring-4 ring-slate-900"
      />
      <h2 className="text-xl font-bold text-gray-900">{projectName}</h2>
      <p className="text-gray-600 mt-2">{projectDescription}</p>
      <div className="mt-4 flex justify-center space-x-4">
        <Link
          href={projectSite}
          target="_blank"
          className="px-8 py-2 bg-gray-300 text-gray-700 rounded-2xl shadow-md hover:bg-gray-400 hover:scale-105 transition duration-300 flex justify-center items-center gap-1"
        >
          Visit <HiOutlineArrowTopRightOnSquare />
        </Link>
        <Link
          href={githubRepo}
          target="_blank"
          className="px-6 py-2 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600 hover:scale-105 transition duration-300 flex justify-center items-center gap-1"
        >
          Github <HiOutlineArrowTopRightOnSquare />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
