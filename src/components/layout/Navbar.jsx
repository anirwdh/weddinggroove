import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/">
            <img 
              src="/assets/images/logotransparent.png" 
              alt="Wedding Groove" 
              className={styles.logoImage}
            />
          </a>
        </div>

        <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <a href="#" className={styles.navLink}>Home</a>
          <a href="#work" className={styles.navLink}>Work</a>
          <a href="#services" className={styles.navLink}>Services</a>
          <a href="#plans" className={styles.navLink}>Plans</a>
          <a href="#founder" className={styles.navLink}>Founder</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </div>

        <button 
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
