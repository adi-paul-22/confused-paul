
import React from "react";
import { Code, Palette, Leaf, Briefcase, Football, Plane, GraduationCap, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface InterestCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const InterestCard = ({ icon, title, description, delay }: InterestCardProps) => (
  <div 
    className={cn(
      "p-6 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/20 transition-all-300 hover:shadow-lg hover:-translate-y-1 opacity-0",
      "animate-slide-up",
      `animation-delay-${delay}`
    )}
  >
    <div className="mb-4 text-primary">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

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
    icon: <Football className="h-6 w-6" />,
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
    <section id="about" className="py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 opacity-0 animate-fade-in">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in animation-delay-100">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
