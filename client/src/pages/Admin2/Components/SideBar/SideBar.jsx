// SideBar.jsx
import {
  Calendar,
  DollarSign,
  Home,
  Menu,
  Package,
  Settings,
  ShoppingBag,
  Users,
} from 'lucide-react';
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

// MenuItem Component
const MenuItem = ({
  id,
  Icon,
  isSidebarOpen,
  title,
  ActiveMenu,
  onClick,
  route,
}) => {
  const navigate = useNavigate ();

  const handleClick = e => {
    if (onClick) {
      onClick (e);
    }
    if (route) {
      navigate (route);
    }
  };

  return (
    <li
      onClick={handleClick}
      className={`${ActiveMenu === id ? 'bg-purple-700' : 'hover:bg-purple-700/50'} flex ${isSidebarOpen ? 'justify-start' : 'justify-center'} w-full p-4 rounded-xl my-2 cursor-pointer`}
    >
      <Icon size={20} className={`${isSidebarOpen ? 'mr-2' : 'mr-0'}`} />
      {isSidebarOpen && <span>{title || 'Dashboard'}</span>}
    </li>
  );
};

// SideBar Component
function SideBar({isSidebarOpen, setIsSidebarOpen, toggleSidebar}) {
  const [isMobile, setIsMobile] = useState (false);
  const [ActiveMenu, setActiveMenu] = useState ('dashboard');

  const menu_list = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: Home,
      route: '/admin/dashboard'
    },
    {
      id: 'appointments',
      label: 'Appointments',
      icon: Calendar,
      route: '/admin/appointments',
    },
    {
      id: 'clients',
      label: 'Clients',
      icon: Users,
      route: '/admin/clients'
    },
    {
      id: 'services',
      label: 'Services',
      icon: Package,
      route: '/admin/services'
    },
    {
      id: 'inventory',
      label: 'Inventory',
      icon: ShoppingBag,
      route: '/admin/inventory',
    },
    {
      id: 'finance',
      label: 'Finance',
      icon: DollarSign,
      route: '/admin/finance'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      route: '/admin/settings'
    },
  ];

  useEffect (
    () => {
      const handleResize = () => {
        const mobile = window.innerWidth < 768;
        setIsMobile (mobile);
        setIsSidebarOpen (!mobile);
      };

      handleResize ();
      window.addEventListener ('resize', handleResize);

      return () => {
        window.removeEventListener ('resize', handleResize);
      };
    },
    [setIsSidebarOpen]
  );

  return (
    <aside
      className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-purple-800 to-pink-500 text-white fixed h-screen transition-all duration-300`}
    >
      {/* Top Section */}
      <div
        className={`bg-purple-800 flex items-center ${isSidebarOpen ? 'justify-between' : 'justify-center'} p-5`}
      >
        {isSidebarOpen && <span className="text-xl font-bold">Glamify</span>}
        <button onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
      </div>

      {/* Menu Items */}
      <div className="py-4 overflow-y-scroll">
        <ul className="flex flex-col justify-center py-2 px-2">
          {menu_list.map ((menu, index) => (
            <MenuItem
              key={index}
              onClick={() => setActiveMenu (menu.id)}
              route={menu.route}
              Icon={menu.icon}
              isSidebarOpen={isSidebarOpen}
              title={menu.label}
              id={menu.id}
              ActiveMenu={ActiveMenu}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
