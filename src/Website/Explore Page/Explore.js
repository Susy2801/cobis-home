import "./Explore.css";
import ReactPlayer from "react-player";
import { useEffect } from "react";
// Photo
import roomtour1 from "../Asset/room_tour1.png";
import roomtour2 from "../Asset/room_tour2.png";
import roomtour3 from "../Asset/room_tour3.png";

function Explore() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll đến đầu trang
  }, []);
  return (
    <div className="explore__container">
      <ReactPlayer
        className="video__player"
        url="https://www.youtube.com/watch?v=1LIdrqAf7ic"
        width={1512}
        height={700}
        playing={true}
        controls={false}
      />

      <div className="explore__tour">
        <h2>Take a tour</h2>
        <div className="room__tour">
          <img src={roomtour1} />

          <div className="tour__info">
            <h3>Luxurious rooms</h3>
            <h4>
              The elegant luxury bedrooms in this gallery showcase custom
              interior designs & decorating ideas. View pictures and find your
              perfect luxury bedroom design.Luxurious bedrooms that will make
              you never want to leave your room again. See more ideas about
              luxurious bedrooms, bedroom design
            </h4>
          </div>
        </div>

        {/* tour 2 */}
        <div className="room__tour">
          <img src={roomtour2} />

          <div className="tour__info">
            <h3>Gym center</h3>
            <h4>
              The elegant luxury bedrooms in this gallery showcase custom
              interior designs & decorating ideas. View pictures and find your
              perfect luxury bedroom design.Luxurious bedrooms that will make
              you never want to leave your room again. See more ideas about
              luxurious bedrooms, bedroom design
            </h4>
          </div>
        </div>

        {/* tour 3 */}
        <div className="room__tour">
          <img src={roomtour3} />

          <div className="tour__info">
            <h3>Restaurant</h3>
            <h4>
              The elegant luxury bedrooms in this gallery showcase custom
              interior designs & decorating ideas. View pictures and find your
              perfect luxury bedroom design.Luxurious bedrooms that will make
              you never want to leave your room again. See more ideas about
              luxurious bedrooms, bedroom design
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
