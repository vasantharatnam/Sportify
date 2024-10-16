// backend/controllers/courtController.js
const Court = require('../models/Court');

// Get all courts for a sport in a center
exports.getCourtsBySport = async (req, res) => {
  try {
    const { sportId, centerId } = req.params;
    const courts = await Court.find({ sport: sportId, center: centerId });
    res.json(courts);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
