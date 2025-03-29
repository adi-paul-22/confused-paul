
import React, { useState, useEffect } from "react";
import { MonitorSmartphone, Lock, Code, Tags, Plus, Trash, Save, Upload } from "lucide-react";
import { type CodingProject } from "./ProjectCard";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { usePersistentState } from "@/utils/persistenceUtils";
import ImageUploader from "./ImageUploader";

const CodingPortfolioGenerator = () => {
  const [projects, setProjects] = usePersistentState<CodingProject[]>("codingProjects", []);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  
  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("placeholder.svg");
  const [technologies, setTechnologies] = useState("");

  const handleLogin = () => {
    if (password === "admin123") {
      setIsAuthenticated(true);
      toast.success("Logged in successfully");
    } else {
      toast.error("Invalid password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleSaveProject = () => {
    if (!title || !description) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    const newProject: CodingProject = {
      id: crypto.randomUUID(),
      title,
      description,
      projectUrl,
      githubUrl,
      imageUrl: imageUrl || "placeholder.svg",
      technologies: technologies.split(",").map(tech => tech.trim()).filter(Boolean),
    };
    
    setProjects([newProject, ...projects]);
    
    setTitle("");
    setDescription("");
    setProjectUrl("");
    setGithubUrl("");
    setImageUrl("placeholder.svg");
    setTechnologies("");
    setIsAdding(false);
    
    toast.success("Coding project added successfully!");
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter(project => project.id !== id));
    toast.success("Project deleted successfully!");
  };

  const handleImageUploaded = (url: string) => {
    setImageUrl(url);
    toast.success("Image added to project");
  };

  if (!isAuthenticated) {
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

        <Card className="mt-8 max-w-md mx-auto border border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock size={18} />
              Admin Access
            </CardTitle>
            <CardDescription>Login to manage coding projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full"
                />
              </div>
              <div className="flex items-end">
                <Button 
                  onClick={handleLogin} 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Login
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Coding Projects</h2>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={handleLogout}
          >
            Logout
          </Button>
          {!isAdding ? (
            <Button 
              onClick={() => setIsAdding(true)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              <Plus size={16} className="mr-1" />
              Add New Project
            </Button>
          ) : (
            <Button 
              variant="outline" 
              onClick={() => setIsAdding(false)}
            >
              Cancel
            </Button>
          )}
        </div>
      </div>

      {isAdding && (
        <Card className="mb-8 border border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle>Add New Project</CardTitle>
            <CardDescription>Share details about your coding project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">Project Title <span className="text-red-500">*</span></Label>
                <Input 
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="E.g., E-commerce Platform"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <ImageUploader 
                  onImageUploaded={handleImageUploaded}
                  storagePath="projects"
                />
                {imageUrl && imageUrl !== "placeholder.svg" && (
                  <div className="mt-2">
                    <p className="text-sm text-muted-foreground">Current image:</p>
                    <div className="mt-1 h-20 w-auto rounded overflow-hidden border">
                      <img 
                        src={imageUrl} 
                        alt="Project preview" 
                        className="h-full w-auto object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="projectUrl">Live Project URL</Label>
                <Input 
                  id="projectUrl"
                  value={projectUrl}
                  onChange={(e) => setProjectUrl(e.target.value)}
                  placeholder="https://myproject.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="githubUrl">GitHub URL</Label>
                <Input 
                  id="githubUrl"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/username/project"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">Description <span className="text-red-500">*</span></Label>
                <Textarea 
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your project..."
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="technologies" className="flex items-center gap-1">
                  <Tags size={14} />
                  Technologies (comma separated)
                </Label>
                <Input 
                  id="technologies"
                  value={technologies}
                  onChange={(e) => setTechnologies(e.target.value)}
                  placeholder="E.g., React, Node.js, MongoDB"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button 
              onClick={handleSaveProject}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              <Save size={16} className="mr-2" />
              Save Project
            </Button>
          </CardFooter>
        </Card>
      )}

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              readOnly={false}
              onDelete={() => handleDeleteProject(project.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <Code size={48} className="mx-auto text-blue-500/50 dark:text-blue-400/50 mb-4" />
          <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
          <p className="text-muted-foreground mb-6">
            Add your first coding project to showcase your skills!
          </p>
        </div>
      )}
    </div>
  );
};

export default CodingPortfolioGenerator;
