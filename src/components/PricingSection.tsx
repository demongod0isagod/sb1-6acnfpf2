import { Crown, Check, Star } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Hobby',
      price: '$19',
      period: '/mo',
      description: 'Perfect for getting started',
      features: [
        '15 autopilot videos per month',
        '40 minutes of export',
        '30 voiceover minutes',
        '100 AI images',
        'Access to all copyright-free clips'
      ],
      tools: [
        'Reel Factory',
        'HookMagnet', 
        'ReelWriter',
        'VidVoice AI',
        'TrendSnipe'
      ],
      buttonText: 'Start Hobby Plan',
      popular: false
    },
    {
      name: 'Clipper',
      price: '$39',
      period: '/mo',
      description: 'Most popular for creators',
      isPopular: true,
      features: [
        '25 autopilot videos per month',
        '2 hours of export',
        '120 voiceover minutes',
        '300 AI images',
        'Unlimited copyright-free clips'
      ],
      tools: [
        'All Hobby tools plus:',
        'StoryReel',
        'PodcastScripter'
      ],
      buttonText: 'Start Clipper Plan',
      popular: true
    },
    {
      name: 'Pro',
      price: '$79',
      period: '/mo',
      description: 'For power users',
      features: [
        '75 autopilot videos per month',
        '3 hours of export',
        '180 voiceover minutes',
        '500 AI images',
        'Unlimited copyright-free clips'
      ],
      tools: [
        'All Clipper tools plus:',
        'AdCopyX',
        'SmartResume AI'
      ],
      buttonText: 'Start Pro Plan',
      popular: false
    },
    {
      name: 'Agency',
      price: '$199',
      period: '/mo',
      description: 'For teams and businesses',
      features: [
        '100 autopilot videos per month',
        '5 hours of export',
        '260 voiceover minutes',
        '1000 AI images',
        'Unlimited copyright-free clips'
      ],
      tools: [
        'All Pro tools plus:',
        'BrandBrew',
        'AutoAgency',
        'Team collaboration features'
      ],
      buttonText: 'Start Agency Plan',
      popular: false
    }
  ];

  const handlePlanSelection = (planName: string) => {
    // In a real application, this would redirect to a payment processor
    alert(`Redirecting to payment for ${planName} plan. In production, this would integrate with Stripe, PayPal, or similar payment processor.`);
  };

  const scrollToMarketplace = () => {
    // This would navigate to the digital marketplace page
    alert('Navigating to Digital Marketplace... In production, this would open the marketplace page.');
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Scale your content creation with our flexible pricing options
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="text-yellow-500" size={20} />
              <span className="font-semibold text-blue-800 dark:text-blue-300">Subscription Required</span>
            </div>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              All AI tools, content packs, and features require an active subscription. Choose the plan that fits your content creation needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg border ${
                plan.isPopular 
                  ? 'border-blue-500 dark:border-blue-400 transform scale-105' 
                  : 'border-gray-100 dark:border-gray-800'
              } p-6 transition-all duration-300 hover:shadow-xl hover:scale-105`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full flex items-center gap-1">
                    <Crown size={16} />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
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

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Features:</h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-700 dark:text-gray-300"
                    >
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">AI Tools Included:</h4>
                <ul className="space-y-2">
                  {plan.tools.map((tool, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-700 dark:text-gray-300"
                    >
                      <Star className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => handlePlanSelection(plan.name)}
                className={`w-full py-3 px-6 rounded-full text-center font-medium transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 text-white dark:text-gray-900 hover:opacity-90'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Digital Marketplace Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 shadow-lg border border-purple-100 dark:border-purple-800">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Crown className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🛍️ Digital Marketplace - FREE
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Buy and sell digital products like templates, presets, and content packs. Just like Gumroad, but integrated into your content creation workflow.
            </p>
            <button 
              onClick={scrollToMarketplace}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Explore Marketplace
            </button>
          </div>
        </div>

        <div className="mt-16 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🔒 Subscription Benefits
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Full Access</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Unlock all AI tools, content packs, and premium features
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Copyright Free</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  All content is copyright-free and safe for commercial use
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Regular Updates</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  New tools, content packs, and features added regularly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;