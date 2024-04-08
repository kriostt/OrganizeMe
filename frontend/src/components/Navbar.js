// import necessary module
import { Link } from "react-router-dom";

const Navbar = () => {
  // JSX for navbar component
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* logo takes user back to home page when clicked */}
          <Link to="/home" className="navbar-brand">
            OrganizeMe
          </Link>

          {/* button collapse behaviour of navbar on smaller screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* unordered list for navigation items */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/category" className="nav-link" aria-current="page" exact>
                  Category
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/trash" className="nav-link" aria-current="page" exact>
                  Trash
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/favourites" className="nav-link" aria-current="page" exact>
                  Favourites
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/calendar" className="nav-link" aria-current="page" exact>
                  Calendar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

// export navbar component
export default Navbar;
