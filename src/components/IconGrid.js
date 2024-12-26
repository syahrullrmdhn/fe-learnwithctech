import React from 'react';

const icons = [
  { name: 'JavaScript', className: 'bg-yellow-300' },
  { name: 'CSS', className: 'bg-blue-400' },
  { name: 'HTML', className: 'bg-orange-400' },
  { name: 'Laravel', className: 'bg-red-500' },
];

const IconGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-8">
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`h-20 w-20 flex items-center justify-center rounded-lg ${icon.className}`}
        >
          <span className="text-white font-bold">{icon.name}</span>
        </div>
      ))}
    </div>
  );
};

export default IconGrid;
