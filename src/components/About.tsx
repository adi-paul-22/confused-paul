
import React from "react";
import { Code, Palette, Leaf, Briefcase, Trophy, Plane, GraduationCap, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface InterestCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  gradientClass: string;
}

const InterestCard = ({ icon, title, description, delay, gradientClass }: InterestCardProps) => (
  <div 
    className={cn(
      "p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-all-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 opacity-0",
      "animate-slide-up glass-card",
      `animation-delay-${delay}`,
      gradientClass
    )}
  >
    <div className="mb-4 text-primary">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const gradientClasses = [
  "bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-900/20 dark:to-blue-800/10",
  "bg-gradient-to-br from-purple-50/50 to-purple-100/30 dark:from-purple-900/20 dark:to-purple-800/10",
  "bg-gradient-to-br from-green-50/50 to-green-100/30 dark:from-green-900/20 dark:to-green-800/10",
  "bg-gradient-to-br from-amber-50/50 to-amber-100/30 dark:from-amber-900/20 dark:to-amber-800/10",
  "bg-gradient-to-br from-red-50/50 to-red-100/30 dark:from-red-900/20 dark:to-red-800/10",
  "bg-gradient-to-br from-cyan-50/50 to-cyan-100/30 dark:from-cyan-900/20 dark:to-cyan-800/10",
  "bg-gradient-to-br from-indigo-50/50 to-indigo-100/30 dark:from-indigo-900/20 dark:to-indigo-800/10",
  "bg-gradient-to-br from-rose-50/50 to-rose-100/30 dark:from-rose-900/20 dark:to-rose-800/10",
];

const interests = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Coding",
    description: "Passionate about building elegant and efficient digital solutions"
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Art & Drawing",
    description: "Expressing creativity through various drawing and painting techniques"
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Sustainability",
    description: "Committed to environmental causes and sustainable practices"
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Consulting",
    description: "Helping businesses solve complex problems with strategic thinking"
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Football & FC Barcelona",
    description: "Devoted fan of the beautiful game and Barça's artistry on the field"
  },
  {
    icon: <Plane className="h-6 w-6" />,
    title: "Travel",
    description: "Documenting journeys and cultural experiences around the globe"
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "MBA Preparation",
    description: "Pursuing advanced business education and sharing insights along the way"
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Startup Ideas",
    description: "Constantly ideating and exploring innovative business concepts"
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-70 dark:bg-primary/5"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl opacity-70 dark:bg-purple-500/5"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 opacity-0 animate-fade-in">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in animation-delay-100 bg-gradient-to-r from-foreground to-foreground/80 dark:from-white dark:to-white/70 bg-clip-text">
            My Diverse Interests
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-in animation-delay-200">
            I'm a multi-disciplinary enthusiast with a passion for exploring the 
            intersections of technology, creativity, business, and social impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <InterestCard
              key={interest.title}
              icon={interest.icon}
              title={interest.title}
              description={interest.description}
              delay={(index % 4) * 100 + 300}
              gradientClass={gradientClasses[index % gradientClasses.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
