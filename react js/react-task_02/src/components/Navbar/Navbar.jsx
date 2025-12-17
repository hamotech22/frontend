import { Link } from "react-router-dom";
import './Navbar.css';
// import logo from "public/logo"
// import logo from "./logo.png"

export default function Navbar() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        {/* <a className="navbar-brand" href="/">Hostaro</a> */}
       <img src="/logo.png" alt="Logo" />

        {/* زر الـ toggle للـ mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* قائمة الروابط */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>

          {/* عناصر على اليمين */}
          <div className="d-flex">
            <a className="btn me-2" href="/home">home</a>
            <a className="btn " href="/about">about </a>
          </div>
        </div>
      </div>
    </nav>
  
    </div>
  );
}
