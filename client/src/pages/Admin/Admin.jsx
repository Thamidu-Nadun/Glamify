import React from 'react';
import NavBar from '../../layout/NavBar/NavBar';
import Footer from '../../layout/Footer/Footer';
import Sidebar from './components/SideBar/Sidebar';

function Admin() {
  return (
    <>
      <div className="bar h-fit w-screen bg-[#fe8158] py-3 text-center">
        <span className="text-lg font-bold text-white">Glamify</span>
      </div>
      <Sidebar />
      <div className="board h-screen w-screen bg-black"></div>
      <Footer />
    </>
  );
}

export default Admin;
