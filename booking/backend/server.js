// backend/app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const centerRoutes = require('./routes/centerRoutes');
const sportRoutes = require('./routes/sportRoutes');
const courtRoutes = require('./routes/courtRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const errorHandler = require('./middleware/errorhandler');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Update with your frontend's domain in production
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/centers', centerRoutes);
app.use('/api', sportRoutes); // Routes like /api/centers/:centerId/sports
app.use('/api', courtRoutes); // Routes like /api/sports/:sportId/centers/:centerId/courts
app.use('/api/bookings', bookingRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
