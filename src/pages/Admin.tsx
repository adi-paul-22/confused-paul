
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, Code, Github, Link as LinkIcon, Plus, Trash, Check, Home } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type CodingProject } from "@/components/CodingPortfolioGenerator";

// Define admin password
const ADMIN_PASSWORD = "admin123"; // In a real app, this would be handled securely

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

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [projects, setProjects] = useState<CodingProject[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [activeTab, setActiveTab] = useState("view");

  // Load projects from localStorage on component mount
  useEffect(() => {
    const savedProjects = localStorage.getItem("codingProjects");
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  // Save projects to localStorage when they change
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("codingProjects", JSON.stringify(projects));
    }
  }, [projects, isAuthenticated]);

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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast.success("Admin login successful");
    } else {
      toast.error("Invalid password");
    }
  };

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

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
    toast.success("Project deleted successfully!");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center mb-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Lock size={24} />
              </div>
            </div>
            <CardTitle className="text-2xl text-center">Admin Access</CardTitle>
            <CardDescription className="text-center">
              Enter your admin password to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Input
                  id="password"
                  type="password"
                  placeholder="Admin Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">Login</Button>
              <div className="text-center">
                <Link to="/" className="text-sm text-primary hover:underline">
                  Return to home page
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code size={24} className="text-primary" />
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              <Home size={20} />
            </Link>
            <Button 
              variant="outline" 
              onClick={() => setIsAuthenticated(false)}
              size="sm"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <Tabs defaultValue="view" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="view">View Projects</TabsTrigger>
            <TabsTrigger value="add">Add Project</TabsTrigger>
          </TabsList>
          
          <TabsContent value="view" className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Manage Coding Projects</h2>
              <div className="text-muted-foreground text-sm">
                {projects.length} {projects.length === 1 ? 'project' : 'projects'} total
              </div>
            </div>
            
            {projects.length > 0 ? (
              <div className="space-y-6">
                {projects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                    <CardHeader className="flex flex-row items-start justify-between">
                      <div>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>
                          Added on {new Date(project.createdAt).toLocaleDateString()}
                        </CardDescription>
                      </div>
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => deleteProject(project.id)}
                      >
                        <Trash size={16} className="mr-2" />
                        Delete
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Description</h4>
                        <p>{project.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.split(",").map((tech, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium dark:bg-blue-900/30 dark:text-blue-400"
                            >
                              {tech.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                        {project.githubUrl && (
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-1">GitHub URL</h4>
                            <a 
                              href={project.githubUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:underline flex items-center"
                            >
                              <Github size={14} className="mr-1" />
                              {project.githubUrl}
                            </a>
                          </div>
                        )}
                        
                        {project.liveUrl && (
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-1">Live Demo URL</h4>
                            <a 
                              href={project.liveUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:underline flex items-center"
                            >
                              <LinkIcon size={14} className="mr-1" />
                              {project.liveUrl}
                            </a>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <Code size={48} className="mx-auto text-blue-500/50 dark:text-blue-400/50 mb-4" />
                <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
                <p className="text-muted-foreground mb-6">
                  Get started by adding your first coding project.
                </p>
                <Button 
                  onClick={() => setActiveTab("add")}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <Plus size={16} className="mr-2" />
                  Add Your First Project
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="add" className="space-y-8">
            <Card className="border border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code size={18} />
                  Add New Coding Project
                </CardTitle>
                <CardDescription>
                  Add a new project to your coding portfolio
                </CardDescription>
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
                            <Textarea 
                              placeholder="A fully responsive e-commerce solution with modern UX..." 
                              {...field} 
                              className="min-h-[120px]"
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
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
