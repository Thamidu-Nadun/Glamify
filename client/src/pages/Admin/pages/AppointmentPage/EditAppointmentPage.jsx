import { React, useState } from 'react'
import EditAppointment from './components/EditAppointment/EditAppointment'
import SideBar from '../../Components/SideBar/SideBar';
import BreadCrumb from '../../../../Components/BreadCrumb/BreadCrumb';
import Header from '../../Components/Header/Header';

function EditAppointmentPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState (true);

  const toggleSidebar = () => setIsSidebarOpen (!isSidebarOpen);
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
          <BreadCrumb Path_one="Admin" Path_two="Dashboard" />
          <EditAppointment />
        </main>
      </div>
    </div>
  )
}

export default EditAppointmentPage