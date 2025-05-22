import React, { useEffect, useState } from 'react';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';

function EmployeeTable() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8080/api/employee/getEmployees')
      .then(res => res.json())
      .then(data => {
        if (data.code == 200 && data.content) {
          setEmployees(data.content);
      }
      })
      .catch((err) => {
        console.error('Failed to fetch clients:', err);
      });
  }, [])

  return (
    <div className="overflow-x-auto bg-gray-300">
      <table className="w-full min-w-max table-auto shadow-lg">
        <thead className="bg-purple-400 text-white">
          <tr>
            <th className="border-r px-2 py-1">Employee ID</th>
            <th className="border-r px-2 py-1">Employee Name</th>
            <th className="border-r px-2 py-1">Email</th>
            <th className="border-r px-2 py-1">Expertise</th>
            <th className="px-2 py-1">Edit / Delete</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-pink-300">
          {employees.map((employee) => (
            <tr
              key={employee.id}
              className="border border-transparent font-mono transition-all duration-300 odd:bg-purple-100 even:bg-violet-100 hover:border-purple-500 hover:bg-fuchsia-100"
            >
              <td className="w-10 py-2 text-center">{employee.id}</td>
              <td className="w-40 p-2 text-center">{employee.name}</td>
              <td className="p-2 text-center">{employee.email}</td>
              <td className="p-2 text-center">{employee.expertise}</td>

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
