const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">Effective Date: March 1, 2024</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">1. Data We Collect</h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Name and email (only when provided)</li>
              <li>IP address, browser type, device data</li>
              <li>Usage behavior on our tools (non-personal)</li>
            </ul>
            <p className="mt-4 text-gray-600 dark:text-gray-300">We do not collect sensitive personal information (e.g., ID numbers, banking info).</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">2. How We Use Your Data</h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>To provide and improve our services</li>
              <li>To send optional updates or newsletters</li>
              <li>For analytics and bug fixing</li>
            </ul>
            <p className="mt-4 text-gray-600 dark:text-gray-300">We do not sell, rent, or share your data with unauthorized third parties.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">3. Cookies</h2>
            <p className="text-gray-600 dark:text-gray-300">We use minimal cookies for:</p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Site preferences (e.g., light/dark mode)</li>
              <li>Login sessions</li>
              <li>Analytics (Google Analytics, etc.)</li>
            </ul>
            <p className="mt-4 text-gray-600 dark:text-gray-300">You can disable cookies in your browser settings.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">4. User-Generated Content</h2>
            <p className="text-gray-600 dark:text-gray-300">We do not store or own your AI-generated content unless:</p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>You choose to save it publicly</li>
              <li>You use our public templates</li>
            </ul>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Stored content is automatically deleted after a set time unless explicitly saved.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">5. Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300">For any privacy-related questions or concerns, please contact us at:</p>
            <p className="mt-2 text-blue-600 dark:text-blue-400">
              <a href="mailto:kinggcares.ai@gmail.com">kinggcares.ai@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;