// frontend/src/components/SportSelector.jsx
import React, { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';

const SportSelector = () => {
  const { sports, selectedSport, setSelectedSport, setCourts } = useContext(BookingContext);

  const handleChange = (e) => {
    setSelectedSport(e.target.value);
    setCourts([]);
  };

  return (
    <div className="mb-4">
      <label htmlFor="sport" className="block text-sm font-medium text-gray-700">Select Sport</label>
      <select
        id="sport"
        value={selectedSport}
        onChange={handleChange}
        className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        disabled={!sports.length}
      >
        <option value="">-- Select Sport --</option>
        {sports.map(sport => (
          <option key={sport._id} value={sport._id}>{sport.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SportSelector;
