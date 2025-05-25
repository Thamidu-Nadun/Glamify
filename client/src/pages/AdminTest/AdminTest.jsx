import { useState, useEffect } from 'react';
import {
  Menu,
  Home,
  Calendar,
  Users,
  DollarSign,
  Settings,
  Bell,
  Search,
  ChevronDown,
  ChevronUp,
  Star,
  TrendingUp,
  Package,
  ShoppingBag,
} from 'lucide-react';

// Sample data for the dashboard
const appointments = [
  {
    id: 1,
    client: 'Emma Watson',
    service: 'Hair Coloring',
    time: '10:00 AM',
    date: '2025-05-05',
    stylist: 'Jennifer',
  },
  {
    id: 2,
    client: 'Sophia Miller',
    service: 'Haircut & Styling',
    time: '11:30 AM',
    date: '2025-05-05',
    stylist: 'Robert',
  },
  {
    id: 3,
    client: 'James Smith',
    service: 'Beard Trim',
    time: '1:00 PM',
    date: '2025-05-05',
    stylist: 'Michael',
  },
  {
    id: 4,
    client: 'Olivia Brown',
    service: 'Manicure',
    time: '2:30 PM',
    date: '2025-05-05',
    stylist: 'Lisa',
  },
  {
    id: 5,
    client: 'Alice Cooper',
    service: 'Facial',
    time: '3:45 PM',
    date: '2025-05-05',
    stylist: 'Diana',
  },
];

const recentSales = [
  { id: 1, service: 'Hair Styling', amount: 85, date: '2025-05-04' },
  { id: 2, service: 'Manicure & Pedicure', amount: 120, date: '2025-05-04' },
  { id: 3, service: 'Facial Treatment', amount: 95, date: '2025-05-03' },
  { id: 4, service: 'Hair Coloring', amount: 150, date: '2025-05-03' },
];

const topServices = [
  { name: 'Hair Styling', value: 35 },
  { name: 'Facial Treatment', value: 25 },
  { name: 'Manicure', value: 20 },
  { name: 'Hair Coloring', value: 15 },
  { name: 'Massage', value: 5 },
];

