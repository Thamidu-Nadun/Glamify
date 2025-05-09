import { Calendar, Timer, User, SquareCheckBig } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function EditAppointment({}) {
  const location = useLocation();
  const appointmentData = location.state?.appointment;

  const [appointment, setAppointment] = useState({
    id: '',
    client: '',
    date: '',
    time: '',
    status: '',
    payment: '',
  });

  useEffect(() => {
    if (appointmentData) {
      setAppointment(appointmentData);
    }
  }, [appointmentData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment((prev) => ({ ...prev, [name]: value }));
  };

  const saveData = () => {
    console.log('Data saved:', appointment);
  };

  return (
    <div className="mx-auto max-w-xl p-4">
      <form className="space-y-4">
        {/* ID Field (Disabled) */}
        <div className="flex items-center rounded-md border border-gray-200 bg-indigo-50 px-3 py-2">
          <input
            type="text"
            className="w-full bg-transparent text-indigo-500/70 outline-none"
            value={appointment.id}
            disabled
          />
        </div>

        {/* Client Name */}
        <div className="flex items-center rounded-md border border-gray-200 bg-indigo-50 px-3 py-2">
          <User className="mr-2 text-gray-500" />
          <input
            type="text"
            name="client"
            className="w-full bg-transparent outline-none"
            placeholder="Client Name"
            value={appointment.client}
            onChange={handleChange}
          />
        </div>

        {/* Date */}
        <div className="flex items-center rounded-md border border-gray-200 bg-indigo-50 px-3 py-2">
          <Calendar className="mr-2 text-gray-500" />
          <input
            type="date"
            name="date"
            className="w-full bg-transparent outline-none"
            value={appointment.date}
            onChange={handleChange}
          />
        </div>

        {/* Time */}
        <div className="flex items-center rounded-md border border-gray-200 bg-indigo-50 px-3 py-2">
          <Timer className="mr-2 text-gray-500" />
          <input
            type="time"
            name="time"
            className="w-full bg-transparent outline-none"
            value={appointment.time}
            onChange={handleChange}
          />
        </div>

        {/* Status */}
        <div className="flex items-center rounded-md border border-gray-200 bg-indigo-50 px-3 py-2">
          <SquareCheckBig className="mr-2 text-gray-500" />
          <select
            name="status"
            className="w-full bg-transparent outline-none"
            value={appointment.status}
            onChange={handleChange}
          >
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        {/* Payment */}
        <div className="flex items-center rounded-md border border-gray-200 bg-indigo-50 px-3 py-2">
          <SquareCheckBig className="mr-2 text-gray-500" />
          <select
            name="status"
            className="w-full bg-transparent outline-none"
            value={appointment.payment}
            onChange={handleChange}
          >
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
          </select>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => saveData()}
            className="rounded-md bg-indigo-600 px-4 py-2 text-white transition duration-150 hover:bg-indigo-700 active:bg-indigo-800"
          >
            Save
          </button>
          <button
            type="reset"
            className="rounded-md bg-gray-200 px-4 py-2 text-gray-700 transition duration-150 hover:bg-gray-300 active:bg-gray-400"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditAppointment;
