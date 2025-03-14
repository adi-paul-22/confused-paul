
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import ArtworkDialog from "@/components/ArtworkDialog";

// Define artwork data structure
interface Artwork {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  color: string;
}

const Art = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample artwork data
  const artworks: Artwork[] = [
    {
      id: "1",
      title: "Urban Landscape Series",
      shortDescription: "Mixed media paintings exploring city environments and urban architecture.",
      description: "This mixed media series explores the complex relationship between urban architecture, natural elements, and human interaction within city spaces. Each piece combines traditional painting techniques with collage, ink work, and subtle digital elements.",
      color: "purple",
    },
    {
      id: "2",
      title: "Abstract Emotions",
      shortDescription: "A collection of abstract paintings that explore human emotions and states of mind.",
      description: "This collection uses color theory and abstract forms to represent different emotional states. Each piece captures a specific feeling through color relationships, brushwork techniques, and compositional elements designed to evoke particular psychological responses.",
      color: "pink",
    },
    {
      id: "3",
      title: "Digital Illustrations",
      shortDescription: "Contemporary digital artworks created using various software and techniques.",
      description: "These digital illustrations push the boundaries of digital art tools while maintaining a handcrafted quality. Created using a combination of Procreate, Adobe Creative Suite, and custom digital brushes, these pieces explore narrative themes through vibrant digital rendering.",
      color: "rose",
    },
  ];

  // Open artwork dialog
  const openArtworkDialog = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
  };

  // Close artwork dialog
  const closeArtworkDialog = () => {
    setSelectedArtwork(null);
  };

  // Get icon color for dialog
  const getIconForColor = (color: string) => {
    return <Palette size={28} />;
  };

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
            {artworks.map((artwork, index) => {
              const colors = ["purple", "pink", "rose"];
              const colorClass = colors[index % colors.length];
              
              return (
                <div 
                  key={artwork.id}
                  onClick={() => openArtworkDialog(artwork)}
                  className="bg-white dark:bg-card rounded-xl shadow-lg overflow-hidden border border-border group hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                >
                  <div className={`aspect-square bg-${colorClass}-50 dark:bg-${colorClass}-900/20 relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br from-${colorClass}-400/20 to-${colorClass}-400/20 dark:from-${colorClass}-500/20 dark:to-${colorClass}-500/20 opacity-70`}></div>
                    <div className={`absolute inset-0 flex items-center justify-center text-${colorClass}-500 dark:text-${colorClass}-400`}>
                      <Palette size={64} className="opacity-20" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{artwork.title}</h3>
                    <p className="text-muted-foreground text-sm">{artwork.shortDescription}</p>
                  </div>
                </div>
              );
            })}
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
      
      {/* Artwork Dialog */}
      {selectedArtwork && (
        <ArtworkDialog
          artwork={{
            title: selectedArtwork.title,
            description: selectedArtwork.description,
            color: selectedArtwork.color,
            icon: getIconForColor(selectedArtwork.color)
          }}
          isOpen={!!selectedArtwork}
          onClose={closeArtworkDialog}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default Art;
