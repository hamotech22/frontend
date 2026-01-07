import React from 'react';
import Navbar from '../../components/Navbar';

const Home = () => {
  return (
    <section className=" h-screen bg-rose-100 pt-5">
      <div className="container mx-auto">
        <h1 className="font-bold text-5xl mb-8 text-center" data-aos="fade-down">
          Hero Component
        </h1>
        <h2 className="text-2xl font-semibold mb-4" data-aos="fade-right">
          Welcome to our website
        </h2>
        <p className="text-gray-600" data-aos="fade-left">
          ... Content goes here ...
        </p>
      </div>
    </section>
  );
};

export default Home;
