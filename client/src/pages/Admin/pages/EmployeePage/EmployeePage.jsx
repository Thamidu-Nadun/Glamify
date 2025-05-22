import React, { useState } from 'react';
import SideBar from '../../Components/SideBar/SideBar';
import Header from '../../Components/Header/Header';
import BreadCrumb from '../../../../Components/BreadCrumb/BreadCrumb';
import WelcomeGreet from '../../Components/WelcomeGreet/WelcomeGreet';
import EmployeeTable from './components/EmployeeTable/EmployeeTable';

function EmployeePage() {
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
            url_2="/admin/employees"
            Path_one="Admin"
            Path_two="Employees"
          />

          <div className="ml-2">
            <WelcomeGreet page="Employees" user="Jane" />
            <EmployeeTable />
          </div>
        </main>
      </div>
    </div>
  );
}

export default EmployeePage;
