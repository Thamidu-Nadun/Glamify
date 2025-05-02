import React from 'react';
import TagButton from '../TagButton/TagButton';
import Button from '../Button/Button';

const services = [
  {id: 1, name: 'Hair Cut'},
  {id: 2, name: 'Hair Color'},
  {id: 3, name: 'Facial'},
  {id: 4, name: 'Manicure'},
  {id: 5, name: 'Pedicure'},
  {id: 6, name: 'Massage'},
  {id: 7, name: 'Waxing'},
  {id: 8, name: 'Makeup'},
  {id: 9, name: 'Eyebrow Threading'},
];

const employees = [
  {id: 1, name: 'John Doe'},
  {id: 2, name: 'Jane Smith'},
  {id: 3, name: 'Mike Johnson'},
  {id: 4, name: 'Emily Davis'},
];

const styles = {
  input: 'rounded-xl border border-black px-3 py-1.5 mt-1.5 text-sm outline-none w-full',
  select: 'w-full h-10 border border-black pl-5 rounded-xl my-3',
  option: 'bg-amber-300/15 outline-none',
};

function Appointment () {
  return (
    <div className="w-screen h-[80vh] flex">
      <div className="w-full  h-full p-5">
        <div className="box h-full w-auto bg-[url('../../../assets/women-3.svg')] bg-cover bg-center mx-4 my-4 rounded-4xl" />
      </div>
      <div className="w-full h-full p-5">
        <div className="box h-full w-auto bg-[#fde48a] mx-4 my-4 rounded-4xl flex flex-col items-center justify-center">
          <div className="flex flex-col pl-[4vw]">
            <TagButton title="Quick Access" />
            <h2 className='font-semibold text-4xl py-3 ml-2'>Book Your <br />Appointment Online</h2>
            <p className='ml-2 text-md opacity-75'>
              Easily schedule your appointment at your convenience with our online booking system. Choose your preferred time, service, and specialist from the comfort of your home. Our intuitive interface ensures a smooth and efficient booking experience for all users.
            </p>
          </div>
          <div className="mt-4 form flex flex-col items-center w-75">
            <div className="flex gap-5 w-full justify-center">
              <input id="date" type="date" className={styles.input} />
              <input id="time" type="time" className={styles.input} />
            </div>
            <select name="service" id="service" className={styles.select}>
              {services.map (service => {
                return (
                  <option key={service.id} value={service.name} className={styles.option}>
                    {service.name}
                  </option>
                );
              })}
            </select>
            <select name="employee" id="employee" className={styles.select}>
              {employees.map (employee => {
                return (
                  <option key={employee.id} value={employee.name} className={styles.option}>
                    {employee.name}
                  </option>
                );
              })}
            </select>
            <Button title="Confirm Appointment" isFullWidth='true' bgColor='bg-[#eea239]' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
