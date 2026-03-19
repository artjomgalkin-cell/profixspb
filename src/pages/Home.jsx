import { Link } from 'react-router-dom'
import InfographicCard from '../components/InfographicCard'
import styles from './Home.module.css'

const icons = {
  clock: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  tool: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  user: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
}

const advantages = [
  {
    icon: icons.clock,
    title: 'Быстро',
    description: 'Соберём мебель в день обращения или в удобное для вас время.',
  },
  {
    icon: icons.shield,
    title: 'Гарантия',
    description: 'Даём гарантию на все виды работ. Исправим недостатки бесплатно.',
  },
  {
    icon: icons.tool,
    title: 'Профессиональный инструмент',
    description: 'Используем качественный инструмент — никаких сколов и царапин.',
  },
  {
    icon: icons.user,
    title: 'Опытные мастера',
    description: 'Собираем мебель любой сложности: ИКЕА, Леруа Мерлен и другие.',
  },
]

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Профессиональная сборка мебели в СПб</h1>
          <p className={styles.heroSubtitle}>
            Узнайте стоимость сборки прямо сейчас — выберите нужные услуги и рассчитайте итоговую цену.
          </p>
          <Link to="/services" className={styles.cta}>
            Рассчитать стоимость
          </Link>
        </div>
      </section>

      <section className={styles.advantages}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Почему выбирают нас</h2>
          <div className={styles.cards}>
            {advantages.map((item) => (
              <InfographicCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBlock}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.ctaTitle}>Хотите узнать стоимость?</h2>
          <p className={styles.ctaText}>Выберите нужные услуги из каталога и посмотрите итоговую цену</p>
          <Link to="/services" className={styles.btnPrimary}>
            Посмотреть цены
          </Link>
        </div>
      </section>
    </>
  )
}
