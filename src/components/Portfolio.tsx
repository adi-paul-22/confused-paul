
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Palette, Leaf, Briefcase, Football, Plane, GraduationCap, Lightbulb } from "lucide-react";

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
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
  { id: "coding", label: "Coding", icon: <Code className="h-4 w-4" /> },
  { id: "art", label: "Art", icon: <Palette className="h-4 w-4" /> },
  { id: "sustainability", label: "Sustainability", icon: <Leaf className="h-4 w-4" /> },
  { id: "consulting", label: "Consulting", icon: <Briefcase className="h-4 w-4" /> },
  { id: "football", label: "Football", icon: <Football className="h-4 w-4" /> },
  { id: "travel", label: "Travel", icon: <Plane className="h-4 w-4" /> },
  { id: "mba", label: "MBA Prep", icon: <GraduationCap className="h-4 w-4" /> },
  { id: "startup", label: "Startups", icon: <Lightbulb className="h-4 w-4" /> },
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
    <section id="portfolio" className="py-24 px-6 bg-secondary/50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 opacity-0 animate-fade-in">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in animation-delay-100">
            Portfolio Showcase
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-in animation-delay-200">
            Explore my projects across different domains, reflecting my diverse
            interests and creative approach.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 opacity-0 animate-fade-in animation-delay-300">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all-200 flex items-center gap-2",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border hover:bg-secondary"
              )}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "group rounded-xl overflow-hidden border bg-card hover:shadow-xl transition-all-300 hover:-translate-y-1 opacity-0",
                "animate-slide-up",
                `animation-delay-${(index % 3) * 100 + 400}`
              )}
            >
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-primary">
                    {categories.find(cat => cat.id === item.category)?.label}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
