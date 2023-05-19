import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <Link className="link" to="/products/1">
            Women
          </Link>
          <Link className="link" to="/products/2">
            Men
          </Link>
          <Link className="link" to="/products/3">
            Children
          </Link>
          <Link className="link" to="/products/4">
            Shoes
          </Link>
          <Link className="link" to="/products/5">
            Bags
          </Link>
          <Link className="link" to="/products/6">
            Sunglasess
          </Link>
        </div>
        <div className="item">
          <h1>Links</h1>
          <Link className="link" to="/">
            FAQ
          </Link>
          <Link className="link" to="/">
            Pages
          </Link>
          <Link className="link" to="/">
            Stores
          </Link>
          <Link className="link" to="/">
            Wishlist
          </Link>
          <Link className="link" to="/">
            Compare
          </Link>
          <Link className="link" to="/">
            Cookies
          </Link>
        </div>
        <div className="item item2">
          <h1>About</h1>
          <span>
            Fashionique: Your ultimate destination for trendy fashion. Discover
            the latest styles, shop with ease, and express your unique fashion
            sense.
          </span>
        </div>
        <div className="item item2">
          <h1>Contact</h1>
          <span>
            Contact us at Fashionique for any inquiries or assistance. Reach out
            via email or phone and our team will be happy to help you.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Fashionique</span>
          <span className="copyright">
            &copy; Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
