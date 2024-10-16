// frontend/src/components/BookingForm.jsx
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { createBooking } from '../services/api';
import { toast } from 'react-toastify';

const BookingForm = ({ refreshBookings }) => {
  const { selectedCenter, selectedSport, courts, selectedDate } = useContext(BookingContext);
  const [courtId, setCourtId] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [customerName, setCustomerName] = useState('');

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 6; hour <= 22; hour++) { // 6 AM to 10 PM
      slots.push(`${hour}:00`);
    }
    return slots;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!courtId || !timeSlot || !customerName) {
      toast.error('All fields are required.');
      return;
    }

    try {
      await createBooking({
        centerId: selectedCenter,
        sportId: selectedSport,
        courtId,
        date: selectedDate,
        timeSlot,
        customerName
      });
      toast.success('Booking created successfully.');
      setCourtId('');
      setTimeSlot('');
      setCustomerName('');
      refreshBookings();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error creating booking.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label htmlFor="court" className="block text-sm font-medium text-gray-700">Select Court</label>
        <select
          id="court"
          value={courtId}
          onChange={(e) => setCourtId(e.target.value)}
          className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          disabled={!courts.length}
        >
          <option value="">-- Select Court --</option>
          {courts.map(court => (
            <option key={court._id} value={court._id}>{court.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700">Time Slot</label>
        <select
          id="timeSlot"
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">-- Select Time Slot --</option>
          {generateTimeSlots().map(slot => (
            <option key={slot} value={slot}>{slot}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">Customer Name</label>
        <input
          type="text"
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter customer name"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Create Booking
      </button>
    </form>
  );
};

export default BookingForm;
