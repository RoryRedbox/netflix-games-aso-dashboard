import React from 'react';

const AsoRecommendations = ({ selectedPlatform, selectedCountry }) => {
  return (
    <div className="netflix-card bg-gray-900 text-white p-6 rounded-lg shadow">
      <h2 className="text-xl mb-4 text-netflix-red" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>ASO Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold mb-2 text-pink-500">Keyword Optimization</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li>Add "multiplayer games" to title for Squid Game: Unleashed</li>
            <li>Incorporate "WWE Raw" in WWE 2K25 description (leveraging Netflix streaming rights)</li>
            <li>Test seasonal keywords for holiday period (Q4)</li>
            {selectedCountry === 'kr' && <li>Add Korean-specific terms related to Squid Game actors</li>}
            {selectedCountry === 'jp' && <li>Add Japanese-specific gaming terminology</li>}
            {selectedCountry === 'br' && <li>Use Portuguese terms in Brazilian store listing</li>}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-blue-400">Creative Optimization</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li>Update screenshots to highlight new Squid Game Season 3 content</li>
            <li>A/B test icon variations for WWE 2K25 Mobile</li>
            <li>Create promotional video featuring WWE Raw tie-ins</li>
            {selectedPlatform === 'ios' && <li>Optimize for iOS 17 features in preview assets</li>}
            {selectedPlatform === 'android' && <li>Utilize Google Play's larger screenshot slots for feature showcase</li>}
            {selectedPlatform === 'all' && <li>Create platform-specific preview videos</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AsoRecommendations;
