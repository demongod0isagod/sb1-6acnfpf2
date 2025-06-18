import { ArrowLeft, Diamond, Star, Shield, Zap, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Marketplace = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Diamond size={24} />,
      title: 'Sell Digital Products',
      description: 'Upload and sell your digital creations - templates, presets, courses, and more'
    },
    {
      icon: <Shield size={24} />,
      title: 'Secure Transactions',
      description: 'Protected payments with Razorpay integration and buyer protection'
    },
    {
      icon: <Zap size={24} />,
      title: 'Instant Downloads',
      description: 'Customers get immediate access to their purchases with secure download links'
    },
    {
      icon: <Users size={24} />,
      title: 'Creator Community',
      description: 'Connect with other creators and discover trending digital products'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Analytics Dashboard',
      description: 'Track your sales, revenue, and customer insights with detailed analytics'
    },
    {
      icon: <Star size={24} />,
      title: 'Quality Assurance',
      description: 'All products are reviewed to ensure high quality and authenticity'
    }
  ];

  const benefits = [
    'Zero listing fees - completely free to start',
    'Competitive commission rates',
    'Global reach with local payment options',
    'Marketing tools to promote your products',
    'Customer support and dispute resolution',
    'Mobile-optimized storefront'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-4">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Kingg</span>
          </button>
          
          <div className="flex items-center space-x-2">
            <Diamond className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              Kingg Marketplace
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Diamond className="text-white" size={32} />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Digital Marketplace - FREE
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Buy and sell authentic digital products. Just like Gumroad, but integrated into your content creation workflow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300">
              Start Selling Today
            </button>
            
            <button className="px-8 py-3 border border-purple-300 dark:border-purple-700 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-full font-medium hover:bg-purple-50 dark:hover:bg-gray-700 transition-all">
              Browse Products
            </button>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-lg max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="text-yellow-500" size={20} />
              <span className="font-semibold text-yellow-800 dark:text-yellow-300">Coming Soon</span>
            </div>
            <p className="text-yellow-700 dark:text-yellow-300">
              The marketplace is currently in development. Join our waitlist to be notified when it launches!
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Choose Kingg Marketplace?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Built for creators, by creators. Everything you need to monetize your digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Start Selling in Minutes
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                No complex setup or hidden fees. Upload your digital products and start earning immediately.
              </p>
              
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Star className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Diamond className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Join thousands of creators already monetizing their digital products.
                </p>
                <button className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300">
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                🔒 Enterprise-Grade Security
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Your products and payments are protected with military-grade encryption and fraud protection.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="text-green-600 dark:text-green-400" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Secure Payments</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Razorpay integration with PCI DSS compliance
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Fraud Protection</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Advanced fraud detection and chargeback protection
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Diamond className="text-purple-600 dark:text-purple-400" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Protection</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    GDPR compliant with encrypted file storage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Diamond className="w-6 h-6 text-purple-500" />
            <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              Kingg Marketplace
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © 2025 Kingg. All rights reserved. Secure digital marketplace for creators.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Marketplace;