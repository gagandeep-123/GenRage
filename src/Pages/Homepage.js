import React from 'react'
import Header from "../Components/Header/Header";
import Body from "../Components/Body/Body";
import About from "../Components/About/About";
import Design from '../Components/Design/Design';
import Offer from '../Components/Offer/Offer';
import Sales from '../Components/Sales/Sales';
import Scroller from '../Components/Scroller/Scroller';
import Bottom from '../Components/Bottom/Bottom';
import Footer from '../Components/Footer/Footer';



const Homepage = () => {
  return (
    <div>
      <Header />
      <Body />
      <Design />
      <About />

      <Sales />
      <Offer />

      <Scroller />
      <Bottom />
      <Footer />
    </div>
  );
}

export default Homepage