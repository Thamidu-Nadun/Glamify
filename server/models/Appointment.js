class Appointment {
  constructor(id, serviceId, dateTime, stylistName) {
    this.id = id;
    this.serviceId = serviceId;
    this.dateTime = dateTime;
    this.stylistName = stylistName;
  }
}

module.exports = Appointment;