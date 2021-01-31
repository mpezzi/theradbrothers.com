import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import CocktailList from './CocktailList';

const CocktailListContainer = () => {
  const {
    allFile: { nodes }
  } = useStaticQuery(
    graphql`
      query CocktailListContainerQuery {
        allFile(filter: { sourceInstanceName: { eq: "cocktail" } }) {
          nodes {
            id
            childMarkdownRemark {
              frontmatter {
                title
                price
              }
              html
            }
          }
        }
      }
    `
  );
  return <CocktailList nodes={nodes} />;
};

export default CocktailListContainer;
