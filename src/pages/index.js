import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import SliderSection from '../components/SliderSection';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import FoodSection from '../components/FoodSection';
import DrinkSection from '../components/DrinkSection';
import GallerySection from '../components/GallerySection';
import CounterSection from '../components/CounterSection';
import EventSection from '../components/EventSection';

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <SliderSection />
      <IntroSection />
      <AboutSection />
      <FoodSection />
      <DrinkSection />
      <GallerySection />
      <CounterSection />
      <EventSection />
    </Layout>
  );
};

export default IndexPage;
