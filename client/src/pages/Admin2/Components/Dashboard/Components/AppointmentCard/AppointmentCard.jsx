import React from 'react';

function AppointmentCard() {
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
  return (
    <div className="rounded-lg border-2 border-pink-400 bg-white shadow-lg lg:col-span-3">
      <div className="border-b border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Today's Appointments
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Client
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Service
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Stylist
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {appointment.client}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {appointment.service}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {appointment.time}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
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
  );
}

export default AppointmentCard;
