import React, { useEffect, useState } from 'react';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';

function ClientTable() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8080/api/customers/getCustomer')
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200 && data.content) {
          setClients(data.content);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch clients:', err);
      });
  }, []);

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
                {client.phone}
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
