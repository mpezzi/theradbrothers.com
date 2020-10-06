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
      </div>
    </section>
  );
};

export default EventSection;
