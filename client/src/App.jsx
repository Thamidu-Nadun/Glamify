import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Appointment from './Components/Appointment/Appointment';
import Footer from './Components/Footer/Footer';
import Divider from './Components/Divider/Divider';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* About Section */}
      <Appointment />
      <Divider />
      <About />
      <Divider />
      <Footer />
    </div>
  );
}

export default App;
