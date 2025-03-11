import React from 'react';

const GameHighlightCard = ({ game, selectedPlatform }) => {
  const gameData = {
    'squid-game': {
      name: 'Squid Game: Unleashed',
      description: 'A 32-player tournament where players team up with friends or enemies to make it out alive.',
      releaseDate: 'December 2024',
      bgClass: 'bg-gradient-to-br from-pink-800 to-purple-900',
      icon: '🦑',
      keyFeatures: ['Multiplayer', 'Party Royale', 'Season 3 Content'],
      asoStatus: 'Strong'  
    },
    'wwe-2k25': {
      name: 'WWE 2K25 Mobile',
      description: 'The official WWE mobile game with console-quality graphics and gameplay.',
      releaseDate: 'October 1st, 2025 (Upcoming)',
      bgClass: 'bg-gradient-to-br from-blue-800 to-indigo-900',
      icon: '🤼',
      keyFeatures: ['Wrestling Simulation', 'WWE Raw tie-ins', 'Live Events'],
      asoStatus: 'Needs optimization'
    },
    'netflix-puzzled': {
      name: 'Netflix Puzzled',
      description: 'A hub of word, number, and logic puzzles including classics and Netflix originals.',
      releaseDate: 'September 16th, 2025 (Upcoming)',
      bgClass: 'bg-gradient-to-br from-green-800 to-teal-900',
      icon: '🧩',
      keyFeatures: ['Daily Puzzles', 'Brain Teasers', 'Netflix Show Themes'],
      asoStatus: 'Pre-launch'
    }
  };

  // If no specific game is highlighted, show a default card
  if (!gameData[game]) {
    return (
      <div className="netflix-card bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl mb-2 text-netflix-red" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Netflix Games</h2>
        <p className="text-gray-300 mb-4">Select a specific game to see detailed ASO metrics.</p>
        <div className="flex space-x-2">
          <span className="px-2 py-1 bg-gray-700 rounded-md text-xs text-white">All Platforms</span>
          <span className="px-2 py-1 bg-pink-900 rounded-md text-xs text-white">Top Games</span>
        </div>
      </div>
    );
  }

  const data = gameData[game];
  
  return (
    <div className={`netflix-card ${data.bgClass} text-white p-6 rounded-lg shadow mb-6 relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-10 rounded-bl-full bg-white"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 opacity-10 rounded-tr-full bg-white"></div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-3">
          <span className="text-4xl mr-3">{data.icon}</span>
          <h2 className="text-xl" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>{data.name}</h2>
        </div>
        <p className="text-gray-300 mb-4">{data.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div>
            <h3 className="text-sm text-gray-400">Release Date</h3>
            <p>{data.releaseDate}</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-400">ASO Status</h3>
            <p>{data.asoStatus}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {data.keyFeatures.map(feature => (
            <span key={feature} className="px-2 py-1 bg-black bg-opacity-30 rounded-md text-xs">{feature}</span>
          ))}
          <span className="px-2 py-1 bg-netflix-red rounded-md text-xs">
            {selectedPlatform === 'ios' ? 'iOS' : selectedPlatform === 'android' ? 'Android' : 'Multi-platform'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameHighlightCard;