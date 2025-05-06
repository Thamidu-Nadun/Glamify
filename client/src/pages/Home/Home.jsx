import React from 'react';
import Hero from './Hero/Hero';
import Appointment from './Appointment/Appointment';
import About from './About/About';
import AboutS from './About/AboutS';
import Navbar from '../../layout/NavBar/NavBar';
import Footer from '../../layout/Footer/Footer';

function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Appointment />
      <About />
      <AboutS />
      <Footer/>
    </>
  );
}

export default Home;
