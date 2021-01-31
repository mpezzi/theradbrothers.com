import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BottleList from './BottleList';

const BottleListContainer = () => {
  const {
    allFile: { nodes }
  } = useStaticQuery(
    graphql`
      query BottleListContainerQuery {
        allFile(filter: { sourceInstanceName: { eq: "bottle" } }) {
          nodes {
            id
            childMarkdownRemark {
              frontmatter {
                title
                price
                country
                percentage
              }
              html
            }
          }
        }
      }
    `
  );

  return <BottleList nodes={nodes} />;
};

export default BottleListContainer;
