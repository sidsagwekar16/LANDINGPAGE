export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300">Effective Date: April 17, 2025</p>

          <p className="mt-6">
            SecureFront ("we", "our", "us") respects your privacy. This Privacy Policy explains how we collect, use, and
            protect your information when you use our website and services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Account Information: Name, email, UID from Firebase</li>
            <li>Billing Information: Collected via Stripe (we never store card data)</li>
            <li>Usage Data: Pages visited, feature usage, device info, time spent</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Data</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>To provide and maintain our service</li>
            <li>To process billing and manage your account</li>
            <li>To communicate about updates, outages, or support</li>
            <li>To improve user experience and platform performance</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Cookies & Tracking</h2>
          <p className="text-gray-300">We use cookies and similar technologies to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Maintain user sessions</li>
            <li>Analyze usage with Google Analytics or Firebase Analytics</li>
            <li>Improve our website experience</li>
          </ul>
          <p className="text-gray-300 mt-4">
            You may disable cookies via your browser settings, though some features may stop working.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Third-Party Services</h2>
          <p className="text-gray-300">We use the following third-party services, which may process your data:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Firebase (Google) – Authentication, Firestore, Push Notifications</li>
            <li>Stripe – Payment processing</li>
            <li>Cloud Hosting (e.g., Render, Google Cloud) – Infrastructure</li>
          </ul>
          <p className="text-gray-300 mt-4">
            These services have their own privacy policies and data handling practices.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Storage & Transfers</h2>
          <p className="text-gray-300">
            Your data may be stored on servers outside your country (e.g., in the United States). By using SecureFront,
            you consent to such transfer.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Rights</h2>
          <p className="text-gray-300">
            You may request access, correction, or deletion of your personal data at any time by contacting us at
            contact@securefrontsoftware.com.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Data Retention</h2>
          <p className="text-gray-300">
            We retain data for the duration of your account. You can request deletion at any time.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Children's Privacy</h2>
          <p className="text-gray-300">
            SecureFront is not intended for use by children under 13. We do not knowingly collect data from minors.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Changes to This Policy</h2>
          <p className="text-gray-300">
            We may update this Privacy Policy. Continued use of SecureFront means you accept the new version.
          </p>
        </div>
      </div>
    </div>
  )
}
