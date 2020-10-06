import React from 'react';
import Img from 'gatsby-image';
import dayjs from 'dayjs';

const EventListItem = ({ item, index }) => {
  return (
    <div className="col-md-4 d-flex">
      <div className="blog-entry align-self-stretch">
        <Img
          className="block-20"
          fluid={item.image.childImageSharp.fluid}
          alt={item.title}
        />
        <div className="text py-4 d-block">
          <div className="meta">
            <div>
              <a href="blank.html">{dayjs(item.date).format('MMM DD, YYYY')}</a>
            </div>
          </div>
          <h3 className="heading mt-2">{item.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: `<div>${item.body}</div>` }} />
        </div>
      </div>
    </div>
  );
};

export default EventListItem;
