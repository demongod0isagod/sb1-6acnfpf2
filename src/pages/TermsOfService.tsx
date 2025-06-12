import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
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
        
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Terms of Service</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">Last Updated: January 1, 2025</p>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                By accessing, using, or registering for Kingg's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
              <p className="text-blue-700 dark:text-blue-300 font-medium">
                If you do not agree to these terms, you must immediately discontinue use of our services and delete your account.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">2. Service Description</h2>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">AI-Powered Content Creation Tools</h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-3">
                <li><strong>Reel Factory:</strong> AI video generation and editing tools</li>
                <li><strong>VidVoice AI:</strong> Voice cloning and text-to-speech services</li>
                <li><strong>Content Generation:</strong> Scripts, captions, hooks, and social media content</li>
                <li><strong>Brand Tools:</strong> Logo creation, brand kits, and design assets</li>
                <li><strong>Automation Tools:</strong> Social media scheduling and posting</li>
                <li><strong>Digital Marketplace:</strong> Platform for buying and selling digital products</li>
                <li><strong>Analytics & Insights:</strong> Performance tracking and trend analysis</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-yellow-800 dark:text-yellow-300">⚠️ Service Availability</h3>
              <p className="text-yellow-700 dark:text-yellow-300">
                Services are provided "as is" and may be modified, suspended, or discontinued at any time without prior notice. 
                We do not guarantee uninterrupted access or error-free operation.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">3. User Responsibilities and Prohibited Uses</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-800 dark:text-green-300">✅ Permitted Uses</h3>
                <ul className="list-disc pl-6 text-green-700 dark:text-green-300 space-y-2">
                  <li>Create original content for personal or commercial use</li>
                  <li>Generate marketing materials for legitimate businesses</li>
                  <li>Produce educational or entertainment content</li>
                  <li>Use AI tools for creative projects</li>
                  <li>Sell digital products through our marketplace</li>
                </ul>
              </div>
              
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-red-800 dark:text-red-300">❌ Prohibited Uses</h3>
                <ul className="list-disc pl-6 text-red-700 dark:text-red-300 space-y-2">
                  <li>Creating deepfakes or impersonating others without consent</li>
                  <li>Generating harmful, illegal, or offensive content</li>
                  <li>Violating intellectual property rights</li>
                  <li>Spreading misinformation or fake news</li>
                  <li>Harassment, bullying, or hate speech</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold mb-4 text-red-800 dark:text-red-300">🚫 Strictly Prohibited Content</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc pl-6 text-red-700 dark:text-red-300 space-y-2">
                  <li>Adult or sexually explicit content</li>
                  <li>Violence, gore, or graphic content</li>
                  <li>Illegal activities or substances</li>
                  <li>Terrorism or extremist content</li>
                  <li>Child exploitation material</li>
                </ul>
                <ul className="list-disc pl-6 text-red-700 dark:text-red-300 space-y-2">
                  <li>Fraud, scams, or deceptive practices</li>
                  <li>Spam or unsolicited communications</li>
                  <li>Malware or harmful code</li>
                  <li>Privacy violations or doxxing</li>
                  <li>Copyright or trademark infringement</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">4. AI Content Disclaimer and Liability</h2>
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-800 dark:text-orange-300">⚠️ AI-Generated Content Risks</h3>
              <p className="text-orange-700 dark:text-orange-300 mb-4 font-medium">
                All content generated by our AI tools is artificial and may contain inaccuracies, biases, or unintended outputs. 
                Users assume full responsibility for reviewing, verifying, and using AI-generated content.
              </p>
              <ul className="list-disc pl-6 text-orange-700 dark:text-orange-300 space-y-2">
                <li><strong>No Accuracy Guarantee:</strong> AI outputs may be factually incorrect or misleading</li>
                <li><strong>No Originality Guarantee:</strong> Content may inadvertently resemble existing works</li>
                <li><strong>No Legal Compliance:</strong> Users must ensure content complies with applicable laws</li>
                <li><strong>Bias and Discrimination:</strong> AI may reflect biases present in training data</li>
                <li><strong>Technical Limitations:</strong> AI may produce unexpected or inappropriate results</li>
              </ul>
            </div>
            
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-800 dark:text-red-300">🛡️ Limitation of Liability</h3>
              <p className="text-red-700 dark:text-red-300 font-medium">
                KINGG SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES 
                ARISING FROM THE USE OF AI-GENERATED CONTENT, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 text-red-700 dark:text-red-300 space-y-2 mt-4">
                <li>Legal claims or lawsuits related to content use</li>
                <li>Copyright or trademark infringement claims</li>
                <li>Defamation or privacy violation claims</li>
                <li>Business losses or reputation damage</li>
                <li>Regulatory fines or penalties</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">5. Intellectual Property Rights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-300">Your Content Rights</h3>
                <ul className="list-disc pl-6 text-purple-700 dark:text-purple-300 space-y-2">
                  <li>You retain ownership of content you create using our tools</li>
                  <li>You grant us a license to process and store your content</li>
                  <li>You are responsible for ensuring you have rights to input materials</li>
                  <li>You must respect third-party intellectual property rights</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-indigo-800 dark:text-indigo-300">Our Platform Rights</h3>
                <ul className="list-disc pl-6 text-indigo-700 dark:text-indigo-300 space-y-2">
                  <li>We own all rights to our AI models and algorithms</li>
                  <li>Our platform, interface, and branding are protected</li>
                  <li>You may not reverse engineer or copy our technology</li>
                  <li>We reserve rights to our proprietary content and templates</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">6. Payment Terms and Refund Policy</h2>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800 dark:text-green-300">Payment Processing</h3>
              <ul className="list-disc pl-6 text-green-700 dark:text-green-300 space-y-2">
                <li>All payments are processed securely through third-party payment processors</li>
                <li>Subscription fees are billed in advance on a recurring basis</li>
                <li>Prices are subject to change with 30 days' notice</li>
                <li>Failed payments may result in service suspension</li>
                <li>You are responsible for all applicable taxes</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-yellow-800 dark:text-yellow-300">Refund Policy</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300">7-Day Money-Back Guarantee</h4>
                  <p className="text-yellow-700 dark:text-yellow-300">New subscribers may request a full refund within 7 days of initial purchase</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300">Pro-Rated Refunds</h4>
                  <p className="text-yellow-700 dark:text-yellow-300">Unused portions of annual subscriptions may be refunded at our discretion</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300">No Refunds for Usage</h4>
                  <p className="text-yellow-700 dark:text-yellow-300">Credits, generations, or consumed services are non-refundable</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">7. Account Termination</h2>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-800 dark:text-red-300">Grounds for Termination</h3>
              <p className="text-red-700 dark:text-red-300 mb-4">
                We reserve the right to suspend or terminate your account immediately for:
              </p>
              <ul className="list-disc pl-6 text-red-700 dark:text-red-300 space-y-2">
                <li>Violation of these Terms of Service</li>
                <li>Illegal or harmful use of our services</li>
                <li>Fraudulent or deceptive activities</li>
                <li>Repeated policy violations</li>
                <li>Non-payment of fees</li>
                <li>Abuse of our support team or other users</li>
              </ul>
              <p className="text-red-700 dark:text-red-300 mt-4 font-medium">
                Upon termination, your access will be revoked and your data may be deleted without notice.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">8. Dispute Resolution</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-300">Mandatory Arbitration</h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                Any disputes arising from these terms or your use of our services shall be resolved through binding arbitration 
                rather than in court, except for small claims court matters.
              </p>
              <ul className="list-disc pl-6 text-blue-700 dark:text-blue-300 space-y-2">
                <li>Arbitration will be conducted by a neutral arbitrator</li>
                <li>Each party will bear their own costs and fees</li>
                <li>Arbitration decisions are final and binding</li>
                <li>Class action lawsuits are waived</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">9. Governing Law</h2>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300">
                These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction 
                where Kingg is incorporated, without regard to conflict of law principles. Any legal action must be 
                brought in the courts of that jurisdiction.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">10. Changes to Terms</h2>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
              <p className="text-orange-700 dark:text-orange-300 mb-4">
                We reserve the right to modify these Terms of Service at any time. Material changes will be communicated through:
              </p>
              <ul className="list-disc pl-6 text-orange-700 dark:text-orange-300 space-y-2">
                <li>Email notification to registered users</li>
                <li>Prominent notice on our website</li>
                <li>In-app notifications</li>
                <li>30-day advance notice for significant changes</li>
              </ul>
              <p className="text-orange-700 dark:text-orange-300 mt-4 font-medium">
                Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">11. Contact Information</h2>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <p className="text-green-700 dark:text-green-300 mb-4">
                For questions about these Terms of Service or to report violations:
              </p>
              <div className="space-y-2 text-green-700 dark:text-green-300">
                <p><strong>Email:</strong> <a href="mailto:kinggcares.ai@gmail.com" className="underline">kinggcares.ai@gmail.com</a></p>
                <p><strong>Subject Line:</strong> "Terms of Service Inquiry"</p>
                <p><strong>Response Time:</strong> We will respond within 72 hours</p>
              </div>
            </div>
          </section>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              These Terms of Service were last updated on January 1, 2025, and are effective immediately.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
              By using Kingg's services, you acknowledge that you have read, understood, and agree to be bound by these terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;