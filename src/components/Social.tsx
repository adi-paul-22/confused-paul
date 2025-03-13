
import React from "react";
import { Instagram, Youtube, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinkProps {
  platform: string;
  username?: string;
  url: string;
  icon: React.ReactNode;
  delay: number;
}

const SocialLink = ({ platform, username, url, icon, delay }: SocialLinkProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer" 
    className={cn(
      "group flex items-center gap-4 p-6 rounded-xl bg-card border hover:border-primary/20 transition-all-300 hover:shadow-lg hover:-translate-y-1 opacity-0",
      "animate-slide-up",
      `animation-delay-${delay}`
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

const Social = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 opacity-0 animate-fade-in">
            Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in animation-delay-100">
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
          />
          
          <SocialLink
            platform="Instagram MBA"
            username="mba_with_paul"
            url="https://instagram.com/mba_with_paul"
            icon={<Instagram className="h-6 w-6" />}
            delay={400}
          />
          
          <SocialLink
            platform="YouTube"
            url="#"
            icon={<Youtube className="h-6 w-6" />}
            delay={500}
          />
          
          <SocialLink
            platform="Medium"
            url="#"
            icon={<FileText className="h-6 w-6" />}
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Social;
