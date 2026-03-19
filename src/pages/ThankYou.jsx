import { Link } from 'react-router-dom'
import styles from './ThankYou.module.css'

export default function ThankYou() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.icon}>✓</div>
        <h1 className={styles.title}>Заявка отправлена</h1>
        <p className={styles.text}>
          Спасибо! Мы перезвоним вам в ближайшее время для уточнения деталей.
        </p>
        <Link to="/" className={styles.link}>
          На главную
        </Link>
      </div>
    </section>
  )
}
