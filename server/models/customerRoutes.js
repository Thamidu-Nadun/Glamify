const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.post('/register', customerController.registerCustomer);
router.post('/book', customerController.bookAppointment);
router.post('/cancel', customerController.cancelAppointment);
router.post('/feedback', customerController.leaveFeedback);

module.exports = router;
