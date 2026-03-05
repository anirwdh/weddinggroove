import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Instagram, Youtube, Send, Sparkles, MessageCircle } from "lucide-react";

// WhatsApp SVG Icon
const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 9.89-5.335 9.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);
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
  const SERVICE_ID = "service_6ji3oxf"; // Your EmailJS service ID
  const TEMPLATE_ID = "template_x32koui"; // Your EmailJS template ID
  const PUBLIC_KEY = "sZP8n4Q4VRLZ1K5FO"; // Your EmailJS public key

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
    sendEmail(e);
  };

  const handleWhatsAppConnect = () => {
    window.open('https://wa.me/918595630073', '_blank');
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
                    <option value="sangeet">Sangeet choreography </option>
                    <option value="entries">Wedding / Sangeet Entries </option>
                    <option value="lipdub">Wedding Lip-Dub </option>
                    <option value="foreign">Foreign artist for Entries </option>
                    <option value="dancers">Indian Background Dancers </option>
                    <option value="destination">Destination Wedding </option>
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
                    ✅ Your form has been submitted successfully!
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
                        
                        Sending...
                      </>
                    ) : (
                      <>
                    
                        Submit Form
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    type="button"
                    variant="outline"
                    size="large"
                    onClick={handleWhatsAppConnect}
                    className={styles.whatsappButton}
                  >
                
                    Connect WhatsApp
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
