
import React, { useState, useEffect } from "react";
import { MonitorSmartphone } from "lucide-react";
import { type CodingProject } from "./ProjectCard";
import ProjectCard from "./ProjectCard";

const CodingPortfolioGenerator = () => {
  const [projects, setProjects] = useState<CodingProject[]>([]);

  // Load projects from localStorage on component mount
  useEffect(() => {
    const savedProjects = localStorage.getItem("codingProjects");
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Coding Projects</h2>
      </div>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              readOnly={true}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <MonitorSmartphone size={48} className="mx-auto text-blue-500/50 dark:text-blue-400/50 mb-4" />
          <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
          <p className="text-muted-foreground mb-6">
            Check back later for new coding projects.
          </p>
        </div>
      )}
    </div>
  );
};

export default CodingPortfolioGenerator;
