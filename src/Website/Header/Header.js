import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../Asset/logo.jpg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <nav className="nav-bar">
        <Link to="/">Trang chủ</Link>
        <Link to="/explore">Khám Phá</Link>
        <Link to="/rooms">Phòng</Link>
        <Link to="#!">Giới thiệu</Link>
        <Link to="https://duynguyen.id.vn/">Liên hệ</Link>
      </nav>
      <a
        href="https://www.booking.com/hotel/vn/cobis-home.vi.html#tab-main"
        className="header__cta--btn"
        target="_blank"
      >
        Đặt Ngay
      </a>
    </header>
  );
}

export default Header;
