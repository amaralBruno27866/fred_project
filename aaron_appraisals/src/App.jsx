// Top-level application layout: assembles the main sections of the site.
// Each section is implemented as a presentational component in `src/components/`.
import { Navbar } from '../src/components/navbar.jsx';
import { Home } from '../src/components/home.jsx';
import { About } from '../src/components/about.jsx';
import { Contact } from './components/contact.jsx';
import { Footer } from './components/footer.jsx';
import toronto from '../src/assets/pictures/toronto.jpg'
import styles from './app.module.css';

export function App() {
  return (
    // Layout container; CSS Module `app.module.css` scopes the classes used.
    <div className={styles.mainContainer}>
      {/* Navigation */}
      <Navbar />

      {/* Home / hero section with a background image */}
      <div className={styles.homeContainer}>
        <div
          className={styles.backgroundImage}
          role="img"
          aria-label="Toronto skyline background"
          style={{ backgroundImage: `url(${toronto})` }}
        />
        <Home />
      </div>

      {/* About section */}
      <div className={styles.aboutContainer}>
        <About />
      </div>

      {/* Contact section */}
      <div className={styles.contactContainer}>
        <Contact />
      </div>

      {/* Footer */}
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  )
}