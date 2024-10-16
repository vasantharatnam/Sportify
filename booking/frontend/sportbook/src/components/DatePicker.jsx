// frontend/src/components/DatePicker.jsx
import React, { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import { CalendarIcon } from "@heroicons/react/24/outline"; // Correct path for version 2.x

const DatePicker = () => {
  const { selectedDate, setSelectedDate } = useContext(BookingContext);

  return (
    <div className="mb-4">
      <label htmlFor="date" className="block text-sm font-medium text-gray-700">Select Date</label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="block w-full pl-10 pr-12 border border-gray-300 rounded-md py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
