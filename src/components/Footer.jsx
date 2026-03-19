import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.logo}>Сборка мебели</p>
          <nav className={styles.nav}>
            <Link to="/">Главная</Link>
            <Link to="/services">Услуги</Link>
            <Link to="/contacts">Контакты</Link>
          </nav>
          <p className={styles.copy}>© {new Date().getFullYear()} Сборка мебели</p>
        </div>
      </div>
    </footer>
  )
}
