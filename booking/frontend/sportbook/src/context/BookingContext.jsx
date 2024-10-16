// frontend/src/context/BookingContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { fetchCenters, fetchSports, fetchCourts } from '../services/api';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [centers, setCenters] = useState([]);
  const [sports, setSports] = useState([]);
  const [courts, setCourts] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState('');
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // YYYY-MM-DD

  // Fetch centers on mount
  useEffect(() => {
    const getCenters = async () => {
      try {
        const data = await fetchCenters();
        setCenters(data);
      } catch (error) {
        console.error('Error fetching centers:', error);
      }
    };
    getCenters();
  }, []);

  // Fetch sports when center changes
  useEffect(() => {
    if (selectedCenter) {
      const getSports = async () => {
        try {
          const data = await fetchSports(selectedCenter);
          setSports(data);
        } catch (error) {
          console.error('Error fetching sports:', error);
        }
      };
      getSports();
    } else {
      setSports([]);
      setSelectedSport('');
    }
  }, [selectedCenter]);

  // Fetch courts when sport changes
  useEffect(() => {
    if (selectedSport && selectedCenter) {
      const getCourts = async () => {
        try {
          const data = await fetchCourts(selectedSport, selectedCenter);
          setCourts(data);
        } catch (error) {
          console.error('Error fetching courts:', error);
        }
      };
      getCourts();
    } else {
      setCourts([]);
    }
  }, [selectedSport, selectedCenter]);

  return (
    <BookingContext.Provider
      value={{
        centers,
        sports,
        courts,
        selectedCenter,
        setSelectedCenter,
        selectedSport,
        setSelectedSport,
        selectedDate,
        setSelectedDate,
        setCourts, // ✅ **Added setCourts to the context value**
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
