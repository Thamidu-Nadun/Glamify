import React from 'react';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';

function AppointmentTable () {
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
    <div className="bg-gray-300 overflow-x-scroll">
      <table className="w-full table-auto shadow-lg min-w-max">
        <thead className="bg-purple-400 text-white">
          <tr>
            <th className="px-2 py-1 border-r-1">Appointment ID</th>
            <th className="px-2 py-1 border-r-1">Client Name</th>
            <th className="px-2 py-1 border-r-1">Date</th>
            <th className="px-2 py-1 
                        border-r-1">
              Time
            </th>
            <th className="px-2 py-1 border-r-1">Status</th>
            <th className="px-2 py-1 border-r-1">Payment</th>
            <th className="px-2 py-1 border-r-1">Edit / Delete</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-pink-300">
          {appointments.map (appointment => {
            return (
              <tr className="odd:bg-purple-100 even:bg-violet-100 hover:bg-fuchsia-100 text-bold border border-transparent font-mono hover:border hover:border-purple-500 transition-all duration-300">
                <td className="text-center py-2 w-10">{appointment.id}</td>
                <td className="text-wrap w-40 p-2 text-center">
                  {appointment.client}
                </td>
                <td className="text-center p-2">{appointment.date}</td>
                <td className="text-center p-2">{appointment.time}</td>
                <td className="text-center p-2">{appointment.status}</td>
                <td className="text-center p-2">{appointment.payment}</td>
                <td className="p-2 flex flex-col items-center gap-y-2 font-bold">
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
