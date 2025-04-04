import React from 'react'

function Navbar() {
  return (
    <div className="flex w-screen items-center">
        <h2 className="bg-red-800 font-semibold font-monospace text-2xl">Glamify</h2>
        <ol className='bg-green-700 flex'>
            <li>Home</li>
            <li>About Us</li>
            <li>Book An Appointment</li>
            <li>Testimonials</li>
        </ol>
        <div className="action-btn flex justify-content-center gap-2">
            <button className="border-2 border-amber-500 rounded-lg px-3 py-2">Log in</button>
            <button className="border-2 border-gray-500 rounded-lg px-3 py-2">Sign up</button>
        </div>
    </div>
  )
}

export default Navbar