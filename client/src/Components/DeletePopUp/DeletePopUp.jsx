import { Trash } from 'lucide-react';
import React, { useState } from 'react';
import './DeletePopUp.css';

function DeletePopUp({ showModal, setShowModal, deleteItem, deleteID }) {

  const handleClose = () => setShowModal(false);

  return (
      <div>
          {showModal && (
        <div
          className="fixed top-5 left-0 right-0 bottom-0 bg-transparent bg-opacity-30 flex items-start justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="border-3 border-b-red-500 pop-up flex flex-col items-center bg-white shadow-md rounded-xl py-6 px-5 md:w-[460px] w-[370px] border-gray-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center p-4 bg-red-100 rounded-full">
              <Trash className="text-red-600 w-10 h-10" />
            </div>
            <h2 className="text-gray-900 font-semibold mt-4 text-xl">
              Are you sure?
            </h2>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Do you really want to delete <span className='underline text-rose-600'>{deleteItem}</span>?
            </p>
            <div className="flex items-center justify-center gap-4 mt-5 w-full">
              <button
                type="button"
                onClick={handleClose}
                className="w-full md:w-36 h-10 rounded-md border border-gray-300 bg-white text-gray-600 font-medium text-sm hover:bg-gray-100 active:scale-95 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                className="w-full md:w-36 h-10 rounded-md text-white bg-red-600 font-medium text-sm hover:bg-red-700 active:scale-95 transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeletePopUp;
