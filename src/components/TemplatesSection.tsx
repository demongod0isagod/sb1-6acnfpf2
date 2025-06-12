import { templates } from '../data/templates';
import { ArrowRight } from 'lucide-react';

const TemplatesSection = () => {
  return (
    <section id="templates" className="py-12 md:py-16 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-400 dark:to-pink-400 bg-clip-text text-transparent">
            Video Topics & Ideas
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Trending topics and ideas for your next viral video
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {templates.map((template) => (
            <div 
              key={template.id}
              className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={template.image} 
                  alt={template.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-3">
                  <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2">
                    {template.title}
                  </h3>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white">
                      {template.category}
                    </span>
                    
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1 rounded-full bg-blue-600 text-white hover:bg-blue-700">
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button className="px-5 py-2 rounded-full font-medium bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-500 dark:to-pink-500 text-white hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-pink-500/25 transition-all duration-300 text-sm">
            Explore all topics
          </button>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;