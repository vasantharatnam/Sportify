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
const url1 = process.env.URL_1;
const url2 = process.env.URL_2;

// Middleware
// app.use(cors({
//   origin: process.env.URL_1, // Update with your frontend's domain in production
//   methods: 'GET,POST,PUT,DELETE',
//   credentials: true,

// }));

const allowedOrigins = [
  url1, // Local development
  url2, // Production frontend
  // Add any other origins you want to allow
];

// Configure CORS options
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true, // Allow cookies and authorization headers
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
};

// Use CORS middleware
app.use(cors(corsOptions));

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
