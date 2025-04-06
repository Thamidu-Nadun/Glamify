import React from 'react'
import { FaA, FaMeta, FaW } from "react-icons/fa6";
import { SiAdobe } from "react-icons/si";
import { FaMicrosoft, FaGoogle, FaAws } from "react-icons/fa";
import { TbBrandDisney } from "react-icons/tb";

function TrustSection() {
  return (
      <div className='overflow-x-hidden py-10 bg-white h-15 absolute bottom-0 flex pl-10 items-center w-screen font-mono'>
          <h2 className='text-lg'>Trusted By</h2>
        <div className="item-list ml-40 flex gap-10">
            <Item name="Adobe" icon={SiAdobe} />
            <Item name="Microsoft" Icon={FaMicrosoft} />
            <Item name="Meta" icon={FaMeta} />
            <Item name="Google" icon={FaGoogle} />
            <Item name="Disney" icon={TbBrandDisney} />
            <Item name="AWS" icon={FaAws} />
        </div>
    </div>
  )
}

export default TrustSection

const Item = ({ name = 'Item', Icon = FaMeta }) => { 
    return (
        <div className='my-5 flex items-center py-4 px-2 rounded-3xl border-1 border-amber-400'>
            <Icon className="h-5 w-5 mx-2" />
            <h2 className='text-lg text-black font-semibold mx-2'>{ name }</h2>
        </div>
    )
}