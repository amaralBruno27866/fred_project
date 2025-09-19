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
            {/* Left: logo */}
            <div className="d-flex align-items-center left-area">
              <img src={logo} alt="FJK Logo" className={styles.logo} />
            </div>

            {/* Center: title */}
            <div className="center-area d-flex justify-content-center align-items-center">
              <span className={styles.title}>FJK Real Estate LTD. Brokerage</span>
            </div>

            {/* Right: toggler and links */}
            <div className="d-flex align-items-center right-area">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item ms-3">
                    <a className="btn btn-primary" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}