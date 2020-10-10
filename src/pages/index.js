import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import SliderSection from '../components/SliderSection';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import FoodSection from '../components/FoodSection';
import DraughtSection from '../components/DraughtSection';
import BottleSection from '../components/BottleSection';
import CocktailSection from '../components/CocktailSection';
import GallerySection from '../components/GallerySection';
// import CounterSection from '../components/CounterSection';
import EventSection from '../components/EventSection';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Sports Bar &amp; Tap House" />
      <SliderSection />
      <IntroSection />
      <AboutSection />
      <FoodSection />
      <DraughtSection />
      <BottleSection />
      <CocktailSection />
      <GallerySection />
      {/* <CounterSection /> */}
      <EventSection />
    </Layout>
  );
};

export default IndexPage;
