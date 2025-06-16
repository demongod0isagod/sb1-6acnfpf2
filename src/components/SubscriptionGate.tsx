import { Lock, Crown, Star } from 'lucide-react';

interface SubscriptionGateProps {
  title: string;
  description: string;
  onUpgrade: () => void;
}

const SubscriptionGate = ({ title, description, onUpgrade }: SubscriptionGateProps) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-8 text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Lock className="text-white" size={32} />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {description}
        </p>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Crown className="text-yellow-500" size={20} />
            <span className="font-semibold text-blue-800 dark:text-blue-300">Premium Features Include:</span>
          </div>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>• All AI-powered content tools</li>
            <li>• Unlimited copyright-free clips</li>
            <li>• Voice cloning & generation</li>
            <li>• Priority support</li>
          </ul>
        </div>
        
        <button
          onClick={onUpgrade}
          className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 mb-4"
        >
          <Star className="inline mr-2" size={16} />
          Choose Your Plan
        </button>
        
        <p className="text-xs text-gray-500 dark:text-gray-400">
          7-day money-back guarantee • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default SubscriptionGate;