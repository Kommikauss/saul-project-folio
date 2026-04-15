import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Eraisikutele from "./pages/Eraisikutele.tsx";
import Korteruhistutele from "./pages/Korteruhistutele.tsx";
import HooldusJaRemont from "./pages/HooldusJaRemont.tsx";
import Elektritood from "./pages/Elektritood.tsx";
import Torutood from "./pages/Torutood.tsx";
import EvLaadimine from "./pages/EvLaadimine.tsx";
import QuotePage from "./pages/QuotePage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/pakkumine" element={<QuotePage />} />
              <Route path="/eraisikutele" element={<Eraisikutele />} />
              <Route path="/korteruhistutele" element={<Korteruhistutele />} />
              <Route path="/hooldus-ja-remont" element={<HooldusJaRemont />} />
              <Route path="/elektritood" element={<Elektritood />} />
              <Route path="/torutood" element={<Torutood />} />
              <Route path="/ev-laadimine" element={<EvLaadimine />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
