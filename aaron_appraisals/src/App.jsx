import { Navbar } from '../src/components/navbar.jsx';
import { Home } from '../src/components/home.jsx';
import video from '../src/assets/videos/toronto2.mp4'
import styles from './app.module.css';

export function App() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.homeContainer}>
        <Navbar />
        <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
          <source src={video} type="video/mp4" />
        </video>
        <Home />
      </div>
    </div>
  )
}