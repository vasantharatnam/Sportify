// backend/controllers/bookingController.js
const Booking = require('../models/Booking');
const Court = require('../models/Court');

// View Bookings
exports.viewBookings = async (req, res) => {
  try {
    const { centerId, sportId, date } = req.query;

    if (!centerId || !sportId || !date) {
      return res.status(400).json({ message: 'centerId, sportId, and date are required.' });
    }

    const bookings = await Booking.find({
      center: centerId,
      sport: sportId,
      date
    }).populate('court');

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Create Booking
exports.createBooking = async (req, res) => {
  try {
    const { centerId, sportId, courtId, date, timeSlot, customerName } = req.body;

    // Basic validation
    if (!centerId || !sportId || !courtId || !date || !timeSlot || !customerName) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Verify that the court exists and belongs to the specified sport and center
    const court = await Court.findOne({ _id: courtId, sport: sportId, center: centerId });
    if (!court) {
      return res.status(400).json({ message: 'Invalid court for the specified sport and center.' });
    }

    // Create booking
    const booking = new Booking({
      center: centerId,
      sport: sportId,
      court: courtId,
      date,
      timeSlot,
      customerName
    });

    await booking.save();

    res.status(201).json(booking);
  } catch (error) {
    if (error.code === 11000) { // Duplicate key error (double booking)
      return res.status(409).json({ message: 'This time slot is already booked for the selected court.' });
    }
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
