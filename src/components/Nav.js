import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './Nav.scss';

const Nav = () => {
  const { site } = useStaticQuery(
    graphql`
      query NavQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <nav
      className="navbar navbar-expand-md navbar-dark ftco_navbar bg-dark ftco-navbar-light d-none d-md-block"
      id="ftco-navbar"
    >
      <div className="container">
        <a
          className="navbar-brand d-none d-lg-block"
          href="/"
          style={{ backgroundImage: 'url(images/logo.png)' }}
        >
          {site.siteMetadata.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav mx-auto mr-lg-0">
            <li className="nav-item active">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#food" className="nav-link">
                Food
              </a>
            </li>
            <li className="nav-item">
              <a href="#draught" className="nav-link">
                Draughts
              </a>
            </li>
            <li className="nav-item">
              <a href="#bottle" className="nav-link">
                Bottles
              </a>
            </li>
            <li className="nav-item">
              <a href="#cocktail" className="nav-link">
                Cocktails
              </a>
            </li>
            <li className="nav-item">
              <a href="#events" className="nav-link">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
