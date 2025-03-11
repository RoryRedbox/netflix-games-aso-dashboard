import React, { useState } from 'react';

const WelcomeModal = ({ onClose }) => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
    if (onClose) onClose();
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
      <div className="relative bg-gray-900 rounded-lg shadow-lg netflix-card p-8 max-w-lg w-full mx-4 border border-netflix-red">
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex items-center space-x-3 mb-4">
          <div className="squid-circle"></div>
          <div className="squid-triangle"></div>
          <div className="squid-square"></div>
          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Welcome to Netflix Games ASO Dashboard</h2>
        </div>
        
        <p className="text-gray-300 mb-4">This dashboard provides comprehensive App Store Optimization metrics for Netflix Games, including:</p>
        
        <ul className="list-disc pl-5 mb-6 text-gray-300 space-y-2">
          <li>Platform-specific metrics (iOS & Android)</li>
          <li>Geographic performance breakdown by country</li>
          <li>Game-specific analytics</li>
          <li>Keyword rankings and visibility scores</li>
          <li>Custom ASO recommendations</li>
        </ul>
        
        <p className="text-gray-300 mb-4">Use the filters at the top to customize your view and drill down into specific data points.</p>
        
        <div className="flex justify-center mt-6">
          <button 
            onClick={handleClose}
            className="bg-netflix-red hover:bg-netflix-red-dark text-white font-bold py-2 px-6 rounded netflix-button"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
