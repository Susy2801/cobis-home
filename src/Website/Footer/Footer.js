import "./Footer.css";
function Footer() {
  const box = [1, 1, 1, 1, 1];
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__review">
          <div className="review__title">Cobis's Home</div>
          <div className="review__para">
            The service at the Hotel Monteleone was exceptional. There was
            absolutely no issue that was not addressed timely and with
            satisfactory results. We were particulary impressed with how the
            hotel staff anticipated our needs (periodically coming by the Board
            Room to check with us)
          </div>
        </div>
        <div className="footer__social">
          <div className="social__title">Social</div>
          <div className="social__prop">
            <h6>Facebook</h6>
            <h6>Instagram</h6>
            <h6>Tiktok</h6>
          </div>
        </div>
        <div className="footer__Contact"></div>
      </div>
    </footer>
  );
}

export default Footer;
