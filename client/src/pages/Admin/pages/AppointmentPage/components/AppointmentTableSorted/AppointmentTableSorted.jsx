import React, { useState } from 'react';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';

function AppointmentTableSorted() {
  const initialAppointments = [
    {
      id: 1,
      client: 'John Doe',
      date: '2023-10-01',
      time: '10:00 AM',
      status: 'Confirmed',
      payment: 'Paid',
    },
    {
      id: 2,
      client: 'Jane Smith',
      date: '2023-10-02',
      time: '11:00 AM',
      status: 'Pending',
      payment: 'Unpaid',
    },
    {
      id: 3,
      client: 'Jennifer Lee',
      date: '2025-05-05',
      time: '11:00 PM',
      status: 'Pending',
      payment: 'Unpaid',
    },
    {
      id: 4,
      client: 'Alice Johnson',
      date: '2025-05-01',
      time: '2:00 PM',
      status: 'Confirmed',
      payment: 'Paid',
    },
    {
      id: 5,
      client: 'Michael Chen',
      date: '2024-12-25',
      time: '9:00 AM',
      status: 'Cancelled',
      payment: 'Refunded',
    },
    {
      id: 6,
      client: 'Sara Kim',
      date: '2025-01-15',
      time: '4:30 PM',
      status: 'Confirmed',
      payment: 'Paid',
    },
    {
      id: 7,
      client: 'David Park',
      date: '2023-06-10',
      time: '8:00 AM',
      status: 'No-show',
      payment: 'Unpaid',
    },
    {
      id: 8,
      client: 'Emily Nguyen',
      date: '2025-04-20',
      time: '6:00 PM',
      status: 'Pending',
      payment: 'Unpaid',
    },
    {
      id: 9,
      client: 'Chris Evans',
      date: '2024-11-11',
      time: '1:00 PM',
      status: 'Confirmed',
      payment: 'Paid',
    },
    {
      id: 10,
      client: 'Natalie Portman',
      date: '2025-06-01',
      time: '3:00 PM',
      status: 'Confirmed',
      payment: 'Paid',
    },
  ];

  const [appointments, setAppointments] = useState(initialAppointments);

  const handleSortByDate = () => {
    const sorted = [...appointments].sort(
      (a, b) => new Date(b.date) - new Date(a.date),
    );
    setAppointments(sorted);
  };

  return (
    <div className="overflow-x-scroll bg-gray-300 p-4">
      <button
        onClick={handleSortByDate}
        className="mb-4 rounded bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700"
      >
        Clean Sort by Date
      </button>
      <table className="w-full min-w-max table-auto shadow-lg">
        <thead className="bg-purple-400 text-white">
          <tr>
            <th className="border-r-1 px-2 py-1">Appointment ID</th>
            <th className="border-r-1 px-2 py-1">Client Name</th>
            <th className="border-r-1 px-2 py-1">Date</th>
            <th className="border-r-1 px-2 py-1">Time</th>
            <th className="border-r-1 px-2 py-1">Status</th>
            <th className="border-r-1 px-2 py-1">Payment</th>
            <th className="border-r-1 px-2 py-1">Edit / Delete</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-pink-300">
          {appointments.map((appointment) => (
            <tr
              key={appointment.id}
              className="text-bold border border-transparent font-mono transition-all duration-300 odd:bg-purple-100 even:bg-violet-100 hover:border hover:border-purple-500 hover:bg-fuchsia-100"
            >
              <td className="w-10 py-2 text-center">{appointment.id}</td>
              <td className="w-40 p-2 text-center text-wrap">
                {appointment.client}
              </td>
              <td className="p-2 text-center">{appointment.date}</td>
              <td className="p-2 text-center">{appointment.time}</td>
              <td className="p-2 text-center">{appointment.status}</td>
              <td className="p-2 text-center">{appointment.payment}</td>
              <td className="flex flex-col items-center gap-y-2 p-2 font-bold">
                <EditButton appointment={appointment} />
                <DeleteButton />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentTableSorted;
