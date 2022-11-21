import { FaHeart, FaRegStar, FaTrophy, FaWallet } from "react-icons/fa";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero--banner">
        {/* <img src="../assests/slide04.jpeg" alt="4" /> */}
        <div className="banner--text">
          <h1>MUST HAVE STYLES</h1>
          <span>
            The New standard under favourable smart gadgets from all over the
            world.
          </span>

          <button className="home--button">Start Buying Now!</button>
        </div>
        <div className="feature">
          <div className="feature--name">
            <span>
              FEATURED PRODUCTS
              <hr />
            </span>
          </div>
          <div className="featured--items">
            <div className="item">
              <img src="./assests/pr1.png" alt="pr1" />
            </div>
            <div className="item">
              <img src="./assests/pr29.png" alt="pr1" />
            </div>
            <div className="item">
              <img src="./assests/pr13.png" alt="pr1" />
            </div>
            <div className="item">
              <img src="./assests/pr17.png" alt="pr1" />
            </div>
            <div className="item">
              <img src="./assests/pr22.png" alt="pr1" />
            </div>
          </div>
        </div>

        <h3 className="feature--name">
          <span>
            {" "}
            Why choose us!
            <hr />
          </span>
        </h3>
        <div className="achievements">
          <div className="achievements--tag">
            <span>
              <FaTrophy size={40} color="brown" />
            </span>
            <h3>Best Sellers</h3>
            <p>
              Since 2022, E-market has been at the top of the Opencart weekly
              charts for every day, week, month and year in a row
            </p>
          </div>
          <div className="achievements--tag">
            <span>
              <FaRegStar size={40} color="gold" />
            </span>
            <h3>Best Rated</h3>
            <p>
              Best overall rating from more than 2500 reviews accumulated over
              more than 6 years of hard work and dedication
            </p>
          </div>
          <div className="achievements--tag">
            <span>
              <FaHeart size={40} color="red" />
            </span>
            <h3>Most Loved</h3>
            <p>
              With an average 97% satisfaction rate, over 20.000 people have
              come to love Journal more than any other Opencart theme
            </p>
          </div>
          <div className="achievements--tag">
            <span>
              <FaWallet size={40} color="brown" />
            </span>
            <h3>Tried & Tested</h3>
            <p>
              Years of testing and feedback from our customers have made Journal
              the most used and tested Opencart theme in the world
            </p>
          </div>
        </div>
        <div className="why--us">
          <div className="why-text"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
