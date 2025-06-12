import { useTheme } from '../contexts/ThemeContext';
import { PlayCircle } from 'lucide-react';

const Hero = () => {
  const { theme } = useTheme();

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
              <button className="px-6 py-3 rounded-full font-medium bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-500 dark:to-pink-500 text-white hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-pink-500/25 transition-all duration-300">
                Start creating for free
              </button>
              
              <button className="px-6 py-3 rounded-full font-medium border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2">
                <PlayCircle size={20} />
                <span>See how it works</span>
              </button>
            </div>
          </div>
          
          {/* Hero crown doodle art */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                {/* Crown Doodle Art */}
                <svg width="240" height="180" viewBox="0 0 240 180" className="animate-pulse">
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
                  
                  {/* Crown base */}
                  <path d="M40 120 L200 120 L190 145 L50 145 Z" fill="url(#crownGradient)" stroke="#1e40af" strokeWidth="2"/>
                  
                  {/* Crown points */}
                  <path d="M40 120 L65 70 L85 95 L120 50 L155 95 L175 70 L200 120" fill="url(#crownGradient)" stroke="#1e40af" strokeWidth="2"/>
                  
                  {/* Main center gem */}
                  <circle cx="120" cy="80" r="12" fill="url(#gemGradient)" stroke="#d97706" strokeWidth="2"/>
                  <circle cx="120" cy="80" r="6" fill="#fef3c7" opacity="0.8"/>
                  
                  {/* Side gems */}
                  <circle cx="75" cy="105" r="8" fill="#ef4444" stroke="#dc2626" strokeWidth="1"/>
                  <circle cx="165" cy="105" r="8" fill="#10b981" stroke="#059669" strokeWidth="1"/>
                  
                  {/* Small decorative gems */}
                  <circle cx="95" cy="85" r="4" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="1"/>
                  <circle cx="145" cy="85" r="4" fill="#06b6d4" stroke="#0891b2" strokeWidth="1"/>
                  
                  {/* Crown band decoration */}
                  <rect x="60" y="125" width="6" height="6" fill="#fbbf24" transform="rotate(45 63 128)"/>
                  <rect x="90" y="125" width="6" height="6" fill="#fbbf24" transform="rotate(45 93 128)"/>
                  <rect x="120" y="125" width="6" height="6" fill="#fbbf24" transform="rotate(45 123 128)"/>
                  <rect x="150" y="125" width="6" height="6" fill="#fbbf24" transform="rotate(45 153 128)"/>
                  <rect x="180" y="125" width="6" height="6" fill="#fbbf24" transform="rotate(45 183 128)"/>
                  
                  {/* Sparkles around crown */}
                  <g fill="#fbbf24" opacity="0.8">
                    <path d="M25 60 L27 64 L31 62 L27 66 L25 70 L23 66 L19 62 L23 64 Z"/>
                    <path d="M215 80 L217 84 L221 82 L217 86 L215 90 L213 86 L209 82 L213 84 Z"/>
                    <path d="M50 35 L52 39 L56 37 L52 41 L50 45 L48 41 L44 37 L48 39 Z"/>
                    <path d="M190 45 L192 49 L196 47 L192 51 L190 55 L188 51 L184 47 L188 49 Z"/>
                  </g>
                  
                  {/* Floating sparkles with animation effect */}
                  <g fill="#3b82f6" opacity="0.6">
                    <circle cx="35" cy="90" r="2"/>
                    <circle cx="205" cy="110" r="2"/>
                    <circle cx="60" cy="50" r="1.5"/>
                    <circle cx="180" cy="60" r="1.5"/>
                  </g>
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