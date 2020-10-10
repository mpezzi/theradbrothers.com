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
                image {
                  childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 250) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
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
