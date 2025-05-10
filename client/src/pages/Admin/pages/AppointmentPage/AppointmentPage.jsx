import React, { useState } from 'react';
import SideBar from '../../Components/SideBar/SideBar';
import BreadCrumb from '../../../../Components/BreadCrumb/BreadCrumb';
import AppointmentTable from './components/AppointmentTable/AppointmentTable';
import Header from '../../Components/Header/Header';
import WelcomeGreet from '../../Components/WelcomeGreet/WelcomeGreet';
import { Link } from 'react-router-dom';

function AppointmentPage() {
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
            url_2="/admin/appointments"
            Path_one="Admin"
            Path_two="Appointments"
          />

          <div className="ml-2">
            <WelcomeGreet page="Appointments" user="Jane" />
            <AppointmentTable />
            <Link
              to="sort/"
              className="mt-10 rounded-2xl bg-purple-500 px-3 py-2 text-white"
            >
              Sort Data
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppointmentPage;
