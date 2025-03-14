
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plane, ArrowRight, MapPin, Calendar, Map } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Travel = () => {
  // Reset scroll position when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      
      <section className="py-16 px-6 relative overflow-hidden">
        {/* Softer light mode background elements */}
        <div className="absolute -z-10 inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-50 rounded-full filter blur-3xl opacity-80 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 rounded-full filter blur-3xl opacity-80 animate-pulse animation-delay-300"></div>
        </div>
        
        <div className="container max-w-5xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          
          {/* Hero section with softer colors for light mode */}
          <div className="relative overflow-hidden rounded-2xl mb-12 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
            <div className="absolute inset-0 bg-white/30"></div>
            <div className="relative p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                  <Plane size={28} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800">Travel Adventures</h1>
              </div>
              
              <div className="max-w-2xl">
                <p className="text-slate-600 text-xl leading-relaxed mb-8">
                  My passion for travel takes me across the globe, documenting journeys and cultural 
                  experiences. From hidden gems to iconic landmarks, I share insights, photography,
                  and travel tips from diverse destinations.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                    Latest Adventures
                  </Button>
                  <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                    Travel Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Featured destinations */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Featured Destinations</h2>
              <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                View All <ArrowRight size={16} className="ml-1" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Destination cards with lighter, more vibrant aesthetics */}
              <DestinationCard 
                title="Kyoto, Japan" 
                description="Ancient temples, traditional tea houses and stunning cherry blossoms"
                image="bg-gradient-to-br from-pink-100 via-pink-50 to-blue-50"
                icon={<MapPin size={16} />}
                color="text-pink-600"
                bgColor="bg-pink-100"
              />
              
              <DestinationCard 
                title="Barcelona, Spain" 
                description="Architecture, beaches, and incredible Mediterranean cuisine"
                image="bg-gradient-to-br from-amber-100 via-amber-50 to-yellow-50"
                icon={<MapPin size={16} />}
                color="text-amber-600"
                bgColor="bg-amber-100"
              />
              
              <DestinationCard 
                title="Santorini, Greece" 
                description="Stunning white villages overlooking the deep blue Aegean Sea"
                image="bg-gradient-to-br from-blue-100 via-blue-50 to-sky-50"
                icon={<MapPin size={16} />}
                color="text-blue-600"
                bgColor="bg-blue-100"
              />
            </div>
          </div>
          
          {/* Travel guides section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Travel Guides</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-blue-100 overflow-hidden">
                <div className="h-4 bg-gradient-to-r from-blue-400 to-sky-400"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 flex-shrink-0">
                      <Map size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors mb-2">
                        Southeast Asia Travel Guide
                      </h3>
                      <p className="text-slate-600 mb-4">
                        Off-the-beaten-path destinations across Thailand, Vietnam, Cambodia, and Laos.
                      </p>
                      <Button size="sm" className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600">
                        Read Guide
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-indigo-100 overflow-hidden">
                <div className="h-4 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors mb-2">
                        European City Breaks
                      </h3>
                      <p className="text-slate-600 mb-4">
                        Weekend getaway guides to Europe's most charming cities and cultural hubs.
                      </p>
                      <Button size="sm" className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
                        Read Guide
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Travel tips & resources section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Travel Tips & Resources</h2>
            
            <ScrollArea className="h-[320px] rounded-md border border-slate-200 p-4 bg-white">
              <div className="space-y-4 pr-3">
                <TipCard 
                  title="Packing Essentials" 
                  description="The ultimate packing checklist for any type of trip"
                  color="text-emerald-600"
                  bgColor="bg-emerald-50"
                  borderColor="border-emerald-100"
                />
                
                <TipCard 
                  title="Budget Travel Hacks" 
                  description="Save money without sacrificing experiences"
                  color="text-blue-600"
                  bgColor="bg-blue-50"
                  borderColor="border-blue-100"
                />
                
                <TipCard 
                  title="Photography Tips" 
                  description="Capture stunning travel photos with any camera"
                  color="text-amber-600"
                  bgColor="bg-amber-50"
                  borderColor="border-amber-100"
                />
                
                <TipCard 
                  title="Solo Travel Guide" 
                  description="Everything you need to know about traveling alone"
                  color="text-purple-600"
                  bgColor="bg-purple-50"
                  borderColor="border-purple-100"
                />
                
                <TipCard 
                  title="Sustainable Travel" 
                  description="Minimize your environmental impact while exploring"
                  color="text-teal-600"
                  bgColor="bg-teal-50"
                  borderColor="border-teal-100"
                />
              </div>
            </ScrollArea>
          </div>
          
          {/* Newsletter signup with lighter, fresher colors */}
          <div className="bg-gradient-to-r from-sky-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Travel With Me</h3>
            <p className="text-slate-600 mb-6">
              Subscribe to my travel newsletter for exclusive guides, photography tips, and upcoming trip announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 rounded-lg border border-blue-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              />
              <Button className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Destination card component
const DestinationCard = ({ 
  title, 
  description, 
  image, 
  icon, 
  color, 
  bgColor 
}: { 
  title: string; 
  description: string; 
  image: string; 
  icon: React.ReactNode; 
  color: string; 
  bgColor: string; 
}) => {
  return (
    <div className="group relative h-[240px] rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all">
      <div className={`absolute inset-0 ${image}`}></div>
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className={`w-8 h-8 rounded-full ${bgColor} flex items-center justify-center ${color}`}>
          {icon}
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">{title}</h3>
          <p className="text-slate-600 text-sm mb-3">{description}</p>
          <Button size="sm" variant="ghost" className={`${color} hover:bg-blue-50 p-0 h-auto`}>
            Explore <ArrowRight size={14} className="ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

// Tip card component
const TipCard = ({ 
  title, 
  description, 
  color, 
  bgColor,
  borderColor
}: { 
  title: string; 
  description: string; 
  color: string; 
  bgColor: string;
  borderColor: string;
}) => {
  return (
    <div className={`p-4 rounded-lg ${bgColor} border ${borderColor} hover:shadow-sm transition-all`}>
      <h4 className={`font-medium ${color} mb-1`}>{title}</h4>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  );
};

export default Travel;
