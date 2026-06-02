// =============================================================
// MR. ASHKELON — App Router
// All routes for the Mr. Ashkelon real estate website
// =============================================================

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Redirect } from "wouter";
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
import AboutJerusalem from "./pages/AboutJerusalem";
import Resources from "./pages/Resources";
import BlogArticle from "./pages/BlogArticle";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import JerusalemProject from "./pages/JerusalemProject";
import GenesisJerusalem from "./pages/GenesisJerusalem";
import NiyaProject from "./pages/NiyaProject";
import ViaAshkelon from "./pages/ViaAshkelon";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <>
      <ScrollToTop />
      <WhatsAppButton />
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/featured-properties" component={FeaturedProperties} />
      <Route path="/properties">{() => <Redirect to="/featured-properties" />}</Route>
      <Route path="/property/:slug" component={PropertyDetail} />
      <Route path="/about-ashkelon" component={AboutAshkelon} />
      <Route path="/about-jerusalem" component={AboutJerusalem} />
      <Route path="/resources" component={Resources} />
      <Route path="/resources/:slug" component={BlogArticle} />
      <Route path="/contact" component={Contact} />
      <Route path="/jerusalem-project" component={JerusalemProject} />
      <Route path="/genesis-jerusalem" component={GenesisJerusalem} />
      <Route path="/niya" component={NiyaProject} />
      <Route path="/niya-jerusalem" component={NiyaProject} />
      <Route path="/via-ashkelon" component={ViaAshkelon} />
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
