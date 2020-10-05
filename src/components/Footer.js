import React from 'react';

const Footer = () => {
  return (
    <footer className="ftco-footer ftco-section img" id="contact">
      <div className="overlay"></div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-sm-4 mb-5 mb-md-5">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About Us</h2>
              <p>
                Come out and enjoy our fusion of sports and entertainment! With
                a great menu, friendly staff and a unique selection of beers on
                tap!
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="">
                  <a href="https://www.facebook.com/theradbrothers">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li className="">
                  <a href="https://www.instagram.com/radbrothers">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-8 mb-5 mb-md-5">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker"></span>
                    <span className="text">
                      <a
                        className="text-white"
                        href="https://goo.gl/maps/no8sTQQEAScdSEU58"
                      >
                        550 Ontario St S <br />
                        Milton, Ontario, L9T 5E4
                      </a>
                    </span>
                  </li>
                  <li>
                    <a href="blank.html">
                      <span className="icon icon-phone"></span>
                      <span className="text">
                        <a className="text-white" href="tel:+19058751119">
                          905-875-1119
                        </a>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="blank.html">
                      <span className="icon icon-envelope"></span>
                      <span className="text">
                        <a
                          className="text-white"
                          href="mailto:theradbrothers@gmail.com"
                        >
                          theradbrothers@gmail.com
                        </a>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy;2020 All rights reserved | This template is made
              with <i className="icon-heart" aria-hidden="true"></i> by{' '}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
