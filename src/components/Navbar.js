import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 py-4">
      <div className="container mx-auto flex justify-between">
        <a href="#" className="text-gray-700 font-semibold">Home</a>
        <a href="#" className="text-gray-700 font-semibold">Series</a>
        <a href="#" className="text-gray-700 font-semibold">Filament</a>
      </div>
    </nav>
  );
};

export default Navbar;
