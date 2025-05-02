import React from 'react';
import TagButton from '../TagButton/TagButton';
import Button from '../Button/Button';

const services = [
  { id: 1, name: 'Hair Cut' },
  { id: 2, name: 'Hair Color' },
  { id: 3, name: 'Facial' },
  { id: 4, name: 'Manicure' },
  { id: 5, name: 'Pedicure' },
  { id: 6, name: 'Massage' },
  { id: 7, name: 'Waxing' },
  { id: 8, name: 'Makeup' },
  { id: 9, name: 'Eyebrow Threading' },
];

const employees = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Mike Johnson' },
  { id: 4, name: 'Emily Davis' },
];

const styles = {
  input:
    'rounded-xl border border-black px-3 py-1.5 mt-1.5 text-sm outline-none w-full',
  select: 'w-full h-10 border border-black pl-5 rounded-xl my-3',
  option: 'bg-amber-300/15 outline-none',
};

function Appointment() {
  return (
    <div className="flex h-[80vh] w-screen">
      <div className="h-full w-full p-5">
        <div className="box mx-4 my-4 h-full w-auto rounded-4xl bg-[url('../../../assets/women-3.svg')] bg-cover bg-center" />
      </div>
      <div className="h-full w-full p-5">
        <div className="box mx-4 my-4 flex h-full w-auto flex-col items-center justify-center rounded-4xl bg-[#fde48a]">
          <div className="flex flex-col pl-[4vw]">
            <TagButton title="Quick Access" />
            <h2 className="ml-2 py-3 text-4xl font-semibold">
              Book Your <br />
              Appointment Online
            </h2>
            <p className="text-md ml-2 opacity-75">
              Easily schedule your appointment at your convenience with our
              online booking system. Choose your preferred time, service, and
              specialist from the comfort of your home. Our intuitive interface
              ensures a smooth and efficient booking experience for all users.
            </p>
          </div>
          <div className="form mt-4 flex w-75 flex-col items-center">
            <div className="flex w-full justify-center gap-5">
              <input id="date" type="date" className={styles.input} />
              <input id="time" type="time" className={styles.input} />
            </div>
            <select name="service" id="service" className={styles.select}>
              {services.map((service) => {
                return (
                  <option
                    key={service.id}
                    value={service.name}
                    className={styles.option}
                  >
                    {service.name}
                  </option>
                );
              })}
            </select>
            <select name="employee" id="employee" className={styles.select}>
              {employees.map((employee) => {
                return (
                  <option
                    key={employee.id}
                    value={employee.name}
                    className={styles.option}
                  >
                    {employee.name}
                  </option>
                );
              })}
            </select>
            <Button
              title="Confirm Appointment"
              isFullWidth="true"
              bgColor="bg-[#eea239]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
