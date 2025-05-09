import { Trash } from 'lucide-react';
import React, { useState } from 'react';
import './DeletePopUp.css';

function DeletePopUp({ showModal, setShowModal, deleteItem, deleteID }) {
  const handleClose = () => setShowModal(false);

  return (
    <div>
      {showModal && (
        <div
          className="bg-opacity-30 fixed top-5 right-0 bottom-0 left-0 z-50 flex items-start justify-center bg-transparent"
          onClick={handleClose}
        >
          <div
            className="pop-up flex w-[370px] flex-col items-center rounded-xl border-3 border-gray-300 border-b-red-500 bg-white px-5 py-6 shadow-md md:w-[460px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center rounded-full bg-red-100 p-4">
              <Trash className="h-10 w-10 text-red-600" />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-gray-900">
              Are you sure?
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Do you really want to delete{' '}
              <span className="text-rose-600 underline">{deleteItem}</span>?
            </p>
            <div className="mt-5 flex w-full items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleClose}
                className="h-10 w-full rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-600 transition hover:bg-gray-100 active:scale-95 md:w-36"
              >
                Cancel
              </button>
              <button
                type="button"
                className="h-10 w-full rounded-md bg-red-600 text-sm font-medium text-white transition hover:bg-red-700 active:scale-95 md:w-36"
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
