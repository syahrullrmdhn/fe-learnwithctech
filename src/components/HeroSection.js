import React from 'react';
import Button from './Button';

const HeroSection = () => {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-5xl font-extrabold mb-4 text-black">
       Screencast Efektif untuk <span className="text-blue-500">Para IT Enthusiast</span>
      </h1>
      <p className="text-gray-600 mb-8">
      Tingkatkan karir Anda di bidang IT dengan mempelajari materi-materi terkini. Jelajahi topik seperti keamanan siber, pengembangan web full-stack (Laravel, React, Next.js, Tailwind CSS), administrasi sistem, cloud computing, dan berbagai teknologi emerging lainnya.
      </p>
      <div className="space-x-4">
        <Button text="Temukan Seri" color="blue" />
        <Button text="Baca Artikel" color="gray" />
      </div>
    </section>
  );
};

export default HeroSection;
