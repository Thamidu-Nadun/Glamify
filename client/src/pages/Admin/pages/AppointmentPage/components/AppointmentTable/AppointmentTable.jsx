import React from 'react';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';

function AppointmentTable() {
  const appointments = [
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
  ];
  return (
    <div className="overflow-x-scroll bg-gray-300">
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
          {appointments.map((appointment) => {
            return (
              <tr className="text-bold border border-transparent font-mono transition-all duration-300 odd:bg-purple-100 even:bg-violet-100 hover:border hover:border-purple-500 hover:bg-fuchsia-100">
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
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentTable;
