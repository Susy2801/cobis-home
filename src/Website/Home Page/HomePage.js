import "./HomePage.css";
import { useState } from "react";
import { useEffect } from "react";
import heroImg from "../Asset/Rectangle 5.png";
import adsImg from "../Asset/Hotel rooms bg.png";
import room1 from "../Asset/room1.png";
import room2 from "../Asset/room2.png";
import room3 from "../Asset/room3.png";

function HomePage() {
  const facilities = [1, 1, 1, 1, 1, 1, 1, 1];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const textElement = document.querySelector(".title__para");
      if (textElement) {
        const rect = textElement.getBoundingClientRect();
        setIsVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="home__container">
      {/* Hero */}
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
      {/* Facilities */}
      <div className="home__facilities">
        <h1 className={isVisible ? "title__para fade-in" : "title__para"}>
          Our Facilities
        </h1>
        <h3>We offer modern (5 star) hotel facilities for your comfort.</h3>
        <div className="facilities__container">
          {facilities.map((fac, index) => (
            <div className="facilities">
              <i class="fa-solid fa-person-swimming"></i>
              <p>Swimming Pool</p>
            </div>
          ))}
        </div>
      </div>
      {/* Ads */}
      <div className="home__ads">
        <img src={adsImg} alt="ads-bg" className="ads__bg" />
        <h1>Luxurious Rooms</h1>
        <h3>All room are design for your comfort</h3>
        <div className="ads__rooms">
          <div className="ads__room">
            <img src={room1} alt="img" />
            <h4>Television set, Extra sheets and Breakfast</h4>
          </div>
          <div className="ads__room">
            <img src={room2} alt="img" />
            <h4>Television set, Extra sheets and Breakfast</h4>
          </div>
          <div className="ads__room">
            <img src={room3} alt="img" />
            <h4>Television set, Extra sheets and Breakfast</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
