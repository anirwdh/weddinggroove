import { useRef } from "react";
import SectionTitle from "../../components/ui/SectionTitle"
import Container from "../../components/ui/Container"
import Button from "../../components/ui/Button"
import styles from "./Founder.module.css"

export default function Founder() {
  const sectionRef = useRef(null);

  return (
    <section id="founder" ref={sectionRef} className={styles.founder}>
      <video 
        className={styles.videoBackground}
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/assets/videos/jjjj.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.text}>
              <SectionTitle 
                title="About the Founder" 
                subtitle="Elegance, precision, and unforgettable wedding moments"
              />
              
              <div className={styles.bio}>
                <p>
                  Simran, Founder of The Wedding Groove, brings over 8 years of refined experience in wedding choreography and performance curation.
                </p>
                <p>
                  With a distinctive eye for detail and deep understanding of stage presence, she designs bespoke wedding performances that feel elegant, intentional, and effortlessly grand.
                </p>
                <p>
                  Her approach blends precision, emotion, and aesthetic excellence — ensuring every couple steps into their celebration with confidence and grace.
                </p>
              </div>
              
              <div className={styles.achievements}>
                <div className={styles.stat}>
                  <span className={styles.number}>200+</span>
                  <span className={styles.label}>Weddings</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.number}>8+</span>
                  <span className={styles.label}>Years Experience</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.number}>25+</span>
                  <span className={styles.label}>Cities</span>
                </div>
              </div>
              
              <div className={styles.cta}>
                <Button href="#contact" size="large">
                  Create Your Moment
                </Button>
              </div>
            </div>
            
            <div className={styles.image}>
              <div className={styles.imageContainer}>
                <img 
                  src="/assets/images/foundr.jpg" 
                  alt="Simran - Founder of The Wedding Groove, luxury wedding choreography specialist"
                  className={styles.founderImage}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
