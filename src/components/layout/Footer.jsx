import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoSection}>
            <img 
              src="/assets/images/logotransparent.png" 
              alt="The Wedding Groove Logo" 
              className={styles.logo}
            />
            <div className={styles.brandInfo}>
              <h3>The Wedding Groove</h3>
              <p>Luxury wedding choreography for your special day</p>
            </div>
          </div>

          <nav className={styles.navigation}>
            <a href="#work" className={styles.navLink}>Work</a>
            <a href="#services" className={styles.navLink}>Services</a>
            <a href="#plans" className={styles.navLink}>Plans</a>
            <a href="#founder" className={styles.navLink}>Founder</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </nav>

          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.icon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <a href="mailto:hello@theweddinggroove.com" className={styles.contactLink}>
                hello@theweddinggroove.com
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.icon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <a href="tel:+918595630073" className={styles.contactLink}>
                +91 85956 30073
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2024 The Wedding Groove. All rights reserved.</p>
          <div className={styles.socialLinks}>
            <a 
              href="https://www.instagram.com/the.weddinggroove?igsh=MXBqdDJ6cGZ5NnR0eg==" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram" 
              className={styles.socialLink}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="currentColor"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
            <a 
              href="https://youtube.com/@theweddinggroove0?si=RunyJQIdSt92UJhH" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="YouTube" 
              className={styles.socialLink}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M10 15l5-3-5-3v6z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
