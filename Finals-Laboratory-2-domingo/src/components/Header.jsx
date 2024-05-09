import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          
          {/* Login and Register Buttons */}
          <div className="flex justify-end space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Register
            </button>
          </div>
        </div>
    </header>
  )
}
