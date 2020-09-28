import React from 'react';
import FoodListContainer from '../components/FoodListContainer';

const FoodSection = () => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
          <div className="col-md-7 heading-section text-center">
            <h2 className="mb-4">Food Menu</h2>
            <p className="flip">
              <span className="deg1"></span>
              <span className="deg2"></span>
              <span className="deg3"></span>
            </p>
            <p className="mt-5">Pick from our delicious food menu.</p>
          </div>
        </div>
        <FoodListContainer />
      </div>
    </section>
  );
};

export default FoodSection;
