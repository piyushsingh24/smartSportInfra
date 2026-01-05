import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import Particular from "./components/Particular";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Facilities from "./components/Facilities";
import FacilitiesCarousel from "./components/FacilitiesCarousel";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";
import FloatingContactButton from "./components/FloatingContactButton";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll logic
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-h-screen max-w-screen bg-slate-900">
      <Particular />
      <FloatingContactButton />

      <Routes>
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        ></Route>

        <Route path="/product/:id" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
