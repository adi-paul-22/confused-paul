
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Dynamic RGB gradient background elements */}
        <div className="absolute -z-10 inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-full filter blur-3xl opacity-70 animate-pulse dark:from-green-500/5 dark:via-emerald-500/5 dark:to-teal-500/5"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-lime-500/10 via-green-500/10 to-emerald-500/10 rounded-full filter blur-3xl opacity-70 animate-pulse animation-delay-300 dark:from-lime-500/5 dark:via-green-500/5 dark:to-emerald-500/5"></div>
        </div>
        
        <div className="container max-w-5xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
              <Leaf size={28} />
            </div>
            <h1 className="text-4xl font-bold">Sustainability Projects</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-muted-foreground text-xl leading-relaxed">
              I'm committed to environmental causes and sustainable practices. Through various
              projects and initiatives, I work to promote eco-friendly solutions and raise
              awareness about environmental issues.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-card rounded-xl shadow-lg overflow-hidden border border-border group hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-56 bg-green-50 dark:bg-green-900/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-400/20 dark:from-green-500/20 dark:to-emerald-500/20 opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center text-green-500 dark:text-green-400">
                  <Leaf size={64} className="opacity-20" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">Sustainable Packaging Design</h3>
                <p className="text-muted-foreground mb-4">Eco-friendly packaging solutions for consumer products that reduce environmental impact while maintaining functionality.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium dark:bg-green-900/30 dark:text-green-400">Biodegradable</span>
                  <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium dark:bg-green-900/30 dark:text-green-400">Minimal Waste</span>
                  <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium dark:bg-green-900/30 dark:text-green-400">Recycled Materials</span>
                </div>
                <Button variant="outline" className="w-full">View Project</Button>
              </div>
            </div>
            
            <div className="bg-white dark:bg-card rounded-xl shadow-lg overflow-hidden border border-border group hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-56 bg-emerald-50 dark:bg-emerald-900/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 dark:from-emerald-500/20 dark:to-teal-500/20 opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center text-emerald-500 dark:text-emerald-400">
                  <Leaf size={64} className="opacity-20" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">Urban Garden Initiative</h3>
                <p className="text-muted-foreground mb-4">A community project promoting urban gardening and sustainable food production in city environments.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium dark:bg-emerald-900/30 dark:text-emerald-400">Urban Farming</span>
                  <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium dark:bg-emerald-900/30 dark:text-emerald-400">Community</span>
                  <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium dark:bg-emerald-900/30 dark:text-emerald-400">Food Security</span>
                </div>
                <Button variant="outline" className="w-full">View Project</Button>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8 border border-green-200 dark:border-green-800">
            <h3 className="text-2xl font-semibold mb-4">Join Our Sustainability Movement</h3>
            <p className="text-muted-foreground mb-6">
              Want to get involved in environmental initiatives? Learn how you can contribute to a more sustainable future.
            </p>
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">Learn More</Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Sustainability;
