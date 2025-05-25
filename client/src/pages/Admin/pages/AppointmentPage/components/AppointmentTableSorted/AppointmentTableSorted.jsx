import React, {useEffect, useState} from 'react';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import './AppointmentTableSorted.css';

function AppointmentTableSorted () {

  const initURL = 'http://127.0.0.1:8080/api/appointment/getAppointments';
  const sortURL = 'http://127.0.0.1:8080/api/admin/getSortedAppointments';

  const [appointments, setAppointments] = useState ([]);
  const [loading, setLoading] = useState (true);

  const fetchAppointments = async () => {
    try {
      const response = await fetch (initURL);
      const data = await response.json ();
      if (data.code === 200 && Array.isArray (data.content)) {
        const formattedAppointments = data.content.map (item => ({
          id: item.id,
          client: `Customer #${item.cut_id}`,
          date: item.date,
          time: item.time ? item.time : 'N/A',
          status: item.status ? 'Confirmed' : 'Pending',
          payment: item.payment_status ? 'Paid' : 'Unpaid',
        }));
        setAppointments (formattedAppointments);
      }
    } catch (error) {
      console.error ('Failed to fetch appointments:', error);
    } finally {
      setLoading (false);
    }
  };

  const fetchSortAppointments = async () => {
    try {
      const response = await fetch (sortURL);
      const data = await response.json ();
      if (data.code === 200 && Array.isArray (data.content)) {
        const formattedAppointmentsSorted = data.content.map (item => ({
          id: item.id,
          client: `Customer #${item.cut_id}`,
          date: item.date,
          time: item.time ? item.time : 'N/A',
          status: item.status ? 'Confirmed' : 'Pending',
          payment: item.payment_status ? 'Paid' : 'Unpaid',
        }));
        setAppointments (formattedAppointmentsSorted);
      }
    } catch (error) {
      console.error ('Failed to fetch appointments:', error);
    } finally {
      setLoading (false);
    }
  };

  useEffect (() => {
    setLoading (true);
    fetchAppointments();
    setLoading (false);
  }, []);

  const handleSortByDate = async () => {
    setLoading (true);
    fetchSortAppointments();
    setLoading (false);
  };

  const handleUnsort = async () => {
    setLoading(true);
    fetchAppointments();
    setLoading(false);
  };

  return (
    <div className="overflow-x-scroll bg-gray-300 p-4">
      <div className='flex gap-4'>
        <button
          onClick={handleSortByDate}
          className="mb-4 rounded bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700"
        >
          Clean Sort by Date
        </button>
        <button
          onClick={handleUnsort}
          className="mb-4 rounded bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700"
        >
          Un-do Sort
        </button>
      </div>
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
          {loading
            ? <tr>
                <td colSpan="7" className="text-center p-4">Loading...</td>
              </tr>
            : appointments.length === 0
                ? <tr>
                    <td colSpan="7" className="text-center p-4">
                      No appointments found
                    </td>
                  </tr>
                : appointments.map (appointment => (
                    <tr
                      key={appointment.id}
                      className="fade-in text-bold border border-transparent font-mono transition-all duration-300 odd:bg-purple-100 even:bg-violet-100 hover:border hover:border-purple-500 hover:bg-fuchsia-100"
                    >
                      <td className="w-10 py-2 text-center">
                        {appointment.id}
                      </td>
                      <td className="w-40 p-2 text-center text-wrap">
                        {appointment.client}
                      </td>
                      <td className="p-2 text-center">{appointment.date}</td>
                      <td className="p-2 text-center">{appointment.time}</td>
                      <td className="p-2 text-center">{appointment.status}</td>
                      <td className="p-2 text-center">{appointment.payment}</td>
                      <td className="flex flex-col items-center gap-y-2 p-2 font-bold">
                        <EditButton appointment={appointment} />
                        <DeleteButton appointment={appointment} />
                      </td>
                    </tr>
                  ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentTableSorted;
