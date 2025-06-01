import styles from '../styles/testimonials.module.css';

export function Testimonials() {
  const testimonials = [
    {
      name: "Mary Smith",
      text: "Excellent service! I highly recommend it.",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      name: "John Brown",
      text: "Fast and professional support.",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4
    },
    {
      name: "Anna Johnson",
      text: "I was very satisfied with the property appraisal.",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5
    },
    {
      name: "Charles Lee",
      text: "Very competent and attentive team.",
      photo: "https://randomuser.me/api/portraits/men/76.jpg",
      rating: 4
    },
    {
      name: "Emily Davis",
      text: "The process was smooth and transparent. Great experience!",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5
    },
    {
      name: "Michael Clark",
      text: "Quick response and detailed appraisal report.",
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