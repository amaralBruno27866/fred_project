import styles from '../styles/about.module.css';
import image_1 from '../assets/pictures/selling.jpg';
import image_2 from '../assets/pictures/fred_3.jpeg';
import image_3 from '../assets/pictures/evaluation.jpg';

export function About() {
  return (
    <section id='about' className={styles.aboutContainer}>
      <div className="container text-center">
        <div className="row row-cols-3">
          <div className="col">
            <div className={styles.card}>
              <img src={image_1} alt="" />
              <h2>Who we are?</h2>
              <p>
                FJK Real Estate LTD., Brokerage is an agency based out of Toronto, 
                Ontario.  We specialize in real estate in Toronto and into the 
                Greater Toronto Area. As a real estate agent, owner and Broker of 
                Record, Fred Klonowski, has sold homes and land for twenty five 
                years negotiating deals for his clients. Whether you are a buyer 
                or a seller, please contact FJK Real Estate for their expertise.
              </p>
            </div>
          </div>
          <div className="col">
            <div className={styles.card}>
              <img src={image_2} alt="" />
              <h2>Fred Klonowski</h2>
              <p>
                I am a licensed Realtor and specialize in representing buyers and 
                sellers in the purchase and sale residences within The Greater 
                Toronto Area. I truly love our city and pride myself on my knowledge 
                of current listings, school districts, neighborhood information, 
                and everything related to buying and selling a home here in Toronto.
                I add value to both sides of a Real Estate transaction. Simply 
                said, if you are in the market to buy or sell a home, I put my 
                25 years of real estate expertise to work for you.

              </p>
            </div>
          </div>
          <div className="col">
            <div className={styles.card}>
              <img src={image_3} alt="" />
              <h2>Our values</h2>
              <p>
                At FJK Real Estate, we believe in integrity, professionalism, and 
                putting our clients first. Our commitment to these values has 
                earned us a reputation as a trusted real estate partner in the 
                Greater Toronto Area. Whether you are buying or selling, we are 
                dedicated to providing you with the highest level of service and 
                expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}