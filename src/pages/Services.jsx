import { useState } from 'react'
import { CATEGORIES, getServicesByCategory } from '../data/services'
import { useFavorites } from '../context/FavoritesContext'
import ScrewdriverIcon from '../components/ScrewdriverIcon'
import styles from './Services.module.css'

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0])
  const { toggle, isFavorite } = useFavorites()
  const services = getServicesByCategory(activeCategory)

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Услуги и цены</h1>
        <p className={styles.subtitle}>
          Выберите категорию и отметьте нужные услуги — они сохранятся в избранном
        </p>

        <div className={styles.tabs}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              type="button"
              className={`${styles.tab} ${activeCategory === cat ? styles.tabActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.cards}>
          {services.map(svc => {
            const active = isFavorite(svc.id)
            return (
              <div
                key={svc.id}
                className={`${styles.card} ${active ? styles.cardActive : ''}`}
              >
                <div className={styles.cardInfo}>
                  <p className={styles.cardName}>{svc.name}</p>
                  <p className={styles.cardPrice}>
                    {svc.price.toLocaleString('ru-RU')} ₽
                    <span className={styles.cardUnit}>/{svc.unit}</span>
                  </p>
                </div>
                <button
                  type="button"
                  className={`${styles.favBtn} ${active ? styles.favBtnActive : ''}`}
                  onClick={() => toggle(svc.id)}
                  aria-label={active ? 'Убрать из избранного' : 'Добавить в избранное'}
                >
                  <ScrewdriverIcon active={active} size={22} />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
