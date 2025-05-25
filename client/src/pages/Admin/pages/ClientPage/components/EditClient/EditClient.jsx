import { User, Phone, Mail } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function EditClient() {
  const location = useLocation();
  const clientData = location.state?.client;

  const [client, setClient] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (clientData) {
      setClient({
        id: clientData.id || '',
        name: clientData.name || '',
        email: clientData.email || '',
        phone: clientData.phone || '',
      });
    }
  }, [clientData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    if (clientData) {
      setClient({
        id: clientData.id || '',
        name: clientData.name || '',
        email: clientData.email || '',
        phone: clientData.phone || '',
      });
    } else {
      setClient({
        id: '',
        name: '',
        email: '',
        phone: '',
      });
    }
  };

  const saveData = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8080/api/customers/updateCustomer/${client.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(client),
        },
      );

      if (!response.ok) {
        throw new Error('Failed to update client');
      }

      const result = await response.json();
      console.log('Client updated:', result);
      alert('Client updated successfully!');
    } catch (error) {
      console.error('Error saving client:', error);
    }
  };

  return (
    <div className="mx-auto max-w-xl p-6">
      <h2 className="mb-6 text-2xl font-semibold text-indigo-700">
        Edit Client
      </h2>

      <form className="space-y-4">
        {/* ID (readonly) */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600">Client ID</label>
          <input
            type="text"
            value={client.id}
            disabled
            className="w-full rounded-md border border-gray-200 bg-gray-100 px-3 py-2 text-sm text-gray-500 outline-none"
          />
        </div>

        {/* Name */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600">Client Name</label>
          <div className="flex items-center rounded-md border border-gray-200 bg-white px-3 py-2">
            <User className="mr-2 text-gray-500" />
            <input
              type="text"
              name="name"
              className="w-full bg-transparent outline-none"
              placeholder="Enter client name"
              value={client.name}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600">Email</label>
          <div className="flex items-center rounded-md border border-gray-200 bg-white px-3 py-2">
            <Mail className="mr-2 text-gray-500" />
            <input
              type="email"
              name="email"
              className="w-full bg-transparent outline-none"
              placeholder="Enter client email"
              value={client.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600">Phone</label>
          <div className="flex items-center rounded-md border border-gray-200 bg-white px-3 py-2">
            <Phone className="mr-2 text-gray-500" />
            <input
              type="text"
              name="phone"
              className="w-full bg-transparent outline-none"
              placeholder="Enter phone number"
              value={client.phone}
              onChange={handleChange}
            />
          </div>
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

export default EditClient;
