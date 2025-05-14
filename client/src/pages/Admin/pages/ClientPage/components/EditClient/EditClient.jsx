import { User, Phone, Mail, Plus, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function EditClient() {
  const location = useLocation();
  const clientData = location.state?.client;

  const [client, setClient] = useState({
    id: '',
    name: '',
    email: '',
    phone: [''],
  });

  useEffect(() => {
    if (clientData) {
      setClient({
        id: clientData.id || '',
        name: clientData.name || '',
        email: clientData.email || '',
        phone: clientData.phone?.length ? clientData.phone : [''],
      });
    }
  }, [clientData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (index, value) => {
    const updatedPhones = [...client.phone];
    updatedPhones[index] = value;
    setClient((prev) => ({ ...prev, phone: updatedPhones }));
  };

  const addPhoneField = () => {
    setClient((prev) => ({ ...prev, phone: [...prev.phone, ''] }));
  };

  const removePhoneField = (index) => {
    setClient((prev) => ({
      ...prev,
      phone: prev.phone.filter((_, i) => i !== index),
    }));
  };

  const handleReset = () => {
    if (clientData) {
      setClient({
        id: clientData.id || '',
        name: clientData.name || '',
        email: clientData.email || '',
        phone: clientData.phone?.length ? clientData.phone : [''],
      });
    } else {
      setClient({
        id: '',
        name: '',
        email: '',
        phone: [''],
      });
    }
  };

  const saveData = () => {
    console.log('Data saved:', client);
    // Your save logic here
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

        {/* Phones */}
        <div className="space-y-1">
          <label className="text-sm text-gray-600">Phone Numbers</label>
          {client.phone.map((phone, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 rounded-md border border-gray-200 bg-white px-3 py-2"
            >
              <Phone className="text-gray-500" />
              <input
                type="text"
                className="w-full bg-transparent outline-none"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => handlePhoneChange(index, e.target.value)}
              />
              {client.phone.length > 1 && (
                <button
                  type="button"
                  onClick={() => removePhoneField(index)}
                  className="text-red-500 hover:text-red-700"
                  title="Remove"
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addPhoneField}
            className="mt-2 inline-flex items-center text-sm text-indigo-600 hover:underline"
          >
            <Plus size={16} className="mr-1" /> Add Phone Number
          </button>
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
