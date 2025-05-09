import { User } from 'lucide-react';
import React from 'react';

function Card({ Icon, title, value, bgColor, text_color }) {
  return (
    <div className={`rounded-lg border-1 border-pink-300 bg-white p-6 shadow`}>
      <div className="flex items-center">
        <div
          className={`rounded-full ${bgColor ? bgColor : 'bg-pink-100'} p-3 ${text_color ? text_color : 'text-pink-500'}`}
        >
          {Icon ? Icon : <User size={24} />}
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500">
            {title ? title : 'Total Users'}
          </p>
          <p className="text-2xl font-semibold">{value ? value : 0}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
