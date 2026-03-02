import { useRef } from "react";
import SectionTitle from "../../components/ui/SectionTitle"
import Container from "../../components/ui/Container"
import Button from "../../components/ui/Button"
import styles from "./Contact.module.css"

export default function Contact() {
  const sectionRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" ref={sectionRef} className={styles.contact}>
      <Container>
        <div className={styles.contentWrapper}>
          <SectionTitle 
            title="Get In Touch" 
            subtitle="Let's create magic together for your special day"
            centered={true}
          />
          
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <div className={styles.icon}>📞</div>
                <div className={styles.info}>
                  <h3>Phone</h3>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.icon}>✉️</div>
                <div className={styles.info}>
                  <h3>Email</h3>
                  <p>hello@weddinggroove.com</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.icon}>📍</div>
                <div className={styles.info}>
                  <h3>Location</h3>
                  <p>Mumbai, India</p>
                </div>
              </div>
              
              <div className={styles.socialLinks}>
                <h4>Follow Us</h4>
                <div className={styles.socialIcons}>
                  <a href="#" className={styles.socialLink}>Instagram</a>
                  <a href="#" className={styles.socialLink}>Facebook</a>
                  <a href="#" className={styles.socialLink}>YouTube</a>
                </div>
              </div>
            </div>
            
            <div className={styles.contactForm}>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    required
                    className={styles.formInput}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    required
                    className={styles.formInput}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <input 
                    type="tel" 
                    placeholder="Your Phone" 
                    className={styles.formInput}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <select className={styles.formSelect}>
                    <option value="">Select Service</option>
                    <option value="sangeet">Sangeet Choreography</option>
                    <option value="couple">Couple First Dance</option>
                    <option value="bridal">Bridal Entry</option>
                    <option value="destination">Destination Wedding</option>
                    <option value="family">Family Performances</option>
                    <option value="theme">Theme-based Events</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <textarea 
                    placeholder="Tell us about your wedding..." 
                    rows={4}
                    className={styles.formTextarea}
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  size="large"
                  className={styles.submitButton}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
