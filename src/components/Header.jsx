import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'

const navItems = [
  { path: '/', label: 'Главная' },
  { path: '/services', label: 'Услуги' },
  { path: '/contacts', label: 'Контакты' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`${styles.header} ${menuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          Сборка мебели
        </Link>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`${styles.link} ${location.pathname === path ? styles.linkActive : ''}`}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </div>
    </header>
  )
}
