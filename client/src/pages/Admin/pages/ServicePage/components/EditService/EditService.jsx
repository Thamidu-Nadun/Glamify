import { Calendar, Timer, User, DollarSign } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function EditService() {
  const location = useLocation();
  const serviceData = location.state?.service;

  const [service, setService] = useState({
    id: '',
    name: '',
    description: '',
    duration: '',
    price: '',
    currency: 'LKR',
  });

  useEffect(() => {
    if (serviceData) {
      setService(serviceData);
    }
  }, [serviceData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setService(serviceData || {
      id: '',
      name: '',
      description: '',
      duration: '',
      price: '',
      currency: 'LKR',
    });
  };

  const saveData = () => {
    console.log('Data saved:', service);
  };

  return (
    <div className="mx-auto max-w-xl p-6">
      <h2 className="mb-6 text-2xl font-semibold text-indigo-700">Edit Service</h2>

      <form className="space-y-4">
        {/* ID (readonly) */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600">Service ID</label>
          <input
            type="text"
            value={service.id}
            disabled
            className="w-full rounded-md border border-gray-200 bg-gray-100 px-3 py-2 text-sm text-gray-500 outline-none"
          />
        </div>

        {/* Name */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600">Service Name</label>
          <div className="flex items-center rounded-md border border-gray-200 bg-white px-3 py-2">
            <User className="mr-2 text-gray-500" />
            <input
              type="text"
              name="name"
              className="w-full bg-transparent outline-none"
              placeholder="Enter service name"
              value={service.name}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600">Description</label>
          <div className="flex items-center rounded-md border border-gray-200 bg-white px-3 py-2">
            <Calendar className="mr-2 text-gray-500" />
            <input
              type="text"
              name="description"
              className="w-full bg-transparent outline-none"
              placeholder="Enter service description"
              value={service.description}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Duration */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600">Duration (mins)</label>
          <div className="flex items-center rounded-md border border-gray-200 bg-white px-3 py-2">
            <Timer className="mr-2 text-gray-500" />
            <input
              type="number"
              name="duration"
              className="w-full bg-transparent outline-none"
              placeholder="Duration in minutes"
              value={service.duration}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Price */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600">Price</label>
          <div className="flex items-center rounded-md border border-gray-200 bg-white px-3 py-2">
            <DollarSign className="mr-2 text-gray-500" />
            <input
              type="number"
              name="price"
              className="w-full bg-transparent outline-none"
              placeholder="Enter price"
              value={service.price}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Currency */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600">Currency</label>
          <select
            name="currency"
            className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none"
            value={service.currency}
            onChange={handleChange}
          >
            <option value="LKR">LKR</option>
            <option value="USD">USD</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={saveData}
            className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="rounded-md bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditService;
