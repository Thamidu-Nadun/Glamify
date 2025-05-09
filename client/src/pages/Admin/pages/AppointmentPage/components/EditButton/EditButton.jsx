import React from 'react';
import { SquarePen } from 'lucide-react';
import { Link } from 'react-router-dom';

function EditButton({ appointment }) {
  return (
    <Link
      to="edit"
      state={{ appointment }}
      className="flex justify-around w-full hover:bg-green-400 p-1 text-green-500 border hover:text-white border-green-500"
    >
      <SquarePen />
      <span>Edit</span>
    </Link>
  );
}

export default EditButton;
