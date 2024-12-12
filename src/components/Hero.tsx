import React from 'react';

const Hero = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Space background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Welcome to the Void
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Explore the endless possibilities in this dark-themed digital space
        </p>
        <button 
          onClick={onGetStarted}
          className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;