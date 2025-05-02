import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Appointment from './Components/Appointment/Appointment';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* About Section */}
      <Appointment />
      {/* <About /> */}
    </div>
  );
}

export default App;
