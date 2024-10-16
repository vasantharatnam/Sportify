// backend/seed/seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('../config/db');
const Center = require('../models/Center');
const Sport = require('../models/Sport');
const Court = require('../models/Court');

dotenv.config();
connectDB();

const seedData = async () => {
  try {
    // Clear existing data
    await Center.deleteMany();
    await Sport.deleteMany();
    await Court.deleteMany();

    // Create Centers
    const center1 = await Center.create({ name: 'Indiranagar', location: 'Bangalore' });
    const center2 = await Center.create({ name: 'Koramangala', location: 'Bangalore' });

    // Create Sports
    const badminton = await Sport.create({ name: 'Badminton', center: center1._id });
    const squash = await Sport.create({ name: 'Squash', center: center1._id });
    const tennis = await Sport.create({ name: 'Tennis', center: center2._id });

    // Create Courts for Badminton
    await Court.create({ name: 'Badminton Court 1', sport: badminton._id, center: center1._id });
    await Court.create({ name: 'Badminton Court 2', sport: badminton._id, center: center1._id });

    // Create Courts for Squash
    await Court.create({ name: 'Squash Court 1', sport: squash._id, center: center1._id });
    await Court.create({ name: 'Squash Court 2', sport: squash._id, center: center1._id });
    await Court.create({ name: 'Squash Court 3', sport: squash._id, center: center1._id });

    // Create Courts for Tennis
    await Court.create({ name: 'Tennis Court 1', sport: tennis._id, center: center2._id });
    await Court.create({ name: 'Tennis Court 2', sport: tennis._id, center: center2._id });

    console.log('Seeding completed.');
    process.exit();
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};

seedData();
