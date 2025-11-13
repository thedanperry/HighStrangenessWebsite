import Link from 'next/link'
import styles from '../page.module.css'

export default function Legal() {
  return (
    <main className={styles.main}>
      <div className={styles.scanlineOverlay} />
      <section className={styles.legalPage}>
        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>← Back to Home</Link>
          <h1 className={styles.legalTitle}>Legal Disclaimer</h1>
          <p className={styles.legalDate}>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <div className={styles.legalContent}>
            <h2>General Disclaimer</h2>
            <p>
              High Strangeness is a platform for documenting and sharing reports of paranormal experiences, UFO sightings, cryptid encounters, and unexplained phenomena. The information contained in the App is provided for entertainment, research, and documentation purposes only.
            </p>

            <h2>No Verification of Claims</h2>
            <p>
              We do not verify, validate, or endorse any user-submitted reports, claims, or content. All reports are user-generated and represent the opinions and experiences of individual users. We make no representations or warranties regarding the accuracy, truthfulness, or validity of any content posted by users.
            </p>

            <h2>Field Scanner Disclaimer</h2>
            <p>
              The Field Scanner feature uses real device sensors (magnetometer, accelerometer, barometer, light sensor, microphone) to measure environmental conditions. While the sensor readings are real measurements from actual device hardware, the detection of "anomalies" is based on statistical analysis (standard deviation thresholds) and does not constitute scientific proof of paranormal activity.
            </p>
            <p>
              Most detected anomalies have normal, explainable causes such as electrical appliances, device movement, weather changes, or sensor noise. The Field Scanner is a documentation and entertainment tool, not a scientific instrument for detecting paranormal phenomena.
            </p>

            <h2>Not Medical or Professional Advice</h2>
            <p>
              Nothing in the App constitutes medical, legal, scientific, or professional advice. If you believe you have experienced a genuine emergency or require professional assistance, please contact appropriate authorities or professionals.
            </p>

            <h2>User Responsibility</h2>
            <p>
              Users are solely responsible for their use of the App and any actions taken based on information found within it. We are not responsible for any decisions made or actions taken based on content in the App.
            </p>

            <h2>Third-Party Content</h2>
            <p>
              The App may contain links to third-party websites, media, and content. We are not responsible for the content, accuracy, or opinions expressed on such third-party sites. Inclusion of any linked content does not imply approval or endorsement by us.
            </p>

            <h2>No Warranty</h2>
            <p>
              The App is provided "as is" without warranty of any kind. We disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, High Strangeness, its developers, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the App or reliance on any information contained therein.
            </p>

            <h2>Investigative Use</h2>
            <p>
              While High Strangeness provides tools for documenting and investigating unexplained phenomena, users should exercise critical thinking and skepticism. Correlation does not imply causation, and sensor readings or user reports should not be considered definitive proof of paranormal activity.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about this disclaimer, contact us at <a href="mailto:support@highstrangeness.app" className={styles.link}>support@highstrangeness.app</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