export default function Admin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [submenuOpen, setSubmenuOpen] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSubmenu = (menu) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
    {
      id: 'appointments',
      label: 'Appointments',
      icon: <Calendar size={20} />,
      submenus: ['View All', 'Add New', 'Calendar'],
    },
    {
      id: 'clients',
      label: 'Clients',
      icon: <Users size={20} />,
      submenus: ['All Clients', 'VIP', 'New Clients'],
    },
    {
      id: 'services',
      label: 'Services',
      icon: <Package size={20} />,
      submenus: ['Service List', 'Packages', 'Special Offers'],
    },
    {
      id: 'inventory',
      label: 'Inventory',
      icon: <ShoppingBag size={20} />,
      submenus: ['Products', 'Orders', 'Suppliers'],
    },
    { id: 'finance', label: 'Finance', icon: <DollarSign size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } fixed left-0 top-0 z-20 h-screen bg-gradient-to-b from-purple-800 to-pink-500 text-white transition-all duration-300`}
      >
        <div className="flex items-center justify-between border-b border-purple-700 p-4">
          {isSidebarOpen && (
            <div className="flex items-center">
              <span className="text-xl font-bold">Glow Salon</span>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="rounded-lg p-2 hover:bg-purple-700"
          >
            <Menu size={24} />
          </button>
        </div>

        <div className="overflow-y-auto py-4">
          <ul className="space-y-2 px-3">
            {menuItems.map((item) => (
              <li key={item.id}>
                <div>
                  <button
                    onClick={() => {
                      setActiveMenu(item.id);
                      if (item.submenus) {
                        toggleSubmenu(item.id);
                      }
                    }}
                    className={`flex items-center ${
                      !isSidebarOpen ? 'justify-center' : 'justify-between'
                    } w-full rounded-lg p-3 transition-colors ${
                      activeMenu === item.id
                        ? 'bg-purple-700'
                        : 'hover:bg-purple-700/50'
                    }`}
                  >
                    <div
                      className={`flex items-center ${!isSidebarOpen ? 'justify-center' : ''}`}
                    >
                      <span className={`${!isSidebarOpen ? 'mr-0' : 'mr-3'}`}>
                        {item.icon}
                      </span>
                      {isSidebarOpen && <span>{item.label}</span>}
                    </div>
                    {isSidebarOpen && item.submenus && (
                      <span>
                        {submenuOpen[item.id] ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </span>
                    )}
                  </button>

                  {/* Submenu */}
                  {isSidebarOpen && item.submenus && submenuOpen[item.id] && (
                    <ul className="mt-2 space-y-1 pl-8">
                      {item.submenus.map((submenu, idx) => (
                        <li key={idx}>
                          <a
                            href="#"
                            className="block rounded-md p-2 text-sm hover:bg-purple-700/50"
                          >
                            {submenu}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}
      >
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex flex-1 items-center">
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Search className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative rounded-full p-2 hover:bg-gray-100">
                <Bell size={22} />
                <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  3
                </span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 font-semibold text-white">
                  JD
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium">Jane Doe</p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600">
              Welcome back, Jane! Here's what's happening today.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow">
              <div className="flex items-center">
                <div className="rounded-full bg-pink-100 p-3 text-pink-500">
                  <Calendar size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">
                    Today's Appointments
                  </p>
                  <p className="text-2xl font-semibold">
                    {appointments.length}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
              <div className="flex items-center">
                <div className="rounded-full bg-purple-100 p-3 text-purple-500">
                  <DollarSign size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">
                    Today's Revenue
                  </p>
                  <p className="text-2xl font-semibold">$980</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
              <div className="flex items-center">
                <div className="rounded-full bg-blue-100 p-3 text-blue-500">
                  <Users size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">
                    New Clients
                  </p>
                  <p className="text-2xl font-semibold">8</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
              <div className="flex items-center">
                <div className="rounded-full bg-green-100 p-3 text-green-500">
                  <Star size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">
                    Avg. Rating
                  </p>
                  <p className="text-2xl font-semibold">4.8</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Today's Appointments */}
            <div className="rounded-lg bg-white shadow lg:col-span-2">
              <div className="border-b border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-800">
                  Today's Appointments
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                        Client
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                        Service
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                        Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                        Stylist
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {appointments.map((appointment) => (
                      <tr key={appointment.id} className="hover:bg-gray-50">
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">
                            {appointment.client}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="text-sm text-gray-900">
                            {appointment.service}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="text-sm text-gray-900">
                            {appointment.time}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="text-sm text-gray-900">
                            {appointment.stylist}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="border-t border-gray-200 p-4 text-center">
                <button className="text-sm font-medium text-purple-600 hover:text-purple-800">
                  View All Appointments
                </button>
              </div>
            </div>

            {/* Top Services & Recent Sales */}
            <div className="space-y-6">
              {/* Top Services */}
              <div className="rounded-lg bg-white shadow">
                <div className="border-b border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Top Services
                  </h2>
                </div>
                <div className="p-6">
                  {topServices.map((service, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <div className="mb-1 flex justify-between">
                        <span className="text-sm font-medium text-gray-700">
                          {service.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {service.value}%
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-200">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                          style={{ width: `${service.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Sales */}
              <div className="rounded-lg bg-white shadow">
                <div className="border-b border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Recent Sales
                  </h2>
                </div>
                <div className="p-6">
                  <ul className="divide-y divide-gray-200">
                    {recentSales.map((sale) => (
                      <li key={sale.id} className="flex justify-between py-3">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {sale.service}
                          </p>
                          <p className="text-xs text-gray-500">{sale.date}</p>
                        </div>
                        <p className="text-sm font-semibold text-green-600">
                          ${sale.amount}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-gray-200 p-4 text-center">
                  <button className="text-sm font-medium text-purple-600 hover:text-purple-800">
                    View All Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
