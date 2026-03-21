import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import { getServiceById } from '../data/services'
import { CONTACTS } from '../constants/contacts'
import styles from './Favorites.module.css'

export default function Favorites() {
  const { favoriteIds, remove, clear } = useFavorites()

  const items = favoriteIds
    .map(id => getServiceById(id))
    .filter(Boolean)

  const byCategory = {}
  items.forEach(svc => {
    byCategory[svc.category] = byCategory[svc.category] || []
    byCategory[svc.category].push(svc)
  })

  const total = items.reduce((sum, svc) => sum + svc.price, 0)

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Избранное</h1>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <p className={styles.emptyText}>Вы ещё не выбрали услуги</p>
            <Link to="/services" className={styles.emptyLink}>Перейти к каталогу</Link>
          </div>
        ) : (
          <>
            <div className={styles.list}>
              {Object.entries(byCategory).map(([cat, services]) => (
                <div key={cat} className={styles.group}>
                  <h2 className={styles.groupTitle}>{cat}</h2>
                  {services.map(svc => (
                    <div key={svc.id} className={styles.item}>
                      <div className={styles.itemInfo}>
                        <p className={styles.itemName}>{svc.name}</p>
                        <p className={styles.itemPrice}>
                          {svc.price.toLocaleString('ru-RU')} ₽
                          <span className={styles.itemUnit}>/{svc.unit}</span>
                        </p>
                      </div>
                      <button
                        type="button"
                        className={styles.removeBtn}
                        onClick={() => remove(svc.id)}
                        aria-label="Удалить"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className={styles.totalBlock}>
              <span className={styles.totalLabel}>Итого:</span>
              <span className={styles.totalValue}>{total.toLocaleString('ru-RU')} ₽</span>
            </div>

            <button type="button" className={styles.clearBtn} onClick={clear}>
              Очистить всё
            </button>
          </>
        )}

        <div className={styles.contacts}>
          <h2 className={styles.contactsTitle}>Свяжитесь с нами для заказа</h2>
          <div className={styles.contactLinks}>
            <a href={`tel:${CONTACTS.phoneTel}`} className={styles.contactLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              {CONTACTS.phoneDisplay}
            </a>
            <a href={CONTACTS.telegramUrl} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              Telegram
            </a>
            <a href={CONTACTS.maxUrl} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              MAX
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
