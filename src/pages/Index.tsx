
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Achievements from "@/components/Achievements";
import Social from "@/components/Social";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
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
