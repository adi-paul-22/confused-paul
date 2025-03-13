
import React from "react";
import { Instagram, Youtube, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinkProps {
  platform: string;
  username?: string;
  url: string;
  icon: React.ReactNode;
  delay: number;
  gradientClass: string;
}

const SocialLink = ({ platform, username, url, icon, delay, gradientClass }: SocialLinkProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer" 
    className={cn(
      "group flex items-center gap-4 p-6 rounded-xl border hover:border-primary/20 transition-all-300 hover:shadow-lg hover:-translate-y-1 opacity-0",
      "animate-slide-up",
      `animation-delay-${delay}`,
      gradientClass
    )}
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-lg">{platform}</h3>
      {username && (
        <p className="text-muted-foreground">@{username}</p>
      )}
    </div>
  </a>
);

const gradientClasses = [
  "bg-gradient-to-br from-pink-50/50 to-pink-100/30 dark:from-pink-900/20 dark:to-pink-800/10",
  "bg-gradient-to-br from-purple-50/50 to-purple-100/30 dark:from-purple-900/20 dark:to-purple-800/10",
  "bg-gradient-to-br from-rose-50/50 to-rose-100/30 dark:from-rose-900/20 dark:to-rose-800/10",
  "bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-900/20 dark:to-blue-800/10"
];

const Social = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-70 dark:bg-primary/5"></div>
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 opacity-0 animate-fade-in">
            Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in animation-delay-100 bg-gradient-to-r from-foreground to-foreground/80 dark:from-white dark:to-white/70 bg-clip-text">
            Follow My Journey
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-in animation-delay-200">
            Stay updated with my latest work, thoughts, and adventures through these social platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SocialLink
            platform="Instagram"
            username="adi_paul_22"
            url="https://instagram.com/adi_paul_22"
            icon={<Instagram className="h-6 w-6" />}
            delay={300}
            gradientClass={gradientClasses[0]}
          />
          
          <SocialLink
            platform="Instagram MBA"
            username="mba_with_paul"
            url="https://instagram.com/mba_with_paul"
            icon={<Instagram className="h-6 w-6" />}
            delay={400}
            gradientClass={gradientClasses[1]}
          />
          
          <SocialLink
            platform="YouTube"
            url="#"
            icon={<Youtube className="h-6 w-6" />}
            delay={500}
            gradientClass={gradientClasses[2]}
          />
          
          <SocialLink
            platform="Medium"
            url="#"
            icon={<FileText className="h-6 w-6" />}
            delay={600}
            gradientClass={gradientClasses[3]}
          />
        </div>
      </div>
    </section>
  );
};

export default Social;
