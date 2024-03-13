import React from "react";

export default function About() {
  return (
    <div>

      <h1>ABOUT</h1>
      &lt;{" "}
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: 'url("images/bg_2.jpg")' }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text align-items-end">
            <div className="col-md-9 ftco-animate pb-5">
              <p className="breadcrumbs mb-2">
                <span className="mr-2">
                  <a href="index.html">
                    Home <i className="fa fa-chevron-right" />
                  </a>
                </span>{" "}
                <span>
                  About us <i className="fa fa-chevron-right" />
                </span>
              </p>
              <h1 className="mb-0 bread">About Us</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row d-flex no-gutters">
            <div className="col-md-6 d-flex">
              <div
                className="img d-flex align-items-center justify-content-center py-5 py-md-0"
                style={{ backgroundImage: "url(images/about.jpg)" }}
              >
                <div className="time-open-wrap">
                  <div className="desc p-4">
                    <h2>Business Hours</h2>
                    <div className="opening-hours">
                      <h4>Opening Days:</h4>
                      <p className="pl-3">
                        <span>
                          <strong>Monday – Friday:</strong> 9am to 20 pm
                        </span>
                        <span>
                          <strong>Saturday :</strong> 9am to 17 pm
                        </span>
                      </p>
                      <h4>Vacations:</h4>
                      <p className="pl-3">
                        <span>All Sunday Days</span>
                        <span>All Official Holidays</span>
                      </p>
                    </div>
                  </div>
                  <div className="desc p-4 bg-secondary">
                    <h3 className="heading">For Emergency Cases</h3>
                    <span className="phone">(+01) 123 456 7890</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 pl-md-5 pt-md-5">
              <div className="row justify-content-start py-5">
                <div className="col-md-12 heading-section ftco-animate">
                  <span className="subheading">
                    Welcome to Cleaning Company
                  </span>
                  <h2 className="mb-4">Let's make you fresher than ever</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth.
                  </p>
                </div>
              </div>
              <div className="row ftco-counter py-5" id="section-counter">
                <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number={45}>
                        0
                      </strong>
                    </div>
                    <div className="text">
                      <span>
                        Years of <br />
                        Experienced
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number={2342}>
                        0
                      </strong>
                    </div>
                    <div className="text">
                      <span>
                        Happy <br />
                        Customers
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number={30}>
                        0
                      </strong>
                    </div>
                    <div className="text">
                      <span>
                        Building <br />
                        Cleaned
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-3 pr-md-4 pb-lg-0 pb-4">
              <div className="heading-section ftco-animate text-center text-lg-left">
                <span className="subheading">Team &amp; Staff</span>
                <h2>Our Team</h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country
                </p>
                <p>
                  <a href="#" className="btn btn-secondary">
                    View All Staff
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 ftco-animate d-flex">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{ backgroundImage: "url(images/staff-1.jpg)" }}
                  />
                </div>
                <div className="text pt-3 px-3 pb-4 text-center">
                  <h3>Lloyd Wilson</h3>
                  <span className="position mb-2">Office Cleaner</span>
                  <div className="faded">
                    <ul className="ftco-social text-center">
                      <li className="ftco-animate">
                        <a
                          href="#"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-twitter" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a
                          href="#"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-facebook" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a
                          href="#"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-google" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a
                          href="#"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 ftco-animate d-flex">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{ backgroundImage: "url(images/staff-2.jpg)" }}
                  />
                </div>
                <div className="text pt-3 px-3 pb-4 text-center">
                  <h3>Lloyd Wilson</h3>
                  <span className="position mb-2">Office Cleaner</span>
                  <div className="faded">
                    <ul className="ftco-social text-center">
                      <li className="ftco-animate">
                        <a
                          href="#"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-twitter" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a
                          href="#"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-facebook" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a
                          href="#"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-google" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a
                          href="#"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 ftco-animate d-flex">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div
                    className="img align-self-stretch"
                    style={{ backgroundImage: "url(images/staff-3.jpg)" }}
                  />
                </div>
                <div className="text pt-3 px-3 pb-4 text-center">
                  <h3>Lloyd Wilson</h3>
                  <span className="position mb-2">Office Cleaner</span>
                  <div className="faded">
                    <ul className="ftco-social text-center">
                      <li className="ftco-animate">
                        <a
                          href="#"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-twitter" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a
                          href="#"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-facebook" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a
                          href="#"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-google" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a
                          href="#"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section testimony-section bg-light">
        <div className="container">
          <div className="row justify-content-center pb-5 mb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <span className="subheading">Testimonies</span>
              <h2>Happy Customer</h2>
            </div>
          </div>
          <div className="row ftco-animate">
            <div className="col-md-12">
              <div className="carousel-testimony owl-carousel ftco-owl">
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-right" />
                    </div>
                    <div className="text">
                      <div className="d-flex align-items-center mb-4">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(images/person_1.jpg)",
                          }}
                        />
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                      <p className="mb-1">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-right" />
                    </div>
                    <div className="text">
                      <div className="d-flex align-items-center mb-4">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(images/person_2.jpg)",
                          }}
                        />
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                      <p className="mb-1">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-right" />
                    </div>
                    <div className="text">
                      <div className="d-flex align-items-center mb-4">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(images/person_3.jpg)",
                          }}
                        />
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                      <p className="mb-1">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-right" />
                    </div>
                    <div className="text">
                      <div className="d-flex align-items-center mb-4">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(images/person_1.jpg)",
                          }}
                        />
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                      <p className="mb-1">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-right" />
                    </div>
                    <div className="text">
                      <div className="d-flex align-items-center mb-4">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url(images/person_2.jpg)",
                          }}
                        />
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                      <p className="mb-1">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="ftco-section ftco-intro"
        style={{ backgroundImage: 'url("images/bg_3.jpg")' }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2>Together we will explore new things</h2>
              <a
                href
                className="icon-video d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-play" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
