import styles from '../styles/footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <span>&copy; {new Date().getFullYear()} Fred Klonowski Real Estate. All rights reserved.</span>
      </div>
    </footer>
  )
}