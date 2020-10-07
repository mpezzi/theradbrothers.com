import React from 'react';

const GallerySection = () => (
  <section className="ftco-gallery">
    <div className="container-wrap">
      <div className="row no-gutters">
        <div className="col-md-3">
          <div
            className="gallery img d-flex align-items-center"
            style={{ backgroundImage: 'url(images/gallery-1.jpg)' }}
          >
            <div className="icon mb-4 d-flex align-items-center justify-content-center">
              <span className="icon-search"></span>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="gallery img d-flex align-items-center"
            style={{ backgroundImage: 'url(images/gallery-2.jpg)' }}
          >
            <div className="icon mb-4 d-flex align-items-center justify-content-center">
              <span className="icon-search"></span>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="gallery img d-flex align-items-center"
            style={{ backgroundImage: 'url(images/gallery-3.jpg)' }}
          >
            <div className="icon mb-4 d-flex align-items-center justify-content-center">
              <span className="icon-search"></span>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="gallery img d-flex align-items-center"
            style={{ backgroundImage: 'url(images/gallery-4.jpg)' }}
          >
            <div className="icon mb-4 d-flex align-items-center justify-content-center">
              <span className="icon-search"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GallerySection;
