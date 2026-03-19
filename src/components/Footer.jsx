import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.logo}>ProFixSPb</p>
          <nav className={styles.nav}>
            <Link to="/">Главная</Link>
            <Link to="/services">Услуги</Link>
            <Link to="/favorites">Избранное</Link>
          </nav>
          <a href="tel:+79112689472" className={styles.phone}>8 (911) 268-94-72</a>
        </div>
      </div>
    </footer>
  )
}
