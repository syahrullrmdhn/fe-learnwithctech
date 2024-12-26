import React from 'react';
import { FaPlay } from 'react-icons/fa';

const SeriesCard = ({ title, description, tags, duration, episodes }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg p-4 shadow-md mx-4 md:mx-0 max-w-md md:max-w-none">
      <div className="flex items-center space-x-2 mb-4">
        <div className="bg-gray-700 p-2 rounded-full">
          <FaPlay className="text-white" />
        </div>
        <span className="text-sm">{duration} menit</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-600 text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="text-gray-400 text-sm">{episodes} eps</span>
    </div>
  );
};

export default SeriesCard;
