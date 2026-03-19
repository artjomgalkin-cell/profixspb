import { Link } from 'react-router-dom'
import styles from './PriceCard.module.css'

export default function PriceCard({ title, price, description, note }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>{price}</p>
      <p className={styles.description}>{description}</p>
      {note && <p className={styles.note}>{note}</p>}
      <Link to="/contacts" className={styles.link}>
        Заказать
      </Link>
    </article>
  )
}
