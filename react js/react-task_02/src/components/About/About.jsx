import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./About.css";

export default function About() {
  return (
    <div className='about pt-3'>
      <div className="container py-5">
        <h1 className='mb-5 text-center'>Need Some Help?</h1>
        
        <div className="row">
          
          {/* LEFT SIDE */}
          <div className="col-12 col-md-5 mb-5">
            <h4 className="fw-bold mb-4">Contact Sales</h4>

            <p className="mb-1">
              <i className="bi bi-telephone-fill me-2"></i>
              <strong>T:</strong> (010) 456 7890
            </p>
            <p>
              <i className="bi bi-envelope-fill me-2"></i>
              <strong>E:</strong> sales@hostingdomain.com
            </p>

            <hr />

            <h5 className="fw-bold">Service Hours:</h5>
            <p><i className="bi bi-clock-fill me-2"></i> Monday to Friday : 9am – 7pm</p>

            <hr />

            <h5 className="fw-bold">Office Address:</h5>
            <p><i className="bi bi-geo-alt-fill me-2"></i> 822 Fancher Drive, Texas, USA</p>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-12 col-md-7">
            <h4 className="fw-bold mb-4">Need help? Get in touch</h4>

            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Enter your Name" />
            </div>

            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Enter a valid email address" />
            </div>

            <div className="mb-3">
              <textarea className="form-control" placeholder="Enter your message" rows="4"></textarea>
            </div>

            <button className="btn btn-primary w-100 fw-bold">
              Send Message
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
