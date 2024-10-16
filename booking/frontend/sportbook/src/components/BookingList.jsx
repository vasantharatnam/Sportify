// frontend/src/components/BookingList.jsx
import React from 'react';
// Correct import path for Heroicons v2
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';


const BookingList = ({ bookings }) => {
  if (!bookings.length) {
    return <p className="text-gray-500">No bookings found for the selected criteria.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 shadow-lg rounded-lg">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Court</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Time Slot</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Customer Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {bookings.map(booking => (
            <tr key={booking._id}>
              <td className="px-6 py-4 whitespace-nowrap">{booking.court.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{booking.timeSlot}</td>
              <td className="px-6 py-4 whitespace-nowrap">{booking.customerName}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Confirmed <CheckCircleIcon className="h-4 w-4 ml-1" aria-hidden="true" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
