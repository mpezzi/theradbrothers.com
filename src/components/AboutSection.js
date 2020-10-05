import React from 'react';

import './AboutSection.scss';

const AboutSection = () => (
  <section className="ftco-about d-md-flex" id="about">
    <div
      className="one-half img"
      style={{ backgroundImage: 'url(images/about.jpg)' }}
    ></div>
    <div className="one-half info">
      <div className="heading-section ">
        <h2 className="mb-4">
          The Rad Brothers
          <br />
          Sports Bar &amp; Tap House
        </h2>
      </div>
      <div>
        <p>
          Come out and enjoy our fusion of sports and entertainment. Paired with
          a great menu, friendly staff and a unique selections of beers on tap.
          The Rad Brothers will bring something new each and every week.
        </p>
        <p>Come for the game, stay for the party!</p>
      </div>
    </div>
  </section>
);

export default AboutSection;
