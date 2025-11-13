import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.scanlineOverlay} />
      
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
          <p className={styles.tagline}>
            An AI-assisted paranormal logging and discovery app. A living map of the unexplained.
          </p>
          
          <div className={styles.ctaButtons}>
            <a
              href="https://apps.apple.com/search?term=High%20Strangeness"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}
            >
              Download for iOS
            </a>
            <a
              href="https://play.google.com/store/search?q=High%20Strangeness"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              Download for Android
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Key Features</h2>
          
          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>⚡</span>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Report Experiences</h3>
                <p className={styles.featureDescription}>
                  Document your paranormal experiences with photos, videos, and detailed notes. Log UFO sightings, ghost encounters, cryptid sightings, and unexplained phenomena. Tag locations and categorize by type for comprehensive documentation.
                </p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>⚡</span>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Field Scanner</h3>
                <p className={styles.featureDescription}>
                  Field Scanner uses your device sensors to detect EMF anomalies, motion, pressure changes, and light fluctuations. Real-time anomaly detection with statistical analysis. Record sessions with video and sensor data for later review.
                </p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>⚡</span>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Interactive Map</h3>
                <p className={styles.featureDescription}>
                  Explore a global map of sightings, hauntings, and unexplained phenomena. View user reports, historical locations, and external sources. Filter by category, date, and verification status to discover patterns and hotspots.
                </p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>⚡</span>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Community Feed</h3>
                <p className={styles.featureDescription}>
                  Browse trending reports, verified encounters, and historical sightings. AI-assisted categorization and trending analysis. Stay updated on the latest paranormal activity from around the world.
                </p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>⚡</span>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Literature Archive</h3>
                <p className={styles.featureDescription}>
                  Access curated essential texts covering paranormal research, UFO investigations, cryptid studies, and unexplained phenomena. Built-in reader with categorized library of authoritative works on the unexplained.
                </p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>⚡</span>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Media Transmissions</h3>
                <p className={styles.featureDescription}>
                  Essential transmissions from leading paranormal media. Curated podcasts and YouTube channels including Last Podcast on the Left, WEAPONIZED, Coast to Coast AM, and other premier voices in paranormal research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About</h2>
          <div className={styles.aboutContent}>
            <p className={styles.aboutText}>
              High Strangeness combines modern technology with the analog-era aesthetic of research terminals. Think X-Files meets social network. Log your experiences, explore global patterns, and connect with a community of investigators exploring the unexplained.
            </p>
            <p className={styles.aboutText}>
              Built for paranormal researchers, UFO investigators, cryptid enthusiasts, and anyone who has witnessed something they cannot explain. High Strangeness provides the tools to document, analyze, and share encounters with a community dedicated to understanding the unknown.
            </p>
            <p className={styles.aboutText}>
              Every report contributes to a living database of anomalous activity. Every map marker reveals patterns. Every thread builds understanding. This is your field journal for the unexplained.
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
