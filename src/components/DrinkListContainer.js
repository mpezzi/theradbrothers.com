import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import DrinkList from './DrinkList';

const DrinkListContainer = () => {
  const {
    allFile: { nodes }
  } = useStaticQuery(
    graphql`
      query DrinkListContainerQuery {
        allFile(filter: { sourceInstanceName: { eq: "drink" } }) {
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

  return <DrinkList nodes={nodes} />;
};

export default DrinkListContainer;
