import React, { useState } from 'react';
import SideBar from '../../Components/SideBar/SideBar';
import Header from '../../Components/Header/Header';
import BreadCrumb from '../../../../Components/BreadCrumb/BreadCrumb';
import WelcomeGreet from '../../Components/WelcomeGreet/WelcomeGreet';
import ServiceTable from './components/ServiceTable/ServiceTable';
import { Link } from 'react-router-dom';

function ServicePage() {
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

          <div className="ml-2">
            <WelcomeGreet page="Services" user="Jane" />
            <Link to="createService" className='mb-2 text-blue-400 cursor-pointer p-2 rounded-xl border-1 border-blue-400 w-fit hover:bg-blue-400 hover:text-blue-100 transition-all font-bold'>Create A Service</Link>
            <div className="divider w-full bg-blue-200 h-1 my-5"></div>
            <ServiceTable />
          </div>
        </main>
      </div>
    </div>
  );
}

export default ServicePage;
