// backend/models/Booking.js
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  center: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Center',
    required: true
  },
  sport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sport',
    required: true
  },
  court: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Court',
    required: true
  },
  date: {
    type: String, // Format: 'YYYY-MM-DD'
    required: true
  },
  timeSlot: {
    type: String, // e.g., '10:00', '11:00'
    required: true
  },
  customerName: {
    type: String,
    required: true
  }
});

// Prevent double booking by creating a unique index on court, date, and timeSlot
BookingSchema.index({ court: 1, date: 1, timeSlot: 1 }, { unique: true });

module.exports = mongoose.model('Booking', BookingSchema);
