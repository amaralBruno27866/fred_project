import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from '../styles/navbar.module.css';

export function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent border-0">
          <div className="container-fluid">
            {/* Brand logo and name */}
            <a className="navbar-brand d-flex align-items-center" href="#">          
              <span>FJK Real Estate LTD. Brokerage</span>
            </a>
            {/* Toggler button for mobile view */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Navigation links */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#Home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#About">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Properties">Properties</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Testimonials">Testimonials</a>
                </li>
                <li className="nav-item ms-3">
                  <a className="btn btn-primary" href="#contact-form">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}