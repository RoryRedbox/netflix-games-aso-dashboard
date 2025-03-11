import React from 'react';

const SummaryCards = ({ selectedPlatform, gameSpecificData }) => {
  // Use game specific data if available, otherwise use platform-specific defaults
  const getInstalls = () => {
    if (gameSpecificData) {
      return selectedPlatform === 'ios' ? 
        gameSpecificData.installs.ios : 
        selectedPlatform === 'android' ? 
          gameSpecificData.installs.android : 
          gameSpecificData.installs.total;
    }
    return selectedPlatform === 'ios' ? '420K' : selectedPlatform === 'android' ? '461K' : '881K';
  };

  const getConversionRate = () => {
    if (gameSpecificData) {
      return selectedPlatform === 'ios' ? 
        gameSpecificData.conversion.ios : 
        selectedPlatform === 'android' ? 
          gameSpecificData.conversion.android : 
          '4.0%'; // Average for game
    }
    return selectedPlatform === 'ios' ? '4.2%' : selectedPlatform === 'android' ? '3.8%' : '4.0%';
  };

  const getKeywordRank = () => {
    if (gameSpecificData) {
      return selectedPlatform === 'ios' ? 
        gameSpecificData.keywordRank.ios : 
        selectedPlatform === 'android' ? 
          gameSpecificData.keywordRank.android : 
          '#7'; // Average for game
    }
    return selectedPlatform === 'ios' ? '#8' : selectedPlatform === 'android' ? '#7' : '#7.5';
  };

  const getVisibilityScore = () => {
    if (gameSpecificData) {
      return selectedPlatform === 'ios' ? 
        gameSpecificData.visibility.ios : 
        selectedPlatform === 'android' ? 
          gameSpecificData.visibility.android : 
          '80/100'; // Average for game
    }
    return selectedPlatform === 'ios' ? '78/100' : selectedPlatform === 'android' ? '82/100' : '80/100';
  };

  const getPlatformColor = () => {
    return selectedPlatform === 'ios' ? 'bg-gradient-to-br from-blue-600 to-blue-800' : 
      selectedPlatform === 'android' ? 'bg-gradient-to-br from-green-600 to-green-800' : 
      'bg-gradient-to-br from-gray-700 to-gray-900';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-gray-400 mb-1">Total Installs (2025)</h3>
          <p className="text-3xl font-bold">{getInstalls()}</p>
          <p className="text-sm text-green-500">↑ 24% vs Last Year</p>
        </div>
      </div>
      
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-gray-400 mb-1">Avg Conversion Rate</h3>
          <p className="text-3xl font-bold">{getConversionRate()}</p>
          <p className="text-sm text-green-500">↑ 0.5% vs Last Period</p>
        </div>
      </div>
      
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-gray-400 mb-1">Keyword Ranking Avg</h3>
          <p className="text-3xl font-bold">{getKeywordRank()}</p>
          <p className="text-sm text-green-500">↑ 3 positions vs Last Period</p>
        </div>
      </div>
      
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-gray-400 mb-1">ASO Visibility Score</h3>
          <p className="text-3xl font-bold">{getVisibilityScore()}</p>
          <p className="text-sm text-green-500">↑ 12 points vs Last Period</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;