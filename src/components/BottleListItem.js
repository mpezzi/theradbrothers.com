import React from 'react';

const BottleListItem = ({ item }) => {
  return (
    <div className="col-md-6">
      <div className="pricing-entry d-flex">
        <div className="desc pl-3">
          <div className="d-flex text align-items-center">
            <h3>
              <span>{item.title}</span>
            </h3>
            <span className="price">{item.price}</span>
          </div>
          <div className="d-block mb-2">
            <small>
              <span className="country">{item.country}</span>
              <span className="divider d-inline-block mx-1">&bull;</span>
              <span className="percentage">{item.percentage}</span>
            </small>
          </div>
          <div className="d-block">
            <div dangerouslySetInnerHTML={{ __html: item.body }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottleListItem;
