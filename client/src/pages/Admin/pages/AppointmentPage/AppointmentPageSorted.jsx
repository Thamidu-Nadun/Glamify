import React, { useState } from 'react';
import SideBar from '../../Components/SideBar/SideBar';
import BreadCrumb from '../../../../Components/BreadCrumb/BreadCrumb';
import AppointmentTable from './components/AppointmentTable/AppointmentTable';
import Header from '../../Components/Header/Header';
import WelcomeGreet from '../../Components/WelcomeGreet/WelcomeGreet';
import AppointmentTableSorted from './components/AppointmentTableSorted/AppointmentTableSorted';

function AppointmentPageSorted() {
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
            url_2="/admin/appointments/sort"
            Path_one="Admin"
            Path_two="Appointments Sorted"
          />

          <div className="ml-2">
            <WelcomeGreet page="Appointments Sort" user="Jane" />
            <AppointmentTableSorted />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppointmentPageSorted;
