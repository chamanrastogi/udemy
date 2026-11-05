
import Link from "next/link";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        {/* Brand */}
        <Link className="navbar-brand" href="/">
          My Website
        </Link>

        {/* Mobile toggle */}
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

        {/* Navigation links */}
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/about">
                About
              </Link>
            </li>
           <li className="nav-item">
              <Link className="nav-link" href="/posts">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Header;
