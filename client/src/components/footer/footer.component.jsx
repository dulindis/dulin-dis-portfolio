import { CgInstagram } from "react-icons/cg";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <div className="component-container">
      <p className="copyright">Copyright &#169; dulin dís 2022</p>
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

export default Footer;
