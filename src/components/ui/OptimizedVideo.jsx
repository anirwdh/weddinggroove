import { useState, useRef, useEffect } from 'react'
import styles from './OptimizedVideo.module.css'

export default function OptimizedVideo({ 
  src, 
  className = '', 
  autoPlay = false, 
  muted = false, 
  loop = false,
  poster,
  controls = false 
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const videoRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoadedData = () => {
    setIsLoaded(true)
  }

  return (
    <div ref={videoRef} className={`${styles.videoContainer} ${className}`}>
      {!isLoaded && <div className={styles.placeholder} />}
      {isInView && (
        <video
          ref={videoRef}
          className={`${styles.video} ${isLoaded ? styles.loaded : ''}`}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={controls}
          poster={poster}
          onLoadedData={handleLoadedData}
          preload="metadata"
          playsInline
          loading="lazy"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}
