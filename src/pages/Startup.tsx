
import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Upload, Download, Save, Lightbulb, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

interface StartupIdea {
  id: string;
  title: string;
  description: string;
  category: string;
  problem: string;
  solution: string;
  market: string;
  createdAt: string;
  images: string[];
}

const Startup = () => {
  const [ideas, setIdeas] = useState<StartupIdea[]>([]);
  const [activeTab, setActiveTab] = useState("all");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("saas");
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [market, setMarket] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  // Load ideas from localStorage on component mount
  useEffect(() => {
    const savedIdeas = localStorage.getItem("startupIdeas");
    if (savedIdeas) {
      setIdeas(JSON.parse(savedIdeas));
    }
  }, []);

  // Save ideas to localStorage when they change
  useEffect(() => {
    localStorage.setItem("startupIdeas", JSON.stringify(ideas));
  }, [ideas]);

  // Reset scroll position when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWordImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // In a real application, you would use a library to parse Word documents
    // For this demo, we'll simulate importing by reading the file as text
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      // Simulating Word document parsing
      setTitle(text.substring(0, 50).trim());
      setDescription(text.substring(50, 300).trim());
      setProblem(text.substring(300, 600).trim());
      setSolution(text.substring(600, 900).trim());
      setMarket(text.substring(900, 1200).trim());
      toast.success("Document imported successfully");
    };
    reader.readAsText(file);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    const newImages = Array.from(files).map(file => {
      // In a real app, you'd upload to a service and get a URL
      // For demo purposes, we create object URLs
      return URL.createObjectURL(file);
    });
    
    setImages(prev => [...prev, ...newImages]);
    toast.success(`${files.length} image(s) uploaded successfully`);
    
    // Reset file input
    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  const saveIdea = () => {
    if (!title.trim() || !description.trim()) {
      toast.error("Please provide at least a title and description");
      return;
    }

    const newIdea: StartupIdea = {
      id: crypto.randomUUID(),
      title,
      description,
      category,
      problem,
      solution,
      market,
      createdAt: new Date().toISOString(),
      images
    };

    setIdeas(prev => [newIdea, ...prev]);
    setTitle("");
    setDescription("");
    setProblem("");
    setSolution("");
    setMarket("");
    setImages([]);
    toast.success("Startup idea saved successfully");
  };

  const deleteIdea = (id: string) => {
    // Release any object URLs to prevent memory leaks
    const ideaToDelete = ideas.find(idea => idea.id === id);
    if (ideaToDelete) {
      ideaToDelete.images.forEach(img => {
        if (img.startsWith('blob:')) {
          URL.revokeObjectURL(img);
        }
      });
    }
    
    setIdeas(prev => prev.filter(idea => idea.id !== id));
    toast.success("Startup idea deleted successfully");
  };

  const filteredIdeas = activeTab === "all" 
    ? ideas 
    : ideas.filter(idea => idea.category === activeTab);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Dynamic gradient background elements */}
        <div className="absolute -z-10 inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 rounded-full filter blur-3xl opacity-70 animate-pulse dark:from-amber-500/5 dark:via-orange-500/5 dark:to-red-500/5"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-full filter blur-3xl opacity-70 animate-pulse animation-delay-300 dark:from-green-500/5 dark:via-emerald-500/5 dark:to-teal-500/5"></div>
        </div>
        
        <div className="container max-w-5xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <Lightbulb size={28} />
            </div>
            <h1 className="text-4xl font-bold">Startup Ideas</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-muted-foreground text-xl leading-relaxed">
              Document your innovative startup ideas, from concept to execution plan.
              Import from Word documents, add supporting images, and organize your entrepreneurial journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card className="border border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <CardTitle>Create New Startup Idea</CardTitle>
                  <CardDescription>Import from Word or create from scratch</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4 mb-6">
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload size={16} className="mr-2" />
                      Import from Word
                    </Button>
                    <Input
                      ref={fileInputRef}
                      type="file"
                      accept=".docx,.doc"
                      className="hidden"
                      onChange={handleWordImport}
                    />
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => imageInputRef.current?.click()}
                    >
                      <ImageIcon size={16} className="mr-2" />
                      Add Images
                    </Button>
                    <Input
                      ref={imageInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Idea Title</label>
                    <Input
                      placeholder="Your startup idea name"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="saas">SaaS</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="fintech">FinTech</option>
                      <option value="health">Health & Wellness</option>
                      <option value="sustainability">Sustainability</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Brief Description</label>
                    <Textarea
                      placeholder="A brief overview of your startup idea..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Problem Statement</label>
                    <Textarea
                      placeholder="What problem does your startup solve?"
                      value={problem}
                      onChange={(e) => setProblem(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Solution</label>
                    <Textarea
                      placeholder="How does your startup solve the problem?"
                      value={solution}
                      onChange={(e) => setSolution(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Target Market</label>
                    <Textarea
                      placeholder="Who are your potential customers?"
                      value={market}
                      onChange={(e) => setMarket(e.target.value)}
                    />
                  </div>
                  
                  {/* Image Preview Section */}
                  {images.length > 0 && (
                    <div>
                      <label className="text-sm font-medium mb-2 block">Attached Images</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {images.map((img, index) => (
                          <div key={index} className="relative aspect-square rounded-md overflow-hidden border">
                            <img 
                              src={img} 
                              alt={`Uploaded ${index}`} 
                              className="w-full h-full object-cover"
                            />
                            <Button 
                              variant="destructive"
                              size="sm"
                              className="absolute top-1 right-1 w-6 h-6 p-0 rounded-full"
                              onClick={() => {
                                if (img.startsWith('blob:')) {
                                  URL.revokeObjectURL(img);
                                }
                                setImages(prev => prev.filter((_, i) => i !== index));
                              }}
                            >
                              ×
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="pt-4">
                    <Button onClick={saveIdea} className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                      <Save size={16} className="mr-2" />
                      Save Idea
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="border border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <CardTitle>Startup Resources</CardTitle>
                  <CardDescription>Helpful links for entrepreneurs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li>
                      <a 
                        href="https://www.ycombinator.com/library" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        <Lightbulb size={14} className="mr-2" />
                        Y Combinator Library
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.startupschool.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        <Lightbulb size={14} className="mr-2" />
                        Startup School
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.producthunt.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        <Lightbulb size={14} className="mr-2" />
                        Product Hunt
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.indiehackers.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        <Lightbulb size={14} className="mr-2" />
                        Indie Hackers
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Ideas Display Section with Tabs */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Your Startup Ideas</h2>
            
            <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-7 mb-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="saas">SaaS</TabsTrigger>
                <TabsTrigger value="ecommerce">E-Commerce</TabsTrigger>
                <TabsTrigger value="fintech">FinTech</TabsTrigger>
                <TabsTrigger value="health">Health</TabsTrigger>
                <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
              
              <TabsContent value={activeTab} className="mt-0">
                {filteredIdeas.length > 0 ? (
                  <div className="grid grid-cols-1 gap-6">
                    {filteredIdeas.map((idea) => (
                      <Card key={idea.id} className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <CardTitle className="group-hover:text-primary transition-colors">
                              {idea.title}
                            </CardTitle>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-8 w-8 rounded-full p-0 text-muted-foreground hover:text-destructive"
                              onClick={() => deleteIdea(idea.id)}
                            >
                              ×
                            </Button>
                          </div>
                          <CardDescription>
                            {new Date(idea.createdAt).toLocaleDateString()} · {
                              idea.category.charAt(0).toUpperCase() + idea.category.slice(1)
                            }
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="prose prose-sm dark:prose-invert max-w-none">
                            <div className="mb-4">
                              <h4 className="text-sm font-medium text-muted-foreground mb-1">Description</h4>
                              <p>{idea.description}</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                              <div>
                                <h4 className="text-sm font-medium text-muted-foreground mb-1">Problem</h4>
                                <p className="text-sm">{idea.problem}</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-muted-foreground mb-1">Solution</h4>
                                <p className="text-sm">{idea.solution}</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-muted-foreground mb-1">Target Market</h4>
                                <p className="text-sm">{idea.market}</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Display attached images */}
                          {idea.images.length > 0 && (
                            <div className="grid grid-cols-4 gap-2 mt-4">
                              {idea.images.slice(0, 4).map((img, index) => (
                                <div key={index} className="aspect-square rounded-md overflow-hidden border">
                                  <img 
                                    src={img} 
                                    alt={`Image ${index}`} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ))}
                              {idea.images.length > 4 && (
                                <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs">
                                  +{idea.images.length - 4} more
                                </div>
                              )}
                            </div>
                          )}
                          
                          <div className="mt-4 flex gap-2">
                            <Button size="sm" variant="outline">
                              <Download size={14} className="mr-1" />
                              Export
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
                    <Lightbulb size={48} className="mx-auto text-amber-500/50 dark:text-amber-400/50 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No ideas yet</h3>
                    <p className="text-muted-foreground mb-6">
                      Create your first startup idea to get started.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Startup;
