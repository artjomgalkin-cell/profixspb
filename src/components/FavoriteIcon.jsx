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
      width={28}
      height={28}
      className={`${styles.icon} ${active ? styles.iconActive : ''}`}
      aria-hidden
    />
  )
}
