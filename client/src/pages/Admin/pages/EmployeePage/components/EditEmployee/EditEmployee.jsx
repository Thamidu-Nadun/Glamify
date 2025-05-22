import {
  User,
  Phone,
  Mail,
  Briefcase,
  DollarSign,
  Star,
  Wrench,
  Trash2,
  Plus,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function EditEmployee() {
  const location = useLocation();
  const employeeData = location.state?.employee;

  const [employee, setEmployee] = useState({
    id: '',
    name: '',
    email: '',
    phone: [''],
    position: '',
    salary: '',
    expertise: '',
    services: [''],
    status: 'Active',
  });

  useEffect(() => {
    if (employeeData) {
      setEmployee({
        id: employeeData.id || '',
        name: employeeData.name || '',
        email: employeeData.email || '',
        phone: employeeData.phone?.length ? employeeData.phone : [''],
        position: employeeData.position || '',
        salary: employeeData.salary || '',
        expertise: employeeData.expertise || '',
        services: employeeData.services?.length ? employeeData.services : [''],
        status: employeeData.status || 'Active',
      });
    }
  }, [employeeData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (field, index, value) => {
    const updated = [...employee[field]];
    updated[index] = value;
    setEmployee((prev) => ({ ...prev, [field]: updated }));
  };

  const addArrayField = (field) => {
    setEmployee((prev) => ({ ...prev, [field]: [...prev[field], ''] }));
  };

  const removeArrayField = (field, index) => {
    setEmployee((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handleReset = () => {
    if (employeeData) {
      setEmployee({
        id: employeeData.id || '',
        name: employeeData.name || '',
        email: employeeData.email || '',
        phone: employeeData.phone?.length ? employeeData.phone : [''],
        position: employeeData.position || '',
        salary: employeeData.salary || '',
        expertise: employeeData.expertise || '',
        services: employeeData.services?.length ? employeeData.services : [''],
        status: employeeData.status || 'Active',
      });
    } else {
      setEmployee({
        id: '',
        name: '',
        email: '',
        phone: [''],
        position: '',
        salary: '',
        expertise: '',
        services: [''],
        status: 'Active',
      });
    }
  };

  const saveData = async () => {
    const cleaned = {
      ...employee,
      phone: employee.phone.filter((p) => p.trim() !== ''),
      services: employee.services.filter((s) => s.trim() !== ''),
    };
  
    try {
      const response = await fetch(`http://127.0.0.1:8080/api/employee/updateEmployee/${employee.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleaned),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update employee');
      }
  
      const result = await response.json();
      console.log('Employee updated successfully:', result);
      alert('Employee updated successfully!');
    } catch (error) {
      console.error('Error updating employee:', error);
      alert('Failed to update employee');
    }
  };
  

  return (
    <div className="mx-auto max-w-xl p-6">
      <h2 className="mb-6 text-2xl font-semibold text-indigo-700">
        Edit Employee
      </h2>

      <form className="space-y-4">
        {/* ID */}
        <Field label="Employee ID">
          <input
            type="text"
            value={employee.id}
            disabled
            className="w-full rounded-md border border-gray-200 bg-gray-100 px-3 py-2 text-sm text-gray-500 outline-none"
          />
        </Field>

        {/* Name */}
        <Field label="Name" icon={<User />}>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            className="w-full bg-transparent outline-none"
            value={employee.name}
            onChange={handleChange}
          />
        </Field>

        {/* Email */}
        <Field label="Email" icon={<Mail />}>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="w-full bg-transparent outline-none"
            value={employee.email}
            onChange={handleChange}
          />
        </Field>

        {/* Phone Numbers */}
        <Field label="Phone Numbers">
          {employee.phone.map((phone, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 rounded-md border border-gray-200 bg-white px-3 py-2"
            >
              <Phone className="text-gray-500" />
              <input
                type="text"
                value={phone}
                placeholder="Phone"
                className="w-full bg-transparent outline-none"
                onChange={(e) =>
                  handleArrayChange('phone', index, e.target.value)
                }
              />
              {employee.phone.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayField('phone', index)}
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
            onClick={() => addArrayField('phone')}
            className="mt-2 inline-flex items-center text-sm text-indigo-600 hover:underline"
          >
            <Plus size={16} className="mr-1" /> Add Phone Number
          </button>
        </Field>

        {/* Position */}
        <Field label="Position" icon={<Briefcase />}>
          <input
            type="text"
            name="position"
            placeholder="Enter position"
            className="w-full bg-transparent outline-none"
            value={employee.position}
            onChange={handleChange}
          />
        </Field>

        {/* Salary */}
        <Field label="Salary" icon={<DollarSign />}>
          <input
            type="number"
            name="salary"
            placeholder="Enter salary"
            className="w-full bg-transparent outline-none"
            value={employee.salary}
            onChange={handleChange}
          />
        </Field>

        {/* Expertise */}
        <Field label="Expertise (1–5)" icon={<Star />}>
          <input
            type="number"
            name="expertise"
            min="1"
            max="5"
            placeholder="Expertise"
            className="w-full bg-transparent outline-none"
            value={employee.expertise}
            onChange={handleChange}
          />
        </Field>

        {/* Services */}
        <Field label="Services">
          {employee.services.map((service, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 rounded-md border border-gray-200 bg-white px-3 py-2"
            >
              <Wrench className="text-gray-500" />
              <input
                type="text"
                value={service}
                placeholder="Service"
                className="w-full bg-transparent outline-none"
                onChange={(e) =>
                  handleArrayChange('services', index, e.target.value)
                }
              />
              {employee.services.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayField('services', index)}
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
            onClick={() => addArrayField('services')}
            className="mt-2 inline-flex items-center text-sm text-indigo-600 hover:underline"
          >
            <Plus size={16} className="mr-1" /> Add Service
          </button>
        </Field>

        {/* Status */}
        <Field label="Status">
          <select
            name="status"
            value={employee.status}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-200 px-3 py-2 outline-none"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="On Leave">On Leave</option>
          </select>
        </Field>

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

function Field({ label, icon, children }) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-gray-600">{label}</label>
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

export default EditEmployee;
