import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img src="" alt="logo" className="header__logo" />
      <nav className="nav-bar">
        <Link to="/">Trang chủ</Link>
        <Link to="#!">Khám Phá</Link>
        <Link to="/rooms">Phòng</Link>
        <Link to="#!">Giới thiệu</Link>
        <Link to="#!">Liên hệ</Link>
      </nav>
      <button href="#!" className="header__cta--btn">
        Đặt Ngay
      </button>
    </header>
  );
}

export default Header;
