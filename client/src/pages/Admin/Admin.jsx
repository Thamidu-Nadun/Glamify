import React, { useState } from 'react';
import SideBar from './Components/SideBar/SideBar';
import Main from './Components/Main/Main';

function Admin2() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <div className="flex h-screen bg-gray-100 selection:bg-pink-200 selection:text-pink-900">
      <SideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <Main isSidebarOpen={isSidebarOpen} />
    </div>
  );
}

export default Admin2;
