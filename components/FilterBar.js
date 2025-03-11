import React from 'react';
import { platforms, countries, games } from '../data/sample-data';

const FilterBar = ({ selectedPlatform, setSelectedPlatform, selectedCountry, setSelectedCountry, selectedGame, setSelectedGame }) => {
  return (
    <div className="bg-gray-900 bg-opacity-95 text-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl mb-4 text-red-600" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Dashboard Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Platform</label>
          <select 
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-50"
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            {platforms.map(platform => (
              <option key={platform.id} value={platform.id}>{platform.name}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Country</label>
          <select 
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-50"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {countries.map(country => (
              <option key={country.id} value={country.id}>{country.name}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Game</label>
          <select 
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-50"
            value={selectedGame}
            onChange={(e) => setSelectedGame(e.target.value)}
          >
            <option value="all">All Games</option>
            {games.map(game => (
              <option key={game.id} value={game.id}>{game.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;