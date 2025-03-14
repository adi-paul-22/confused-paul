
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plane, ArrowRight, MapPin, Calendar, Map, Camera, Send, Globe, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const Travel = () => {
  const { theme } = useTheme();
  
  // Reset scroll position when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="py-16 px-6 relative">
        {/* Background elements that change with theme */}
        <div className="absolute -z-10 inset-0 overflow-hidden">
          {theme === "light" ? (
            <>
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-50 rounded-full filter blur-3xl opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 rounded-full filter blur-3xl opacity-80 animate-pulse animation-delay-300"></div>
            </>
          ) : (
            <>
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-violet-900/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-violet-900/20 via-purple-900/20 to-fuchsia-900/20 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-300"></div>
            </>
          )}
        </div>
        
        <div className="container max-w-5xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 animate-fade-in">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          
          {/* Hero section with theme-adaptive styling */}
          <div className={cn(
            "relative overflow-hidden rounded-2xl mb-12 border animate-fade-in", 
            theme === "light" 
              ? "bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-100" 
              : "bg-gradient-to-r from-blue-950/40 to-indigo-950/40 border-blue-900/30 glass-card"
          )}>
            <div className={cn(
              "absolute inset-0", 
              theme === "light" 
                ? "bg-white/30" 
                : "bg-black/10 backdrop-blur-sm"
            )}></div>
            <div className="relative p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center", 
                  theme === "light" 
                    ? "bg-sky-100 text-sky-600" 
                    : "bg-sky-900/40 text-sky-400"
                )}>
                  <Plane size={28} className="animate-fade-in" />
                </div>
                <h1 className={cn(
                  "text-4xl md:text-5xl font-bold", 
                  theme === "light" 
                    ? "text-slate-800" 
                    : "text-slate-100"
                )}>Travel Adventures</h1>
              </div>
              
              <div className="max-w-2xl">
                <p className={cn(
                  "text-xl leading-relaxed mb-8", 
                  theme === "light" 
                    ? "text-slate-600" 
                    : "text-slate-300"
                )}>
                  My passion for travel takes me across the globe, documenting journeys and cultural 
                  experiences. From hidden gems to iconic landmarks, I share insights, photography,
                  and travel tips from diverse destinations.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button className={cn(
                    "animate-fade-in transition-all hover:scale-105",
                    theme === "light"
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  )}>
                    Latest Adventures
                  </Button>
                  <Button variant="outline" className={cn(
                    "animate-fade-in animation-delay-100 transition-all hover:scale-105",
                    theme === "light"
                      ? "border-blue-200 text-blue-700 hover:bg-blue-50"
                      : "border-blue-700 text-blue-400 hover:bg-blue-900/30"
                  )}>
                    Travel Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Featured destinations */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className={cn(
                "text-2xl font-bold animate-fade-in", 
                theme === "light" ? "text-slate-800" : "text-slate-100"
              )}>Featured Destinations</h2>
              <Button variant="ghost" size="sm" className={cn(
                "animate-fade-in", 
                theme === "light" 
                  ? "text-blue-600 hover:text-blue-700 hover:bg-blue-50" 
                  : "text-blue-400 hover:text-blue-300 hover:bg-blue-900/30"
              )}>
                View All <ArrowRight size={16} className="ml-1" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Destination cards with theme support */}
              <DestinationCard 
                title="Kyoto, Japan" 
                description="Ancient temples, traditional tea houses and stunning cherry blossoms"
                image={theme === "light" ? "bg-gradient-to-br from-pink-100 via-pink-50 to-blue-50" : "bg-gradient-to-br from-pink-900/30 via-pink-800/20 to-blue-900/30"}
                icon={<MapPin size={16} />}
                color={theme === "light" ? "text-pink-600" : "text-pink-400"}
                bgColor={theme === "light" ? "bg-pink-100" : "bg-pink-900/30"}
                animationDelay="animation-delay-100"
              />
              
              <DestinationCard 
                title="Barcelona, Spain" 
                description="Architecture, beaches, and incredible Mediterranean cuisine"
                image={theme === "light" ? "bg-gradient-to-br from-amber-100 via-amber-50 to-yellow-50" : "bg-gradient-to-br from-amber-900/30 via-amber-800/20 to-yellow-900/30"}
                icon={<MapPin size={16} />}
                color={theme === "light" ? "text-amber-600" : "text-amber-400"}
                bgColor={theme === "light" ? "bg-amber-100" : "bg-amber-900/30"}
                animationDelay="animation-delay-200"
              />
              
              <DestinationCard 
                title="Santorini, Greece" 
                description="Stunning white villages overlooking the deep blue Aegean Sea"
                image={theme === "light" ? "bg-gradient-to-br from-blue-100 via-blue-50 to-sky-50" : "bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-sky-900/30"}
                icon={<MapPin size={16} />}
                color={theme === "light" ? "text-blue-600" : "text-blue-400"}
                bgColor={theme === "light" ? "bg-blue-100" : "bg-blue-900/30"}
                animationDelay="animation-delay-300"
              />
            </div>
          </div>
          
          {/* Latest travel blogs - New section with card grid */}
          <div className="mb-12 animate-fade-in animation-delay-200">
            <h2 className={cn(
              "text-2xl font-bold mb-6", 
              theme === "light" ? "text-slate-800" : "text-slate-100"
            )}>Latest Travel Blogs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BlogCard 
                title="A Week in Tokyo" 
                date="June 12, 2023"
                excerpt="Exploring the perfect blend of tradition and hyper-modern culture in Japan's capital."
                icon={<Globe size={20} />}
                color={theme === "light" ? "from-violet-500 to-purple-500" : "from-violet-600 to-purple-600"}
                theme={theme}
                animationDelay="animation-delay-100"
              />
              
              <BlogCard 
                title="Island Hopping in Greece" 
                date="July 3, 2023"
                excerpt="Discovering the unique character of each Cycladic island from Mykonos to Milos."
                icon={<Camera size={20} />}
                color={theme === "light" ? "from-cyan-500 to-blue-500" : "from-cyan-600 to-blue-600"}
                theme={theme}
                animationDelay="animation-delay-200"
              />
            </div>
          </div>
          
          {/* Travel guides section with theme adaptive styling */}
          <div className="mb-12">
            <h2 className={cn(
              "text-2xl font-bold mb-6 animate-fade-in", 
              theme === "light" ? "text-slate-800" : "text-slate-100"
            )}>Travel Guides</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className={cn(
                "group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in animation-delay-100",
                theme === "light" 
                  ? "border-blue-100" 
                  : "border-blue-900/40 bg-slate-900/40 backdrop-blur-sm"
              )}>
                <div className={theme === "light" 
                  ? "h-4 bg-gradient-to-r from-blue-400 to-sky-400" 
                  : "h-4 bg-gradient-to-r from-blue-600 to-sky-600"
                }></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
                      theme === "light" 
                        ? "bg-sky-100 text-sky-600" 
                        : "bg-sky-900/50 text-sky-400"
                    )}>
                      <Map size={20} />
                    </div>
                    <div>
                      <h3 className={cn(
                        "text-xl font-semibold group-hover:text-blue-600 transition-colors mb-2",
                        theme === "light" ? "text-slate-800" : "text-slate-100"
                      )}>
                        Southeast Asia Travel Guide
                      </h3>
                      <p className={cn(
                        "mb-4",
                        theme === "light" ? "text-slate-600" : "text-slate-300"
                      )}>
                        Off-the-beaten-path destinations across Thailand, Vietnam, Cambodia, and Laos.
                      </p>
                      <Button size="sm" className={cn(
                        "transition-all hover:scale-105",
                        theme === "light"
                          ? "bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600"
                          : "bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700"
                      )}>
                        Read Guide
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className={cn(
                "group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in animation-delay-200",
                theme === "light" 
                  ? "border-indigo-100" 
                  : "border-indigo-900/40 bg-slate-900/40 backdrop-blur-sm"
              )}>
                <div className={theme === "light" 
                  ? "h-4 bg-gradient-to-r from-indigo-400 to-purple-400" 
                  : "h-4 bg-gradient-to-r from-indigo-600 to-purple-600"
                }></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
                      theme === "light" 
                        ? "bg-indigo-100 text-indigo-600" 
                        : "bg-indigo-900/50 text-indigo-400"
                    )}>
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h3 className={cn(
                        "text-xl font-semibold group-hover:text-indigo-600 transition-colors mb-2",
                        theme === "light" ? "text-slate-800" : "text-slate-100"
                      )}>
                        European City Breaks
                      </h3>
                      <p className={cn(
                        "mb-4",
                        theme === "light" ? "text-slate-600" : "text-slate-300"
                      )}>
                        Weekend getaway guides to Europe's most charming cities and cultural hubs.
                      </p>
                      <Button size="sm" className={cn(
                        "transition-all hover:scale-105",
                        theme === "light"
                          ? "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                          : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                      )}>
                        Read Guide
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Travel tips & resources section with theme support */}
          <div className="mb-12">
            <h2 className={cn(
              "text-2xl font-bold mb-6 animate-fade-in animation-delay-300", 
              theme === "light" ? "text-slate-800" : "text-slate-100"
            )}>Travel Tips & Resources</h2>
            
            <ScrollArea className={cn(
              "h-[320px] rounded-lg border p-4 animate-fade-in animation-delay-400",
              theme === "light" 
                ? "border-slate-200 bg-white" 
                : "border-slate-800 bg-slate-900/40 backdrop-blur-sm"
            )}>
              <div className="space-y-4 pr-3">
                <TipCard 
                  title="Packing Essentials" 
                  description="The ultimate packing checklist for any type of trip"
                  color={theme === "light" ? "text-emerald-600" : "text-emerald-400"}
                  bgColor={theme === "light" ? "bg-emerald-50" : "bg-emerald-900/20"}
                  borderColor={theme === "light" ? "border-emerald-100" : "border-emerald-900/30"}
                />
                
                <TipCard 
                  title="Budget Travel Hacks" 
                  description="Save money without sacrificing experiences"
                  color={theme === "light" ? "text-blue-600" : "text-blue-400"}
                  bgColor={theme === "light" ? "bg-blue-50" : "bg-blue-900/20"}
                  borderColor={theme === "light" ? "border-blue-100" : "border-blue-900/30"}
                />
                
                <TipCard 
                  title="Photography Tips" 
                  description="Capture stunning travel photos with any camera"
                  color={theme === "light" ? "text-amber-600" : "text-amber-400"}
                  bgColor={theme === "light" ? "bg-amber-50" : "bg-amber-900/20"}
                  borderColor={theme === "light" ? "border-amber-100" : "border-amber-900/30"}
                />
                
                <TipCard 
                  title="Solo Travel Guide" 
                  description="Everything you need to know about traveling alone"
                  color={theme === "light" ? "text-purple-600" : "text-purple-400"}
                  bgColor={theme === "light" ? "bg-purple-50" : "bg-purple-900/20"}
                  borderColor={theme === "light" ? "border-purple-100" : "border-purple-900/30"}
                />
                
                <TipCard 
                  title="Sustainable Travel" 
                  description="Minimize your environmental impact while exploring"
                  color={theme === "light" ? "text-teal-600" : "text-teal-400"}
                  bgColor={theme === "light" ? "bg-teal-50" : "bg-teal-900/20"}
                  borderColor={theme === "light" ? "border-teal-100" : "border-teal-900/30"}
                />
              </div>
            </ScrollArea>
          </div>
          
          {/* Newsletter signup with theme support */}
          <div className={cn(
            "rounded-2xl p-8 border animate-fade-in animation-delay-500",
            theme === "light" 
              ? "bg-gradient-to-r from-sky-50 to-indigo-50 border-blue-100" 
              : "bg-gradient-to-r from-sky-950/40 to-indigo-950/40 border-blue-900/30 backdrop-blur-sm"
          )}>
            <h3 className={cn(
              "text-2xl font-semibold mb-4",
              theme === "light" ? "text-slate-800" : "text-slate-100"
            )}>Travel With Me</h3>
            <p className={cn(
              "mb-6",
              theme === "light" ? "text-slate-600" : "text-slate-300"
            )}>
              Subscribe to my travel newsletter for exclusive guides, photography tips, and upcoming trip announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className={cn(
                  "flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  theme === "light" 
                    ? "border border-blue-200 bg-white" 
                    : "border border-blue-800 bg-slate-800/50 text-white placeholder:text-slate-400"
                )}
              />
              <Button className={cn(
                "transition-all hover:scale-105",
                theme === "light"
                  ? "bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600"
                  : "bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700"
              )}>
                <Send size={16} className="mr-2" /> Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Enhanced Destination card component with animation
const DestinationCard = ({ 
  title, 
  description, 
  image, 
  icon, 
  color, 
  bgColor,
  animationDelay
}: { 
  title: string; 
  description: string; 
  image: string; 
  icon: React.ReactNode; 
  color: string; 
  bgColor: string;
  animationDelay?: string;
}) => {
  const { theme } = useTheme();
  
  return (
    <div className={cn(
      "group relative h-[240px] rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-all animate-fade-in",
      theme === "light" ? "border-slate-200" : "border-slate-800",
      animationDelay
    )}>
      <div className={`absolute inset-0 ${image}`}></div>
      <div className={cn(
        "absolute inset-0",
        theme === "light" ? "bg-white/80" : "bg-slate-900/80"
      )}></div>
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className={`w-8 h-8 rounded-full ${bgColor} flex items-center justify-center ${color}`}>
          {icon}
        </div>
        
        <div>
          <h3 className={cn(
            "text-xl font-semibold mb-1 group-hover:text-blue-600 transition-colors",
            theme === "light" ? "text-slate-800" : "text-slate-100"
          )}>{title}</h3>
          <p className={cn(
            "text-sm mb-3",
            theme === "light" ? "text-slate-600" : "text-slate-300"
          )}>{description}</p>
          <Button size="sm" variant="ghost" className={cn(
            `${color} p-0 h-auto transition-all group-hover:translate-x-1`,
            theme === "light" ? "hover:bg-blue-50" : "hover:bg-blue-900/30"
          )}>
            Explore <ArrowRight size={14} className="ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

// Updated Tip card component with theme support
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
      <p className={cn(
        "text-sm",
        useTheme().theme === "light" ? "text-slate-600" : "text-slate-300"
      )}>{description}</p>
    </div>
  );
};

// New Blog Card Component
const BlogCard = ({
  title,
  date,
  excerpt,
  icon,
  color,
  theme,
  animationDelay
}: {
  title: string;
  date: string;
  excerpt: string;
  icon: React.ReactNode;
  color: string;
  theme: "light" | "dark";
  animationDelay?: string;
}) => {
  return (
    <div className={cn(
      "rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 animate-fade-in",
      animationDelay
    )}>
      <div className={cn(
        "flex flex-col h-full",
        theme === "light" 
          ? "bg-white border border-slate-200 shadow-sm" 
          : "bg-slate-900/40 border border-slate-800 backdrop-blur-sm"
      )}>
        <div className={`h-2 bg-gradient-to-r ${color}`}></div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className={cn(
              "text-xs font-medium",
              theme === "light" ? "text-slate-500" : "text-slate-400"
            )}>{date}</span>
            <span className={cn(
              "inline-flex items-center justify-center p-1 rounded-full",
              theme === "light" ? "bg-slate-100" : "bg-slate-800"
            )}>
              {icon}
            </span>
          </div>
          
          <h3 className={cn(
            "text-xl font-semibold mb-2 hover:text-blue-600 transition-colors",
            theme === "light" ? "text-slate-800" : "text-slate-100"
          )}>{title}</h3>
          
          <p className={cn(
            "mb-4",
            theme === "light" ? "text-slate-600" : "text-slate-300"
          )}>{excerpt}</p>
          
          <div className="flex justify-between items-center">
            <Button variant="ghost" size="sm" className={cn(
              "p-0 h-auto transition-all hover:translate-x-1",
              theme === "light" 
                ? "text-blue-600 hover:bg-transparent hover:text-blue-700" 
                : "text-blue-400 hover:bg-transparent hover:text-blue-300"
            )}>
              Read More <ArrowRight size={14} className="ml-1" />
            </Button>
            
            <Button variant="ghost" size="sm" className={cn(
              "p-2 h-auto rounded-full",
              theme === "light" 
                ? "text-rose-500 hover:bg-rose-50" 
                : "text-rose-400 hover:bg-rose-900/20"
            )}>
              <Heart size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
