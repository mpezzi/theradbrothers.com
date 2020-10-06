import React from 'react';

const GallerySection = () => (
  <section className="ftco-gallery">
    <div className="container-wrap">
      <div className="row no-gutters">
        <div className="col-md-3">
          <a
            href="gallery.html"
            className="gallery img d-flex align-items-center"
            style={{ backgroundImage: 'url(images/slider-1.jpg)' }}
          >
            <div className="icon mb-4 d-flex align-items-center justify-content-center">
              <span className="icon-search"></span>
            </div>
          </a>
        </div>
        <div className="col-md-3">
          <a
            href="gallery.html"
            className="gallery img d-flex align-items-center"
            style={{ backgroundImage: 'url(images/slider-2.jpg)' }}
          >
            <div className="icon mb-4 d-flex align-items-center justify-content-center">
              <span className="icon-search"></span>
            </div>
          </a>
        </div>
        <div className="col-md-3">
          <a
            href="gallery.html"
            className="gallery img d-flex align-items-center"
            style={{ backgroundImage: 'url(images/slider-3.jpg)' }}
          >
            <div className="icon mb-4 d-flex align-items-center justify-content-center">
              <span className="icon-search"></span>
            </div>
          </a>
        </div>
        <div className="col-md-3">
          <a
            href="gallery.html"
            className="gallery img d-flex align-items-center"
            style={{ backgroundImage: 'url(images/slider-4.jpg)' }}
          >
            <div className="icon mb-4 d-flex align-items-center justify-content-center">
              <span className="icon-search"></span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default GallerySection;
