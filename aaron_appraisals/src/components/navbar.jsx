// Navbar component: presentational, uses Bootstrap classes for responsive behavior.
// The component imports Bootstrap's JS bundle to enable the navbar toggler on small screens.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from '../styles/navbar.module.css';
import logo from '../assets/pictures/fjk_logo.png';

export function Navbar() {
  return (
    // Outer container for scoped styling via CSS module
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent border-0">
          <div className="container-fluid d-flex align-items-center justify-content-between">
            {/* Left: logo image */}
            <div className="d-flex align-items-center left-area">
              <img src={logo} alt="FJK Logo" className={styles.logo} />
            </div>

            {/* Center: site title */}
            <div className="center-area d-flex justify-content-center align-items-center">
              <span className={styles.title}>FJK Real Estate LTD. Brokerage</span>
            </div>

            {/* Right: responsive toggler and navigation links. Links use anchor hrefs
                which navigate to page sections by id (e.g. #about, #contact). If the
                site becomes an SPA, consider switching to a router-based Link component. */}
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