
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
import { ArrowLeft, Upload, Download, Save, FileText, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

interface MbaNote {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
  images: string[];
}

const MbaPrep = () => {
  const [notes, setNotes] = useState<MbaNote[]>([]);
  const [activeTab, setActiveTab] = useState("all");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("application");
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  // Load notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = localStorage.getItem("mbaNotes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to localStorage when they change
  useEffect(() => {
    localStorage.setItem("mbaNotes", JSON.stringify(notes));
  }, [notes]);

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
      // Simulating Word document parsing by taking the first 50 characters as title
      // and the rest as content
      setTitle(text.substring(0, 50));
      setContent(text.substring(50));
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

  const saveNote = () => {
    if (!title.trim() || !content.trim()) {
      toast.error("Please provide both a title and content");
      return;
    }

    const newNote: MbaNote = {
      id: crypto.randomUUID(),
      title,
      content,
      category,
      createdAt: new Date().toISOString(),
      images
    };

    setNotes(prev => [newNote, ...prev]);
    setTitle("");
    setContent("");
    setImages([]);
    toast.success("Note saved successfully");
  };

  const deleteNote = (id: string) => {
    // Release any object URLs to prevent memory leaks
    const noteToDelete = notes.find(note => note.id === id);
    if (noteToDelete) {
      noteToDelete.images.forEach(img => {
        if (img.startsWith('blob:')) {
          URL.revokeObjectURL(img);
        }
      });
    }
    
    setNotes(prev => prev.filter(note => note.id !== id));
    toast.success("Note deleted successfully");
  };

  const filteredNotes = activeTab === "all" 
    ? notes 
    : notes.filter(note => note.category === activeTab);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Dynamic gradient background elements */}
        <div className="absolute -z-10 inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-500/10 rounded-full filter blur-3xl opacity-70 animate-pulse dark:from-purple-500/5 dark:via-indigo-500/5 dark:to-blue-500/5"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-amber-500/10 via-yellow-500/10 to-orange-500/10 rounded-full filter blur-3xl opacity-70 animate-pulse animation-delay-300 dark:from-amber-500/5 dark:via-yellow-500/5 dark:to-orange-500/5"></div>
        </div>
        
        <div className="container max-w-5xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <FileText size={28} />
            </div>
            <h1 className="text-4xl font-bold">MBA Preparation</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-muted-foreground text-xl leading-relaxed">
              Document your MBA journey, from application prep to case studies and interview notes.
              Import from Word documents, add images, and organize your materials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card className="border border-purple-200 dark:border-purple-800">
                <CardHeader>
                  <CardTitle>Create New Note</CardTitle>
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
                    <label className="text-sm font-medium mb-2 block">Title</label>
                    <Input
                      placeholder="Note title"
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
                      <option value="application">Application Materials</option>
                      <option value="cases">Case Studies</option>
                      <option value="interview">Interview Prep</option>
                      <option value="research">School Research</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Content</label>
                    <Textarea
                      placeholder="Your content here..."
                      className="min-h-[200px]"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
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
                    <Button onClick={saveNote} className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                      <Save size={16} className="mr-2" />
                      Save Note
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="border border-purple-200 dark:border-purple-800">
                <CardHeader>
                  <CardTitle>MBA Resources</CardTitle>
                  <CardDescription>Helpful links for your MBA journey</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li>
                      <a 
                        href="https://www.mba.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        <FileText size={14} className="mr-2" />
                        MBA.com - Official GMAT Resource
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://poetsandquants.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        <FileText size={14} className="mr-2" />
                        Poets & Quants - MBA News
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.clearadmit.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        <FileText size={14} className="mr-2" />
                        Clear Admit - Application Resources
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://gmatclub.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        <FileText size={14} className="mr-2" />
                        GMAT Club - Test Prep Community
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Notes Display Section with Tabs */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Your MBA Notes</h2>
            
            <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-5 mb-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="application">Applications</TabsTrigger>
                <TabsTrigger value="cases">Case Studies</TabsTrigger>
                <TabsTrigger value="interview">Interviews</TabsTrigger>
                <TabsTrigger value="research">Research</TabsTrigger>
              </TabsList>
              
              <TabsContent value={activeTab} className="mt-0">
                {filteredNotes.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredNotes.map((note) => (
                      <Card key={note.id} className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <CardTitle className="group-hover:text-primary transition-colors">
                              {note.title}
                            </CardTitle>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-8 w-8 rounded-full p-0 text-muted-foreground hover:text-destructive"
                              onClick={() => deleteNote(note.id)}
                            >
                              ×
                            </Button>
                          </div>
                          <CardDescription>
                            {new Date(note.createdAt).toLocaleDateString()} · {
                              note.category === "application" ? "Application Materials" :
                              note.category === "cases" ? "Case Studies" :
                              note.category === "interview" ? "Interview Prep" : "School Research"
                            }
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="prose prose-sm dark:prose-invert max-w-none mb-4">
                            <p className="text-muted-foreground line-clamp-3">
                              {note.content}
                            </p>
                          </div>
                          
                          {/* Display attached images */}
                          {note.images.length > 0 && (
                            <div className="grid grid-cols-4 gap-2 mt-4">
                              {note.images.slice(0, 4).map((img, index) => (
                                <div key={index} className="aspect-square rounded-md overflow-hidden border">
                                  <img 
                                    src={img} 
                                    alt={`Image ${index}`} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ))}
                              {note.images.length > 4 && (
                                <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs">
                                  +{note.images.length - 4} more
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
                  <div className="text-center py-12 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                    <FileText size={48} className="mx-auto text-purple-500/50 dark:text-purple-400/50 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No notes yet</h3>
                    <p className="text-muted-foreground mb-6">
                      Import from Word or create your first note to get started.
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

export default MbaPrep;
