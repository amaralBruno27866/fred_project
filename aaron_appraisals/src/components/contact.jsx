import styles from '../styles/contact.module.css';
import image from '../assets/pictures/fred_3.jpeg';
import logo from '../assets/pictures/fjk_logo.png';

export function Contact() {
  return(
    <section id='contact' className={styles.contactContainer}>
      <div className={styles.contactHeader}>
        <h1>Get in Touch</h1>
        <p>
          If you have a question about a property, we can help!
          Fill out the form below and one of our agents will contact you shortly.
        </p>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.infoCard}>
          <img
            src={image}
            alt="Fred Klonowski"
            className={styles.contactImage}
          />
          <div className={styles.infoText}>
            <h2>Fred Klonowski</h2>
            <p>Office: 416.480.9162</p>
            <p>Email: fjk@bell.net</p>
          </div>
        </div>
        <div className={styles.formBox}>
          <img
            src={logo}
            alt="FJK Realty Logo"
            className={styles.torontoImage}
          />
        </div>
      </div>
    </section>
  )
}