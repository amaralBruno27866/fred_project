import { Navbar } from '../src/components/navbar.jsx';
import { Home } from '../src/components/home.jsx';
import { About } from '../src/components/about.jsx';
import { Contact } from './components/contact.jsx';
import { Footer } from './components/footer.jsx';
import toronto from '../src/assets/pictures/toronto.jpg'
import styles from './app.module.css';

export function App() {
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <div className={styles.homeContainer}>
        <div
          className={styles.backgroundImage}
          role="img"
          aria-label="Toronto skyline background"
          style={{ backgroundImage: `url(${toronto})` }}
        />
        <Home />
      </div>
      <div className={styles.aboutContainer}>
        <About />
      </div>
      <div className={styles.contactContainer}>
        <Contact />
      </div>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  )
}