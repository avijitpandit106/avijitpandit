import About from '@/components/about';
import HeroSection from '@/components/herosection';
import Projects from '@/components/projects';
export default function Home() {
  return (
    <>
      <header className="min-h-screen bg-linear-to-b from-cyan-700 to-teal-700">
        <HeroSection />
      </header>
      <section className="">
        <About />
        <Projects />
      </section>
    </>
  );
}
