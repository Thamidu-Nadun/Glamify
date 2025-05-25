import React from 'react';

function TagButton({ title = 'Tag Button' }) {
  return (
    <div>
      <button className="border-1 m-2 rounded-3xl border-black px-4 py-1 uppercase text-black outline-transparent">
        {title}
      </button>
    </div>
  );
}

export default TagButton;
