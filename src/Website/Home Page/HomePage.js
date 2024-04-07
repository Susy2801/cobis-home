import "./HomePage.css";
import { useState } from "react";
import { useEffect } from "react";
import heroImg from "../Asset/Cobi/main.jpg";
import adsImg from "../Asset/Cobi/bg.jpg";
import room1 from "../Asset/Cobi/room1.jpg";
import room2 from "../Asset/Cobi/room2.jpg";
import room3 from "../Asset/Cobi/room3.jpg";

function HomePage() {
  const facilities = [1, 1, 1, 1, 1, 1];
  const [isVisible, setIsVisible] = useState(false);
  const [width, setWidth] = useState("280px");
  const [isHover, setHover] = useState("");

  function Fachover(index) {
    setHover(index);
    setWidth("400px");
  }

  function Facleave() {
    setWidth("280px");
  }

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

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll đến đầu trang
  }, []);

  return (
    <div className="home__container">
      {/* Hero */}
      <div className="home__hero">
        <div className="home__hero--left">
          <h3>Cobi's Home</h3>
          <h2>Hotel for every moment rich in emotion</h2>
          <h5>Every moment feels like the first time in paradise view</h5>
          <a
            href="https://www.booking.com/hotel/vn/cobis-home.vi.html#tab-main"
            target="_blank"
          >
            Book now
          </a>
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
            <div
              className="facilities"
              onMouseEnter={() => Fachover(index)}
              onMouseLeave={() => Facleave(index)}
              style={index == isHover ? { width: width } : { width: "280px" }}
            >
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
            <img src={room1} alt="img" className="ads__pic" />
            <h4>Television set, Extra sheets and Breakfast</h4>
          </div>
          <div className="ads__room">
            <img src={room2} alt="img" className="ads__pic" />
            <h4>Television set, Extra sheets and Breakfast</h4>
          </div>
          <div className="ads__room">
            <img src={room3} alt="img" className="ads__pic" />
            <h4>Television set, Extra sheets and Breakfast</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
