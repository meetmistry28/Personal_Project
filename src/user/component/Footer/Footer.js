import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
              <h2 className="footer-heading">Cleaning Company</h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-4">
                <li className="ftco-animate">
                  <a href="#">
                    <span className="fa fa-twitter" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="fa fa-facebook" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
              <h2 className="footer-heading">Latest News</h2>
              <div className="block-21 mb-4 d-flex">
                <a
                  className="img mr-4 rounded"
                  style={{ backgroundImage: "url(images/image_1.jpg)" }}
                />
                <div className="text">
                  <h3 className="heading">
                    <a href="#">
                      Even the all-powerful Pointing has no control about
                    </a>
                  </h3>
                  <div className="meta">
                    <div>
                      <a href="#">
                        <span className="icon-calendar" /> Mar. 04, 2020
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-person" /> Admin
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-chat" /> 19
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block-21 mb-4 d-flex">
                <a
                  className="img mr-4 rounded"
                  style={{ backgroundImage: "url(images/image_2.jpg)" }}
                />
                <div className="text">
                  <h3 className="heading">
                    <a href="#">
                      Even the all-powerful Pointing has no control about
                    </a>
                  </h3>
                  <div className="meta">
                    <div>
                      <a href="#">
                        <span className="icon-calendar" /> Mar. 04, 2020
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-person" /> Admin
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <span className="icon-chat" /> 19
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
              <h2 className="footer-heading">Quick Links</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="py-1 d-block">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="py-1 d-block">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="py-1 d-block">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="py-1 d-block">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#" className="py-1 d-block">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="py-1 d-block">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
              <h2 className="footer-heading">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon fa fa-map-marker" />
                    <span className="text">
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </span>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-phone" />
                      <span className="text">9429486425</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-paper-plane" />
                      <span className="text">info@yourdomain.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <p className="copyright">
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with{" "}
                <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib.com
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
