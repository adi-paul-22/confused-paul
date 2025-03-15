
import React from "react";
import { Code, Palette, Leaf, Briefcase, Trophy, Plane, GraduationCap, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface InterestCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  gradientClass: string;
  linkTo?: string;
}

const InterestCard = ({ icon, title, description, delay, gradientClass, linkTo }: InterestCardProps) => {
  const CardContent = () => (
    <>
      {/* Subtle RGB gradient hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
      
      <div className="mb-4 text-primary relative z-10">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </>
  );

  return linkTo ? (
    <Link 
      to={linkTo}
      className={cn(
        "p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-all-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 opacity-0",
        "animate-slide-up glass-card overflow-hidden group",
        `animation-delay-${delay}`,
        gradientClass
      )}
    >
      <CardContent />
    </Link>
  ) : (
    <div 
      className={cn(
        "p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-all-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 opacity-0",
        "animate-slide-up glass-card overflow-hidden group",
        `animation-delay-${delay}`,
        gradientClass
      )}
    >
      <CardContent />
    </div>
  );
};

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
    description: "Passionate about building elegant and efficient digital solutions",
    linkTo: "/coding"
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Art & Drawing",
    description: "Expressing creativity through various drawing and painting techniques",
    linkTo: "/art"
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Sustainability",
    description: "Committed to environmental causes and sustainable practices",
    linkTo: "/sustainability"
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Consulting",
    description: "Helping businesses solve complex problems with strategic thinking"
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Football & FC Barcelona",
    description: "Devoted fan of the beautiful game and Barça's artistry on the field",
    linkTo: "/football"
  },
  {
    icon: <Plane className="h-6 w-6" />,
    title: "Travel",
    description: "Documenting journeys and cultural experiences around the globe",
    linkTo: "/travel"
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "MBA Preparation",
    description: "Pursuing advanced business education and sharing insights along the way",
    linkTo: "/mba-prep"
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Startup Ideas",
    description: "Constantly ideating and exploring innovative business concepts",
    linkTo: "/startup-ideas"
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Dynamic RGB gradient background elements */}
      <div className="absolute -z-10 inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full filter blur-3xl opacity-70 animate-pulse dark:from-blue-500/5 dark:via-indigo-500/5 dark:to-purple-500/5"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-full filter blur-3xl opacity-70 animate-pulse animation-delay-300 dark:from-emerald-500/5 dark:via-teal-500/5 dark:to-cyan-500/5"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-orange-500/10 via-amber-500/10 to-yellow-500/10 rounded-full filter blur-3xl opacity-60 animate-pulse animation-delay-600 dark:from-orange-500/5 dark:via-amber-500/5 dark:to-yellow-500/5"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 opacity-0 animate-fade-in">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in animation-delay-100">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 dark:from-white dark:via-white/90 dark:to-white/70 bg-clip-text text-transparent">
              My Diverse Interests
            </span>
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
              linkTo={interest.linkTo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
