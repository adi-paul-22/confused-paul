
import React from "react";
import { Award, Star, Trophy, Medal, BookOpen, GraduationCap, Zap, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  year: string;
  progress?: number;
  category: "academic" | "professional" | "personal" | "awards";
  color: string;
}

const achievements: Achievement[] = [
  {
    id: "1",
    title: "MBA Entrance Exam Top 1%",
    description: "Scored in the top 1% nationally in GMAT examinations",
    icon: <GraduationCap className="h-5 w-5" />,
    year: "2023",
    progress: 99,
    category: "academic",
    color: "from-blue-400 to-indigo-500"
  },
  {
    id: "2",
    title: "Consulting Excellence Award",
    description: "Recognized for outstanding client service and project delivery",
    icon: <Trophy className="h-5 w-5" />,
    year: "2022",
    category: "professional",
    color: "from-amber-400 to-orange-500"
  },
  {
    id: "3",
    title: "Digital Transformation Leader",
    description: "Led a cross-functional team to implement enterprise-wide digital solutions",
    icon: <Zap className="h-5 w-5" />,
    year: "2021",
    category: "professional",
    color: "from-purple-400 to-fuchsia-500"
  },
  {
    id: "4",
    title: "Sustainability Innovation Challenge Winner",
    description: "First place for developing an eco-friendly packaging solution",
    icon: <Award className="h-5 w-5" />,
    year: "2022",
    category: "awards",
    color: "from-green-400 to-emerald-500"
  },
  {
    id: "5",
    title: "Published Research Paper",
    description: "Research on sustainable business practices published in leading journal",
    icon: <BookOpen className="h-5 w-5" />,
    year: "2020",
    category: "academic",
    color: "from-cyan-400 to-teal-500"
  },
  {
    id: "6",
    title: "Marathon Finisher",
    description: "Completed first full marathon in under 4 hours",
    icon: <Heart className="h-5 w-5" />,
    year: "2021",
    progress: 85,
    category: "personal",
    color: "from-red-400 to-rose-500"
  },
  {
    id: "7",
    title: "Volunteer of the Year",
    description: "Recognized for 200+ hours of community service",
    icon: <Star className="h-5 w-5" />,
    year: "2022",
    category: "personal",
    color: "from-yellow-400 to-amber-500"
  },
  {
    id: "8",
    title: "Tech Innovation Award",
    description: "Developed a machine learning algorithm for predictive analytics",
    icon: <Medal className="h-5 w-5" />,
    year: "2023",
    category: "awards",
    color: "from-indigo-400 to-violet-500"
  }
];

const AchievementCard = ({ achievement }: { achievement: Achievement }) => {
  return (
    <Card className={cn(
      "h-full overflow-hidden group hover:shadow-xl transition-all-300 border-transparent relative",
      "bg-gradient-to-br from-card to-card/50 dark:from-card/80 dark:to-card/30",
      "hover:-translate-y-1"
    )}>
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
        `bg-gradient-to-r ${achievement.color} opacity-10`
      )} />
      
      <CardHeader className="relative z-10">
        <div className="flex justify-between items-center mb-1">
          <div className={cn(
            "p-2 rounded-full",
            `bg-gradient-to-br ${achievement.color} text-white`
          )}>
            {achievement.icon}
          </div>
          <span className="text-sm font-medium text-muted-foreground">{achievement.year}</span>
        </div>
        <CardTitle className="text-lg group-hover:text-primary transition-colors">
          {achievement.title}
        </CardTitle>
        <CardDescription className="text-sm mt-1">{achievement.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0 relative z-10">
        {achievement.progress && (
          <div className="mt-2">
            <div className="flex justify-between items-center mb-1 text-xs">
              <span>Progress</span>
              <span className="font-medium">{achievement.progress}%</span>
            </div>
            <Progress value={achievement.progress} className="h-2" />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Achievements = () => {
  const [filter, setFilter] = React.useState<string>("all");
  
  const categories = [
    { id: "all", label: "All" },
    { id: "academic", label: "Academic" },
    { id: "professional", label: "Professional" },
    { id: "personal", label: "Personal" },
    { id: "awards", label: "Awards" },
  ];
  
  const filteredAchievements = filter === "all" 
    ? achievements 
    : achievements.filter(achievement => achievement.category === filter);

  return (
    <section id="achievements" className="py-24 px-6 relative overflow-hidden">
      {/* Dynamic moving gradient background */}
      <div className="absolute -z-10 inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10 blur-3xl opacity-60 animate-pulse dark:from-pink-500/5 dark:via-purple-500/5 dark:to-indigo-500/5"></div>
        <div className="absolute top-[60%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10 blur-3xl opacity-60 animate-pulse dark:from-blue-500/5 dark:via-cyan-500/5 dark:to-teal-500/5 animation-delay-300"></div>
        <div className="absolute top-[10%] right-[20%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 blur-3xl opacity-60 animate-pulse dark:from-amber-500/5 dark:via-orange-500/5 dark:to-red-500/5 animation-delay-700"></div>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 opacity-0 animate-fade-in">
            Recognition
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in animation-delay-100">
            <span className="bg-gradient-to-r from-foreground to-foreground/80 dark:from-white dark:to-white/70 bg-clip-text">
              Achievements & Milestones
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-in animation-delay-200">
            A collection of notable accomplishments and recognition across academic, 
            professional, and personal domains.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 opacity-0 animate-fade-in animation-delay-300">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all-200 flex items-center gap-2",
                filter === category.id
                  ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground"
                  : "bg-background border hover:bg-secondary dark:bg-secondary/20 dark:hover:bg-secondary/40"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAchievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={cn(
                "opacity-0",
                "animate-slide-up",
                `animation-delay-${(index % 4) * 100 + 400}`
              )}
            >
              <AchievementCard achievement={achievement} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
