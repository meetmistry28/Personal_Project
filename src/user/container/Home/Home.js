import React from "react";
import { Overlay } from "react-overlays";

export default function Home() {
  let owl = {
    center: false,
    loop: true,
    items: 1,
    margin: 30,
    stagePadding: 0,
    nav: false,
    navText: [
      '<span class="ion-ios-arrow-back">',
      '<span class="ion-ios-arrow-forward">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <div
        className="hero-wrap js-fullheight"
        style={{ backgroundImage: 'url("images/bg_1.jpg")' }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />
        <div className="container">
          <div
            className="row no-gutters slider-text js-fullheight align-items-center justify-content-start"
            data-scrollax-parent="true"
          >
            <div className="col-md-6 ftco-animate">
              <h2 className="subheading">
                Leave the house cleaning chores to us
              </h2>
              <h1 className="mb-4">
                Let us do the dirty work, so you don't have to.
              </h1>
              <p>
                <a href="#" className="btn btn-primary mr-md-4 py-2 px-4">
                  Learn more <span className="ion-ios-arrow-forward" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-appointment ftco-section ftco-no-pt ftco-no-pb">
        <div className="overlay" />
        <div className="container">
          <div className="row d-md-flex justify-content-center">
            <div className="col-md-12">
              <div className="wrap-appointment bg-white d-md-flex pl-md-4 pb-5 pb-md-0">
                <form action="#" className="appointment w-100">
                  <div className="row justify-content-center">
                    <div className="col-12 col-md d-flex align-items-center pt-4 pt-md-0">
                      <div className="form-group py-md-4 py-2 px-4 px-md-0">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md d-flex align-items-center">
                      <div className="form-group py-md-4 py-2 px-4 px-md-0">
                        <label htmlFor="name">Phone number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md d-flex align-items-center">
                      <div className="form-group py-md-4 py-2 px-4 px-md-0">
                        <label htmlFor="name">Select Services</label>
                        <div className="form-field">
                          <div className="select-wrap">
                            <div className="icon">
                              <span className="fa fa-chevron-down" />
                            </div>
                            <select name id className="form-control">
                              <option value>Select Services</option>
                              <option value>Spinal Manupulation</option>
                              <option value>Electrotherapy</option>
                              <option value>Manual Lymphatic</option>
                              <option value>Medical Acupuncture</option>
                              <option value>Therapeutic Exercise</option>
                              <option value>Joint Mobilization</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md d-flex align-items-center pb-4 pb-md-0">
                      <div className="form-group py-md-4 py-2 px-4 px-md-0">
                        <label htmlFor="name">Name</label>
                        <div className="form-field">
                          <div className="select-wrap">
                            <div className="icon">
                              <span className="fa fa-chevron-down" />
                            </div>
                            <select name id className="form-control">
                              <option value>Select Cleaners</option>
                              <option value>John Doe</option>
                              <option value>William Smith</option>
                              <option value>Danny Green</option>
                              <option value>Jason Thompson</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md d-flex align-items-center align-items-stretch">
                      <div className="form-group py-md-4 py-2 px-4 px-md-0 d-flex align-items-stretch bg-primary">
                        <input
                          type="submit"
                          defaultValue="Make an Appointment"
                          className="btn btn-primary py-3 px-4"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
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
                    <span className="phone">9429486425</span>
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
          <div className="row justify-content-center pb-5 mb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <span className="subheading">Services</span>
              <h2>How We Works</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 services ftco-animate">
              <div className="d-block d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-workplace" />
                </div>
                <div className="media-body pl-3">
                  <h3 className="heading">Office Cleaning</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                  <p>
                    <a href="#" className="btn-custom">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 services ftco-animate">
              <div className="d-block d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-pool" />
                </div>
                <div className="media-body pl-3">
                  <h3 className="heading">Pool Cleaning</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                  <p>
                    <a href="#" className="btn-custom">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 services ftco-animate">
              <div className="d-block d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-rug" />
                </div>
                <div className="media-body pl-3">
                  <h3 className="heading">Carpet Cleaning</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                  <p>
                    <a href="#" className="btn-custom">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 services ftco-animate">
              <div className="d-block d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-kitchen" />
                </div>
                <div className="media-body pl-3">
                  <h3 className="heading">Kitchen Cleaning</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                  <p>
                    <a href="#" className="btn-custom">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 services ftco-animate">
              <div className="d-block d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-garden" />
                </div>
                <div className="media-body pl-3">
                  <h3 className="heading">Garden Cleaning</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                  <p>
                    <a href="#" className="btn-custom">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 services ftco-animate">
              <div className="d-block d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-balcony" />
                </div>
                <div className="media-body pl-3">
                  <h3 className="heading">Window Cleaning</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                  <p>
                    <a href="#" className="btn-custom">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt">
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

      <section className="ftco-section testimony-section ftco-bg-dark">
        <div className="container">
          <div className="row justify-content-center pb-5 mb-3">
            <div className="col-md-7 heading-section heading-section-white text-center ftco-animate">
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

      <section className="ftco-section ftco-no-pb">
        <div className="container">
          <div className="row justify-content-center pb-5 mb-3">
            <div className="col-md-12 heading-section  text-center ftco-animate">
              <span className="subheading">Our Project</span>
              <h2>We have done many latest cleaning project</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div
                className="work img d-flex align-items-center"
                style={{ backgroundImage: "url(images/work-1.jpg)" }}
              >
                <a
                  href="images/work-1.jpg"
                  className="icon image-popup d-flex justify-content-center align-items-center"
                >
                  <span className="fa fa-expand" />
                </a>
                <div className="desc w-100 px-4 text-center pt-5 mt-5">
                  <div className="text w-100 mb-3 mt-4">
                    <h2>
                      <a href="work-single.html">House Cleaning</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div
                className="work img d-flex align-items-center"
                style={{ backgroundImage: "url(images/work-2.jpg)" }}
              >
                <a
                  href="images/work-2.jpg"
                  className="icon image-popup d-flex justify-content-center align-items-center"
                >
                  <span className="fa fa-expand" />
                </a>
                <div className="desc w-100 px-4 text-center pt-5 mt-5">
                  <div className="text w-100 mb-3 mt-4">
                    <h2>
                      <a href="work-single.html">Window Cleaning</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div
                className="work img d-flex align-items-center"
                style={{ backgroundImage: "url(images/work-3.jpg)" }}
              >
                <a
                  href="images/work-3.jpg"
                  className="icon image-popup d-flex justify-content-center align-items-center"
                >
                  <span className="fa fa-expand" />
                </a>
                <div className="desc w-100 px-4 text-center pt-5 mt-5">
                  <div className="text w-100 mb-3 mt-4">
                    <h2>
                      <a href="work-single.html">Pool Cleaning</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div
                className="work img d-flex align-items-center"
                style={{ backgroundImage: "url(images/work-4.jpg)" }}
              >
                <a
                  href="images/work-4.jpg"
                  className="icon image-popup d-flex justify-content-center align-items-center"
                >
                  <span className="fa fa-expand" />
                </a>
                <div className="desc w-100 px-4 text-center pt-5 mt-5">
                  <div className="text w-100 mb-3 mt-4">
                    <h2>
                      <a href="work-single.html">Office Cleaning</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div
                className="work img d-flex align-items-center"
                style={{ backgroundImage: "url(images/work-5.jpg)" }}
              >
                <a
                  href="images/work-5.jpg"
                  className="icon image-popup d-flex justify-content-center align-items-center"
                >
                  <span className="fa fa-expand" />
                </a>
                <div className="desc w-100 px-4 text-center pt-5 mt-5">
                  <div className="text w-100 mb-3 mt-4">
                    <h2>
                      <a href="work-single.html">Carpet Cleaning</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div
                className="work img d-flex align-items-center"
                style={{ backgroundImage: "url(images/work-6.jpg)" }}
              >
                <a
                  href="images/work-6.jpg"
                  className="icon image-popup d-flex justify-content-center align-items-center"
                >
                  <span className="fa fa-expand" />
                </a>
                <div className="desc w-100 px-4 text-center pt-5 mt-5">
                  <div className="text w-100 mb-3 mt-4">
                    <h2>
                      <a href="work-single.html">Garden Cleaning</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div
                className="work img d-flex align-items-center"
                style={{ backgroundImage: "url(images/work-7.jpg)" }}
              >
                <a
                  href="images/work-7.jpg"
                  className="icon image-popup d-flex justify-content-center align-items-center"
                >
                  <span className="fa fa-expand" />
                </a>
                <div className="desc w-100 px-4 text-center pt-5 mt-5">
                  <div className="text w-100 mb-3 mt-4">
                    <h2>
                      <a href="work-single.html">Carpet Cleaning</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div
                className="work img d-flex align-items-center"
                style={{ backgroundImage: "url(images/work-8.jpg)" }}
              >
                <a
                  href="images/work-8.jpg"
                  className="icon image-popup d-flex justify-content-center align-items-center"
                >
                  <span className="fa fa-expand" />
                </a>
                <div className="desc w-100 px-4 text-center pt-5 mt-5">
                  <div className="text w-100 mb-3 mt-4">
                    <h2>
                      <a href="work-single.html">Pool Cleaning</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center pb-5 mb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <span className="subheading">News &amp; Blog</span>
              <h2>Latest News</h2>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-6 col-lg-4 d-flex ftco-animate">
              <div className="blog-entry align-self-stretch">
                <a
                  href="blog-single.html"
                  className="block-20 rounded"
                  style={{ backgroundImage: 'url("images/image_1.jpg")' }}
                ></a>
                <div className="text mt-3 px-4">
                  <div className="posted mb-3 d-flex">
                    <div
                      className="img author"
                      style={{ backgroundImage: "url(images/person_2.jpg)" }}
                    />
                    <div className="desc pl-3">
                      <span>Posted by John doe</span>
                      <span>04 March 2020</span>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">10 Tips to clean your window</a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 d-flex ftco-animate">
              <div className="blog-entry align-self-stretch">
                <a
                  href="blog-single.html"
                  className="block-20 rounded"
                  style={{ backgroundImage: 'url("images/image_2.jpg")' }}
                ></a>
                <div className="text mt-3 px-4">
                  <div className="posted mb-3 d-flex">
                    <div
                      className="img author"
                      style={{ backgroundImage: "url(images/person_3.jpg)" }}
                    />
                    <div className="desc pl-3">
                      <span>Posted by John doe</span>
                      <span>04 March 2020</span>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">10 Tips to clean your window</a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 d-flex ftco-animate">
              <div className="blog-entry align-self-stretch">
                <a
                  href="blog-single.html"
                  className="block-20 rounded"
                  style={{ backgroundImage: 'url("images/image_3.jpg")' }}
                ></a>
                <div className="text mt-3 px-4">
                  <div className="posted mb-3 d-flex">
                    <div
                      className="img author"
                      style={{ backgroundImage: "url(images/person_1.jpg)" }}
                    />
                    <div className="desc pl-3">
                      <span>Posted by John doe</span>
                      <span>04 March 2020</span>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">10 Tips to clean your window</a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.
                  </p>
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

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center pb-5 mb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <span className="subheading mb-3">Price &amp; Plans</span>
              <h2>Choose Your Perfect Plans</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="block-7">
                <div className="text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa flaticon-sprayer" />
                  </div>
                  <h4 className="heading-2">Starter</h4>
                  <span className="price">
                    <sup>$</sup> <span className="number">49</span>
                  </span>
                  <ul className="pricing-text mb-5">
                    <li>
                      <span className="fa fa-check mr-2" />
                      Bedrooms cleaning
                    </li>
                    <li>
                      <span className="fa fa-check mr-2" />
                      Vacuuming
                    </li>
                    <li>
                      <span className="fa fa-check mr-2" />
                      Bathroom cleaning
                    </li>
                    <li>
                      <span className="fa fa-check mr-2" />
                      Mirrow cleaning
                    </li>
                    <li>
                      <span className="fa fa-check mr-2" />
                      Livingroom cleaning
                    </li>
                  </ul>
                  <a href="#" className="btn btn-primary px-4 py-3">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="block-7 active">
                <div className="text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa flaticon-vacuum-cleaner" />
                  </div>
                  <h4 className="heading-2">Standard</h4>
                  <span className="price">
                    <sup>$</sup> <span className="number">79</span>
                  </span>
                  <ul className="pricing-text mb-5">
                    <li>
                      <span className="fa fa-check mr-2" />
                      Bedrooms cleaning
                    </li>
                    <li>
                      <span className="fa fa-check mr-2" />
                      Vacuuming
                    </li>
                    <li>
                      <span className="fa fa-check mr-2" />
                      Bathroom cleaning
                    </li>
                    <li>
                      <span className="fa fa-check mr-2" />
                      Mirrow cleaning
                    </li>
                    <li>
                      <span className="fa fa-check mr-2" />
                      Livingroom cleaning
                    </li>
                  </ul>
                  <a href="#" className="btn btn-primary px-4 py-3">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="block-7">
                <div className="text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa flaticon-tap" />
                  </div>
                  <h4 className="heading-2">Premium</h4>
                  <span className="price">
                    <sup>$</sup> <span className="number">109</span>
                  </span>
                  <ul className="pricing-text mb-5">
                    <li>
                      <span className="fa fa-check mr-2" />
                      Bedrooms cleaning
                    </li>
                    <li>
                      <span className="fa fa-check mr-2" />
                      Vacuuming
                    </li>
                    <li>
                      <span className="fa fa-check mr-2" />
                      Bathroom cleaning
                    </li>
                    <li>
                      <span className="fa fa-check mr-2" />
                      Mirrow cleaning
                    </li>
                    <li>
                      <span className="fa fa-check mr-2" />
                      Livingroom cleaning
                    </li>
                  </ul>
                  <a href="#" className="btn btn-primary px-4 py-3">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate">
              <div className="block-7">
                <div className="text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa flaticon-cleaning" />
                  </div>
                  <h4 className="heading-2">Platinum</h4>
                  <span className="price">
                    <sup>$</sup> <span className="number">159</span>
                  </span>
                  <ul className="pricing-text mb-5">
                    <li>
                      <span className="fa fa-check mr-2" />
                      Bedrooms cleaning
                    </li>
                    <li>
                      <span className="fa fa-check mr-2" />
                      Vacuuming
                    </li>
                    <li>
                      <span className="fa fa-check mr-2" />
                      Bathroom cleaning
                    </li>
                    <li>
                      <span className="fa fa-check mr-2" />
                      Mirrow cleaning
                    </li>
                    <li>
                      <span className="fa fa-check mr-2" />
                      Livingroom cleaning
                    </li>
                  </ul>
                  <a href="#" className="btn btn-primary px-4 py-3">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
