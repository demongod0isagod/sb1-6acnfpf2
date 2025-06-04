import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ToolsSection from './components/ToolsSection';
import ContentPacksSection from './components/ContentPacksSection';
import TemplatesSection from './components/TemplatesSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function HomePage() {
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
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen w-full transition-colors duration-300">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;