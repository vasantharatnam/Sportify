// frontend/src/App.jsx
import React from 'react';
import { BookingProvider } from './context/BookingContext';
import Dashboard from './pages/DashBoard';

function App() {
  return (
    <BookingProvider>
      <Dashboard />
    </BookingProvider>
  );
}

export default App;
