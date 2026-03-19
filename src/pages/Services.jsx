import { Link } from 'react-router-dom'
import PriceCard from '../components/PriceCard'
import styles from './Services.module.css'

const services = [
  {
    title: 'Сборка шкафов и комодов',
    price: 'от 1 500 ₽',
    description: 'Шкафы-купе, комоды, тумбы. Сборка по инструкции с проверкой.',
    note: 'Точная цена зависит от сложности',
  },
  {
    title: 'Сборка кухни',
    price: 'от 3 000 ₽',
    description: 'Кухонные гарнитуры любой комплектации. Установка техники.',
    note: 'За погонный метр',
  },
  {
    title: 'Сборка диванов и кресел',
    price: 'от 2 000 ₽',
    description: 'Мягкая мебель, трансформеры, угловые диваны.',
    note: null,
  },
  {
    title: 'Разборка и перенос',
    price: 'от 1 000 ₽',
    description: 'Аккуратная разборка, упаковка и перенос на новый адрес.',
    note: null,
  },
]

const steps = [
  { num: 1, title: 'Заявка', text: 'Оставьте заявку на сайте или позвоните нам' },
  { num: 2, title: 'Выезд', text: 'Согласуем время, приедем и соберём мебель' },
  { num: 3, title: 'Готово', text: 'Проверка качества, уборка упаковки' },
]

export default function Services() {
  return (
    <>
      <section className={styles.intro}>
        <div className={styles.container}>
          <h1 className={styles.title}>Услуги и цены</h1>
          <p className={styles.subtitle}>
            Ориентировочные цены. Точную стоимость уточним после осмотра или по фото.
          </p>
        </div>
      </section>

      <section className={styles.prices}>
        <div className={styles.container}>
          <div className={styles.cards}>
            {services.map((item) => (
              <PriceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.steps}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Как заказать</h2>
          <div className={styles.stepsGrid}>
            {steps.map(({ num, title, text }) => (
              <div key={num} className={styles.step}>
                <span className={styles.stepNum}>{num}</span>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepText}>{text}</p>
              </div>
            ))}
          </div>
          <div className={styles.ctaWrap}>
            <Link to="/contacts" className={styles.cta}>
              Оставить заявку
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
