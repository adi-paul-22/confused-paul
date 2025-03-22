
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Achievements from "@/components/Achievements";
import Social from "@/components/Social";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Preload the avatar image
  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/e9f4e256-9b93-4e78-82e4-9ff33563b30d.png";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Achievements />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
