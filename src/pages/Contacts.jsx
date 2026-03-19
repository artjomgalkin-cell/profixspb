import ContactForm from '../components/ContactForm'
import styles from './Contacts.module.css'

export default function Contacts() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Контакты</h1>
        <p className={styles.subtitle}>
          Оставьте заявку — перезвоним в течение часа и согласуем выезд.
        </p>
        <div className={styles.content}>
          <div className={styles.formBlock}>
            <h2 className={styles.formTitle}>Заявка на сборку</h2>
            <ContactForm />
          </div>
          <div className={styles.contactsBlock}>
            <h2 className={styles.contactsTitle}>Связь напрямую</h2>
            <div className={styles.contacts}>
              <a href="tel:+79991234567" className={styles.contactLink}>
                <span className={styles.contactIcon}>📞</span>
                +7 (999) 123-45-67
              </a>
              <a href="https://t.me/your_username" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <span className={styles.contactIcon}>✈️</span>
                Telegram
              </a>
              <a href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <span className={styles.contactIcon}>📱</span>
                WhatsApp
              </a>
            </div>
            <p className={styles.note}>
              Замените номер и ссылки на свои в файле <code>Contacts.jsx</code>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
