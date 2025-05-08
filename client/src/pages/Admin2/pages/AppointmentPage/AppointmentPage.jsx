import React, {useState} from 'react';
import SideBar from '../../Components/SideBar/SideBar';

function AppointmentPage () {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen (!isSidebarOpen);
  return (
    <div className="bg-gray-100 h-screen flex selection:text-pink-900 selection:bg-pink-200">
      <SideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div>Appointments Page</div>
    </div>
  );
}

export default AppointmentPage;
