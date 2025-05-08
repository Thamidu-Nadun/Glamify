import React from 'react';

function RecentSaleCard () {
  const recentSales = [
    {id: 1, service: 'Hair Styling', amount: 85, date: '2025-05-04'},
    {id: 2, service: 'Manicure & Pedicure', amount: 120, date: '2025-05-04'},
    {id: 3, service: 'Facial Treatment', amount: 95, date: '2025-05-03'},
    {id: 4, service: 'Hair Coloring', amount: 150, date: '2025-05-03'},
  ];
  return (
    <div className="rounded-lg bg-white shadow-lg border border-pink-400">
      <div className="border-b border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Sales
        </h2>
      </div>
      <div className="p-6">
        <ul className="divide-y divide-gray-200">
          {recentSales.map (sale => (
            <li key={sale.id} className="flex justify-between py-3">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {sale.service}
                </p>
                <p className="text-xs text-gray-500">{sale.date}</p>
              </div>
              <p className="text-sm font-semibold text-green-600">
                ${sale.amount}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-gray-200 p-4 text-center">
        <button className="text-sm font-medium text-purple-600 hover:text-purple-800">
          View All Sales
        </button>
      </div>
    </div>
  );
}

export default RecentSaleCard;
