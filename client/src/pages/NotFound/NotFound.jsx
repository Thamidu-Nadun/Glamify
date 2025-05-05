import React from 'react';
import NavBar from '../../layout/NavBar/NavBar';
import Footer from '../../layout/Footer/Footer';
import bgImage from './assets/404-vector.jpg';
function NotFound() {
  return <>
    <NavBar />
    <main className='flex justify-center items-center h-dvh'>
      <div className={`size-96 rounded-2xl shadow-sm relative flex justify-center bg-current p-0.5`}>
        <img src={bgImage} className="w-full h-full z-0 rounded-2xl" />
        <span className='z-1 pt-4 absolute text-2xl text-gray-900 font-bold'>404 Not Found</span>
      </div>
    </main>
    <Footer />
  </>;
}

export default NotFound;
