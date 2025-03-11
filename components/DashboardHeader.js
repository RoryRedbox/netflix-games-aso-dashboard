import React from 'react';

const DashboardHeader = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-lg mb-6 relative overflow-hidden">
      <div className="flex items-center justify-between relative z-10">
        <div>
          <div className="flex items-center">
            <h1 className="text-3xl mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>
              Netflix Games <span className="text-pink-500">ASO Dashboard</span>
            </h1>
          </div>
          <p className="text-gray-300">Monitor and optimize App Store presence for Netflix Games</p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-10 rounded-bl-full bg-pink-500"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 opacity-10 rounded-tr-full bg-blue-400"></div>
    </div>
  );
};

export default DashboardHeader;