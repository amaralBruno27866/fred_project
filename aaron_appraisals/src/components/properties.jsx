import styles from '../styles/properties.module.css';
import image_1 from '../assets/pictures/house1.png';
import image_2 from '../assets/pictures/house2.png';
import image_3 from '../assets/pictures/house3.png';
import { useEffect } from 'react';

export function Properties() {
  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = document.getElementById('carouselExampleCaptions');
      if (!carousel) return;
      const nextBtn = carousel.querySelector('.carousel-control-next');
      if (nextBtn) nextBtn.click();
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id='properties' className={styles.propertiesContainer}>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image_1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img src={image_2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img src={image_3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}