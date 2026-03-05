import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Instagram, Youtube, Send, Sparkles, MessageCircle } from "lucide-react";
import SectionTitle from "../../components/ui/SectionTitle"
import Container from "../../components/ui/Container"
import Button from "../../components/ui/Button"
import styles from "./Contact.module.css"
import emailjs from "@emailjs/browser";

export default function Contact() {
  const sectionRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // EmailJS configuration
  const SERVICE_ID = "service_id"; // Replace with your EmailJS service ID
  const TEMPLATE_ID = "template_id"; // Replace with your EmailJS template ID
  const PUBLIC_KEY = "public_key"; // Replace with your EmailJS public key

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setSubmitStatus('success');
        e.target.reset();
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(''), 5000);
      }, (error) => {
        console.log('EmailJS error:', error);
        setSubmitStatus('error');
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(''), 5000);
      });
  };

  const sendWhatsApp = (formData) => {
    const message = `New Wedding Inquiry - The Wedding Groove
Name: ${formData.get('name')}
Email: ${formData.get('email')}
Phone: ${formData.get('phone') || 'Not provided'}
Service: ${formData.get('service') || 'Not selected'}
Message: ${formData.get('message') || 'No message provided'}`;

    const whatsappUrl = `https://wa.me/918595630073?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Send via EmailJS
    sendEmail(e);
    
    // Also open WhatsApp with the form data
    sendWhatsApp(formData);
  };

  return (
    <section id="contact" ref={sectionRef} className={styles.contact}>
      <Container>
        <div className={styles.contentWrapper}>
          <SectionTitle 
            title="Get In Touch ✨" 
            subtitle="Let's create magic together for your special day "
            centered={true}
          />
          
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <div className={styles.icon}><Phone size={24} /></div>
                <div className={styles.info}>
                  <h3>Phone </h3>
                  <p>+91 85956 30073</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.icon}><Mail size={24} /></div>
                <div className={styles.info}>
                  <h3>Email </h3>
                  <p>theweddinggroove0@gmail.com</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.icon}><MapPin size={24} /></div>
                <div className={styles.info}>
                  <h3>Location</h3>
                  <p>1115, 11th Floor<br/>Devika Tower<br/>Nehru Place<br/>New Delhi-110019</p>
                </div>
              </div>
              
              <div className={styles.socialLinks}>
                <h4>Follow Us</h4>
                <div className={styles.socialIcons}>
                  <a 
                    href="https://www.instagram.com/the.weddinggroove?igsh=MXBqdDJ6cGZ5NnR0eg==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <Instagram size={16} />
                    <span>Instagram</span>
                  </a>
                  <a 
                    href="https://youtube.com/@theweddinggroove0?si=RunyJQIdSt92UJhH" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <Youtube size={16} />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className={styles.contactForm}>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name " 
                    required
                    className={styles.formInput}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email " 
                    required
                    className={styles.formInput}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Your Phone " 
                    className={styles.formInput}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <select name="service" className={styles.formSelect}>
                    <option value="">Select Service </option>
                    <option value="sangeet">Sangeet Choreography </option>
                    <option value="couple">Couple First Dance </option>
                    <option value="bridal">Bridal Entry </option>
                    <option value="destination">Destination Wedding </option>
                    <option value="family">Family Performances </option>
                    <option value="theme">Theme-based Events </option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <textarea 
                    name="message"
                    placeholder="Tell us about your wedding... " 
                    rows={4}
                    className={styles.formTextarea}
                  ></textarea>
                </div>
                
                {submitStatus === 'success' && (
                  <div className={styles.successMessage}>
                    ✅ Message sent successfully! We'll contact you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className={styles.errorMessage}>
                    ❌ Failed to send message. Please try again or WhatsApp us directly.
                  </div>
                )}
                
                <div className={styles.buttonGroup}>
                  <Button 
                    type="submit" 
                    size="large"
                    disabled={isSubmitting}
                    className={styles.submitButton}
                  >
                    {isSubmitting ? (
                      <>
                        <Send size={16} className={styles.spinner} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={0} />
                        Send Message 
                      </>
                    )}
                  </Button>
                  
                  {/* WhatsApp button commented out - Send Message button sends to both Email & WhatsApp */}
                  {/* <Button 
                    type="button"
                    variant="outline"
                    size="large"
                    onClick={() => window.open('https://wa.me/918595630073', '_blank')}
                    className={styles.whatsappButton}
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </Button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
