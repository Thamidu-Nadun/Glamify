import React from 'react';
import NavBar from '../../layout/NavBar/NavBar';
import Footer from '../../layout/Footer/Footer';
import bgImage from './assets/404-vector.jpg';
function NotFound() {
  return (
    <>
      <NavBar />
      <main className="flex h-dvh items-center justify-center">
        <div
          className={`relative flex size-96 justify-center rounded-2xl bg-current p-0.5 shadow-sm`}
        >
          <img src={bgImage} className="z-0 h-full w-full rounded-2xl" />
          <span className="absolute z-1 pt-4 text-2xl font-bold text-gray-900">
            404 Not Found
          </span>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
