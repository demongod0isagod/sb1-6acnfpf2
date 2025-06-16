import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { SubscriptionProvider } from './contexts/SubscriptionContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ToolsSection from './components/ToolsSection';
import ContentPacksSection from './components/ContentPacksSection';
import TemplatesSection from './components/TemplatesSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import SubscriptionGate from './components/SubscriptionGate';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { useSubscription } from './contexts/SubscriptionContext';

function HomePage() {
  const { showSubscriptionGate, setShowSubscriptionGate } = useSubscription();

  const handleUpgrade = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
    setShowSubscriptionGate(false);
  };

  return (
    <>
      <Header />
      <main className="w-full">
        <Hero />
        <ToolsSection />
        <ContentPacksSection />
        <TemplatesSection />
        <FeaturesSection />
        <PricingSection />
      </main>
      <Footer />
      
      {showSubscriptionGate && (
        <SubscriptionGate
          title="Premium Access Required"
          description="Unlock all AI tools and copyright-free content with a subscription plan."
          onUpgrade={handleUpgrade}
        />
      )}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <SubscriptionProvider>
        <Router>
          <div className="min-h-screen w-full transition-colors duration-300">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Routes>
          </div>
        </Router>
      </SubscriptionProvider>
    </ThemeProvider>
  );
}

export default App;