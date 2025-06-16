import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-black py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 mb-8 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>
        
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">Effective Date: January 1, 2025</p>
          
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">1. Information We Collect</h2>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-3">
                <li><strong>Account Information:</strong> Name, email address, username, and password when you create an account</li>
                <li><strong>Profile Information:</strong> Profile picture, bio, and other information you choose to provide</li>
                <li><strong>Payment Information:</strong> Billing address and payment method details (processed securely through third-party payment processors)</li>
                <li><strong>Communication Data:</strong> Messages, feedback, and correspondence with our team</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Usage Information</h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-3">
                <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                <li><strong>Usage Analytics:</strong> Pages visited, features used, time spent on platform, click patterns</li>
                <li><strong>Content Data:</strong> AI-generated content, uploads, and user-created materials</li>
                <li><strong>Performance Data:</strong> Error logs, crash reports, and system performance metrics</li>
              </ul>
            </div>
            
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-800 dark:text-red-300">Sensitive Information We DO NOT Collect</h3>
              <ul className="list-disc pl-6 text-red-700 dark:text-red-300 space-y-2">
                <li>Government-issued ID numbers (SSN, passport, driver's license)</li>
                <li>Financial account numbers or banking information</li>
                <li>Biometric data or health information</li>
                <li>Religious, political, or sexual orientation data</li>
                <li>Location tracking or GPS coordinates</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">2. How We Use Your Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-300">Service Provision</h3>
                <ul className="list-disc pl-6 text-blue-700 dark:text-blue-300 space-y-2">
                  <li>Provide and maintain our AI tools and services</li>
                  <li>Process your content generation requests</li>
                  <li>Manage your account and subscriptions</li>
                  <li>Provide customer assistance</li>
                </ul>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-800 dark:text-green-300">Improvement & Analytics</h3>
                <ul className="list-disc pl-6 text-green-700 dark:text-green-300 space-y-2">
                  <li>Analyze usage patterns to improve our services</li>
                  <li>Develop new features and functionality</li>
                  <li>Conduct research and development</li>
                  <li>Monitor and prevent fraud and abuse</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-800 dark:text-yellow-300">⚠️ Data Sharing Policy</h3>
              <p className="text-yellow-700 dark:text-yellow-300 font-medium">
                We DO NOT sell, rent, lease, or share your personal information with third parties for marketing purposes. 
                Your data is never used for advertising or sold to data brokers.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">3. Data Storage and Security</h2>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Security Measures</h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-3">
                <li><strong>Encryption:</strong> All data is encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
                <li><strong>Access Controls:</strong> Strict employee access controls with multi-factor authentication</li>
                <li><strong>Regular Audits:</strong> Security assessments and penetration testing</li>
                <li><strong>Data Minimization:</strong> We only collect and retain necessary information</li>
                <li><strong>Secure Infrastructure:</strong> Cloud hosting with enterprise-grade security</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-300">Data Retention</h3>
              <ul className="list-disc pl-6 text-purple-700 dark:text-purple-300 space-y-2">
                <li><strong>Account Data:</strong> Retained while your account is active</li>
                <li><strong>Generated Content:</strong> Automatically deleted after 30 days unless saved</li>
                <li><strong>Usage Analytics:</strong> Aggregated and anonymized after 12 months</li>
                <li><strong>Communications:</strong> Retained for 2 years for quality assurance</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">4. Your Rights and Controls</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-indigo-800 dark:text-indigo-300">Data Rights</h3>
                <ul className="list-disc pl-6 text-indigo-700 dark:text-indigo-300 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Delete your account and data</li>
                  <li>Export your data</li>
                  <li>Restrict processing</li>
                </ul>
              </div>
              
              <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-teal-800 dark:text-teal-300">Privacy Controls</h3>
                <ul className="list-disc pl-6 text-teal-700 dark:text-teal-300 space-y-2">
                  <li>Manage cookie preferences</li>
                  <li>Control email notifications</li>
                  <li>Set content visibility</li>
                  <li>Opt-out of analytics</li>
                  <li>Request data deletion</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">5. Cookies and Tracking</h2>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-orange-800 dark:text-orange-300">Cookie Usage</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-800 dark:text-orange-300">Essential Cookies (Required)</h4>
                  <p className="text-orange-700 dark:text-orange-300">Authentication, security, and basic functionality</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-800 dark:text-orange-300">Analytics Cookies (Optional)</h4>
                  <p className="text-orange-700 dark:text-orange-300">Usage statistics and performance monitoring</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-800 dark:text-orange-300">Preference Cookies (Optional)</h4>
                  <p className="text-orange-700 dark:text-orange-300">Theme settings, language preferences, and customization</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">6. International Data Transfers</h2>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Your data may be processed in countries other than your own. We ensure adequate protection through:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>Adequacy decisions for data transfers to approved countries</li>
                <li>Binding Corporate Rules for intra-group transfers</li>
                <li>Certification schemes and codes of conduct</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">7. Children's Privacy</h2>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-lg">
              <p className="text-red-700 dark:text-red-300 font-medium mb-4">
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
              <p className="text-red-700 dark:text-red-300">
                If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at 
                <a href="mailto:kinggcares.ai@gmail.com" className="underline ml-1">kinggcares.ai@gmail.com</a>
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">8. Changes to This Policy</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 text-blue-700 dark:text-blue-300 space-y-2">
                <li>Email notification to your registered email address</li>
                <li>Prominent notice on our website</li>
                <li>In-app notification when you next use our service</li>
                <li>30-day advance notice for material changes</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">9. Contact Information</h2>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <p className="text-green-700 dark:text-green-300 mb-4">
                For any privacy-related questions, concerns, or requests, please contact us:
              </p>
              <div className="space-y-2 text-green-700 dark:text-green-300">
                <p><strong>Email:</strong> <a href="mailto:kinggcares.ai@gmail.com" className="underline">kinggcares.ai@gmail.com</a></p>
                <p><strong>Subject Line:</strong> "Privacy Policy Inquiry"</p>
                <p><strong>Response Time:</strong> We will respond within 72 hours</p>
              </div>
            </div>
          </section>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              This Privacy Policy was last updated on January 1, 2025, and is effective immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;