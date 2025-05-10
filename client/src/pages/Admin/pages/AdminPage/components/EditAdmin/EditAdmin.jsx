import {
  User,
  Phone,
  Mail,
  Shield,
  Star,
  Trash2,
  Plus,
  Clock,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function EditAdmin() {
  const location = useLocation();
  const adminData = location.state?.admin;

  const defaultAdmin = {
    id: '',
    name: '',
    email: '',
    phone: [''],
    role: '',
    accessLevel: '',
    lastLogin: '',
    status: 'Active',
  };

  const [admin, setAdmin] = useState(defaultAdmin);

  useEffect(() => {
    if (adminData) {
      setAdmin({
        ...defaultAdmin,
        ...adminData,
        phone: adminData.phone?.length ? adminData.phone : [''],
      });
    }
  }, [adminData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin((prev) => ({ ...prev, [name]: value }));
  };

  const updatePhone = (index, value) => {
    const updated = [...admin.phone];
    updated[index] = value;
    setAdmin((prev) => ({ ...prev, phone: updated }));
  };

  const addPhone = () => {
    setAdmin((prev) => ({ ...prev, phone: [...prev.phone, ''] }));
  };

  const removePhone = (index) => {
    setAdmin((prev) => ({
      ...prev,
      phone: prev.phone.filter((_, i) => i !== index),
    }));
  };

  const handleReset = () => {
    if (adminData) {
      setAdmin({
        ...defaultAdmin,
        ...adminData,
        phone: adminData.phone?.length ? adminData.phone : [''],
      });
    } else {
      setAdmin(defaultAdmin);
    }
  };

  const handleSave = () => {
    const cleaned = {
      ...admin,
      phone: admin.phone.filter((p) => p.trim() !== ''),
    };
    console.log('Admin saved:', cleaned);
    // TODO: Submit cleaned data to API
  };

  return (
    <div className="mx-auto max-w-xl px-4 py-6">
      <h2 className="mb-6 text-2xl font-bold text-indigo-700">Edit Admin</h2>

      <form className="space-y-5">
        <Field label="Admin ID">
          <input
            type="text"
            value={admin.id}
            disabled
            className="w-full rounded-md border border-gray-200 bg-gray-100 px-3 py-2 text-sm text-gray-500"
          />
        </Field>

        <Field label="Name" icon={<User />}>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            className="w-full bg-transparent outline-none"
            value={admin.name}
            onChange={handleChange}
          />
        </Field>

        <Field label="Email" icon={<Mail />}>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="w-full bg-transparent outline-none"
            value={admin.email}
            onChange={handleChange}
          />
        </Field>

        <Field label="Phone Numbers">
          {admin.phone.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 rounded-md border border-gray-200 bg-white px-3 py-2"
            >
              <Phone className="text-gray-500" />
              <input
                type="text"
                value={item}
                placeholder="Phone"
                className="w-full bg-transparent outline-none"
                onChange={(e) => updatePhone(index, e.target.value)}
              />
              {admin.phone.length > 1 && (
                <button
                  type="button"
                  onClick={() => removePhone(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addPhone}
            className="mt-2 inline-flex items-center text-sm text-indigo-600 hover:underline"
          >
            <Plus size={16} className="mr-1" /> Add Phone
          </button>
        </Field>

        <Field label="Role" icon={<Shield />}>
          <input
            type="text"
            name="role"
            placeholder="Enter role"
            className="w-full bg-transparent outline-none"
            value={admin.role}
            onChange={handleChange}
          />
        </Field>

        <Field label="Access Level (1–5)" icon={<Star />}>
          <input
            type="number"
            name="accessLevel"
            min="1"
            max="5"
            placeholder="Access Level"
            className="w-full bg-transparent outline-none"
            value={admin.accessLevel}
            onChange={handleChange}
          />
        </Field>

        <Field label="Last Login" icon={<Clock />}>
          <input
            type="text"
            name="lastLogin"
            disabled
            className="w-full rounded-md border border-gray-200 bg-gray-100 px-3 py-2 text-sm text-gray-500"
            value={admin.lastLogin}
          />
        </Field>

        <Field label="Status">
          <select
            name="status"
            value={admin.status}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-200 px-3 py-2 outline-none"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="On Leave">On Leave</option>
          </select>
        </Field>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={handleSave}
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

function Field({ label, icon, children }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-600">{label}</label>
      <div className="flex flex-col space-y-2">
        {icon ? (
          <div className="flex items-center space-x-2 rounded-md border border-gray-200 bg-white px-3 py-2">
            {icon}
            {children}
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}

export default EditAdmin;
