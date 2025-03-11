import React from 'react';
import { countryPerformanceData } from '../data/sample-data';

const CountryPerformanceTable = ({ selectedPlatform }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Performance by Country</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">Country</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-right">Installs</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-right">Conversion Rate</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-right">Avg Keyword Rank</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-right">Visibility Score</th>
            </tr>
          </thead>
          <tbody>
            {countryPerformanceData.map(country => (
              <tr key={country.id}>
                <td className="py-2 px-4 border-b border-gray-200">{country.name}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-right">{country.installs}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-right">{country.conversion}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-right">{country.keywordRank}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-right">{country.visibility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountryPerformanceTable;
