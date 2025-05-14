import React, { useState } from 'react';
import { Trash } from 'lucide-react';
import DeletePopUp from '../../../../../../Components/DeletePopUp/DeletePopUp';

function DeleteButton({ feedback }) {
  const [showModal, setShowModal] = useState(false);
  const { id, comment } = feedback;
  return (
    <div className="flex w-full justify-around border border-red-400 p-1 text-red-400 hover:bg-red-400 hover:text-white">
      <DeletePopUp
        setShowModal={setShowModal}
        showModal={showModal}
        deleteID={id}
        deleteItem={comment}
      />
      <div
        className="flex w-full justify-around"
        onClick={() => setShowModal(true)}
      >
        <Trash />
        <span>Delete</span>
      </div>
    </div>
  );
}

export default DeleteButton;
