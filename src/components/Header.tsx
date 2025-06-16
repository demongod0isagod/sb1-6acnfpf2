import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Menu, X, Crown } from 'lucide-react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Crown className="w-8 h-8 text-yellow-500" />
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-pink-400 text-transparent bg-clip-text">
            Kingg
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('tools')}
            className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
          >
            AI Tools
          </button>
          <button 
            onClick={() => scrollToSection('packs')}
            className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
          >
            Content Packs
          </button>
          <button 
            onClick={() => scrollToSection('templates')}
            className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
          >
            Video Topics
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
          >
            Features
          </button>
          <button
            onClick={scrollToPricing}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400 text-white px-4 py-2 rounded-full hover:shadow-lg hover:opacity-90 transition-all"
          >
            Get Started
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 dark:text-gray-200"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[300px] py-4' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection('tools')}
            className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 py-2 transition-colors text-left"
          >
            AI Tools
          </button>
          <button 
            onClick={() => scrollToSection('packs')}
            className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 py-2 transition-colors text-left"
          >
            Content Packs
          </button>
          <button 
            onClick={() => scrollToSection('templates')}
            className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 py-2 transition-colors text-left"
          >
            Video Topics
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 py-2 transition-colors text-left"
          >
            Features
          </button>
          <button
            onClick={scrollToPricing}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400 text-white px-4 py-2 rounded-full hover:shadow-lg hover:opacity-90 transition-all"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;