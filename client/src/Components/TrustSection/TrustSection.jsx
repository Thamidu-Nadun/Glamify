import React from 'react';
import { FaMeta } from 'react-icons/fa6';
import { SiAdobe } from 'react-icons/si';
import { FaMicrosoft, FaGoogle, FaAws } from 'react-icons/fa';
import { TbBrandDisney } from 'react-icons/tb';

function TrustSection() {
  return (
    <div className="absolute bottom-0 flex h-15 w-screen items-center overflow-x-hidden bg-white py-10 pl-10 font-mono">
      <h2 className="text-lg">Trusted By</h2>
      <div className="item-list ml-40 flex gap-10">
        <Item name="Adobe" icon={SiAdobe} />
        <Item name="Microsoft" Icon={FaMicrosoft} />
        <Item name="Meta" icon={FaMeta} />
        <Item name="Google" icon={FaGoogle} />
        <Item name="Disney" icon={TbBrandDisney} />
        <Item name="AWS" icon={FaAws} />
      </div>
    </div>
  );
}

export default TrustSection;

const Item = ({ name = 'Item', Icon = FaMeta }) => {
  return (
    <div className="my-5 flex items-center rounded-3xl border-1 border-amber-400 px-2 py-4">
      <Icon className="mx-2 h-5 w-5" />
      <h2 className="mx-2 text-lg font-semibold text-black">{name}</h2>
    </div>
  );
};
