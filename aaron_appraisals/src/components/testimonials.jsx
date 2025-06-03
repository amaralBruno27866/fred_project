import styles from '../styles/testimonials.module.css';

export function Testimonials() {
  const testimonials = [
    {
      name: "Mary S.",
      text: "Excellent service! I highly recommend it.",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      name: "John B.",
      text: "Fast and professional support.",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4
    },
    {
      name: "Anna J.",
      text: "I was very satisfied with the property purchase.",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5
    },
    {
      name: "Charles L.",
      text: "Very competent and attentive professional.",
      photo: "https://randomuser.me/api/portraits/men/76.jpg",
      rating: 4
    },
    {
      name: "Emily D.",
      text: "The process was smooth and transparent. Great experience!",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5
    },
    {
      name: "Michael C.",
      text: "Quick response and knowlegable advice.",
      photo: "https://randomuser.me/api/portraits/men/85.jpg",
      rating: 4
    }
  ];

  // Função para renderizar estrelas
  const renderStars = (rating) => (
    <div className={styles.stars}>
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ color: i < rating ? '#FFD700' : '#ccc', fontSize: '1.3rem' }}>★</span>
      ))}
    </div>
  );

  return (
    <section id='testimonials' className={styles.testimonialsContainer}>
      <div className={styles.cardsContainer}>
        {testimonials.map((t, idx) => (
          <div key={idx} className={styles.card}>
            <img src={t.photo} alt={t.name} className={styles.photo} />
            {renderStars(t.rating)}
            <p className={styles.text}>"{t.text}"</p>
            <p className={styles.name}>- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}