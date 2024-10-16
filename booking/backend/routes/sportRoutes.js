// backend/routes/sportRoutes.js
const express = require('express');
const router = express.Router();
const sportController = require('../controllers/sportcontroller');

// GET /api/centers/:centerId/sports
router.get('/centers/:centerId/sports', sportController.getSportsByCenter);

module.exports = router;
