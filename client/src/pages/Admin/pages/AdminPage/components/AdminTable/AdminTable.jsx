import React, { useEffect } from 'react';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';

function AdminTable() {
  const [admin, setAdmin] = React.useState([]);

  const handleDelete = (id) => {
    setAdmin((prev) => prev.filter((service) => service.id !== id));
  };

  const apiUrl = 'http://127.0.0.1:8080/api/admin/getAdmin';

  const fetchAdmins = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.code === 202) {
        setAdmin(data.content);
        console.log('Fetched Admin:', data.content);
      } else {
        console.error('API returned an error:', data.message);
      }
    } catch (error) {
      console.error('Error fetching Admin:', error);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  return (
    <div className="overflow-x-auto bg-gray-300">
      <table className="w-full min-w-max table-auto shadow-lg">
        <thead className="bg-purple-400 text-white">
          <tr>
            <th className="border-r px-2 py-1">Admin ID</th>
            <th className="border-r px-2 py-1">Name</th>
            <th className="border-r px-2 py-1">Email</th>
            <th className="border-r px-2 py-1">Phone</th>
            <th className="border-r px-2 py-1">Role</th>
            <th className="border-r px-2 py-1">Access Level</th>
            <th className="border-r px-2 py-1">Last Login</th>
            <th className="border-r px-2 py-1">Status</th>
            <th className="px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-pink-300">
          {admin.map((admin) => (
            <tr
              key={admin.id}
              className="border border-transparent font-mono transition-all duration-300 odd:bg-purple-100 even:bg-violet-100 hover:border-purple-500 hover:bg-fuchsia-100"
            >
              <td className="w-10 py-2 text-center">{admin.id}</td>
              <td className="w-40 p-2 text-center">{admin.name}</td>
              <td className="p-2 text-center">{admin.email}</td>
              <td className="px-4 py-2 text-center text-sm text-gray-800">
                {admin.phone ? admin.phone : '+94-0000-001'}
              </td>
              <td className="p-2 text-center">
                {admin.role ? admin.role : 'Viewer'}
              </td>
              <td className="p-2 text-center">
                {admin.accessLevel ? admin.accessLevel : '1'}
              </td>
              <td className="p-2 text-center">
                {admin.lastLogin
                  ? admin.lastLogin
                  : new Date().toLocaleDateString().split('/').join('-')}
              </td>
              <td className="p-2 text-center">
                {admin.status ? admin.status : 'Active'}
              </td>
              <td className="flex flex-col items-center gap-y-2 p-2 font-bold">
                <EditButton admin={admin} />
                <DeleteButton
                  admin={admin}
                  onDelete={() => handleDelete(admin.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;
