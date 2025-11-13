import Link from 'next/link'
import styles from '../page.module.css'

export default function Terms() {
  return (
    <main className={styles.main}>
      <div className={styles.scanlineOverlay} />
      <section className={styles.legalPage}>
        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>← Back to Home</Link>
          <h1 className={styles.legalTitle}>Terms of Service</h1>
          <p className={styles.legalDate}>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <div className={styles.legalContent}>
            <p>
              Please read these Terms of Service (&quot;Terms&quot;) carefully before using High Strangeness (&quot;the App&quot;). By accessing or using the App, you agree to be bound by these Terms.
            </p>

            <h2>Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using High Strangeness, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, do not use the App.
            </p>

            <h2>Use of the App</h2>
            <p>You agree to use the App only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>Post false, misleading, or fraudulent information</li>
              <li>Harass, threaten, or harm other users</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Upload malicious code or attempt to disrupt the service</li>
              <li>Impersonate any person or entity</li>
            </ul>

            <h2>User Content</h2>
            <p>
              You retain ownership of content you post to the App. By posting content, you grant us a worldwide, non-exclusive, royalty-free license to use, display, and distribute your content within the App. You are solely responsible for your content and represent that you have all necessary rights to post it.
            </p>

            <h2>Prohibited Content</h2>
            <p>You may not post content that:</p>
            <ul>
              <li>Is illegal, harmful, or violates any laws</li>
              <li>Infringes on intellectual property rights</li>
              <li>Contains hate speech, harassment, or threats</li>
              <li>Is spam, fraudulent, or deceptive</li>
              <li>Contains explicit or inappropriate material</li>
            </ul>

            <h2>Field Scanner Disclaimer</h2>
            <p>
              The Field Scanner feature uses real device sensors to detect environmental anomalies. Sensor readings are real measurements, but detected &quot;anomalies&quot; are statistical outliers that may have normal, explainable causes. The Field Scanner is a documentation tool and should not be considered definitive proof of paranormal activity.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              The App and its original content, features, and functionality are owned by High Strangeness and are protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not guarantee the accuracy, completeness, or usefulness of any information in the App.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, High Strangeness shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the App.
            </p>

            <h2>Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to the App at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or us.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by updating the &quot;Last updated&quot; date. Your continued use of the App after changes constitutes acceptance of the new Terms.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have questions about these Terms, please contact us at <a href="mailto:support@highstrangeness.app" className={styles.link}>support@highstrangeness.app</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

