// =============================================================
// MR. ASHKELON — App Router
// All routes for the Mr. Ashkelon real estate website
// =============================================================

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import FeaturedProperties from "./pages/FeaturedProperties";
import PropertyDetail from "./pages/PropertyDetail";
import AboutAshkelon from "./pages/AboutAshkelon";
import Resources from "./pages/Resources";
import BlogArticle from "./pages/BlogArticle";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BrizaPenthouse from "./pages/BrizaPenthouse";
import JerusalemProject from "./pages/JerusalemProject";
import GenesisJerusalem from "./pages/GenesisJerusalem";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";

function Router() {
  return (
    <>
      <ScrollToTop />
      <WhatsAppButton />
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/featured-properties" component={FeaturedProperties} />
      <Route path="/property/:slug" component={PropertyDetail} />
      <Route path="/about-ashkelon" component={AboutAshkelon} />
      <Route path="/resources" component={Resources} />
      <Route path="/resources/:slug" component={BlogArticle} />
      <Route path="/contact" component={Contact} />
      <Route path="/briza-penthouse" component={BrizaPenthouse} />
      <Route path="/jerusalem-project" component={JerusalemProject} />
      <Route path="/genesis-jerusalem" component={GenesisJerusalem} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
