import Link from 'next/link'
import styles from '../page.module.css'

export default function Privacy() {
  return (
    <main className={styles.main}>
      <div className={styles.scanlineOverlay} />
      <section className={styles.legalPage}>
        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>← Back to Home</Link>
          <h1 className={styles.legalTitle}>Privacy Policy</h1>
          <p className={styles.legalDate}>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <div className={styles.legalContent}>
            <p>
              High Strangeness (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul>
              <li>User-generated content such as reports, posts, comments, and media files</li>
              <li>Location data when you tag reports or use location-based features</li>
              <li>Device information and sensor data when using the Field Scanner feature</li>
              <li>Anonymous user identifiers for app functionality</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Display your reports and content on the map and feed</li>
              <li>Enable community features and discussions</li>
              <li>Analyze trends and patterns in paranormal reports</li>
              <li>Respond to your inquiries and provide support</li>
            </ul>

            <h2>Data Sharing and Disclosure</h2>
            <p>
              Your reports and user-generated content are shared publicly on the app&apos;s map and feed. Location data is used to tag reports and is visible to other users. We do not sell your personal information to third parties.
            </p>

            <h2>Anonymous Usage</h2>
            <p>
              You may use High Strangeness anonymously. We generate anonymous user identifiers to maintain app functionality without requiring personal identification.
            </p>

            <h2>Data Storage</h2>
            <p>
              Your data is stored securely using Supabase, a third-party database service. We implement appropriate security measures to protect your information.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your data</li>
              <li>Delete your reports and content</li>
              <li>Request deletion of your account and associated data</li>
            </ul>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our app is not intended for children under 13. We do not knowingly collect personal information from children under 13.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at <a href="mailto:support@highstrangeness.app" className={styles.link}>support@highstrangeness.app</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

