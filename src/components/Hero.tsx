import { useTheme } from '../contexts/ThemeContext';
import { PlayCircle } from 'lucide-react';

const Hero = () => {
  const { theme } = useTheme();

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 opacity-90"></div>
        
        {/* Dark mode specific background elements */}
        {theme === 'dark' && (
          <>
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent blur-3xl"></div>
            <div className="absolute top-0 right-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent blur-3xl"></div>
          </>
        )}
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-16 pb-24">
        <div className="relative z-10 text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 px-3 py-1 text-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            <span className="text-gray-700 dark:text-gray-300">Rule your content kingdom</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-400 dark:to-pink-400 bg-clip-text text-transparent">
            Create viral content with AI superpowers
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Generate hooks, scripts, and complete videos with our suite of AI tools. Get more engagement, more followers, and more results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToPricing}
              className="px-6 py-3 rounded-full font-medium bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-500 dark:to-pink-500 text-white hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-pink-500/25 transition-all duration-300"
            >
              Start creating for free
            </button>
            
            <button 
              onClick={scrollToPricing}
              className="px-6 py-3 rounded-full font-medium border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2"
            >
              <PlayCircle size={20} />
              <span>See how it works</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;