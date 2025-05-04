import React from 'react'
import NavBar from '../../layout/NavBar/NavBar'
import Footer from '../../layout/Footer/Footer'
import Sidebar from './components/SideBar/Sidebar'

function Admin() {
  return (
      <>
          <div className="bar w-screen h-fit py-3 bg-[#fe8158] text-center">
              <span className="text-lg text-white font-bold">Glamify</span>
          </div>
          <Sidebar />
          <div className="board w-screen h-screen bg-black"></div>
          <Footer />
    </>
  )
}

export default Admin