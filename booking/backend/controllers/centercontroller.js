// backend/controllers/centerController.js
const Center = require('../models/Center');

// Get all centers
exports.getAllCenters = async (req, res) => {
  try {
    const centers = await Center.find();
    res.json(centers);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
