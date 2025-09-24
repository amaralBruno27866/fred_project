// Home / Hero section: presentational. Uses Bootstrap grid for responsive layout.
import styles from '../styles/home.module.css';
import image from '../assets/pictures/fred_3.jpg';

export function Home() {
  return (
    // Section id `home` allows navigation via `#home` anchors.
    <section id='home' className={`${styles.home} container`}>
      <div className="row align-items-center">
        {/* Left column: textual introduction */}
        <div className="col-md-6">
          <div className={styles.content}>
            <h4>WELCOME TO FJK REAL ESTATE LTD., Brokerage</h4>
            <h1>Hi, I'm <span>Fred Klonowski</span>, Broker of Record</h1>
            <p>
              FJK Real Estate LTD., Brokerage is an agency based out of Toronto, 
              Ontario.  We specialize in real estate in Toronto and into the 
              Greater Toronto Area.  As an owner and Broker of 
              Record Fred Klonowski, has sold homes and land for over twenty five
              years negotiating deals for his clients. Whether you are a buyer 
              or a seller, please contact FJK Real Estate for their expertise.
            </p>
          </div>
        </div>

        {/* Right column: profile image and contact info */}
        <div className="col-md-6">
          <div className={styles.image}>
            <img src={image} alt="programmer" className="img-fluid" />
            <p className={styles.contactInfo}>
              Office: 416.480.9162
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}