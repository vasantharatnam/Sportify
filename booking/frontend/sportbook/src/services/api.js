// frontend/src/services/api.js
import axios from 'axios';

// Base URL from environment variables or default to localhost
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
console.log(API_BASE_URL,"koko");

// Centers
export const fetchCenters = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/centers`);
  return response.data;
};

// Sports
export const fetchSports = async (centerId) => {
  const response = await axios.get(`${API_BASE_URL}/api/centers/${centerId}/sports`);
  return response.data;
};

// Courts
export const fetchCourts = async (sportId, centerId) => {
  const response = await axios.get(`${API_BASE_URL}/api/sports/${sportId}/centers/${centerId}/courts`);
  return response.data;
};

// Bookings
export const fetchBookings = async (centerId, sportId, date) => {
  const response = await axios.get(`${API_BASE_URL}/api/bookings`, {
    params: { centerId, sportId, date }
  });
  return response.data;
};

export const createBooking = async (bookingData) => {
  const response = await axios.post(`${API_BASE_URL}/api/bookings`, bookingData);
  return response.data;
};
