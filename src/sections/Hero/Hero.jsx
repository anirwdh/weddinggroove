import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const section = heroRef.current;
    
    // Pin hero section for full viewport height
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: false,
    });

    // // Animate paragraph with delay
    // gsap.fromTo(
    //   section.querySelector("p"),
    //   { y: 100, opacity: 0 },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     duration: 1.5,
    //     ease: "power3.out",
    //     scrollTrigger: {
    //       trigger: section,
    //       start: "top 30%",
    //       end: "bottom 30%",
    //       scrub: 1,
    //     },
    //   }
    // );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <img
        src="/assets/images/bg1.jpg"
        alt="Wedding choreography background"
        className={styles.backgroundImage}
      />

      <div className={styles.overlay}>
        <h1>
          The Wedding Groove
        </h1>

        <p>
          Premium choreography for sangeet, couple dance, and destination weddings .
        </p>
      </div>
    </section>
  );
}