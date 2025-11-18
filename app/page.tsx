import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { ScanlineOverlay } from './components/ScanlineOverlay'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Image
              src="/logo.png"
              alt="High Strangeness"
              width={300}
              height={300}
              priority
              className={styles.logo}
            />
          </div>
          <ScanlineOverlay scanlineSpacing={2} scanlineOpacity={0.3}>
            <p className={styles.tagline}>
              A paranormal discovery app with a living map of the unexplained.
            </p>
          </ScanlineOverlay>
          
          <div className={styles.ctaButtons}>
            <ScanlineOverlay scanlineSpacing={2} scanlineOpacity={0.3} className={styles.buttonWrapper}>
              <a
                href="https://apps.apple.com/us/app/high-strangeness/id6755126760"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                Download for iOS
              </a>
            </ScanlineOverlay>
            <ScanlineOverlay scanlineSpacing={2} scanlineOpacity={0.3} className={styles.buttonWrapper}>
              <a
                href="https://play.google.com/store/search?q=High%20Strangeness"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryButton}
              >
                Download for Android
              </a>
            </ScanlineOverlay>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Key Features</h2>
          
          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <div className={styles.featureContent}>
                <ScanlineOverlay scanlineSpacing={2} scanlineOpacity={0.3}>
                  <h3 className={styles.featureTitle}>Report Experiences</h3>
                </ScanlineOverlay>
                <p className={styles.featureDescription}>
                  Document your paranormal experiences with photos, videos, and detailed notes. Log UFO sightings, ghost encounters, cryptid sightings, and unexplained phenomena. Tag locations and categorize by type for comprehensive documentation.
                </p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureContent}>
                <ScanlineOverlay scanlineSpacing={2} scanlineOpacity={0.3}>
                  <h3 className={styles.featureTitle}>Field Scanner</h3>
                </ScanlineOverlay>
                <p className={styles.featureDescription}>
                  Field Scanner uses your device sensors to detect EMF anomalies, motion, pressure changes, and light fluctuations. Real-time anomaly detection with statistical analysis. Record sessions with video and sensor data for later review.
                </p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureContent}>
                <ScanlineOverlay scanlineSpacing={2} scanlineOpacity={0.3}>
                  <h3 className={styles.featureTitle}>Interactive Map</h3>
                </ScanlineOverlay>
                <p className={styles.featureDescription}>
                  Explore a global map of sightings, hauntings, and unexplained phenomena. View user reports, historical locations, and external sources. Filter by category, date, and verification status to discover patterns and hotspots.
                </p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureContent}>
                <ScanlineOverlay scanlineSpacing={2} scanlineOpacity={0.3}>
                  <h3 className={styles.featureTitle}>Community Feed</h3>
                </ScanlineOverlay>
                <p className={styles.featureDescription}>
                  Browse trending reports, verified encounters, and historical sightings. AI-assisted categorization and trending analysis. Stay updated on the latest paranormal activity from around the world.
                </p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureContent}>
                <ScanlineOverlay scanlineSpacing={2} scanlineOpacity={0.3}>
                  <h3 className={styles.featureTitle}>Literature Archive</h3>
                </ScanlineOverlay>
                <p className={styles.featureDescription}>
                  Access curated essential texts covering paranormal research, UFO investigations, cryptid studies, and unexplained phenomena. Built-in reader with categorized library of authoritative works on the unexplained.
                </p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureContent}>
                <ScanlineOverlay scanlineSpacing={2} scanlineOpacity={0.3}>
                  <h3 className={styles.featureTitle}>Media Transmissions</h3>
                </ScanlineOverlay>
                <p className={styles.featureDescription}>
                  Essential transmissions from leading paranormal media. Curated podcasts and YouTube channels including Last Podcast on the Left, WEAPONIZED, Coast to Coast AM, and other premier voices in paranormal research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className={styles.screenshots}>
        <div className={styles.container}>
          <ScanlineOverlay scanlineSpacing={2} scanlineOpacity={0.3}>
            <h2 className={styles.sectionTitle}>See It In Action</h2>
          </ScanlineOverlay>
          <div className={styles.screenshotsGrid}>
            <div className={styles.screenshotItem}>
              <a
                href="https://apps.apple.com/us/app/high-strangeness/id6755126760"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/screenshots/screenshot-1.png"
                  alt="High Strangeness home screen showing report, record, read, watch, say, and do options"
                  width={300}
                  height={650}
                  className={styles.screenshotImage}
                />
                <p className={styles.screenshotLabel}>Home Screen</p>
              </a>
            </div>
            <div className={styles.screenshotItem}>
              <a
                href="https://apps.apple.com/us/app/high-strangeness/id6755126760"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/screenshots/screenshot-2.png"
                  alt="Paranormal reports feed showing global anomalous activity with UFO and ghost sightings"
                  width={300}
                  height={650}
                  className={styles.screenshotImage}
                />
                <p className={styles.screenshotLabel}>Paranormal Reports Feed</p>
              </a>
            </div>
            <div className={styles.screenshotItem}>
              <a
                href="https://apps.apple.com/us/app/high-strangeness/id6755126760"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/screenshots/screenshot-3.png"
                  alt="Interactive world map showing anomalous activity hotspots and paranormal locations"
                  width={300}
                  height={650}
                  className={styles.screenshotImage}
                />
                <p className={styles.screenshotLabel}>World Map</p>
              </a>
            </div>
            <div className={styles.screenshotItem}>
              <a
                href="https://apps.apple.com/us/app/high-strangeness/id6755126760"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/screenshots/screenshot-4.png"
                  alt="Field Scanner interface with EMF, motion, and pressure sensors for anomaly detection"
                  width={300}
                  height={650}
                  className={styles.screenshotImage}
                />
                <p className={styles.screenshotLabel}>Field Scanner</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.container}>
          <ScanlineOverlay scanlineSpacing={2} scanlineOpacity={0.3}>
            <h2 className={styles.sectionTitle}>About</h2>
          </ScanlineOverlay>
          <div className={styles.aboutContent}>
            <p className={styles.aboutText}>
              High Strangeness is where the unexplained meets the documented. A field terminal for investigators, experiencers, and researchers mapping the edges of reality. Every sighting logged, every anomaly detected, every pattern discovered—all converging in one living database of the strange.
            </p>
            <p className={styles.aboutText}>
              Whether you&apos;ve witnessed something that defies explanation or you&apos;re tracking global patterns of anomalous activity, High Strangeness gives you the tools to document, analyze, and connect. Field scanners detect environmental anomalies. Interactive maps reveal hotspots. Community threads build understanding. This isn&apos;t just an app—it&apos;s a research platform for the unexplained.
            </p>
            <p className={styles.aboutText}>
              Join investigators worldwide documenting UFO encounters, cryptid sightings, paranormal phenomena, and everything that exists in the space between known and unknown. The map is growing. The database is expanding. The truth is out there—and it&apos;s being logged here.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.footerText}>
            © {new Date().getFullYear()} High Strangeness. All rights reserved.
          </p>
          <div className={styles.footerLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/legal">Legal Disclaimer</Link>
            <a href="mailto:support@highstrangeness.app">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
