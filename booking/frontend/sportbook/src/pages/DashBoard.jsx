// frontend/src/pages/Dashboard.jsx
import React, { useContext, useState, useEffect } from 'react';
import CenterSelector from '../components/CenterSelector';
import SportSelector from '../components/SportSelector';
import DatePicker from '../components/DatePicker';
import BookingList from '../components/BookingList';
import BookingForm from '../components/BookingForm';
import { BookingContext } from '../context/BookingContext';
import { fetchBookings } from '../services/api';

const Dashboard = () => {
  const {
    selectedCenter,
    selectedSport,
    selectedDate,
    setSelectedDate
  } = useContext(BookingContext);
  const [bookings, setBookings] = useState([]);

  const getBookings = async () => {
    if (selectedCenter && selectedSport && selectedDate) {
      try {
        const data = await fetchBookings(selectedCenter, selectedSport, selectedDate);
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    } else {
      setBookings([]);
    }
  };

  useEffect(() => {
    getBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCenter, selectedSport, selectedDate]);

  const refreshBookings = () => {
    getBookings();
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Welcome to Sportify Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <CenterSelector />
        <SportSelector />
        <DatePicker />
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">Bookings for {selectedDate}</h2>
        <BookingList bookings={bookings} />
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">Create a New Booking</h2>
        <BookingForm refreshBookings={refreshBookings} />
      </div>
    </div>
  );
};

export default Dashboard;
