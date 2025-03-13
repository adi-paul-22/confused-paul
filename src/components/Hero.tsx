
import React from "react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Gradient orbs for background effect */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl opacity-60 animate-pulse dark:bg-primary/20"></div>
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl opacity-70 animate-pulse duration-delay-1000 dark:bg-purple-600/20"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="opacity-0 animate-fade-in animation-delay-100">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                Portfolio
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in animation-delay-200 bg-gradient-to-r from-foreground to-foreground/80 dark:from-white dark:to-white/70 bg-clip-text">
              Hi, I'm Paul
              <span className="relative">
                <span className="inline-block ml-3 text-primary animate-pulse">
                  _
                </span>
              </span>
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl opacity-0 animate-fade-in animation-delay-300">
              A curious explorer navigating through technology, art, sustainability, 
              business, and sports. Welcome to my digital portfolio.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 opacity-0 animate-fade-in animation-delay-400">
              <a
                href="#portfolio"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-medium transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/80 dark:bg-secondary/80 dark:hover:bg-secondary"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden opacity-0 animate-fade-in animation-delay-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-70 dark:from-primary/40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-background/60 to-background/30 backdrop-blur-md border border-white/10 flex items-center justify-center dark:from-background/30 dark:to-background/10">
                <span className="text-3xl md:text-4xl font-display font-light bg-gradient-to-r from-foreground to-foreground/80 dark:from-white dark:to-white/70 bg-clip-text">
                  Paul
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center animate-bounce opacity-0 animate-fade-in-slow animation-delay-700">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1">
          <div className="w-1 h-2 bg-muted-foreground/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
