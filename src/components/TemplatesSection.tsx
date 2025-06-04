import { templates } from '../data/templates';
import { ArrowRight } from 'lucide-react';

const TemplatesSection = () => {
  return (
    <section id="templates" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-400 dark:to-pink-400 bg-clip-text text-transparent">
            Pre-designed Reel Templates
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready-to-use templates for viral-worthy content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div 
              key={template.id}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={template.image} 
                  alt={template.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {template.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {template.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white">
                      {template.category}
                    </span>
                    
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1 rounded-full bg-blue-600 text-white text-sm flex items-center gap-1 hover:bg-blue-700">
                      Use template <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 rounded-full font-medium bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-500 dark:to-pink-500 text-white hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-pink-500/25 transition-all duration-300">
            Explore all templates
          </button>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;