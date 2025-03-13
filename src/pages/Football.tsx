
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Football = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Dynamic RGB gradient background elements */}
        <div className="absolute -z-10 inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-red-500/10 rounded-full filter blur-3xl opacity-70 animate-pulse dark:from-blue-500/5 dark:via-indigo-500/5 dark:to-red-500/5"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-amber-500/10 rounded-full filter blur-3xl opacity-70 animate-pulse animation-delay-300 dark:from-red-500/5 dark:via-orange-500/5 dark:to-amber-500/5"></div>
        </div>
        
        <div className="container max-w-5xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
              <Trophy size={28} />
            </div>
            <h1 className="text-4xl font-bold">Football & FC Barcelona</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-muted-foreground text-xl leading-relaxed">
              As a devoted fan of the beautiful game and FC Barcelona's artistry on the field,
              I analyze matches, follow player developments, and celebrate the unique philosophy of
              the club that has made it more than just a football team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-card rounded-xl shadow-lg overflow-hidden border border-border group hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-red-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <Trophy size={64} className="opacity-20" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">FC Barcelona Match Analysis</h3>
                <p className="text-muted-foreground text-sm">Tactical breakdowns of key matches and player performances throughout the season.</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-card rounded-xl shadow-lg overflow-hidden border border-border group hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-r from-red-600 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <Trophy size={64} className="opacity-20" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">La Masia Talent Watch</h3>
                <p className="text-muted-foreground text-sm">Profiles of promising young talents from Barcelona's renowned youth academy.</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-card rounded-xl shadow-lg overflow-hidden border border-border group hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <Trophy size={64} className="opacity-20" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Football Philosophy Essays</h3>
                <p className="text-muted-foreground text-sm">Exploring the deeper cultural and philosophical aspects of the beautiful game.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">Més que un club</h3>
            <p className="mb-6 opacity-90">
              More than a club - the philosophy that makes FC Barcelona unique in world football.
              Join me in celebrating the rich history and bright future of Barça.
            </p>
            <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">Join Fan Community</Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Football;
