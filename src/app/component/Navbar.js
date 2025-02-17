import Link from "next/link";
import styles from "./../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/home">
          SOURAV
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/movie">
                Movie
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/course">
                Course
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa-solid fa-cloud-sun"></i>
                </Link>
                <ul className="dropdown-menu text-center"> 
                  <li><Link className="dropdown-item" href="#"><i className="fa-solid fa-sun"></i> Day</Link></li>
                  <li><Link className="dropdown-item" href="#"><i className="fa-solid fa-moon"></i> Night</Link></li>
                  {/* <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" href="#">Something else here</Link></li> */}
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
   
          &nbsp;
          <Link href='/auth/login' className=" nav-link" type="submit">
              Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
