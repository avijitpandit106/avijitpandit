'use client';

import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaGithub,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
} from 'react-icons/si';

const skills = [
  'React.js',
  'Next.js',
  'Node.js',
  'Express',
  'MongoDB',
  'Tailwind CSS',
  'HTML5',
  'CSS3',
  'Figma',
  'GitHub',
];

const icons: { [key: string]: React.ReactNode } = {
  'React.js': <FaReact className="text-blue-400" />,
  'Next.js': <SiNextdotjs className="text-white" />,
  'Node.js': <FaNodeJs className="text-green-500" />,
  Express: <SiExpress className="text-gray-300" />,
  MongoDB: <SiMongodb className="text-emerald-400" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-300" />,
  HTML5: <FaHtml5 className="text-orange-500" />,
  CSS3: <FaCss3Alt className="text-blue-500" />,
  Figma: <FaFigma className="text-pink-500" />,
  GitHub: <FaGithub className="text-white" />,
};

export default function AboutSkills() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium shadow-sm transition transform hover:scale-105 hover:ring-2 hover:ring-yellow-300"
        >
          {icons[skill]}
          {skill}
        </motion.div>
      ))}
    </div>
  );
}
