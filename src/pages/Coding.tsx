
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code } from "lucide-react";
import { Link } from "react-router-dom";

const Coding = () => {
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-card rounded-xl shadow-lg overflow-hidden border border-border group hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-56 bg-blue-50 dark:bg-blue-900/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 dark:from-blue-500/20 dark:to-indigo-500/20 opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center text-blue-500 dark:text-blue-400">
                  <Code size={64} className="opacity-20" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">E-commerce Platform</h3>
                <p className="text-muted-foreground mb-4">A fully responsive e-commerce solution with modern UX, built with React, Next.js, and TypeScript.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium dark:bg-blue-900/30 dark:text-blue-400">React</span>
                  <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium dark:bg-blue-900/30 dark:text-blue-400">Next.js</span>
                  <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium dark:bg-blue-900/30 dark:text-blue-400">TypeScript</span>
                </div>
                <Button variant="outline" className="w-full">View Project</Button>
              </div>
            </div>
            
            <div className="bg-white dark:bg-card rounded-xl shadow-lg overflow-hidden border border-border group hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-56 bg-indigo-50 dark:bg-indigo-900/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 dark:from-indigo-500/20 dark:to-purple-500/20 opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center text-indigo-500 dark:text-indigo-400">
                  <Code size={64} className="opacity-20" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">Portfolio Generator</h3>
                <p className="text-muted-foreground mb-4">A tool for developers to create stunning portfolios with minimal effort using modern web technologies.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium dark:bg-indigo-900/30 dark:text-indigo-400">Vue.js</span>
                  <span className="px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium dark:bg-indigo-900/30 dark:text-indigo-400">Tailwind</span>
                  <span className="px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium dark:bg-indigo-900/30 dark:text-indigo-400">JavaScript</span>
                </div>
                <Button variant="outline" className="w-full">View Project</Button>
              </div>
            </div>
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
