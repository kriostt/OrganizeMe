const Event = require('../models/Event');
const connectDb = require('../../backend/database/db');

// Function to retrieve all events
const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to add a new event
const addEvent = async (req, res) => {
    const event = new Event({
        title: req.body.title,
        date: req.body.date
    });

    try {
        const newEvent = await event.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getAllEvents, addEvent, connectDb };
