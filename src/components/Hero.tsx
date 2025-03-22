
import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Dynamic RGB gradient orbs for background effect */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-indigo-500/30 rounded-full filter blur-3xl opacity-60 animate-pulse animation-delay-200 dark:from-pink-600/20 dark:via-purple-600/15 dark:to-indigo-600/20"></div>
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-full filter blur-3xl opacity-70 animate-pulse animation-delay-500 dark:from-blue-600/20 dark:via-cyan-600/15 dark:to-teal-600/20"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-red-500/20 rounded-full filter blur-3xl opacity-70 animate-pulse animation-delay-700 dark:from-amber-600/15 dark:via-orange-600/15 dark:to-red-600/15"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="opacity-0 animate-fade-in animation-delay-100">
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 text-primary text-xs font-medium">
                Portfolio
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in animation-delay-200">
              <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 dark:from-white dark:via-white/90 dark:to-white/70 bg-clip-text text-transparent">
                Hi, I'm Paul
                <span className="relative">
                  <span className="inline-block ml-3 text-primary animate-pulse">
                    _
                  </span>
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
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-primary-foreground font-medium transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
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

          <div className="relative opacity-0 animate-fade-in animation-delay-500 flex items-center justify-center">
            {/* 3D floating avatar container with cool effects */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
              {/* Animated background rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-60 animate-reverse-spin"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-50 animate-spin-slow animation-delay-200"></div>
              
              {/* Glowing backdrop */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-md flex items-center justify-center">
                {/* Avatar container */}
                <div className="w-48 h-48 md:w-56 md:h-56 relative rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl 
                               hover:shadow-primary/30 border-2 border-white/30 group">
                  <Avatar className="w-full h-full">
                    <AvatarImage 
                      src="/lovable-uploads/e9f4e256-9b93-4e78-82e4-9ff33563b30d.png" 
                      alt="Paul's Avatar" 
                      className="object-cover scale-110 group-hover:scale-105 transition-transform duration-700" 
                    />
                    <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-transparent">
                      {/* Empty fallback to prevent text from showing */}
                    </AvatarFallback>
                  </Avatar>
                  
                  {/* Holographic overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 group-hover:opacity-0 transition-opacity duration-300"></div>
                  
                  {/* Waving hand animation */}
                  <div className="absolute bottom-5 -right-2 w-16 h-16 z-20 pointer-events-none">
                    <div className="w-10 h-10 bg-skin-tone rounded-full relative animate-wave-hand">
                      {/* Fingers */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3/4 w-1.5 h-4 bg-skin-tone rounded-full"></div>
                      <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-3/4 w-1.5 h-3.5 bg-skin-tone rounded-full"></div>
                      <div className="absolute top-0 right-1/4 transform translate-x-1/2 -translate-y-3/4 w-1.5 h-4 bg-skin-tone rounded-full"></div>
                      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-2/3 w-1.5 h-3 bg-skin-tone rounded-full"></div>
                      {/* Wrist */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 w-6 h-5 bg-skin-tone rounded-lg"></div>
                    </div>
                  </div>
                  
                  {/* Particle effects */}
                  <div className="absolute -top-2 -left-2 w-2 h-2 bg-blue-500 rounded-full animate-float opacity-70"></div>
                  <div className="absolute top-1/4 -right-1 w-1.5 h-1.5 bg-purple-500 rounded-full animate-float animation-delay-300 opacity-70"></div>
                  <div className="absolute bottom-1/3 -left-1 w-1 h-1 bg-pink-500 rounded-full animate-float animation-delay-700 opacity-70"></div>
                </div>
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
