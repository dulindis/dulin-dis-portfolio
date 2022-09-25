import { CgInstagram } from "react-icons/cg";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer>
      <div className="component-container">
        <p className="copyright">Copyright &#169; dulin dís {currentYear}</p>
        <div className="socials">
          <div className="social-icon">
            <Link to="https://www.instagram.com/dulin_dis/">
              <CgInstagram className="instagram" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
