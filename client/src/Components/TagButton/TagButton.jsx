import React from 'react'

function TagButton({ title="Tag Button" }) {
  return (
    <div>
      <button className='px-4 py-1 m-2 outline-transparent border-1 rounded-3xl border-black text-black uppercase'>{title}</button>
    </div>
  )
}

export default TagButton