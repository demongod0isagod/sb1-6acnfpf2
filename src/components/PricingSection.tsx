import { Crown } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Hobby',
      price: '$19',
      period: '/mo',
      description: 'Perfect for getting started',
      features: [
        '50 AI videos per month',
        '40 minutes of export',
        '30 voiceover minutes',
        '100 AI images',
        'Basic analytics',
        'Community support'
      ]
    },
    {
      name: 'Clipper',
      price: '$39',
      period: '/mo',
      description: 'Most popular for creators',
      isPopular: true,
      features: [
        '150 AI videos per month',
        '2 hours of export',
        '120 voiceover minutes',
        '300 AI images',
        'Priority support',
        'Advanced analytics'
      ]
    },
    {
      name: 'Pro',
      price: '$79',
      period: '/mo',
      description: 'For power users',
      features: [
        '250 AI videos per month',
        '3 hours of export',
        '180 voiceover minutes',
        '500 AI images',
        'API access',
        'Custom templates'
      ]
    },
    {
      name: 'Agency',
      price: '$199',
      period: '/mo',
      description: 'For teams and businesses',
      features: [
        'Unlimited AI videos',
        'Unlimited export time',
        'Unlimited voiceover',
        'Unlimited AI images',
        'Dedicated manager',
        'Custom AI training'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Scale your content creation with our flexible pricing options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg border ${
                plan.isPopular 
                  ? 'border-blue-500 dark:border-blue-400' 
                  : 'border-gray-100 dark:border-gray-800'
              } p-8 transition-all duration-300 hover:shadow-xl hover:scale-105`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full flex items-center gap-1">
                    <Crown size={16} />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-end justify-center mb-2">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-500 dark:text-gray-400 ml-1">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 px-6 rounded-full text-center font-medium transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 text-white dark:text-gray-900'
                } hover:opacity-90`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;