import React, { useState } from 'react';
import EditService from './components/EditService/EditService';
import BreadCrumb from '../../../../Components/BreadCrumb/BreadCrumb';
import SideBar from '../../Components/SideBar/SideBar';
import Header from '../../Components/Header/Header';

function EditServicePage() {
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
            url_2="/admin/services"
            Path_one="Admin"
            Path_two="Services"
          />
          <EditService />
        </main>
      </div>
    </div>
  );
}

export default EditServicePage;
