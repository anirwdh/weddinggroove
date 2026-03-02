import styles from './Container.module.css'

export default function Container({ children, className = '', size = 'medium' }) {
  const containerClassName = `${styles.container} ${styles[size]} ${className}`

  return (
    <div className={containerClassName}>
      {children}
    </div>
  )
}
