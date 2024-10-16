// backend/routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingcontroller');

// GET /api/bookings?centerId=...&sportId=...&date=...
router.get('/', bookingController.viewBookings);

// POST /api/bookings
router.post('/', bookingController.createBooking);

module.exports = router;
