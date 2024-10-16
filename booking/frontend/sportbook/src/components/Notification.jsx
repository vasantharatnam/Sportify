// frontend/src/App.jsx
import React from 'react';
import { BookingProvider } from './context/BookingContext';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BookingProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Dashboard />
        </main>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </div>
    </BookingProvider>
  );
}

export default App;
