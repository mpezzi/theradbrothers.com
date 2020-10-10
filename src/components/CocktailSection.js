import React from 'react';
import CocktailListContainer from './CocktailListContainer';

const CocktailSection = () => {
  return (
    <section className="ftco-section" id="cocktail">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
          <div className="col-md-7 heading-section text-center">
            <h2 className="mb-4">Cocktails</h2>
            <p className="flip">
              <span className="deg1"></span>
              <span className="deg2"></span>
              <span className="deg3"></span>
            </p>
            <p className="mt-5">Feeling adventurous?</p>
          </div>
        </div>
        <CocktailListContainer />
      </div>
    </section>
  );
};

export default CocktailSection;
