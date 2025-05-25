import React, { useState } from 'react';
import CreateService from './components/CreateService/CreateService';
import BreadCrumb from '../../../../Components/BreadCrumb/BreadCrumb';
import Header from '../../Components/Header/Header';
import SideBar from '../../Components/SideBar/SideBar';

function AddServicePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <div className="flex h-screen bg-gray-100 selection:bg-pink-200 selection:text-pink-900">
      <SideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <Header />
        <main className="p-6">
          <BreadCrumb
            url_1="/admin"
            url_2="/admin/services/createService"
            Path_one="Admin"
            Path_two="Create Service"
          />
          <CreateService />
        </main>
      </div>
    </div>
  );
}

export default AddServicePage;
