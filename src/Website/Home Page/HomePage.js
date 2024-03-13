import "./HomePage.css";
import heroImg from "../Asset/Rectangle 5.png";
function HomePage() {
  return (
    <div className="home__container">
      <div className="home__hero">
        <div className="home__hero--left">
          <h3>Cobi's Home</h3>
          <h2>Hotel for every moment rich in emotion</h2>
          <h5>Every moment feels like the first time in paradise view</h5>
          <button>Book now</button>
        </div>
        <div className="home__hero--right">
          <img src={heroImg} alt="hero-img" />
        </div>
      </div>
      <div className="home__facilities">
        <h1>Our Facilities</h1>
        <h3>We offer modern (5 star) hotel facilities for your comfort.</h3>
        <div className="facilities__container">
          <div className="facilities">
            <i class="fa-solid fa-person-swimming"></i>
            <p>Swimming Pool</p>
          </div>
          <div className="facilities">
            <i class="fa-solid fa-person-swimming"></i>
            <p>Swimming Pool</p>
          </div>
          <div className="facilities">
            <i class="fa-solid fa-person-swimming"></i>
            <p>Swimming Pool</p>
          </div>
          <div className="facilities">
            <i class="fa-solid fa-person-swimming"></i>
            <p>Swimming Pool</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
