import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Facilities from './components/Facilities';
import FacilitiesCarousel from './components/FacilitiesCarousel';


function App() {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="max-h-screen max-w-screen bg-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <FacilitiesCarousel />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
