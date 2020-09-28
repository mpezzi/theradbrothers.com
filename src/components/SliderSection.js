import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundSlider from 'gatsby-image-background-slider';

import './SliderSection.scss';

const SliderSection = () => (
  <section className="ftco-slider">
    <BackgroundSlider
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile(
            filter: { sourceInstanceName: { eq: "sliders" } }
          ) {
            nodes {
              relativePath
              childImageSharp {
                fluid(maxWidth: 4000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
    />
  </section>
);

export default SliderSection;
