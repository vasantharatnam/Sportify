// frontend/src/components/CourtSelector.jsx
import React, { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';

const CourtSelector = ({ selectedCourt, setSelectedCourt }) => {
  const { courts } = useContext(BookingContext);

  const handleChange = (e) => {
    setSelectedCourt(e.target.value);
  };

  return (
    <div className="mb-4">
      <label htmlFor="court" className="block text-sm font-medium text-gray-700">Select Court</label>
      <select
        id="court"
        value={selectedCourt}
        onChange={handleChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        disabled={!courts.length}
      >
        <option value="">-- Select Court --</option>
        {courts.map(court => (
          <option key={court._id} value={court._id}>{court.name}</option>
        ))}
      </select>
    </div>
  );
};

export default CourtSelector;
