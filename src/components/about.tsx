import Image from 'next/image';
import Link from 'next/link';
import { assets } from '../../public/assets/assets';
import { Space_Grotesk } from 'next/font/google';
import { motion } from 'framer-motion';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: '400',
});

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="flex flex-col-reverse lg:flex-row text-white justify-center items-center gap-8 lg:gap-20 text-center py-12 sm:py-16 md:py-20 lg:py-28 px-6 md:px-12 lg:px-16 bg-teal-700"
      id="about"
    >
      {/* Text Section */}
      <div className="flex flex-col pt-20 gap-6 sm:gap-8 lg:gap-10 items-start text-left max-w-full sm:max-w-xl">
        <div className="flex flex-col gap-4 sm:gap-6 items-start text-left leading-relaxed">
          <div
            className={`${spaceGrotesk.className} text-5xl sm:text-6xl md:text-7xl font-black text-white`}
          >
            Hi,
          </div>
          <div
            className={`${spaceGrotesk.className} text-4xl sm:text-5xl md:text-6xl font-black text-white`}
          >
            My Name is Avijit Pandit.
          </div>
          <div className="text-base sm:text-lg md:text-xl leading-relaxed">
            I&apos;m a passionate{' '}
            <strong className=" text-yellow-500 rounded-md">
              Full-Stack Developer{' '}
            </strong>{' '}
            with expertise in the&nbsp;
            <strong className=" text-yellow-500 rounded-md">
              MERN stack (MongoDB, Express, React, Node.js)
            </strong>{' '}
            and a strong command of other modern technologies. I love building
            scalable, high-performance web applications that deliver seamless
            user experiences. With a keen eye for clean code and efficient
            architecture, I thrive in both front-end and back-end development,
            turning ideas into reality. Whether it&apos;s crafting dynamic UIs,
            optimizing APIs, or deploying robust solutions, I&apos;m always
            eager to push the boundaries of what&apos;s possible in web
            development.
          </div>
        </div>
        <div>
          <Link
            href="/about"
            className="group relative text-blue-200 hover:text-blue-300 rounded-md transition-colors duration-300 ease-in-out"
          >
            Read more about me &rarr;
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-300 origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-hover:shadow-md"></span>
          </Link>
        </div>
      </div>
      {/* Image Section */}
      <div className="flex justify-center w-full lg:w-auto mt-8 lg:mt-0">
        <Image
          src={assets.user_image}
          alt="Profile Picture"
          className="rounded-3xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-[0_0_15px_rgba(255,255,255,0.4)]"
        />
      </div>
    </motion.section>
  );
}
