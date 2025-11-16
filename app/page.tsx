import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import BrandCarousel from '@/components/BrandCarousel';
import Contact from '@/components/contact/Contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <BrandCarousel />
      <Services />
      <CaseStudies />
      <About />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  );
}