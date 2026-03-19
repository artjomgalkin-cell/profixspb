import styles from './InfographicCard.module.css'

export default function InfographicCard({ icon, title, description }) {
  return (
    <article className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  )
}
