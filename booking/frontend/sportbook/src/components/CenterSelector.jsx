// frontend/src/components/CenterSelector.jsx
import React, { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';

const CenterSelector = () => {
  const { centers, selectedCenter, setSelectedCenter, setSelectedSport, setCourts } = useContext(BookingContext);

  const handleChange = (e) => {
    setSelectedCenter(e.target.value);
    setSelectedSport('');
    setCourts([]);
  };

  return (
    <div className="mb-4">
      <label htmlFor="center" className="block text-sm font-medium text-gray-700">Select Center</label>
      <select
        id="center"
        value={selectedCenter}
        onChange={handleChange}
        className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">-- Select Center --</option>
        {centers.map(center => (
          <option key={center._id} value={center._id}>{center.name} - {center.location}</option>
        ))}
      </select>
    </div>
  );
};

export default CenterSelector;
