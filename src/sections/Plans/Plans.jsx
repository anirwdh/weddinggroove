import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../../components/ui/SectionTitle"
import Container from "../../components/ui/Container"
import Button from "../../components/ui/Button"
import styles from "./Plans.module.css"

gsap.registerPlugin(ScrollTrigger);

export default function Plans() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const planCards = section.querySelectorAll(`.${styles.planCard}`);
    if (!planCards.length) return;
    
    // Single optimized timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "top 15%",
        scrub: 0.2,
        fastScrollEnd: 150
      }
    });

    tl.fromTo(section,
      { 
        opacity: 0,
        y: 50,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out"
      }
    )
    .fromTo(planCards,
      { 
        y: 80, 
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      },
      "-=0.4"
    );

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  const plans = [
    {
      id: 1,
      name: "Essential",

      duration: "Basic Package",
      features: [
        "Personalized Song Selection Guidance",
        "2–3 Hour Choreography Sessions",
        "Basic Music Editing",
        "Practice Video Support",
        "Online & Offline Sessions Available",
        "Additional Sessions Available at Extra Cost"
      ],
      highlighted: false
    },
    {
      id: 2,
      name: "Premium",
    
      duration: "Most Popular",
      features: [
        "Curated Song Selection",
        "2–3 Hour Choreography Sessions",
        "Professional Music Editing",
        "Basic Hand Props & Accessories",
        "Practice Video Support",
        "Online & Offline Sessions Available",
        "Additional Sessions Available at Extra Cost"
      ],
      highlighted: true
    },
    {
      id: 3,
      name: "Luxury",
    
      duration: "Complete Package",
      features: [
        "Exclusive Song Selection Consultation",
        "3 Hour Extended Choreography Sessions",
        "Customized Music Editing (Music Transitions, Beat Enhancements & Voiceover Integration)",
        "Premium Props & Accessories",
        "2 Complimentary Additional Sessions",
        "Detailed Practice Videos with Step-by-Step Tutorial Support",
        "Online & Offline Sessions Available"
      ],
      highlighted: false
    }
  ]

  return (
    <section id="plans" ref={sectionRef} className={styles.plans}>
      <video 
        className={styles.videoBackground}
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/assets/videos/vv.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>
      <Container>
        <div className={styles.contentWrapper}>
          <SectionTitle 
            title="Wedding Plans" 
            subtitle="Flexible choreography packages tailored to your wedding needs and budget"
            centered={true}
          />
          
          <div className={styles.grid}>
            {plans.map((plan) => (
              <div 
                key={plan.id} 
                className={`${styles.planCard} ${plan.highlighted ? styles.highlighted : ''}`}
              >
                {plan.highlighted && <div className={styles.badge}>Most Popular</div>}
                
                <div className={styles.header}>
                  <h3>{plan.name}</h3>
                  {/* <div className={styles.price}>
                    <span className={styles.amount}>{plan.price}</span>
                    <span className={styles.duration}>{plan.duration}</span>
                  </div> */}
                </div>
                
                <div className={styles.features}>
                  {plan.features.map((feature, index) => (
                    <div key={index} className={styles.feature}>
                      <span className={styles.check}>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className={styles.footer}>
                  <Button 
                    href="#contact" 
                    variant={plan.highlighted ? "primary" : "outline"}
                    size="medium"
                    className={styles.button}
                  >
                    Choose Plan
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
