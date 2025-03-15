
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Lightbulb, Upload, FileText, Trash, Download, Image, Save, Tags } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface StartupIdea {
  id: string;
  title: string;
  description: string;
  marketSize: string;
  problemStatement: string;
  solution: string;
  competitors: string;
  tags: string[];
  createdAt: string;
}

const StartupIdeas = () => {
  const [ideas, setIdeas] = useState<StartupIdea[]>(() => {
    const savedIdeas = localStorage.getItem("startupIdeas");
    return savedIdeas ? JSON.parse(savedIdeas) : [];
  });
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [marketSize, setMarketSize] = useState("");
  const [problemStatement, setProblemStatement] = useState("");
  const [solution, setSolution] = useState("");
  const [competitors, setCompetitors] = useState("");
  const [tags, setTags] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isImporting, setIsImporting] = useState(false);

  const handleSaveIdea = () => {
    if (!title || !description) {
      toast.error("Please fill in the required fields");
      return;
    }
    
    const newIdea: StartupIdea = {
      id: crypto.randomUUID(),
      title,
      description,
      marketSize,
      problemStatement,
      solution,
      competitors,
      tags: tags.split(",").map(tag => tag.trim()).filter(Boolean),
      createdAt: new Date().toISOString(),
    };
    
    const updatedIdeas = [newIdea, ...ideas];
    setIdeas(updatedIdeas);
    localStorage.setItem("startupIdeas", JSON.stringify(updatedIdeas));
    
    // Reset form
    setTitle("");
    setDescription("");
    setMarketSize("");
    setProblemStatement("");
    setSolution("");
    setCompetitors("");
    setTags("");
    
    toast.success("Startup idea saved successfully!");
  };

  const handleDeleteIdea = (id: string) => {
    const updatedIdeas = ideas.filter(idea => idea.id !== id);
    setIdeas(updatedIdeas);
    localStorage.setItem("startupIdeas", JSON.stringify(updatedIdeas));
    toast.success("Startup idea deleted successfully!");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleImport = async () => {
    if (!selectedFile) {
      toast.error("Please select a file to import");
      return;
    }

    setIsImporting(true);
    
    try {
      // Simulating Word document import by just reading text content
      const text = await selectedFile.text();
      
      // Simple parsing of the content - in a real app, you'd need a proper Word parser
      const lines = text.split('\n');
      
      if (lines.length > 0) setTitle(lines[0] || '');
      if (lines.length > 1) setDescription(lines[1] || '');
      if (lines.length > 2) setProblemStatement(lines[2] || '');
      if (lines.length > 3) setSolution(lines[3] || '');
      
      setIsImporting(false);
      toast.success("Content imported successfully!");
    } catch (error) {
      console.error("Import error:", error);
      toast.error("Failed to import document");
      setIsImporting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20">
      <Navbar />
      
      <main className="flex-grow container max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Startup Ideas</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Capture and develop your innovative business concepts in one organized workspace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Ideas list */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border border-amber-200 dark:border-amber-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb size={18} />
                  My Startup Ideas
                </CardTitle>
                <CardDescription>Your innovative business concepts</CardDescription>
              </CardHeader>
              <CardContent className="max-h-[600px] overflow-y-auto space-y-4">
                {ideas.length > 0 ? (
                  ideas.map((idea) => (
                    <Card key={idea.id} className="p-4 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{idea.title}</h3>
                          <div className="flex flex-wrap gap-1 my-1">
                            {idea.tags.map((tag, index) => (
                              <span 
                                key={index}
                                className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2 py-0.5 rounded-full text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                            {idea.description}
                          </p>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => handleDeleteIdea(idea.id)}
                        >
                          <Trash size={14} />
                        </Button>
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <Lightbulb className="mx-auto h-12 w-12 text-muted-foreground/30 mb-3" />
                    <p className="text-muted-foreground">No startup ideas yet. Add your first brilliant concept!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Right column - Add new idea */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border border-amber-200 dark:border-amber-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText size={18} />
                  Add New Startup Idea
                </CardTitle>
                <CardDescription>Capture your business concept with key details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Idea Title <span className="text-red-500">*</span></Label>
                    <Input 
                      id="title" 
                      value={title} 
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="E.g., AI-Powered Personal Shopping Assistant"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Short Description <span className="text-red-500">*</span></Label>
                    <Textarea 
                      id="description" 
                      value={description} 
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Brief overview of your idea..."
                      className="min-h-[80px]"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="problem">Problem Statement</Label>
                      <Textarea 
                        id="problem" 
                        value={problemStatement} 
                        onChange={(e) => setProblemStatement(e.target.value)}
                        placeholder="What problem does this solve?"
                        className="min-h-[80px]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="solution">Solution</Label>
                      <Textarea 
                        id="solution" 
                        value={solution} 
                        onChange={(e) => setSolution(e.target.value)}
                        placeholder="How does your idea solve this problem?"
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="marketSize">Market Size</Label>
                      <Input 
                        id="marketSize" 
                        value={marketSize} 
                        onChange={(e) => setMarketSize(e.target.value)}
                        placeholder="E.g., $2B annual market"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="competitors">Competitors</Label>
                      <Input 
                        id="competitors" 
                        value={competitors} 
                        onChange={(e) => setCompetitors(e.target.value)}
                        placeholder="E.g., Company A, Company B"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tags" className="flex items-center gap-2">
                      <Tags size={14} />
                      Tags (comma separated)
                    </Label>
                    <Input 
                      id="tags" 
                      value={tags} 
                      onChange={(e) => setTags(e.target.value)}
                      placeholder="E.g., AI, E-commerce, Mobile"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="border rounded-lg p-4 flex-1">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Upload size={16} />
                      Import from Word
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Input 
                          type="file" 
                          accept=".doc,.docx,.txt" 
                          onChange={handleFileChange} 
                        />
                      </div>
                      <Button 
                        variant="outline" 
                        onClick={handleImport} 
                        disabled={!selectedFile || isImporting}
                        className="w-full"
                      >
                        {isImporting ? (
                          <>Importing...</>
                        ) : (
                          <>
                            <Download size={16} className="mr-2" />
                            Import Content
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 flex-1">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Image size={16} />
                      Add Images
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Input 
                          type="file" 
                          accept="image/*" 
                        />
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full"
                      >
                        <Image size={16} className="mr-2" />
                        Upload Image
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    onClick={handleSaveIdea} 
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600"
                  >
                    <Save size={16} className="mr-2" />
                    Save Startup Idea
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StartupIdeas;
