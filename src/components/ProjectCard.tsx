
import React from "react";
import { ExternalLink, Github, Trash } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface CodingProject {
  id: string;
  title: string;
  description: string;
  projectUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  technologies?: string[];
}

interface ProjectCardProps {
  project: CodingProject;
  readOnly: boolean;
  onDelete?: () => void;
}

const ProjectCard = ({ project, readOnly, onDelete }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        <img
          src={project.imageUrl || "placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        
        {!readOnly && onDelete && (
          <div className="absolute top-2 right-2">
            <Button
              variant="destructive"
              size="icon"
              className="h-8 w-8 opacity-80 hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            >
              <Trash size={14} />
            </Button>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {tech}
              </Badge>
            ))}
          </div>
        )}
        
        <div className="flex gap-2 mt-4">
          {project.projectUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-1"
              asChild
            >
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={14} />
                View Project
              </a>
            </Button>
          )}
          
          {project.githubUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-1"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={14} />
                Source Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
