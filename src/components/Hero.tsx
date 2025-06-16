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
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          {/* Hero content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4 inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 px-3 py-1 text-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              <span className="text-gray-700 dark:text-gray-300">Rule your content kingdom</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-400 dark:to-pink-400 bg-clip-text text-transparent">
              Create viral content with AI superpowers
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Generate hooks, scripts, voices, and complete videos with our suite of AI tools. Get more engagement, more followers, and more results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
          
          {/* Hand-drawn crown doodle art */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center p-8">
                {/* Hand-drawn Crown Doodle Art */}
                <svg width="320" height="240" viewBox="0 0 320 240" className="animate-pulse">
                  <defs>
                    <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <linearGradient id="gemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                  </defs>
                  
                  {/* Hand-drawn style crown base with slight imperfections */}
                  <path d="M60 150 Q62 148 65 150 L255 150 Q258 148 260 150 L248 180 Q246 182 244 180 L76 180 Q74 182 72 180 Z" 
                        fill="url(#crownGradient)" 
                        stroke="#1e40af" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"/>
                  
                  {/* Hand-drawn crown points with organic curves */}
                  <path d="M60 150 Q62 148 65 145 L85 85 Q87 82 90 85 L105 120 Q107 123 110 120 L160 65 Q162 62 165 65 L210 120 Q212 123 215 120 L230 85 Q232 82 235 85 L255 145 Q257 148 260 150" 
                        fill="url(#crownGradient)" 
                        stroke="#1e40af" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"/>
                  
                  {/* Main center gem with hand-drawn style */}
                  <circle cx="160" cy="95" r="18" fill="url(#gemGradient)" stroke="#d97706" strokeWidth="3"/>
                  <circle cx="160" cy="95" r="10" fill="#fef3c7" opacity="0.8"/>
                  <path d="M150 95 Q160 85 170 95 Q160 105 150 95" fill="#fff" opacity="0.6"/>
                  
                  {/* Side gems with slight variations */}
                  <circle cx="95" cy="125" r="12" fill="#ef4444" stroke="#dc2626" strokeWidth="2"/>
                  <circle cx="95" cy="125" r="6" fill="#fecaca" opacity="0.7"/>
                  
                  <circle cx="225" cy="125" r="12" fill="#10b981" stroke="#059669" strokeWidth="2"/>
                  <circle cx="225" cy="125" r="6" fill="#a7f3d0" opacity="0.7"/>
                  
                  {/* Small decorative gems */}
                  <circle cx="115" cy="100" r="6" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="1"/>
                  <circle cx="205" cy="100" r="6" fill="#06b6d4" stroke="#0891b2" strokeWidth="1"/>
                  
                  {/* Hand-drawn crown band decoration */}
                  <g fill="#fbbf24" stroke="#f59e0b" strokeWidth="1">
                    <path d="M80 155 L88 155 L84 163 Z" transform="rotate(45 84 159)"/>
                    <path d="M120 155 L128 155 L124 163 Z" transform="rotate(45 124 159)"/>
                    <path d="M160 155 L168 155 L164 163 Z" transform="rotate(45 164 159)"/>
                    <path d="M200 155 L208 155 L204 163 Z" transform="rotate(45 204 159)"/>
                    <path d="M240 155 L248 155 L244 163 Z" transform="rotate(45 244 159)"/>
                  </g>
                  
                  {/* Hand-drawn sparkles around crown */}
                  <g fill="#fbbf24" opacity="0.8" stroke="#f59e0b" strokeWidth="1">
                    <path d="M35 75 L38 82 L45 80 L38 87 L35 94 L32 87 L25 80 L32 82 Z"/>
                    <path d="M285 95 L288 102 L295 100 L288 107 L285 114 L282 107 L275 100 L282 102 Z"/>
                    <path d="M70 45 L73 52 L80 50 L73 57 L70 64 L67 57 L60 50 L67 52 Z"/>
                    <path d="M250 55 L253 62 L260 60 L253 67 L250 74 L247 67 L240 60 L247 62 Z"/>
                  </g>
                  
                  {/* Floating sparkles with hand-drawn style */}
                  <g fill="#3b82f6" opacity="0.6">
                    <circle cx="45" cy="110" r="3"/>
                    <circle cx="275" cy="130" r="3"/>
                    <circle cx="80" cy="60" r="2"/>
                    <circle cx="240" cy="70" r="2"/>
                    <circle cx="50" cy="180" r="2"/>
                    <circle cx="270" cy="170" r="2"/>
                  </g>
                  
                  {/* Hand-drawn decorative lines and doodles */}
                  <g stroke="#6b7280" strokeWidth="2" fill="none" opacity="0.3" strokeLinecap="round">
                    <path d="M20 190 Q35 185 50 190 Q65 195 80 190"/>
                    <path d="M240 190 Q255 185 270 190 Q285 195 300 190"/>
                    <path d="M15 100 Q30 95 45 100"/>
                    <path d="M275 120 Q290 115 305 120"/>
                    <path d="M25 140 Q35 135 45 140"/>
                    <path d="M275 140 Q285 135 295 140"/>
                  </g>
                  
                  {/* Hand-drawn text elements */}
                  <text x="160" y="220" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400 text-sm font-handwriting">
                    Rule Your Kingdom
                  </text>
                </svg>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-medium mb-2">Crown Your Content</h3>
                <p className="text-gray-200 text-sm mb-4">Rule the digital kingdom with AI-powered creativity</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">AI-Powered</span>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs">👑</div>
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">✨</div>
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">🎬</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;