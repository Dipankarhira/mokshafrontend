import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { UserContext } from "../App";

export default function Navbar() {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item col-auto px-3 lead">
            <Link className="nav-link active" aria-current="page" to="/BookNow">
              Book Now
            </Link>
          </li>

          <li className="nav-item col-auto px-2 lead">
            <Link className="nav-link" to="/logout">
              Logout
            </Link>
          </li>
          <li className="nav-item dropdown col-auto px-3 lead">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item lead" to="/profile">
                  My Profile
                </Link>
              </li>
              {/* <li>
                    <Link className="dropdown-item" to="/mybookingscreen">
                      My Bookings
                    </Link>
                  </li> */}
              <li>
                <Link className="dropdown-item lead" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="dropdown-item lead" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item col-auto px-3 ">
            {/* <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/BookNow"
                >
                  Book Now
                </Link> */}
          </li>
          <li className="nav-item col-auto px-1 lead">
            <Link className="nav-link active" aria-current="page" to="/signup">
              SignUp
            </Link>
          </li>
          <li className="nav-item col-auto px-2 lead">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item col-auto px-1 lead">
            <Link className="nav-link" to="/gallery">
              Gallery
            </Link>
          </li>

          {/* <li className="nav-item dropdown col-auto px-3">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/gallery">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/contact">
                      Contact Us
                    </Link>
                  </li> 
                </ul>
              </li> */}
        </>
      );
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark  fixed-top p-md-1 h-auto ">
        <div className="container-fluid">
          <Link className="navbar-brand px-3 lead" to="/">
            Home{" "}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <RenderMenu />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
