import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import DraughtList from './DraughtList';

const DraughtListContainer = () => {
  const {
    allFile: { nodes }
  } = useStaticQuery(
    graphql`
      query DraughtListContainerQuery {
        allFile(filter: { sourceInstanceName: { eq: "draught" } }) {
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

  return <DraughtList nodes={nodes} />;
};

export default DraughtListContainer;
