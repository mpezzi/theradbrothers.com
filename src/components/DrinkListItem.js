import React from 'react';

const DrinkListItem = ({ item }) => {
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
          <div className="d-block">
            <p
              dangerouslySetInnerHTML={{ __html: `<div>${item.body}</div>` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkListItem;
