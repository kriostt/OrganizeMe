const express = require('express');
const router = express.Router();
const { getAllEvents, addEvent } = require('../controllers/calendarController');

// Route to retrieve all the events
router.get('/', getAllEvents);

// Route to add a new event
router.post('/', addEvent);

module.exports = router;
