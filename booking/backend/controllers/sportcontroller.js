// backend/controllers/sportController.js
const Sport = require('../models/Sport');

// Get all sports for a center
exports.getSportsByCenter = async (req, res) => {
  try {
    const { centerId } = req.params;
    const sports = await Sport.find({ center: centerId });
    res.json(sports);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
