import React from 'react';

function TagButton({ title = 'Tag Button' }) {
  return (
    <div>
      <button className="m-2 rounded-3xl border-1 border-black px-4 py-1 text-black uppercase outline-transparent">
        {title}
      </button>
    </div>
  );
}

export default TagButton;
