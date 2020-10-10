import React from 'react';
import CocktailListItem from './CocktailListItem';

const CocktailList = ({ nodes }) => {
  return (
    <div className="row">
      {nodes.map((node, i) => {
        const item = {
          id: node.id,
          title: node.childMarkdownRemark.frontmatter.title,
          image: node.childMarkdownRemark.frontmatter.image,
          price: node.childMarkdownRemark.frontmatter.price,
          body: node.childMarkdownRemark.html
        };
        return <CocktailListItem item={item} index={i} key={item.id} />;
      })}
    </div>
  );
};

export default CocktailList;
