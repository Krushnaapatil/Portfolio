import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

// Page with full website
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />
      
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Routes>
          {/* Full website */}
          <Route path="/" element={<HomePage />} />

          {/* Individual section routes */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
      <Analytics />
    </BrowserRouter>
    
  );
}

export default App;
