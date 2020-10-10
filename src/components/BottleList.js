import React from 'react';
import BottleListItem from './BottleListItem';

const BottleList = ({ nodes }) => {
  return (
    <div className="row">
      {nodes.map((node, i) => {
        const item = {
          id: node.id,
          title: node.childMarkdownRemark.frontmatter.title,
          image: node.childMarkdownRemark.frontmatter.image,
          price: node.childMarkdownRemark.frontmatter.price,
          country: node.childMarkdownRemark.frontmatter.country,
          percentage: node.childMarkdownRemark.frontmatter.percentage,
          body: node.childMarkdownRemark.html
        };
        return <BottleListItem item={item} index={i} key={item.id} />;
      })}
    </div>
  );
};

export default BottleList;
