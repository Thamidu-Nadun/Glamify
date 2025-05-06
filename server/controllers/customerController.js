const Customer = require('../models/Customer');
const Appointment = require('../models/Appointment');

let customers = [];

exports.registerCustomer = (req, res) => {
  const { name, email, contactNumber, address } = req.body;
  const newCustomer = new Customer(Date.now(), name, email, contactNumber, address);
  customers.push(newCustomer);
  res.status(201).json(newCustomer);
};

exports.bookAppointment = (req, res) => {
  const { customerId, serviceId, dateTime, stylistName } = req.body;
  const customer = customers.find(c => c.id == customerId);
  if (!customer) return res.status(404).send('Customer not found');

  const appointment = new Appointment(Date.now(), serviceId, dateTime, stylistName);
  customer.bookAppointment(appointment);
  res.status(200).json(appointment);
};

exports.cancelAppointment = (req, res) => {
  const { customerId, appointmentId } = req.body;
  const customer = customers.find(c => c.id == customerId);
  if (!customer) return res.status(404).send('Customer not found');

  customer.cancelAppointment(appointmentId);
  res.status(200).send('Appointment canceled');
};

exports.leaveFeedback = (req, res) => {
  const { customerId, appointmentId, message, rating } = req.body;
  const customer = customers.find(c => c.id == customerId);
  if (!customer) return res.status(404).send('Customer not found');

  customer.giveFeedback(appointmentId, message, rating);
  res.status(200).send('Feedback added');
};