import React from 'react';
import { countryPerformanceData } from '../data/sample-data';

const CountryPerformanceTable = ({ selectedPlatform }) => {
  return (
    <div className="netflix-card bg-gray-900 text-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl mb-4 text-netflix-red" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Performance by Country</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-900">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-700 bg-gray-800 text-left text-gray-300">Country</th>
              <th className="py-2 px-4 border-b border-gray-700 bg-gray-800 text-right text-gray-300">Installs</th>
              <th className="py-2 px-4 border-b border-gray-700 bg-gray-800 text-right text-gray-300">Conversion Rate</th>
              <th className="py-2 px-4 border-b border-gray-700 bg-gray-800 text-right text-gray-300">Avg Keyword Rank</th>
              <th className="py-2 px-4 border-b border-gray-700 bg-gray-800 text-right text-gray-300">Visibility Score</th>
            </tr>
          </thead>
          <tbody>
            {countryPerformanceData.map(country => (
              <tr key={country.id} className="hover:bg-gray-800 transition-colors duration-150 ease-in-out">
                <td className="py-2 px-4 border-b border-gray-700">{country.name}</td>
                <td className="py-2 px-4 border-b border-gray-700 text-right">{country.installs}</td>
                <td className="py-2 px-4 border-b border-gray-700 text-right">{country.conversion}</td>
                <td className="py-2 px-4 border-b border-gray-700 text-right">{country.keywordRank}</td>
                <td className="py-2 px-4 border-b border-gray-700 text-right">{country.visibility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountryPerformanceTable;
