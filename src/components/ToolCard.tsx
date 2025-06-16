import { useState } from 'react';
import { Lock } from 'lucide-react';
import { Tool } from '../types';
import { useSubscription } from '../contexts/SubscriptionContext';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard = ({ tool }: ToolCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isSubscribed, setShowSubscriptionGate } = useSubscription();

  const handleToolClick = () => {
    if (!isSubscribed) {
      setShowSubscriptionGate(true);
    } else {
      // In a real app, this would navigate to the tool
      alert(`Opening ${tool.name}... In production, this would navigate to the tool interface.`);
    }
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleToolClick}
    >
      <div className={`h-1 bg-gradient-to-r ${tool.gradient} transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-60'}`}></div>
      
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isHovered ? tool.bgColorHover : tool.bgColor} text-white transition-colors duration-300 relative`}>
            {tool.icon}
            {!isSubscribed && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                <Lock size={10} className="text-white" />
              </div>
            )}
          </div>
          
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
            {tool.category}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
          {tool.emoji} {tool.name}
          {!isSubscribed && <Lock size={16} className="ml-2 text-yellow-500" />}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {tool.description}
        </p>
        
        <div className="pt-2 mt-auto flex items-center justify-between">
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center gap-1 group-hover:underline transition-colors">
            {isSubscribed ? (
              <>
                <span>Open Tool</span>
              </>
            ) : (
              <>
                <Lock size={14} />
                <span>Get Access</span>
              </>
            )}
          </button>
          
          <div className="flex items-center">
            <div className={`w-2 h-2 rounded-full ${tool.isNew ? 'bg-green-500' : 'bg-blue-500'} mr-1`}></div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {tool.isNew ? 'New' : 'Popular'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;