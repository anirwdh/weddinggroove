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
    
    // Page-like transition effect
    const st = ScrollTrigger.create({
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      pin: false,
      pinSpacing: false,
      anticipatePin: 1,
      scrub: false,
      onEnter: () => {
        // Page transition in effect
        gsap.fromTo(section,
          { 
            opacity: 0,
            y: 50,
            scale: 0.95,
            force3D: true
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            force3D: true
          }
        );
      }
    });

    // Optimized timeline for better performance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "top 15%",
        scrub: 0.2,
        invalidateOnRefresh: true,
        once: true,
        fastScrollEnd: 150
      }
    });

    tl.fromTo(planCards,
      { 
        y: 80, 
        opacity: 0,
        scale: 0.9,
        force3D: true
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        force3D: true
      }
    );

    return () => {
      if (st) st.kill();
      if (tl) tl.kill();
    };
  }, []);

  const plans = [
    {
      id: 1,
      name: "Essential",
      price: "₹1,50,000",
      duration: "Basic Package",
      features: [
        "5 Choreography Sessions",
        "Sangeet Performance (1 Song)",
        "Basic Music Editing",
        "Online Training Available",
        "2 Weeks Duration"
      ],
      highlighted: false
    },
    {
      id: 2,
      name: "Premium",
      price: "₹3,00,000",
      duration: "Most Popular",
      features: [
        "10 Choreography Sessions",
        "Sangeet + Couple First Dance",
        "Professional Music Editing",
        "On-site Training (2 Days)",
        "Props & Accessories",
        "1 Month Duration",
        "Family Performances (2 Songs)"
      ],
      highlighted: true
    },
    {
      id: 3,
      name: "Luxury",
      price: "₹5,00,000",
      duration: "Complete Package",
      features: [
        "Unlimited Choreography Sessions",
        "Complete Wedding Choreography",
        "Custom Music Production",
        "On-site Training (5 Days)",
        "Premium Props & Costumes",
        "2 Months Duration",
        "All Family Performances",
        "Destination Wedding Support",
        "Professional Video Recording"
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
                  <div className={styles.price}>
                    <span className={styles.amount}>{plan.price}</span>
                    <span className={styles.duration}>{plan.duration}</span>
                  </div>
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
