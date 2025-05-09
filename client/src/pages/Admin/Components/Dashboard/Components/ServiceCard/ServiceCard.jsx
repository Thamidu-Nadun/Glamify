import React from 'react';

function ServiceCard() {
  const topServices = [
    { name: 'Hair Styling', value: 35 },
    { name: 'Facial Treatment', value: 25 },
    { name: 'Manicure', value: 20 },
    { name: 'Hair Coloring', value: 15 },
    { name: 'Massage', value: 5 },
  ];
  return (
    <div className="rounded-lg border border-pink-300 bg-white shadow">
      <div className="border-b border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800">Top Services</h2>
      </div>
      <div className="p-6">
        {topServices.map((service, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <div className="mb-1 flex justify-between">
              <span className="text-sm font-medium text-gray-700">
                {service.name}
              </span>
              <span className="text-sm text-gray-500">{service.value}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                style={{ width: `${service.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCard;
