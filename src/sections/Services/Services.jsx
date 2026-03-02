import { useRef, useState, useEffect } from "react";
import SectionTitle from "../../components/ui/SectionTitle"
import styles from "./Services.module.css"

export default function Services() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 5);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 5);
    }
  };

  const scrollLeft = () => {
    if (isScrolling) return;
    const container = scrollContainerRef.current;
    if (container) {
      setIsScrolling(true);
      const itemWidth = 350 + 32;
      const targetScroll = Math.max(0, container.scrollLeft - itemWidth);
      
      // Use requestAnimationFrame for smoother scroll
      const startTime = performance.now();
      const startScroll = container.scrollLeft;
      const distance = targetScroll - startScroll;
      const duration = 250;
      
      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        container.scrollLeft = startScroll + (distance * easeProgress);
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          checkScrollButtons();
          setIsScrolling(false);
        }
      };
      
      requestAnimationFrame(animateScroll);
    }
  };

  const scrollRight = () => {
    if (isScrolling) return;
    const container = scrollContainerRef.current;
    if (container) {
      setIsScrolling(true);
      const itemWidth = 350 + 32;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const targetScroll = Math.min(maxScroll, container.scrollLeft + itemWidth);
      
      // Use requestAnimationFrame for smoother scroll
      const startTime = performance.now();
      const startScroll = container.scrollLeft;
      const distance = targetScroll - startScroll;
      const duration = 250;
      
      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        container.scrollLeft = startScroll + (distance * easeProgress);
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          checkScrollButtons();
          setIsScrolling(false);
        }
      };
      
      requestAnimationFrame(animateScroll);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollButtons();
      container.addEventListener('scroll', checkScrollButtons, { passive: true });
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollButtons);
      }
    };
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
      title: "Family Performances",
      category: "Group Dances",
      image: "/assets/images/family.jpg"
    },
    {
      id: 5,
      title: "Destination Wedding",
      category: "Exotic Locations",
      image: "/assets/images/destination.jpg"
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
            <button 
              className={`${styles.scrollButton} ${styles.scrollLeft} ${!canScrollLeft ? styles.disabled : ''}`}
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className={styles.scrollContainer} ref={scrollContainerRef} onScroll={checkScrollButtons}>
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
            
            <button 
              className={`${styles.scrollButton} ${styles.scrollRight} ${!canScrollRight ? styles.disabled : ''}`}
              onClick={scrollRight}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
