import { Navbar } from '../src/components/navbar.jsx';
import styles from './app.module.css';

export function App() {
  return (
    <div className={styles.mainContainer}>
      <Navbar />
    </div>
  )
}