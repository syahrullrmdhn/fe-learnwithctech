import React from 'react';
import SeriesCard from './SeriesCard';

const seriesData = [
  {
    title: 'Belajar Tailwind CSS 4',
    description:
      'Dalam seri ini kita akan belajar apa yang baru di Tailwind CSS 4 dan bagaimana implementasinya.',
    tags: ['Tailwind CSS'],
    duration: 20,
    episodes: 1,
  },
  {
    title: 'Belajar Layout di Inertia.js',
    description:
      'Pelajari cara membuat dashboard dan front page dengan Inertia.js.',
    tags: ['Laravel', 'Inertia'],
    duration: 64,
    episodes: 5,
  },
  // Tambahkan data lainnya
];

const SeriesList = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl text-white font-bold mb-6 text-center">Series Terbaru</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {seriesData.map((series, index) => (
          <SeriesCard key={index} {...series} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <button className="px-6 py-3 bg-blue-500 text-white text-lg font-bold rounded-lg shadow-md">
          Tampilkan lebih banyak
        </button>
      </div>
    </div>
  );
};

export default SeriesList;
