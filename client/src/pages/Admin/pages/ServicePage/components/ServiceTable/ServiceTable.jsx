import React, { useEffect } from 'react';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';

function formatDuration(minutes) {
  const mins = parseInt(minutes, 10);
  if (isNaN(mins)) return 'Invalid';

  if (mins < 60) {
    return `${mins} min`;
  } else {
    const hours = Math.floor(mins / 60);
    const remainingMins = mins % 60;
    return remainingMins === 0
      ? `${hours} hr`
      : `${hours} hr ${remainingMins} min`;
  }
}
function ServiceTable() {
  const [services, setServices] = React.useState([]);

  const handleDelete = (id) => {
    setServices(prev => prev.filter(service => service.id !== id));
  };  
  const apiUrl = "http://127.0.0.1:8080/api/services/getServices";
  const fetchServices = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.code === 200) {
        setServices(data.content);
        console.log('Fetched services:', data.content);
      } else {
        console.error('API returned an error:', data.message);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };
  useEffect(() => {
    fetchServices();
  }, [apiUrl]);

  // const Services = [
  //   {
  //     id: 1,
  //     name: 'Service 1',
  //     description: 'Description 1',
  //     duration: 30,
  //     price: 50,
  //     currency: 'LKR',
  //   },
  //   {
  //     id: 2,
  //     name: 'Service 2',
  //     description: 'Description 2',
  //     duration: 45,
  //     price: 75,
  //     currency: 'LKR',
  //   },
  //   {
  //     id: 3,
  //     name: 'Service 3',
  //     description: 'Description 3',
  //     duration: 60,
  //     price: 100,
  //     currency: 'LKR',
  //   },
  //   {
  //     id: 4,
  //     name: 'Service 4',
  //     description: 'Description 4',
  //     duration: 90,
  //     price: 150,
  //     currency: 'LKR',
  //   },
  //   {
  //     id: 5,
  //     name: 'Service 5',
  //     description: 'Description 5',
  //     duration: 120,
  //     price: 200,
  //     currency: 'LKR',
  //   },
  //   {
  //     id: 6,
  //     name: 'Service 6',
  //     description: 'Description 6',
  //     duration: 150,
  //     price: 250,
  //     currency: 'LKR',
  //   },
  //   {
  //     id: 7,
  //     name: 'Service 7',
  //     description: 'Description 7',
  //     duration: 180,
  //     price: 300,
  //     currency: 'LKR',
  //   },
  //   {
  //     id: 8,
  //     name: 'Service 8',
  //     description: 'Description 8',
  //     duration: 210,
  //     price: 350,
  //     currency: 'LKR',
  //   },
  //   {
  //     id: 9,
  //     name: 'Service 9',
  //     description: 'Description 9',
  //     duration: 240,
  //     price: 400,
  //     currency: 'LKR',
  //   },
  //   {
  //     id: 10,
  //     name: 'Service 10',
  //     description: 'Description 10',
  //     duration: 270,
  //     price: 450,
  //     currency: 'LKR',
  //   },
  // ];

  return (
    <div className="overflow-x-auto bg-gray-300">
      <table className="w-full min-w-max table-auto shadow-lg">
        <thead className="bg-purple-400 text-white">
          <tr>
            <th className="border-r px-2 py-1">Service ID</th>
            <th className="border-r px-2 py-1">Service Name</th>
            <th className="border-r px-2 py-1">Description</th>
            <th className="border-r px-2 py-1">Duration</th>
            <th className="border-r px-2 py-1">Price</th>
            <th className="px-2 py-1">Edit / Delete</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-pink-300">
          {services.map((service) => (
            <tr
              key={service.id}
              className="border border-transparent font-mono transition-all duration-300 odd:bg-purple-100 even:bg-violet-100 hover:border-purple-500 hover:bg-fuchsia-100"
            >
              <td className="w-10 py-2 text-center">{service.id}</td>
              <td className="w-40 p-2 text-center">{service.name}</td>
              <td className="p-2 text-center">{service.description}</td>
              <td className="p-2 text-center">
                {formatDuration(service.duration)}
              </td>
              <td className="p-2 text-center">
                {service.currency === 'USD' ? '$' : 'Rs.'}
                {service.price}
              </td>
              <td className="flex flex-col items-center gap-y-2 p-2 font-bold">
                <EditButton service={service} />
                <DeleteButton service={service} onDeleteSuccess={ handleDelete} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceTable;
