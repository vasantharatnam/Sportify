// backend/routes/centerRoutes.js
const express = require('express');
const router = express.Router();
const centerController = require('../controllers/centercontroller');

// GET /api/centers
router.get('/', centerController.getAllCenters);

module.exports = router;
