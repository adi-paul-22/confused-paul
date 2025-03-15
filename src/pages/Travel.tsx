
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plane, Lock, MapPin, Calendar, Globe, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface TravelDestination {
  id: string;
  title: string;
  location: string;
  description: string;
  date: string;
  imageUrl: string;
  tips: string;
}

const Travel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [destinations, setDestinations] = useState<TravelDestination[]>(() => {
    const savedDestinations = localStorage.getItem("travelDestinations");
    return savedDestinations ? JSON.parse(savedDestinations) : [];
  });
  
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tips, setTips] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  // Reset scroll position when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    localStorage.setItem("travelDestinations", JSON.stringify(destinations));
  }, [destinations]);

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

  const handleSaveDestination = () => {
    if (!title || !location || !description) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    const newDestination: TravelDestination = {
      id: crypto.randomUUID(),
      title,
      location,
      description,
      date: date || new Date().toISOString().split('T')[0],
      imageUrl: imageUrl || "placeholder.svg",
      tips,
    };
    
    setDestinations([newDestination, ...destinations]);
    
    // Reset form
    setTitle("");
    setLocation("");
    setDescription("");
    setDate("");
    setImageUrl("");
    setTips("");
    setIsAdding(false);
    
    toast.success("Travel destination added successfully!");
  };

  const handleDeleteDestination = (id: string) => {
    setDestinations(destinations.filter(dest => dest.id !== id));
    toast.success("Travel destination deleted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-sky-950/20 dark:to-indigo-950/20">
      <Navbar />
      
      <main className="container max-w-6xl mx-auto px-4 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-sky-600 dark:text-sky-400">
            <Plane size={28} />
          </div>
          <h1 className="text-4xl font-bold">Travel Adventures</h1>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-muted-foreground text-xl leading-relaxed">
            Exploring the world one destination at a time. These are my travel experiences, 
            insights, and recommendations from journeys across the globe.
          </p>
        </div>
        
        {isAuthenticated ? (
          <>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Manage Travel Destinations</h2>
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
                    className="bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700"
                  >
                    Add New Destination
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
              <Card className="mb-12 border border-sky-200 dark:border-sky-800">
                <CardHeader>
                  <CardTitle>Add New Travel Destination</CardTitle>
                  <CardDescription>Share a new place you've visited</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Destination Title <span className="text-red-500">*</span></Label>
                      <Input 
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="E.g., The Grand Canyon"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Location <span className="text-red-500">*</span></Label>
                      <Input 
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="E.g., Arizona, USA"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="date">Date Visited</Label>
                      <Input 
                        id="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="imageUrl">Image URL</Label>
                      <Input 
                        id="imageUrl"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="description">Description <span className="text-red-500">*</span></Label>
                      <Textarea 
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Share your experience..."
                        className="min-h-[100px]"
                      />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="tips">Travel Tips</Label>
                      <Textarea 
                        id="tips"
                        value={tips}
                        onChange={(e) => setTips(e.target.value)}
                        placeholder="Share helpful advice for other travelers..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button 
                    onClick={handleSaveDestination}
                    className="bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700"
                  >
                    Save Destination
                  </Button>
                </CardFooter>
              </Card>
            )}
          </>
        ) : (
          <Card className="mb-12 border border-sky-200 dark:border-sky-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock size={18} />
                Admin Access
              </CardTitle>
              <CardDescription>Login to manage travel destinations</CardDescription>
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
                    className="bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700"
                  >
                    Login
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
        
        <h2 className="text-2xl font-bold mb-8">Travel Destinations</h2>
        
        {destinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card key={destination.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-sky-200 dark:border-sky-800">
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={destination.imageUrl}
                    alt={destination.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="pt-6">
                  <div className="flex justify-between">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{destination.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin size={14} className="mr-1" />
                        {destination.location}
                        {destination.date && (
                          <>
                            <span className="mx-2">•</span>
                            <Calendar size={14} className="mr-1" />
                            {new Date(destination.date).toLocaleDateString()}
                          </>
                        )}
                      </div>
                    </div>
                    {isAuthenticated && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                        onClick={() => handleDeleteDestination(destination.id)}
                      >
                        <Lock size={14} />
                      </Button>
                    )}
                  </div>
                  <p className="text-muted-foreground mt-4">{destination.description}</p>
                  {destination.tips && (
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm font-medium mb-2">Travel Tips:</p>
                      <p className="text-sm text-muted-foreground">{destination.tips}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-sky-50 dark:bg-sky-900/20 rounded-xl border border-sky-200 dark:border-sky-800">
            <Globe size={48} className="mx-auto text-sky-500/50 dark:text-sky-400/50 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No destinations yet</h3>
            <p className="text-muted-foreground mb-6">
              Check back later for new travel adventures.
            </p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Travel;
