import { Navbar } from '../src/components/navbar.jsx';
import { Home } from '../src/components/home.jsx';
import { About } from '../src/components/about.jsx';
import { Properties } from './components/properties.jsx';
import { Testimonials } from './components/testimonials.jsx';
import video from '../src/assets/videos/toronto2.mp4'
import styles from './app.module.css';

export function App() {
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <div className={styles.homeContainer}>
        <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
          <source src={video} type="video/mp4" />
        </video>
        <Home />
      </div>
      <div className={styles.aboutContainer}>
        <About />
      </div>
      <div className={styles.propertiesContainer}>
        <Properties />
      </div>
      <div className={styles.testimonialsContainer}>
        <Testimonials />
      </div>
    </div>
  )
}