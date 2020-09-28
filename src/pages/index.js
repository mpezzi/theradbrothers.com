import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import SliderSection from '../components/SliderSection';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
// import ServiceSection from '../components/ServiceSection';
import FoodSection from '../components/FoodSection';
import DrinkSection from '../components/DrinkSection';
import GallerySection from '../components/GallerySection';
import CounterSection from '../components/CounterSection';
import EventSection from '../components/EventSection';
// import ContactSection from '../components/ContactSection';

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <SliderSection />
      <IntroSection />
      <AboutSection />
      {/* <ServiceSection /> */}
      <FoodSection />
      <DrinkSection />
      <GallerySection />
      <CounterSection />
      <EventSection />
    </Layout>
  );
};

export default IndexPage;
