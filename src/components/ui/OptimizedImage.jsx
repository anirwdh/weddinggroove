import { useState, useRef, useEffect } from 'react'
import styles from './OptimizedImage.module.css'

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false 
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef()

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

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const generateSrcSet = (baseSrc) => {
    const formats = ['webp', 'avif', 'jpg']
    return formats.map(format => 
      `${baseSrc.replace(/\.(jpg|jpeg|png)$/i, `.${format}`)} ${format === 'jpg' ? 'fallback' : format}`
    ).join(', ')
  }

  return (
    <div ref={imgRef} className={`${styles.imageContainer} ${className}`}>
      {!isLoaded && <div className={styles.placeholder} />}
      {isInView && (
        <picture>
          <source 
            srcSet={generateSrcSet(src)} 
            type="image/webp"
            sizes={sizes}
          />
          <source 
            srcSet={src} 
            type="image/jpeg"
            sizes={sizes}
          />
          <img
            src={src}
            alt={alt}
            className={`${styles.image} ${isLoaded ? styles.loaded : ''}`}
            loading={priority ? 'eager' : loading}
            onLoad={handleLoad}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
          />
        </picture>
      )}
    </div>
  )
}
