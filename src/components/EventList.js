import React from 'react';
import EventListItem from './EventListItem';

const EventList = ({ nodes }) => {
  return (
    <div className="row d-flex">
      {nodes.map((node, i) => {
        const item = {
          id: node.id,
          title: node.childMarkdownRemark.frontmatter.title,
          image: node.childMarkdownRemark.frontmatter.image,
          date: node.childMarkdownRemark.frontmatter.date,
          body: node.childMarkdownRemark.html
        };

        return <EventListItem item={item} index={i} key={item.id} />;
      })}
    </div>
  );
};

export default EventList;
