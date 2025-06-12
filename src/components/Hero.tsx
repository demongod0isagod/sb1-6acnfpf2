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
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center p-8">
                {/* Crown Doodle Art */}
                <svg width="280" height="200" viewBox="0 0 280 200" className="animate-pulse">
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
                  <path d="M50 130 L230 130 L220 155 L60 155 Z" fill="url(#crownGradient)" stroke="#1e40af" strokeWidth="3"/>
                  
                  {/* Crown points */}
                  <path d="M50 130 L75 75 L95 105 L140 55 L185 105 L205 75 L230 130" fill="url(#crownGradient)" stroke="#1e40af" strokeWidth="3"/>
                  
                  {/* Main center gem */}
                  <circle cx="140" cy="85" r="15" fill="url(#gemGradient)" stroke="#d97706" strokeWidth="3"/>
                  <circle cx="140" cy="85" r="8" fill="#fef3c7" opacity="0.8"/>
                  
                  {/* Side gems */}
                  <circle cx="85" cy="115" r="10" fill="#ef4444" stroke="#dc2626" strokeWidth="2"/>
                  <circle cx="195" cy="115" r="10" fill="#10b981" stroke="#059669" strokeWidth="2"/>
                  
                  {/* Small decorative gems */}
                  <circle cx="105" cy="90" r="5" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="1"/>
                  <circle cx="175" cy="90" r="5" fill="#06b6d4" stroke="#0891b2" strokeWidth="1"/>
                  
                  {/* Crown band decoration */}
                  <rect x="70" y="135" width="8" height="8" fill="#fbbf24" transform="rotate(45 74 139)"/>
                  <rect x="110" y="135" width="8" height="8" fill="#fbbf24" transform="rotate(45 114 139)"/>
                  <rect x="140" y="135" width="8" height="8" fill="#fbbf24" transform="rotate(45 144 139)"/>
                  <rect x="170" y="135" width="8" height="8" fill="#fbbf24" transform="rotate(45 174 139)"/>
                  <rect x="210" y="135" width="8" height="8" fill="#fbbf24" transform="rotate(45 214 139)"/>
                  
                  {/* Sparkles around crown */}
                  <g fill="#fbbf24" opacity="0.8">
                    <path d="M30 65 L33 70 L38 68 L33 73 L30 78 L27 73 L22 68 L27 70 Z"/>
                    <path d="M250 85 L253 90 L258 88 L253 93 L250 98 L247 93 L242 88 L247 90 Z"/>
                    <path d="M60 40 L63 45 L68 43 L63 48 L60 53 L57 48 L52 43 L57 45 Z"/>
                    <path d="M220 50 L223 55 L228 53 L223 58 L220 63 L217 58 L212 53 L217 55 Z"/>
                  </g>
                  
                  {/* Floating sparkles with animation effect */}
                  <g fill="#3b82f6" opacity="0.6">
                    <circle cx="40" cy="100" r="3"/>
                    <circle cx="240" cy="120" r="3"/>
                    <circle cx="70" cy="55" r="2"/>
                    <circle cx="210" cy="65" r="2"/>
                  </g>
                  
                  {/* Doodle-style decorative lines */}
                  <g stroke="#6b7280" strokeWidth="2" fill="none" opacity="0.3">
                    <path d="M20 170 Q30 165 40 170 T60 170"/>
                    <path d="M220 170 Q230 165 240 170 T260 170"/>
                    <path d="M15 90 Q25 85 35 90"/>
                    <path d="M245 110 Q255 105 265 110"/>
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