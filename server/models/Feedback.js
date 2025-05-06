class Feedback {
  constructor(customerId, appointmentId, message, rating) {
    this.customerId = customerId;
    this.appointmentId = appointmentId;
    this.message = message;
    this.rating = rating;
  }
}

module.exports = Feedback;