// SideBar.jsx
import {
  Calendar,
  MessageCircleHeart,
  Home,
  Menu,
  Package,
  Settings,
  VenetianMask,
  Users,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (route) {
      navigate(route);
    }
  };

  return (
    <li
      onClick={handleClick}
      className={`${ActiveMenu === id ? 'bg-purple-700' : 'hover:bg-purple-700/50'} flex ${isSidebarOpen ? 'justify-start' : 'justify-center'} my-2 w-full cursor-pointer rounded-xl p-4`}
    >
      <Icon size={20} className={`${isSidebarOpen ? 'mr-2' : 'mr-0'}`} />
      {isSidebarOpen && <span>{title || 'Dashboard'}</span>}
    </li>
  );
};

// SideBar Component
function SideBar({ isSidebarOpen, setIsSidebarOpen, toggleSidebar }) {
  const [isMobile, setIsMobile] = useState(false);
  const [ActiveMenu, setActiveMenu] = useState('dashboard');

  const menu_list = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: Home,
      route: '/admin/dashboard',
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
      route: '/admin/clients',
    },
    {
      id: 'services',
      label: 'Services',
      icon: Package,
      route: '/admin/services',
    },
    {
      id: 'employees',
      label: 'Employees',
      icon: VenetianMask,
      route: '/admin/employees',
    },
    {
      id: 'feedbacks',
      label: 'Feedbacks',
      icon: MessageCircleHeart,
      route: '/admin/feedbacks',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      route: '/admin/settings',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsSidebarOpen]);

  return (
    <aside
      className={`${isSidebarOpen ? 'w-64' : 'w-20'} fixed h-screen bg-gradient-to-b from-purple-800 to-pink-500 text-white transition-all duration-300`}
    >
      {/* Top Section */}
      <div
        className={`flex items-center bg-purple-800 ${isSidebarOpen ? 'justify-between' : 'justify-center'} p-5`}
      >
        {isSidebarOpen && <span className="text-xl font-bold">Glamify</span>}
        <button onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
      </div>

      {/* Menu Items */}
      <div className="overflow-y-scroll py-4">
        <ul className="flex flex-col justify-center px-2 py-2">
          {menu_list.map((menu, index) => (
            <MenuItem
              key={index}
              onClick={() => setActiveMenu(menu.id)}
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
