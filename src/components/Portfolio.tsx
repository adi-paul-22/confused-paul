
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Palette, Leaf, Briefcase, Trophy, Plane, GraduationCap, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
  path?: string;
}

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

const categories: Category[] = [
  { id: "all", label: "All", icon: null },
  { id: "coding", label: "Coding", icon: <Code className="h-4 w-4" />, path: "/coding" },
  { id: "art", label: "Art", icon: <Palette className="h-4 w-4" />, path: "/art" },
  { id: "sustainability", label: "Sustainability", icon: <Leaf className="h-4 w-4" />, path: "/sustainability" },
  { id: "consulting", label: "Consulting", icon: <Briefcase className="h-4 w-4" /> },
  { id: "football", label: "Football", icon: <Trophy className="h-4 w-4" />, path: "/football" },
  { id: "travel", label: "Travel", icon: <Plane className="h-4 w-4" />, path: "/travel" },
  { id: "mba", label: "MBA Prep", icon: <GraduationCap className="h-4 w-4" />, path: "/mba-prep" },
  { id: "startup", label: "Startups", icon: <Lightbulb className="h-4 w-4" />, path: "/startup-ideas" },
];

// Sample portfolio items (placeholder data)
const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce solution with modern UX",
    category: "coding",
    image: "placeholder.svg"
  },
  {
    id: "2",
    title: "Urban Landscape Series",
    description: "Mixed media paintings exploring city environments",
    category: "art",
    image: "placeholder.svg"
  },
  {
    id: "3",
    title: "Sustainable Packaging Design",
    description: "Eco-friendly packaging solutions for consumer products",
    category: "sustainability",
    image: "placeholder.svg"
  },
  {
    id: "4",
    title: "Retail Strategy Analysis",
    description: "Comprehensive market analysis for retail expansion",
    category: "consulting",
    image: "placeholder.svg"
  },
  {
    id: "5",
    title: "FC Barcelona Match Analysis",
    description: "Tactical breakdown of key matches and player performances",
    category: "football",
    image: "placeholder.svg"
  },
  {
    id: "6",
    title: "Southeast Asia Travel Guide",
    description: "Off-the-beaten-path destinations in Southeast Asia",
    category: "travel",
    image: "placeholder.svg"
  },
  {
    id: "7",
    title: "MBA Application Journey",
    description: "Documenting the road to business school acceptance",
    category: "mba",
    image: "placeholder.svg"
  },
  {
    id: "8",
    title: "Fintech Solution Concept",
    description: "Innovative payment platform for underserved markets",
    category: "startup",
    image: "placeholder.svg"
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-background via-white/50 to-blue-50/50 dark:from-background dark:via-background dark:to-background">
      {/* RGB Gradient accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Dynamic RGB gradient background */}
      <div className="absolute -z-10 inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-indigo-500/10 blur-3xl opacity-60 animate-pulse dark:from-fuchsia-500/5 dark:via-purple-500/5 dark:to-indigo-500/5"></div>
        <div className="absolute bottom-[10%] right-[15%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 blur-3xl opacity-60 animate-pulse animation-delay-500 dark:from-cyan-500/5 dark:via-blue-500/5 dark:to-indigo-500/5"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 opacity-0 animate-fade-in">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in animation-delay-100">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 dark:from-white dark:via-white/90 dark:to-white/70 bg-clip-text text-transparent">
              Portfolio Showcase
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-in animation-delay-200">
            Explore my projects across different domains, reflecting my diverse
            interests and creative approach.
          </p>
        </div>

        {/* Category Filters with RGB gradient hover effect */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 opacity-0 animate-fade-in animation-delay-300">
          {categories.map((category) => {
            const ButtonContent = () => (
              <>
                {/* RGB gradient hover effect */}
                {activeCategory !== category.id && (
                  <span className="absolute inset-0 opacity-0 hover:opacity-20 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-opacity duration-300"></span>
                )}
                {category.icon}
                {category.label}
              </>
            );

            return category.path && activeCategory !== category.id ? (
              <Link
                key={category.id}
                to={category.path}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all-200 flex items-center gap-2 relative overflow-hidden",
                  "bg-white border hover:bg-blue-50 dark:bg-secondary/20 dark:hover:bg-secondary/40 shadow-sm"
                )}
              >
                <ButtonContent />
              </Link>
            ) : (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all-200 flex items-center gap-2 relative overflow-hidden",
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-primary-foreground shadow-md"
                    : "bg-white border hover:bg-blue-50 dark:bg-secondary/20 dark:hover:bg-secondary/40 shadow-sm"
                )}
              >
                <ButtonContent />
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid with enhanced RGB gradient effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const category = categories.find(cat => cat.id === item.category);
            return (
              <div
                key={item.id}
                className={cn(
                  "group rounded-xl overflow-hidden border bg-white hover:shadow-xl transition-all-300 hover:-translate-y-1 opacity-0",
                  "animate-slide-up",
                  `animation-delay-${(index % 3) * 100 + 400}`
                )}
              >
                {/* RGB gradient overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 transition-opacity duration-500"></div>
                
                <div className="relative aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-primary backdrop-blur-sm">
                      {category?.label}
                    </span>
                  </div>
                </div>
                <div className="p-6 relative z-10">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                  
                  {category?.path && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <Link 
                        to={category.path} 
                        className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
                      >
                        View more in {category.label}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
