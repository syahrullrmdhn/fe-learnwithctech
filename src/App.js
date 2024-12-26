import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SeriesList from './components/SeriesList';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <main>
        <HeroSection />
        <SeriesList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
