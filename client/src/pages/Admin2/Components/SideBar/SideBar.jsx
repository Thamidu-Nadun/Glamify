import { Home, Menu } from 'lucide-react';
import React, { useState } from 'react'

function SideBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
      <>
          <aside className={`${isSidebarOpen ? 'w-64' : 'w-20' } bg-blue-300 fixed h-screen transition-all duration-300`}>
              {/* Top Section Of SideBar */}
              <div className={`bg-red-200 flex items-center ${isSidebarOpen ? 'justify-between' : 'justify-center' } p-5`}>
                  {isSidebarOpen &&
                      <span className='text-xl font-bold'>Glamify</span>
                  }
                    <button onClick={toggleSidebar}><Menu size={24}/></button>
              </div>
              {/* SideBar Menu Items */}
              <div className='py-4 overflow-y-scroll bg-violet-300'>
                  <ul className='flex flex-col justify-center py-2 px-2'>
                      <MenuItem Icon={Home} isSidebarOpen={isSidebarOpen} />
                      <MenuItem Icon={Home} isSidebarOpen={isSidebarOpen} />
                  </ul>
              </div>
          </aside>
    </>
  )
}

export default SideBar


const MenuItem = ({ Icon, isSidebarOpen }) => {
    return (
        <li className={`bg-red-400 flex ${isSidebarOpen ? 'justify-start' : 'justify-center' } w-full p-4 rounded-xl my-2`}>
            <Icon size={24} className={`${isSidebarOpen ? 'mr-2' : 'mr-0'}`} />
            {isSidebarOpen && <span>DashBoard</span>}
        </li>
    );
}