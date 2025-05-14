import React from 'react';
import { Trash } from 'lucide-react';

function DeleteButton() {
  return (
    <div className="flex w-full justify-around border border-red-400 p-1 text-red-400 hover:bg-red-400 hover:text-white">
      <Trash />
      <span>Delete</span>
    </div>
  );
}

export default DeleteButton;
