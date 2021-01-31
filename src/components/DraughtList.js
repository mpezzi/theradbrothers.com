import React from 'react';
import DraughtListItem from './DraughtListItem';

const DraughtList = ({ nodes }) => {
  return (
    <div className="row">
      {nodes.map((node, i) => {
        const item = {
          id: node.id,
          title: node.childMarkdownRemark.frontmatter.title,
          price: node.childMarkdownRemark.frontmatter.price,
          country: node.childMarkdownRemark.frontmatter.country,
          percentage: node.childMarkdownRemark.frontmatter.percentage,
          body: node.childMarkdownRemark.html
        };
        return <DraughtListItem item={item} index={i} key={item.id} />;
      })}
    </div>
  );
};

export default DraughtList;
