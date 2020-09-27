import React from 'react';

/* eslint-disable jsx-a11y/anchor-is-valid */
const ContactSection = () => {
  return (
    <section className="contact-section bg-black">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Address</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <a
                    href="https://goo.gl/maps/aX4esDTsMNZNyL868"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    243 Main St E., Milton, ON, L9T 1P1
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-envelope text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Email</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <a
                    href="mailto:theradbrothers@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    theradbrothers@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Phone</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <a
                    href="tel:+1-289-429-1245"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +1-289-429-1245
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social d-flex justify-content-center">
          <a href="#" className="mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="mx-2">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
