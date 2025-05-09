import React from 'react';
import {Calendar} from 'lucide-react';
import Card from '../Card/Card';
import AppointmentCard from './Components/AppointmentCard/AppointmentCard';
import ServiceCard from './Components/ServiceCard/ServiceCard';
import RecentSaleCard from './Components/RecentSaleCard/RecentSaleCard';
import WelcomeGreet from '../WelcomeGreet/WelcomeGreet';

function DashBoard () {
  return (
    <div className="ml-2">
      <WelcomeGreet page="Dashboard" user="Jane" />

      {/* Top Cards */}
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title={"Today's Appointments"}
          Icon={<Calendar size={24} />}
          value={10}
          bgColor={'bg-pink-100'}
          text_color={'text-pink-500'}
        />
        <Card
          title={"Today's Appointments"}
          Icon={<Calendar size={24} />}
          value={10}
          bgColor={'bg-pink-100'}
          text_color={'text-pink-500'}
        />
        <Card
          title={"Today's Appointments"}
          Icon={<Calendar size={24} />}
          value={10}
          bgColor={'bg-pink-100'}
          text_color={'text-pink-500'}
        />
        <Card
          title={"Today's Appointments"}
          Icon={<Calendar size={24} />}
          value={10}
          bgColor={'bg-pink-100'}
          text_color={'text-pink-500'}
        />
      </div>
      {/* Appointments */}
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <AppointmentCard />
        <div className="space-y-6">
          <ServiceCard />
          <RecentSaleCard />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
