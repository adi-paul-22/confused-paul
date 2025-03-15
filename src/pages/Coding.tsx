
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import CodingPortfolioGenerator from "@/components/CodingPortfolioGenerator";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Coding = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // Reset scroll position when page loads
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

  const handleGoToAdmin = () => {
    window.location.href = "/admin";
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Dynamic RGB gradient background elements */}
        <div className="absolute -z-10 inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full filter blur-3xl opacity-70 animate-pulse dark:from-blue-500/5 dark:via-indigo-500/5 dark:to-purple-500/5"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-full filter blur-3xl opacity-70 animate-pulse animation-delay-300 dark:from-emerald-500/5 dark:via-teal-500/5 dark:to-cyan-500/5"></div>
        </div>
        
        <div className="container max-w-5xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Code size={28} />
            </div>
            <h1 className="text-4xl font-bold">Coding Projects</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-muted-foreground text-xl leading-relaxed">
              My passion for coding drives me to build elegant and efficient digital solutions. 
              Here you'll find a collection of my projects spanning web development, 
              mobile applications, and various programming experiments.
            </p>
          </div>
          
          {/* Admin Login/Access Section */}
          <div className="mb-8">
            {!isAuthenticated ? (
              <Card className="border border-blue-200 dark:border-blue-800 mb-8">
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
            ) : (
              <Card className="border border-blue-200 dark:border-blue-800 mb-8 bg-blue-50 dark:bg-blue-900/10">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Admin Access Granted</h3>
                      <p className="text-muted-foreground">You can now manage coding projects</p>
                    </div>
                    <Button 
                      onClick={handleGoToAdmin}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      Go to Admin Dashboard
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
          
          {/* Portfolio Generator Section */}
          <div className="mb-12">
            <CodingPortfolioGenerator />
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-semibold mb-4">Let's Build Something Together</h3>
            <p className="text-muted-foreground mb-6">
              Interested in collaborating on a coding project? I'm always open to new opportunities and challenges.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">Get In Touch</Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Coding;
