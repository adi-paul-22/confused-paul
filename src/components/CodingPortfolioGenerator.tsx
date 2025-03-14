
import React, { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Code, Github, Link as LinkIcon, MonitorSmartphone, Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import ProjectCard from "./ProjectCard";

// Define the schema for coding projects
const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  technologies: z.string().min(2, {
    message: "Please add at least one technology.",
  }),
  githubUrl: z.string().url({
    message: "Please enter a valid URL.",
  }).optional().or(z.literal("")),
  liveUrl: z.string().url({
    message: "Please enter a valid URL.",
  }).optional().or(z.literal("")),
});

export type CodingProject = z.infer<typeof formSchema> & {
  id: string;
  createdAt: string;
};

const CodingPortfolioGenerator = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [projects, setProjects] = useState<CodingProject[]>([]);

  // Load projects from localStorage on component mount
  useEffect(() => {
    const savedProjects = localStorage.getItem("codingProjects");
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  // Save projects to localStorage when they change
  useEffect(() => {
    localStorage.setItem("codingProjects", JSON.stringify(projects));
  }, [projects]);

  // Create form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      technologies: "",
      githubUrl: "",
      liveUrl: "",
    },
  });

  // Handle form submission
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const newProject: CodingProject = {
      ...values,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };

    setProjects((prev) => [newProject, ...prev]);
    form.reset();
    setIsAdding(false);
    toast.success("Project added successfully!");
  };

  // Delete a project
  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
    toast.success("Project deleted successfully!");
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Coding Projects</h2>
        <Button 
          onClick={() => setIsAdding(!isAdding)}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
        >
          {isAdding ? (
            <>Cancel</>
          ) : (
            <>
              <Plus size={16} />
              Add Project
            </>
          )}
        </Button>
      </div>

      {isAdding && (
        <Card className="border border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code size={18} />
              Add New Coding Project
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Title</FormLabel>
                        <FormControl>
                          <Input placeholder="E-commerce Platform" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="technologies"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Technologies Used</FormLabel>
                        <FormControl>
                          <Input placeholder="React, Next.js, TypeScript" {...field} />
                        </FormControl>
                        <FormDescription>
                          Separate technologies with commas
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Description</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="A fully responsive e-commerce solution with modern UX..." 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="githubUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>GitHub URL (optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="https://github.com/yourusername/project" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="liveUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Live Demo URL (optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="https://yourproject.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-end">
                  <Button type="submit">
                    <Check size={16} className="mr-2" />
                    Save Project
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      )}

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onDelete={deleteProject}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <MonitorSmartphone size={48} className="mx-auto text-blue-500/50 dark:text-blue-400/50 mb-4" />
          <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
          <p className="text-muted-foreground mb-6">
            Click the "Add Project" button to create your first coding project.
          </p>
          <Button 
            onClick={() => setIsAdding(true)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            <Plus size={16} className="mr-2" />
            Add Your First Project
          </Button>
        </div>
      )}
    </div>
  );
};

export default CodingPortfolioGenerator;
