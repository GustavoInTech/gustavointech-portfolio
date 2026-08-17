import { useEffect } from "react";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => {
  useEffect(() => {
    // Cria a tag do AdSense dinamicamente
    const script = document.createElement("script");
    script.src = "https://googlesyndication.com";
    script.async = true;
    script.crossOrigin = "anonymous";
    
    // Força a tag a entrar no cabeçalho do site
    document.head.appendChild(script);

    // Limpa o script se o usuário mudar de página
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;
