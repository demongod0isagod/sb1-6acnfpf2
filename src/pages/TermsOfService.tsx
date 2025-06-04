const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Terms of Service</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">Last Updated: March 1, 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
            <p className="text-gray-600 dark:text-gray-300">
              By accessing or using our website and tools, you agree to comply with these Terms and Conditions. 
              If you disagree with any part, you must not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">2. Services Offered</h2>
            <p className="text-gray-600 dark:text-gray-300">We provide AI-powered tools including, but not limited to:</p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>AI Voiceovers, Reels, Scripts, Captions</li>
              <li>Social Media Auto Posts</li>
              <li>Brand Kits, Trend Analysis, Resume Writing</li>
              <li>Gaming & Anime Content Packs</li>
            </ul>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Features are subject to change without notice.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">3. User Responsibilities</h2>
            <p className="text-gray-600 dark:text-gray-300">You agree:</p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Not to use our tools for unlawful, defamatory, or harmful purposes</li>
              <li>Not to infringe on copyrights, trademarks, or intellectual property</li>
              <li>To be responsible for how you use generated content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">4. AI Content Disclaimer</h2>
            <p className="text-gray-600 dark:text-gray-300">All generated content is AI-based. We do not guarantee:</p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Accuracy</li>
              <li>Originality</li>
              <li>Legal compliance</li>
            </ul>
            <p className="mt-4 text-gray-600 dark:text-gray-300">You assume full responsibility for the use of AI-generated content.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">5. Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300">For any questions about these terms, please contact us at:</p>
            <p className="mt-2 text-blue-600 dark:text-blue-400">
              <a href="mailto:kinggcares.ai@gmail.com">kinggcares.ai@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;