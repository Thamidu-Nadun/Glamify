import {Calendar, Timer, User, SquareCheckBig} from 'lucide-react';
import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

function EditAppointment ({}) {
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
    console.log ('Data saved:', appointment);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form className="space-y-4">
        {/* ID Field (Disabled) */}
        <div className="flex items-center border bg-indigo-50 border-gray-200 rounded-md px-3 py-2">
          <input
            type="text"
            className="w-full bg-transparent text-indigo-500/70 outline-none"
            value={appointment.id}
            disabled
          />
        </div>

        {/* Client Name */}
        <div className="flex items-center border bg-indigo-50 border-gray-200 rounded-md px-3 py-2">
          <User className="text-gray-500 mr-2" />
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
        <div className="flex items-center border bg-indigo-50 border-gray-200 rounded-md px-3 py-2">
          <Calendar className="text-gray-500 mr-2" />
          <input
            type="date"
            name="date"
            className="w-full bg-transparent outline-none"
            value={appointment.date}
            onChange={handleChange}
          />
        </div>

        {/* Time */}
        <div className="flex items-center border bg-indigo-50 border-gray-200 rounded-md px-3 py-2">
          <Timer className="text-gray-500 mr-2" />
          <input
            type="time"
            name="time"
            className="w-full bg-transparent outline-none"
            value={appointment.time}
            onChange={handleChange}
          />
        </div>

        {/* Status */}
        <div className="flex items-center border bg-indigo-50 border-gray-200 rounded-md px-3 py-2">
          <SquareCheckBig className="text-gray-500 mr-2" />
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
        <div className="flex items-center border bg-indigo-50 border-gray-200 rounded-md px-3 py-2">
          <SquareCheckBig className="text-gray-500 mr-2" />
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

        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={() => saveData ()}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 active:bg-indigo-800 transition duration-150"
          >
            Save
          </button>
          <button
            type="reset"
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 active:bg-gray-400 transition duration-150"
          >
            Clear
          </button>
        </div>

      </form>
    </div>
  );
}

export default EditAppointment;
