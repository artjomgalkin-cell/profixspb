import favHeart from '../assets/favorite-heart.png'
import styles from './FavoriteIcon.module.css'

/**
 * Значок «сердце с отвёртками» для добавления услуги в избранное.
 */
export default function FavoriteIcon({ active }) {
  return (
    <img
      src={favHeart}
      alt=""
      width={84}
      height={84}
      className={`${styles.icon} ${active ? styles.iconActive : ''}`}
      aria-hidden
    />
  )
}
