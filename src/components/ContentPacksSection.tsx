import { useState } from 'react';
import { contentPacks } from '../data/contentPacks';
import { ArrowRight } from 'lucide-react';

const ContentPacksSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredPacks = activeCategory === 'all' 
    ? contentPacks 
    : contentPacks.filter(pack => pack.category === activeCategory);

  return (
    <section id="packs" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-400 dark:to-pink-400 bg-clip-text text-transparent">
            Content Packs
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready-to-use content collections for your next viral post
          </p>
        </div>

        {/* Category filters */}
        <div className="flex justify-center mb-8 space-x-2 overflow-x-auto pb-2">
          {['all', 'gaming', 'anime', 'movie'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Content packs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPacks.map((pack) => (
            <div 
              key={pack.id}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={pack.image} 
                  alt={pack.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full">
                      {pack.category.charAt(0).toUpperCase() + pack.category.slice(1)}
                    </span>
                    <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                      {pack.clipCount} clips
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {pack.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {pack.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore pack <ArrowRight size={16} />
                  </button>
                  
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {pack.isNew ? 'New' : `${pack.downloads.toLocaleString()} downloads`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 rounded-full font-medium border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all">
            Browse all content packs
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentPacksSection;