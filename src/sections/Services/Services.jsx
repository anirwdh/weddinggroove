import { useRef, useEffect } from "react";
import SectionTitle from "../../components/ui/SectionTitle"
import styles from "./Services.module.css"

export default function Services() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Enable smooth scrolling
      container.style.scrollBehavior = 'smooth';
    }
  }, []);

  const services = [
    {
      id: 1,
      title: "Sangeet Choreography",
      category: "Family Performances",
      image: "/assets/images/sangeet.jpg"
    },
    {
      id: 2,
      title: "Couple First Dance",
      category: "Romantic Moments",
      image: "/assets/images/couple.jpg"
    },
    {
      id: 3,
      title: "Bridal Entry",
      category: "Grand Entrance",
      image: "/assets/images/bridal.jpg"
    },
    {
      id: 4,
      title: "Background Dancers",
      category: "Background Dancers",
      image: "/assets/images/IMG_8965.jpg"
    },
    {
      id: 5,
      title: "Destination Wedding",
      category: "Exotic Locations",
      image: "/assets/images/destination.jpg"
    } ,{
      id: 6,
      title: "Family Performances",
      category: "Group Dances",
      image: "/assets/images/family.jpg"
    }
  ]

  return (
    <section id="services" ref={sectionRef} className={styles.services}>
      <div className={styles.videoBackground}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="metadata"
          className={styles.backgroundVideo}
        >
          <source src="/assets/videos/jjjj.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.overlay}>
        <div className={styles.contentWrapper}>
          <SectionTitle 
            title="Our Services" 
            subtitle="Comprehensive wedding choreography solutions for every special moment"
            centered={true}
          />
          
          <div className={styles.scrollWrapper}>
            <div className={styles.scrollContainer} ref={scrollContainerRef}>
              <div className={styles.horizontalScroll}>
                {services.map((service) => (
                  <div key={service.id} className={styles.serviceCard}>
                    <div className={styles.imageContainer}>
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className={styles.serviceImage}
                      />
                    </div>
                    <div className={styles.content}>
                      <p>{service.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
