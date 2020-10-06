import React from 'react';
import EventListContainer from '../components/EventListContainer';

const EventSection = () => {
  return (
    <section className="ftco-section" id="events">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center">
            <h2 className="mb-4">Upcoming Events</h2>
            <p>
              Rad Brothers is committed to providing our customers with a
              memorable AND safe experience! As we resume our event calendar we
              ask the community work with us by minding our new safety protocols
              in place amidst the COVID-19 pandemic.
            </p>
          </div>
        </div>
        <EventListContainer />
        {/* <div className="row d-flex">
          <div className="col-md-4 d-flex">
            <div className="blog-entry align-self-stretch">
              <a
                href="blog-single.html"
                className="block-20"
                style={{ backgroundImage: "url('images/image_1.jpg')" }}
              ></a>
              <div className="text py-4 d-block">
                <div className="meta">
                  <div>
                    <a href="blank.html">Sept 10, 2018</a>
                  </div>
                  <div>
                    <a href="blank.html">Admin</a>
                  </div>
                  <div>
                    <a href="blank.html" className="meta-chat">
                      <span className="icon-chat"></span> 3
                    </a>
                  </div>
                </div>
                <h3 className="heading mt-2">
                  <a href="blank.html">The Delicious Pizza</a>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="blog-entry align-self-stretch">
              <a
                href="blog-single.html"
                className="block-20"
                style={{ backgroundImage: "url('images/image_2.jpg')" }}
              ></a>
              <div className="text py-4 d-block">
                <div className="meta">
                  <div>
                    <a href="blank.html">Sept 10, 2018</a>
                  </div>
                  <div>
                    <a href="blank.html">Admin</a>
                  </div>
                  <div>
                    <a href="blank.html" className="meta-chat">
                      <span className="icon-chat"></span> 3
                    </a>
                  </div>
                </div>
                <h3 className="heading mt-2">
                  <a href="blank.html">The Delicious Pizza</a>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="blog-entry align-self-stretch">
              <a
                href="blog-single.html"
                className="block-20"
                style={{ backgroundImage: "url('images/image_3.jpg')" }}
              ></a>
              <div className="text py-4 d-block">
                <div className="meta">
                  <div>
                    <a href="blank.html">Sept 10, 2018</a>
                  </div>
                  <div>
                    <a href="blank.html">Admin</a>
                  </div>
                  <div>
                    <a href="blank.html" className="meta-chat">
                      <span className="icon-chat"></span> 3
                    </a>
                  </div>
                </div>
                <h3 className="heading mt-2">
                  <a href="blank.html">The Delicious Pizza</a>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
    // <section id="events" className="projects-section bg-light">
    //   <div className="container">
    //     <div className="row align-items-center no-gutters mb-3 mb-lg-4">
    //       <div className="col-xl-8 col-lg-7">
    //         <img
    //           className="img-fluid mb-3 mb-lg-0"
    //           src="img/1G7A9949.jpg"
    //           alt="Events"
    //         />
    //       </div>
    //       <div className="col-xl-4 col-lg-5">
    //         <div className="featured-text text-center text-lg-left">
    //           <h4>Events</h4>
    //           <p className="text-black-50 mb-0">
    //             Keep up to date with our fun events!
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <EventListContainer />
    //   </div>
    // </section>
  );
};

export default EventSection;
