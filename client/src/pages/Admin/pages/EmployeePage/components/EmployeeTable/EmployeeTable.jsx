import React from 'react';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';

function EmployeeTable () {
  const employees = [
    {
      id: 1,
      name: 'John Doe',
      phone: ['0704554840', '0545084545'],
      email: 'jd@info.com',
      position: 'Manager',
      salary: 50000,
      expertise: 5,
      services: ['Service 1', 'Service 2'],
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      phone: ['0701234567'],
      email: 'jane@info.com',
      position: 'Developer',
      salary: 45000,
      expertise: 4,
      services: ['Service 3'],
      status: 'Active',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      phone: ['0547894561', '0204561234'],
      email: 'mjohnson@info.com',
      position: 'Designer',
      salary: 40000,
      expertise: 3,
      services: ['Service 1'],
      status: 'Inactive',
    },
    {
      id: 4,
      name: 'Emily Davis',
      phone: ['0591122334'],
      email: 'emily@info.com',
      position: 'Support',
      salary: 35000,
      expertise: 2,
      services: ['Service 4', 'Service 5'],
      status: 'Active',
    },
    {
      id: 5,
      name: 'Chris Lee',
      phone: ['0579876543'],
      email: 'chris@info.com',
      position: 'Engineer',
      salary: 47000,
      expertise: 4,
      services: ['Service 2', 'Service 3'],
      status: 'On Leave',
    },
    {
      id: 6,
      name: 'Anna Kim',
      phone: ['0506677889', '0245566778'],
      email: 'anna@info.com',
      position: 'HR',
      salary: 39000,
      expertise: 3,
      services: ['Service 5'],
      status: 'Active',
    },
    {
      id: 7,
      name: 'David Brown',
      phone: ['0203344556'],
      email: 'david@info.com',
      position: 'QA Tester',
      salary: 36000,
      expertise: 2,
      services: ['Service 3', 'Service 4'],
      status: 'Inactive',
    },
    {
      id: 8,
      name: 'Sophia Turner',
      phone: ['0269988776'],
      email: 'sophia@info.com',
      position: 'Analyst',
      salary: 41000,
      expertise: 4,
      services: ['Service 1'],
      status: 'Active',
    },
    {
      id: 9,
      name: 'Mark Wilson',
      phone: ['0241237890'],
      email: 'mark@info.com',
      position: 'Consultant',
      salary: 53000,
      expertise: 5,
      services: ['Service 2', 'Service 5'],
      status: 'Active',
    },
    {
      id: 10,
      name: 'Lisa Green',
      phone: ['0553322110'],
      email: 'lisa@info.com',
      position: 'Intern',
      salary: 25000,
      expertise: 1,
      services: ['Service 4'],
      status: 'Active',
    },
  ];

  return (
    <div className="overflow-x-auto bg-gray-300">
      <table className="w-full min-w-max table-auto shadow-lg">
        <thead className="bg-purple-400 text-white">
          <tr>
            <th className="border-r px-2 py-1">Employee ID</th>
            <th className="border-r px-2 py-1">Employee Name</th>
            <th className="border-r px-2 py-1">Email</th>
            <th className="border-r px-2 py-1">Position</th>
            <th className="border-r px-2 py-1">Phone</th>
            <th className="border-r px-2 py-1">Salary</th>
            <th className="border-r px-2 py-1">Expertise</th>
            <th className="border-r px-2 py-1">Services</th>
            <th className="px-2 py-1">Edit / Delete</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-pink-300">
          {employees.map (employee => (
            <tr
              key={employee.id}
              className="border border-transparent font-mono transition-all duration-300 odd:bg-purple-100 even:bg-violet-100 hover:border-purple-500 hover:bg-fuchsia-100"
            >
              <td className="w-10 py-2 text-center">{employee.id}</td>
              <td className="w-40 p-2 text-center">{employee.name}</td>
              <td className="p-2 text-center">{employee.email}</td>
              <td className="p-2 text-center">{employee.position}</td>
              <td className="px-4 py-2 text-sm text-gray-800">
                <select
                  name="client_phone"
                  className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
                >
                  {employee.phone.map ((number, index) => (
                    <option key={index} value={number}>
                      {number}
                    </option>
                  ))}
                </select>
              </td>
              <td className="p-2 text-center">{employee.salary}</td>
              <td className="p-2 text-center">{employee.expertise}</td>
              <td className="px-4 py-2 text-sm text-gray-800">
                <select
                  name="client_phone"
                  className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
                >
                  {employee.services.map ((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </td>

              <td className="flex flex-col items-center gap-y-2 p-2 font-bold">
                <EditButton employee={employee} />
                <DeleteButton employee={employee} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
