// backend/routes/courtRoutes.js
const express = require('express');
const router = express.Router();
const courtController = require('../controllers/courtcontroller');

// GET /api/sports/:sportId/centers/:centerId/courts
router.get('/sports/:sportId/centers/:centerId/courts', courtController.getCourtsBySport);

module.exports = router;
