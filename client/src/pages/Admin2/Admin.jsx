import React, {useState} from 'react';
import SideBar from './Components/SideBar/SideBar';
import Main from './Components/Main/Main';

function Admin2 () {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <div className="bg-gray-100 h-screen flex selection:text-pink-900 selection:bg-pink-200">
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
