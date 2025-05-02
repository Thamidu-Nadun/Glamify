import React from 'react';

function Button(props) {
  const { title, onClick, type, disabled, isFullWidth, bgColor, color } = props;
  return (
    <>
      <button
        className={`mx-2 my-3 rounded-2xl px-4 py-3 font-mono font-bold ${isFullWidth ? 'w-full' : 'w-auto'} ${bgColor ? bgColor : 'bg-green-300'} ${color ? color : 'text-black'}`}
      >
        {title}
      </button>
    </>
  );
}

export default Button;
