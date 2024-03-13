import "./RoomPage.css";
import heroImg from "../Asset/video.png";
import roomImg from "../Asset/Rectangle 26.png";
function RoomPage() {
  const room = [1, 1, 1, 1, 1, 1, 1];
  return (
    <div>
      <div className="hero__container">
        <img className="hero__img" src={heroImg} alt="hero_img" />
        <h1>Rooms and Suites</h1>
        <h2>
          The elegant luxury bedrooms in this gallery showcase custom interior
          designs & decorating ideas. View pictures and find your perfect luxury
          bedroom design.
        </h2>
      </div>
      <div className="room__container">
        {room.map((room, index) => (
          <div className="room" key={index}>
            <img alt="room_img" src={roomImg} className="room__img" />
            <div className="room__detail">
              <div className="room__detail--status">
                <h3>The Royal Room</h3>
                <h4>Available: Yes</h4>
              </div>
              <div className="room__detail--price">100$</div>
            </div>
            <div className="room__function">
              <div className="function__icon">
                <i class="fa-solid fa-wifi"></i>
                <i class="fa-solid fa-tv"></i>
                <i class="fa-solid fa-shower"></i>
              </div>
              <button>BOOK NOW</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomPage;
