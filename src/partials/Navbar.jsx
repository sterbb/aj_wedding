
import { NavLink } from 'react-router-dom';
import Logo from "../assets/images/Logo.png"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0 bg-light border-bottom">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={Logo} alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse alegreya-sc-medium" style={{fontSize: "1.1em"}} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/gallery">
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/rsvp">
                RSVP
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/entourage">
                Entourage
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/attire">
                Attire
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/venue">
                Venue
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
