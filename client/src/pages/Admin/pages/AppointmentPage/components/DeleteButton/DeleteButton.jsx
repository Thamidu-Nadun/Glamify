import React from 'react';
import { Trash } from 'lucide-react';


function DeleteButton () {
  return (
    <div className="flex justify-around w-full hover:bg-red-400 border border-red-400 hover:text-white text-red-400 p-1">
      <Trash /><span>Delete</span>
    </div>
  );
}

export default DeleteButton;
