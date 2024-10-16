import React from 'react'

function Footer() {
    return (
        <footer className="bg-blue-600 text-white py-4 mt-10">
          <div className="max-w-7xl mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Sportify. All rights reserved.</p>
          </div>
        </footer>
      );
}

export default Footer