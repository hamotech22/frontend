import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="text-white py-5" style={{ backgroundColor: "#1c2331" }}>
      <div className="container">

        {/* TOP ICONS ROW */}
        <div className="row text-center mb-4">

          <div className="col-6 col-md-3 mb-3">
            <div className="mb-2 fs-3">
              <i className="bi bi-geo-alt-fill"></i>
            </div>
            <div>14 E 12th St, New York</div>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <div className="mb-2 fs-3">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <div>+1 299–670–9615</div>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <div className="mb-2 fs-3">
              <i className="bi bi-chat-dots-fill"></i>
            </div>
            <div>Live chat</div>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <div className="mb-2 fs-3">
              <i className="bi bi-envelope-fill"></i>
            </div>
            <div>hi@company.com</div>
          </div>

        </div>

        <hr className="border-light" />

        {/* MAIN FOOTER CONTENT */}
        <div className="row mt-4">

          {/* LEFT SIDE */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">Hostaro</h4>
            <p>
              Reliable web hosting services tailored for your needs.
              Powered by expert support and trusted infrastructure.
            </p>
            <p className="mb-0">
              Images from <a href="#" className="text-white text-decoration-underline">Freepik</a>
            </p>
          </div>

          {/* HELP SECTION */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Help</h5>
            <ul className="list-unstyled">
              <li>FAQs</li>
              <li>Services</li>
              <li>Contact Us</li>
              <li>News & Blog</li>
            </ul>
          </div>

          {/* SERVICES SECTION */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Services</h5>
            <ul className="list-unstyled">
              <li>Shared Hosting</li>
              <li>Managed VPS</li>
              <li>Dedicated Services</li>
              <li>Domain Registration</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM SOCIAL ICONS */}
        <div className="row mt-3">
          <div className="col text-center">
            <a href="#" className="text-white fs-4 mx-2"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white fs-4 mx-2"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-white fs-4 mx-2"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-white fs-4 mx-2"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

      </div>
    </footer>
  );
}
