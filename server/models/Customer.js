class Customer {
  constructor(id, name, email, contactNumber, address) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.contactNumber = contactNumber;
    this.address = address;
    this.appointments = [];
    this.feedbacks = [];
  }

  bookAppointment(appointment) {
    this.appointments.push(appointment);
  }

  cancelAppointment(appointmentId) {
    this.appointments = this.appointments.filter(appt => appt.id !== appointmentId);
  }

  rescheduleAppointment(appointmentId, newAppointment) {
    this.cancelAppointment(appointmentId);
    this.bookAppointment(newAppointment);
  }

  giveFeedback(appointmentId, message, rating) {
    const feedback = { appointmentId, message, rating };
    this.feedbacks.push(feedback);
  }
}

module.exports = Customer;