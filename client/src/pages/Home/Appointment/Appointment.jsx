import React, { useEffect, useState } from 'react';
import TagButton from '../../../Components/TagButton/TagButton';
import Button from '../../../Components/Button/Button';

const styles = {
  input: 'rounded-xl border border-black px-3 py-1.5 mt-1.5 text-sm outline-none w-full',
  select: 'w-full h-10 border border-black pl-5 rounded-xl my-3',
  option: 'bg-amber-300/15 outline-none',
};

function Appointment() {
  const cutId = 2;

  const [services, setServices] = useState([]);
  const [employees, setEmployees] = useState([]);

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    fetch('http://127.0.0.1:8080/api/employee/getEmployees')
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200 && Array.isArray(data.content)) {
          setEmployees(data.content);
        }
      });

    fetch('http://127.0.0.1:8080/api/services/getServices')
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200 && Array.isArray(data.content)) {
          setServices(data.content);
        }
      });
  }, []);

  useEffect(() => {
    const selectedService = services.find((s) => s.id === parseInt(serviceId));
    if (selectedService) {
      setDuration(selectedService.duration);
    } else {
      setDuration(0);
    }
  }, [serviceId, services]);

  const handleSubmit = async () => {
    if (!date || !time || !serviceId || !employeeId) {
      alert('Please fill in all fields');
      return;
    }

    const requestData = {
      id: 0,
      cus_id: cutId,
      service_id: parseInt(serviceId),
      date: date,
      status: true,
      payment_status: false,
      duration: duration,
    };

    try {
      const response = await fetch('http://127.0.0.1:8080/api/appointment/saveAppointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();
      if (result.code === 200) {
        alert('Appointment saved successfully!');
        setDate('');
        setTime('');
        setServiceId('');
        setEmployeeId('');
        setDuration(0);
      } else {
        alert('Failed to save appointment.');
      }
    } catch (error) {
      console.error('Error saving appointment:', error);
      alert('An error occurred while saving appointment.');
    }
  };

  return (
    <div className="flex h-[80vh] w-screen my-5">
      <div className="h-full w-full p-5 hidden lg:block">
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
              <input
                id="date"
                type="date"
                className={styles.input}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                id="time"
                type="time"
                className={styles.input}
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <select
              name="service"
              id="service"
              className={styles.select}
              value={serviceId}
              onChange={(e) => setServiceId(e.target.value)}
            >
              <option value="">Select Service</option>
              {services.map((service) => (
                <option
                  key={service.id}
                  value={service.id}
                  className={styles.option}
                >
                  {service.name}
                </option>
              ))}
            </select>
            <select
              name="employee"
              id="employee"
              className={styles.select}
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
            >
              <option value="">Select Employee</option>
              {employees.map((employee) => (
                <option
                  key={employee.id}
                  value={employee.id}
                  className={styles.option}
                >
                  {employee.name}
                </option>
              ))}
            </select>
            <div onClick={handleSubmit} className="w-full">
              <Button
                title="Confirm Appointment"
                isFullWidth="true"
                bgColor="bg-[#eea239]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
