import React from 'react';
import { SquarePen } from 'lucide-react';
import { Link } from 'react-router-dom';

function EditButton({ appointment }) {
  return (
    <Link
      to="edit"
      state={{ appointment }}
      className="flex w-full justify-around border border-green-500 p-1 text-green-500 hover:bg-green-400 hover:text-white"
    >
      <SquarePen />
      <span>Edit</span>
    </Link>
  );
}

export default EditButton;
