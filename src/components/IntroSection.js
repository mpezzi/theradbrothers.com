import React from 'react';

import './IntroSection.scss';

const IntroSection = () => (
  <section className="ftco-intro">
    <div className="container-wrap">
      <div className="wrap d-md-flex">
        <div className="info">
          <div className="row no-gutters">
            <div className="col-md-4 d-flex">
              <div className="icon">
                <span className="icon-phone"></span>
              </div>
              <div className="text">
                <h3>
                  <a className="text-white" href="tel:+19058751119">
                    905-875-1119
                  </a>
                </h3>
                <p>Phone</p>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="icon">
                <span className="icon-my_location"></span>
              </div>
              <div className="text">
                <h3>
                  <a
                    className="text-white"
                    href="https://goo.gl/maps/no8sTQQEAScdSEU58"
                  >
                    550 Ontario St S
                  </a>
                </h3>
                <p>Milton, ON L9T 5E4</p>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="icon">
                <span className="icon-clock-o"></span>
              </div>
              <div className="text">
                <h3>Open Every Day</h3>
                <p>
                  Sun 11am-10pm
                  <br />
                  Mon-Thurs 11am-11pm
                  <br />
                  Fri-Sat 11am-12am
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="social d-md-flex pl-md-5 p-4 align-items-center">
          <ul className="social-icon">
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
    </div>
  </section>
);

export default IntroSection;
