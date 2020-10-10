import React from 'react';
import DraughtListContainer from '../components/DraughtListContainer';

const DraughtSection = () => {
  return (
    <section className="ftco-section" id="draught">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
          <div className="col-md-7 heading-section text-center">
            <h2 className="mb-4">Specialties on Draught</h2>
            <p className="flip">
              <span className="deg1"></span>
              <span className="deg2"></span>
              <span className="deg3"></span>
            </p>
            <p className="mt-5">Import &amp; Premium</p>
          </div>
        </div>
        <DraughtListContainer />
      </div>
    </section>
  );
};

export default DraughtSection;
