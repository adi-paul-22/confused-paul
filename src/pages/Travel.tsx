
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plane } from "lucide-react";
import { Link } from "react-router-dom";

const Travel = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Dynamic RGB gradient background elements */}
        <div className="absolute -z-10 inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full filter blur-3xl opacity-70 animate-pulse dark:from-cyan-500/5 dark:via-blue-500/5 dark:to-indigo-500/5"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-teal-500/10 to-cyan-500/10 rounded-full filter blur-3xl opacity-70 animate-pulse animation-delay-300 dark:from-blue-500/5 dark:via-teal-500/5 dark:to-cyan-500/5"></div>
        </div>
        
        <div className="container max-w-5xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
              <Plane size={28} />
            </div>
            <h1 className="text-4xl font-bold">Travel Adventures</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-muted-foreground text-xl leading-relaxed">
              My passion for travel takes me across the globe, documenting journeys and cultural 
              experiences. From hidden gems to iconic landmarks, I share insights, photography,
              and travel tips from diverse destinations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="group relative h-80 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-blue-600/40 mix-blend-overlay group-hover:opacity-75 transition-opacity"></div>
              <div className="absolute inset-0 bg-cyan-50 dark:bg-cyan-900/20">
                <div className="absolute inset-0 flex items-center justify-center text-cyan-500 dark:text-cyan-400">
                  <Plane size={64} className="opacity-20" />
                </div>
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-semibold text-white mb-2 drop-shadow-md">Southeast Asia Travel Guide</h3>
                <p className="text-white/80 mb-4 drop-shadow-md">Off-the-beaten-path destinations across Thailand, Vietnam, Cambodia, and Laos.</p>
                <Button size="sm" className="w-max bg-white/20 backdrop-blur-sm hover:bg-white/30">Read More</Button>
              </div>
            </div>
            
            <div className="group relative h-80 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-indigo-600/40 mix-blend-overlay group-hover:opacity-75 transition-opacity"></div>
              <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20">
                <div className="absolute inset-0 flex items-center justify-center text-blue-500 dark:text-blue-400">
                  <Plane size={64} className="opacity-20" />
                </div>
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-semibold text-white mb-2 drop-shadow-md">European City Breaks</h3>
                <p className="text-white/80 mb-4 drop-shadow-md">Weekend getaway guides to Europe's most charming cities and cultural hubs.</p>
                <Button size="sm" className="w-max bg-white/20 backdrop-blur-sm hover:bg-white/30">Read More</Button>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Featured Destinations</h3>
            </div>
            <div className="bg-white dark:bg-card border border-t-0 border-border rounded-b-xl">
              <div className="divide-y divide-border">
                <div className="p-6 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Tokyo, Japan</h4>
                    <p className="text-muted-foreground text-sm">Urban exploration in the world's largest metropolis</p>
                  </div>
                  <ArrowLeft className="rotate-180 text-muted-foreground" size={16} />
                </div>
                <div className="p-6 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Barcelona, Spain</h4>
                    <p className="text-muted-foreground text-sm">Architecture, beaches, and incredible cuisine</p>
                  </div>
                  <ArrowLeft className="rotate-180 text-muted-foreground" size={16} />
                </div>
                <div className="p-6 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Marrakech, Morocco</h4>
                    <p className="text-muted-foreground text-sm">Exploring ancient medinas and vibrant marketplaces</p>
                  </div>
                  <ArrowLeft className="rotate-180 text-muted-foreground" size={16} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl p-8 border border-cyan-200 dark:border-cyan-800/50">
            <h3 className="text-2xl font-semibold mb-4">Travel With Me</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to my travel newsletter for exclusive guides, photography tips, and upcoming trip announcements.
            </p>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-white dark:bg-card" 
              />
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Travel;
