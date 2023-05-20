import "./Contact.scss";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US</span>
        <div className="mail">
          <input type="text" placeholder="Enter you e-mail..." required />
          <button
            onClick={() =>
              window.open("mailto:isiaqridwanbukola1999@gmail.com")
            }
          >
            JOIN US
          </button>
        </div>
        <div className="icons">
          <Link className="link" to="https://twitter.com/rb_isiaq">
            <TwitterIcon />
          </Link>
          <Link className="link" to="https://linkedin.com/in/rb-isiaq">
            <LinkedInIcon />
          </Link>
          <Link className="link" to="https://github.com/rb-isiaq">
            <GitHubIcon />
          </Link>
          <Link className="link" to="https://facebook.com/ridwan2535">
            <FacebookIcon />
          </Link>
          <Link className="link" to="https://instagram.com/r.b.isiaq">
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
