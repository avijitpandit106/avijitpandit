import About from '@/components/about';
import HeroSection from '@/components/herosection';
import Projects from '@/components/projects';
export default function Home() {
  return (
    <>
      <header
        className="min-h-screen"
      >
        <HeroSection />
      </header>
      <section className="">
        <About />
        <Projects />
      </section>
    </>
  );
}
