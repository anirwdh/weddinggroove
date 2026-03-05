import { useRef, useEffect } from "react";
import SectionTitle from "../../components/ui/SectionTitle"
import styles from "./Work.module.css"

export default function Work() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Enable smooth scrolling
      container.style.scrollBehavior = 'smooth';
    }
  }, []);

  const workItems = [
    {
      id: 1,
      title: "Luxury Destination Wedding",
      category: "Sangeet Choreography",
      video: "/assets/videos/v1.mp4"
    },
    {
      id: 2,
      title: "Royal Palace Wedding",
      category: "Carnival Entry",
      video: "/assets/videos/V2.mp4"
    },
    {
      id: 3,
      title: "Beach Wedding Ceremony",
      category: "Engagement Ceremony",
      video: "/assets/videos/v3.mp4"
    },
    {
      id: 4,
      title: "Theme Wedding Dance",
      category: "Theme Wedding Dance",
      video: "/assets/videos/vvv.mov"
    },
        {
      id: 6,
      title: "Grand Palace Celebration",
      category: "Sangeet Night",
      video: "/assets/videos/V6.mp4"
    },
    {
      id: 7,
      title: "Haldi Entry",
      category: "Haldi Entry",
      video: "/assets/videos/v7.mp4"
    },
    {
      id: 8,
      title: "Haldi Entry",
      category: "Bride Groom Entry",
      video: "/assets/videos/V9.mp4"
    }
  ]

  return (
    <section id="work" ref={sectionRef} className={styles.work}>
      <div className={styles.videoBackground}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="metadata"
          className={styles.backgroundVideo}
        >
          <source src="/assets/videos/vv.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.overlay}>
        <div className={styles.contentWrapper}>
          <SectionTitle 
            title="Our Work" 
            subtitle="Showcasing unforgettable wedding choreography moments across India"
            centered={true}
          />
          
          <div className={styles.scrollWrapper}>
            <div className={styles.scrollContainer} ref={scrollContainerRef}>
              <div className={styles.horizontalScroll}>
                {workItems.map((item) => (
                  <div key={item.id} className={styles.workItem}>
                    <div className={styles.videoContainer}>
                      <video 
                        autoPlay
                        muted 
                        loop 
                        playsInline
                        preload="metadata"
                        className={styles.video}
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>
                    </div>
                    <div className={styles.content}>
                      <p>{item.category}</p>
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
