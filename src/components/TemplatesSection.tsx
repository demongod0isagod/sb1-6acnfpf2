import { templates } from '../data/templates';
import { ArrowRight } from 'lucide-react';

const TemplatesSection = () => {
  return (
    <section id="templates" className="py-8 md:py-12 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-400 dark:to-pink-400 bg-clip-text text-transparent">
            Video Topics & Ideas
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Trending topics and ideas for your next viral video
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
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
                
                <div className="absolute inset-0 flex flex-col justify-end p-2">
                  <h3 className="text-xs font-semibold text-white mb-1 line-clamp-2">
                    {template.title}
                  </h3>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs px-1.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white">
                      {template.category}
                    </span>
                    
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1 rounded-full bg-blue-600 text-white hover:bg-blue-700">
                      <ArrowRight size={10} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;