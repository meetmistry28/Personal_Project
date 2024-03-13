import React from "react";

export default function Header() {
  return (
    <div>
      <div className="wrap">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-md d-flex align-items-center">
              <p className="mb-0 phone">
                <span className="mailus">Phone no:</span>{" "}
                <a href="#">9429486425</a> or{" "}
                <span className="mailus">email us:</span>{" "}
                <a href="#">d06mistry@email.com</a>
              </p>
            </div>
            <div className="col-12 col-md d-flex justify-content-md-end">
              <div className="social-media">
                <p className="mb-0 d-flex">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-facebook">
                      <i className="sr-only">Facebook</i>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-twitter">
                      <i className="sr-only">Twitter</i>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-instagram">
                      <i className="sr-only">Instagram</i>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-dribbble">
                      <i className="sr-only">Dribbble</i>
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            Pro<span>Serv</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="index.html" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="about.html" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="services.html" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="portfolio.html" className="nav-link">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="pricing.html" className="nav-link">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="blog.html" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* END nav */}
    </div>
  );
}
