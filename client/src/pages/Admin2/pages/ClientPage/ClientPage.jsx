import React, { useState } from 'react';
import SideBar from '../../Components/SideBar/SideBar';
import BreadCrumb from '../../../../Components/BreadCrumb/BreadCrumb';

function ClientPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <div className="flex h-screen bg-gray-100 selection:bg-pink-200 selection:text-pink-900">
      <SideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <BreadCrumb Path_one="Admin" Path_two="Clients" />

      <div>Clients Page</div>
    </div>
  );
}

export default ClientPage;
