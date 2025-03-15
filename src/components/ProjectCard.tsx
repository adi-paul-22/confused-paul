
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Github, Link as LinkIcon, Trash } from "lucide-react";

export type CodingProject = {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  technologies: string;
  githubUrl: string;
  liveUrl: string;
};

interface ProjectCardProps {
  project: CodingProject;
  onDelete?: (id: string) => void;
  readOnly?: boolean;
}

const ProjectCard = ({ project, onDelete, readOnly = false }: ProjectCardProps) => {
  // Split the technologies string into an array
  const technologies = project.technologies.split(",").map(tech => tech.trim());

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-border">
      <div className="h-4 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
      <CardHeader className="flex flex-row items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Code size={16} />
          </div>
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>
        {!readOnly && onDelete && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-muted-foreground hover:text-destructive"
            onClick={() => onDelete(project.id)}
          >
            <Trash size={16} />
          </Button>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm">{project.description}</p>
        
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium dark:bg-blue-900/30 dark:text-blue-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex gap-2 pt-2">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={14} className="mr-1" />
                GitHub
              </a>
            </Button>
          )}
          
          {project.liveUrl && (
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <LinkIcon size={14} className="mr-1" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
