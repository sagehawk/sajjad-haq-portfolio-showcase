
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseStudyGamerGrave from "./pages/CaseStudyGamerGrave";
import CaseStudyArticulateRefine from "./pages/CaseStudyArticulateRefine";
import CaseStudySimplePhonics from "./pages/CaseStudySimplePhonics";
import CaseStudySocialDojo from "./pages/CaseStudySocialDojo";
import { ThemeProvider } from "./components/ThemeProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="sajjad-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/case-study/gamergrave" element={<CaseStudyGamerGrave />} />
            <Route path="/case-study/articulate-refine" element={<CaseStudyArticulateRefine />} />
            <Route path="/case-study/simple-phonics" element={<CaseStudySimplePhonics />} />
            <Route path="/case-study/social-dojo" element={<CaseStudySocialDojo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
