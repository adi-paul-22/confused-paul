
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, BookOpen, FileText, Clock, Download, Image, Save, ArrowLeft, Lock } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

interface MbaNote {
  id: string;
  title: string;
  content: string;
  category: string;
  date: string;
}

const MbaPrep = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [notes, setNotes] = useState<MbaNote[]>(() => {
    const savedNotes = localStorage.getItem("mbaNotes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("GMAT");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isImporting, setIsImporting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const handleSaveNote = () => {
    if (!title || !content) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    const newNote: MbaNote = {
      id: crypto.randomUUID(),
      title,
      content,
      category,
      date: new Date().toISOString(),
    };
    
    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
    localStorage.setItem("mbaNotes", JSON.stringify(updatedNotes));
    
    setTitle("");
    setContent("");
    setCategory("GMAT");
    
    toast.success("MBA note saved successfully!");
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
      const text = await selectedFile.text();
      
      const lines = text.split('\n');
      const importedTitle = lines[0] || 'Imported Document';
      const importedContent = lines.slice(1).join('\n');
      
      setTitle(importedTitle);
      setContent(importedContent);
      setIsImporting(false);
      toast.success("Content imported successfully!");
    } catch (error) {
      console.error("Import error:", error);
      toast.error("Failed to import document");
      setIsImporting(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <Navbar />
        
        <main className="flex-grow container max-w-6xl mx-auto px-4 py-20">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">MBA Preparation</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Track your MBA journey, prepare for exams, and organize application materials all in one place.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <Card className="border border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen size={18} />
                    MBA Notes
                  </CardTitle>
                  <CardDescription>MBA preparation materials</CardDescription>
                </CardHeader>
                <CardContent className="max-h-[600px] overflow-y-auto space-y-4">
                  {notes.length > 0 ? (
                    notes.map((note) => (
                      <Card key={note.id} className="p-4 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors">
                        <div>
                          <h3 className="font-medium">{note.title}</h3>
                          <div className="flex items-center gap-2 my-1">
                            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded-full text-xs">
                              {note.category}
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock size={12} />
                              {new Date(note.date).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {note.content}
                          </p>
                        </div>
                      </Card>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <FileText className="mx-auto h-12 w-12 text-muted-foreground/30 mb-3" />
                      <p className="text-muted-foreground">No notes yet.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8">
              <Card className="w-full max-w-md mx-auto border border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock size={18} />
                    Admin Login
                  </CardTitle>
                  <CardDescription>Login to add and manage MBA notes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
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
                    <Button 
                      onClick={handleLogin} 
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      Login
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
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
      <Navbar />
      
      <main className="flex-grow container max-w-6xl mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          <Button variant="outline" onClick={handleLogout}>Logout</Button>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">MBA Preparation</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track your MBA journey, prepare for exams, and organize application materials all in one place.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="border border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen size={18} />
                  My MBA Notes
                </CardTitle>
                <CardDescription>Your saved MBA preparation materials</CardDescription>
              </CardHeader>
              <CardContent className="max-h-[600px] overflow-y-auto space-y-4">
                {notes.length > 0 ? (
                  notes.map((note) => (
                    <Card key={note.id} className="p-4 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{note.title}</h3>
                          <div className="flex items-center gap-2 my-1">
                            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded-full text-xs">
                              {note.category}
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock size={12} />
                              {new Date(note.date).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                            {note.content}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <FileText className="mx-auto h-12 w-12 text-muted-foreground/30 mb-3" />
                    <p className="text-muted-foreground">No notes yet. Create your first note!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <Card className="border border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText size={18} />
                  Add New MBA Note
                </CardTitle>
                <CardDescription>Create a new note or import from a Word document</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input 
                      id="title" 
                      value={title} 
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="E.g., GMAT Quant Strategies"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <select 
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="GMAT">GMAT</option>
                      <option value="GRE">GRE</option>
                      <option value="Essays">Essays</option>
                      <option value="Interviews">Interviews</option>
                      <option value="Schools">Schools Research</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea 
                      id="content" 
                      value={content} 
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Add your notes here..."
                      className="min-h-[200px]"
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
                    onClick={handleSaveNote} 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    <Save size={16} className="mr-2" />
                    Save Note
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

export default MbaPrep;
