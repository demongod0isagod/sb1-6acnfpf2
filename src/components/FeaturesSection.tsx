import { features } from '../data/features';
import { Check } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-400 dark:to-pink-400 bg-clip-text text-transparent">
            Special Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need for professional content creation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {feature.description}
              </p>
              
              <ul className="mt-auto space-y-2">
                {feature.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to create viral content?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Join thousands of content creators who are already using CreativAI to power their content strategy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 rounded-full font-medium bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-500 dark:to-pink-500 text-white hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-pink-500/25 transition-all duration-300">
                  Start creating for free
                </button>
                
                <button className="px-6 py-3 rounded-full font-medium border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all">
                  View pricing
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-center lg:justify-end">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">100K+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Active users</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">2M+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Content created</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">98%</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Satisfaction</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">10x</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Faster creation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;