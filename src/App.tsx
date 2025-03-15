
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/ThemeProvider";

// Import our new page components
import Coding from "./pages/Coding";
import Art from "./pages/Art";
import Sustainability from "./pages/Sustainability";
import Football from "./pages/Football";
import Travel from "./pages/Travel";
import Admin from "./pages/Admin";
import MbaPrep from "./pages/MbaPrep";
import StartupIdeas from "./pages/StartupIdeas";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* New landing pages for each category */}
            <Route path="/coding" element={<Coding />} />
            <Route path="/art" element={<Art />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/football" element={<Football />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/mba-prep" element={<MbaPrep />} />
            <Route path="/startup-ideas" element={<StartupIdeas />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
