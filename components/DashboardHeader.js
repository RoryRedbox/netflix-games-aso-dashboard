import React from 'react';

const DashboardHeader = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-lg mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Netflix Games ASO Dashboard</h1>
          <p className="text-gray-300">Monitor and optimize App Store presence for Netflix Games</p>
        </div>
        <div className="w-32">
          <img src="/netflix-logo.svg" alt="Netflix Logo" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
