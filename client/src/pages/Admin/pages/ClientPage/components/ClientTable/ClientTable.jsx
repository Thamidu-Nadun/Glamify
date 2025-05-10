import React from 'react';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';

function ClientTable() {
  const clients = [
    {
      id: 1,
      name: 'John Smith',
      email: 'js@info.com',
      phone: ['1234567890', '0987654321'],
    },
    {
      id: 2,
      name: 'Jennifer Lee',
      email: 'jenny@info.com',
      phone: ['1234567890', '0987654321'],
    },
    {
      id: 3,
      name: 'Alex Jean',
      email: 'alex@info.com',
      phone: ['1234567890', '0987654321'],
    },
  ];

  return (
    <div className="w-full overflow-x-auto bg-gray-100 p-4">
      <table className="min-w-full divide-y divide-gray-300 overflow-hidden rounded-md bg-white shadow-md">
        <thead className="bg-purple-500 text-white">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium">ID</th>
            <th className="px-4 py-2 text-left text-sm font-medium">Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium">Email</th>
            <th className="px-4 py-2 text-left text-sm font-medium">Phone</th>
            <th className="px-4 py-2 text-left text-sm font-medium">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {clients.map((client) => (
            <tr
              key={client.id}
              className="transition-colors hover:bg-fuchsia-100"
            >
              <td className="px-4 py-2 text-sm text-gray-800">{client.id}</td>
              <td className="px-4 py-2 text-sm text-gray-800">{client.name}</td>
              <td className="px-4 py-2 text-sm text-gray-800">
                {client.email}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800">
                <select
                  name="client_phone"
                  className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
                >
                  {client.phone.map((number) => (
                    <option key={number} value={number}>
                      {number}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-4 py-2 text-sm text-gray-800">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-start">
                  <EditButton client={client} />
                  <DeleteButton client={client} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientTable;
