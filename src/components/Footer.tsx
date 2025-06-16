import { useTheme } from '../contexts/ThemeContext';
import { Crown } from 'lucide-react';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <Crown className="w-6 h-6 text-yellow-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-pink-400 text-transparent bg-clip-text">
                Kingg
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              AI-powered content creation platform for creators and brands to rule their digital kingdom
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Tools
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#tools" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  AI Tools
                </a>
              </li>
              <li>
                <a href="#packs" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Content Packs
                </a>
              </li>
              <li>
                <a href="#templates" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Video Topics
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="mailto:kinggcares.ai@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Kingg. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="/privacy" className="text-gray-500 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-500 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;