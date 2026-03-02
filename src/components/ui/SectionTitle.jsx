import styles from './SectionTitle.module.css'

export default function SectionTitle({ title, subtitle, centered = false }) {
  return (
    <div className={`${styles.sectionTitle} ${centered ? styles.centered : ''}`}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}
