
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const Art = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Dynamic RGB gradient background elements */}
        <div className="absolute -z-10 inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10 rounded-full filter blur-3xl opacity-70 animate-pulse dark:from-purple-500/5 dark:via-pink-500/5 dark:to-red-500/5"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-500/10 via-rose-500/10 to-red-500/10 rounded-full filter blur-3xl opacity-70 animate-pulse animation-delay-300 dark:from-pink-500/5 dark:via-rose-500/5 dark:to-red-500/5"></div>
        </div>
        
        <div className="container max-w-5xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <Palette size={28} />
            </div>
            <h1 className="text-4xl font-bold">Art & Drawing</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-muted-foreground text-xl leading-relaxed">
              Art allows me to express my creativity through various drawing and painting techniques.
              My work explores different mediums and styles, from digital illustrations to traditional 
              paintings and mixed media experiments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-card rounded-xl shadow-lg overflow-hidden border border-border group hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-square bg-purple-50 dark:bg-purple-900/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 dark:from-purple-500/20 dark:to-pink-500/20 opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center text-purple-500 dark:text-purple-400">
                  <Palette size={64} className="opacity-20" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Urban Landscape Series</h3>
                <p className="text-muted-foreground text-sm">Mixed media paintings exploring city environments and urban architecture.</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-card rounded-xl shadow-lg overflow-hidden border border-border group hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-square bg-pink-50 dark:bg-pink-900/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-rose-400/20 dark:from-pink-500/20 dark:to-rose-500/20 opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center text-pink-500 dark:text-pink-400">
                  <Palette size={64} className="opacity-20" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Abstract Emotions</h3>
                <p className="text-muted-foreground text-sm">A collection of abstract paintings that explore human emotions and states of mind.</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-card rounded-xl shadow-lg overflow-hidden border border-border group hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-square bg-rose-50 dark:bg-rose-900/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-400/20 to-red-400/20 dark:from-rose-500/20 dark:to-red-500/20 opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center text-rose-500 dark:text-rose-400">
                  <Palette size={64} className="opacity-20" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Digital Illustrations</h3>
                <p className="text-muted-foreground text-sm">Contemporary digital artworks created using various software and techniques.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
            <h3 className="text-2xl font-semibold mb-4">Commission an Artwork</h3>
            <p className="text-muted-foreground mb-6">
              Interested in commissioning a custom piece? I'm available for both personal and commercial art projects.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">Contact Me</Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Art;
