import styles from './Button.module.css'

export default function Button({ children, variant = 'primary', size = 'medium', href, onClick, type = 'button' }) {
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  )
}
