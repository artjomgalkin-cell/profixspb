import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ContactForm.module.css'

const furnitureTypes = [
  'Шкаф / комод',
  'Кухня',
  'Диван / кресло',
  'Стол / стул',
  'Другое',
]

export default function ContactForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    description: '',
    type: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Заглушка — можно заменить на Formspree или Telegram API
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    navigate('/thank-you')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">Имя *</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Как к вам обращаться"
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="phone">Телефон *</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="+7 (999) 123-45-67"
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="type">Тип мебели</label>
        <select
          id="type"
          name="type"
          value={form.type}
          onChange={handleChange}
        >
          <option value="">Выберите</option>
          {furnitureTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className={styles.field}>
        <label htmlFor="description">Описание</label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Что нужно собрать, адрес, пожелания"
          rows={4}
        />
      </div>
      <button type="submit" className={styles.submit} disabled={loading}>
        {loading ? 'Отправка...' : 'Отправить заявку'}
      </button>
    </form>
  )
}
