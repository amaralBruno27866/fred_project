import { useState } from 'react';
import styles from '../styles/contact.module.css';
import image from '../assets/pictures/fred_2.png';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Aqui você pode adicionar lógica para enviar os dados para um backend ou serviço de e-mail
  };

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
            <p>Mail: contact@fjkrealestate.com</p>
          </div>
        </div>
        <div className={styles.formBox}>
          {submitted ? (
            <div className={styles.successMessage}>Thank you for your message! We will get back to you soon.</div>
          ) : (
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required />
              </div>
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}