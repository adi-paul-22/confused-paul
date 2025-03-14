
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/ThemeProvider";

// Import our page components
import Coding from "./pages/Coding";
import Art from "./pages/Art";
import Sustainability from "./pages/Sustainability";
import Football from "./pages/Football";
import Travel from "./pages/Travel";
import MbaPrep from "./pages/MbaPrep";
import Startup from "./pages/Startup";
import Admin from "./pages/Admin";

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
            
            {/* Category landing pages */}
            <Route path="/coding" element={<Coding />} />
            <Route path="/art" element={<Art />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/football" element={<Football />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/mba-prep" element={<MbaPrep />} />
            <Route path="/startup" element={<Startup />} />
            
            {/* Admin page */}
            <Route path="/admin" element={<Admin />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
