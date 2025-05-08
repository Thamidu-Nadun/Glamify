import React from 'react';
import Header from '../Header/Header';
import DashBoard from '../Dashboard/DashBoard';

function Main({isSidebarOpen}) {
  return (
    <div className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
      <Header />
      <main className="p-6">
        <DashBoard />
      </main>
    </div>
  );
}

export default Main;
