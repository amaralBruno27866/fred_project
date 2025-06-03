import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from '../styles/navbar.module.css';
import logo from '../assets/pictures/fjk_logo.png';

export function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent border-0">
          <div className="container-fluid d-flex align-items-center justify-content-between">
            {/* Brand logo and name */}
             <img
                src={logo}
                alt="FJK Logo"
                className={styles.logo}
                style={{ margin: '0 1.5rem', height: '48px', width: 'auto' }}
              />
            <div className="d-flex align-items-center">
              <span className={styles.title}>FJK Real Estate LTD. Brokerage</span>
            </div>
            {/* Toggler button for mobile view */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Navigation links */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                {/* 
                <li className="nav-item">
                  <a className="nav-link" href="#properties">Properties</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonials">Testimonials</a>
                </li>
                */}
                <li className="nav-item ms-3">
                  <a className="btn btn-primary" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}