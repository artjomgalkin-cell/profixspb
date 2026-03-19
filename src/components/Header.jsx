import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import styles from './Header.module.css'

const navItems = [
  { path: '/', label: 'Главная' },
  { path: '/services', label: 'Услуги' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { count } = useFavorites()

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`${styles.header} ${menuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          ProFixSPb
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
          <Link
            to="/favorites"
            className={`${styles.link} ${styles.favLink} ${location.pathname === '/favorites' ? styles.linkActive : ''}`}
            onClick={closeMenu}
          >
            Избранное
            {count > 0 && <span className={styles.badge}>{count}</span>}
          </Link>
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
