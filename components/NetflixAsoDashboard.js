import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Add Google Fonts
const GoogleFonts = () => (
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
);

const NetflixAsoDashboard = () => {
  // State for filters
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('global');
  const [selectedGame, setSelectedGame] = useState('all');

  // Sample data - in a real implementation, this would come from API calls
  const games = [
    { id: 'squid-game', name: 'Squid Game: Unleashed' },
    { id: 'wwe-2k25', name: 'WWE 2K25 Mobile' },
    { id: 'netflix-puzzled', name: 'Netflix Puzzled' }
  ];

  const platforms = [
    { id: 'all', name: 'All Platforms' },
    { id: 'ios', name: 'iOS' },
    { id: 'android', name: 'Android' }
  ];

  const countries = [
    { id: 'global', name: 'Global' },
    { id: 'us', name: 'United States' },
    { id: 'uk', name: 'United Kingdom' },
    { id: 'jp', name: 'Japan' },
    { id: 'kr', name: 'South Korea' },
    { id: 'br', name: 'Brazil' },
    { id: 'fr', name: 'France' },
    { id: 'de', name: 'Germany' }
  ];

  // Sample data for charts
  const generateInstallData = (platform, country, game) => {
    // This would be replaced with actual API calls in production
    const baseData = [
      { month: 'Jan', ios: 25000, android: 30000 },
      { month: 'Feb', ios: 28000, android: 32000 },
      { month: 'Mar', ios: 32000, android: 35000 },
      { month: 'Apr', ios: 30000, android: 33000 },
      { month: 'May', ios: 35000, android: 38000 },
      { month: 'Jun', ios: 45000, android: 50000 }, // Spike for Squid Game Season 3
      { month: 'Jul', ios: 42000, android: 48000 },
      { month: 'Aug', ios: 40000, android: 45000 },
      { month: 'Sep', ios: 38000, android: 43000 },
      { month: 'Oct', ios: 50000, android: 55000 }, // Spike for WWE 2K25 launch
      { month: 'Nov', ios: 48000, android: 52000 },
      { month: 'Dec', ios: 47000, android: 50000 }
    ];

    // Apply platform filter
    if (platform === 'ios' || platform === 'android') {
      return baseData.map(item => ({
        month: item.month,
        installs: item[platform]
      }));
    }

    // If all platforms, combine the data
    return baseData.map(item => ({
      month: item.month,
      installs: item.ios + item.android
    }));
  };

  const generateKeywordRankingData = (platform, country) => {
    // Simulated keyword ranking data
    const rankings = [
      { keyword: 'squid game', ios: 2, android: 3 },
      { keyword: 'battle royale', ios: 15, android: 12 },
      { keyword: 'party game', ios: 8, android: 10 },
      { keyword: 'netflix games', ios: 1, android: 1 },
      { keyword: 'multiplayer', ios: 20, android: 18 },
      { keyword: 'wwe', ios: 5, android: 4 },
      { keyword: 'wrestling', ios: 10, android: 8 },
      { keyword: 'puzzle games', ios: 12, android: 15 }
    ];

    if (platform === 'ios' || platform === 'android') {
      return rankings
        .map(item => ({
          keyword: item.keyword,
          ranking: item[platform]
        }))
        .sort((a, b) => a.ranking - b.ranking)
        .slice(0, 5);
    }

    // If all platforms, average the rankings
    return rankings
      .map(item => ({
        keyword: item.keyword,
        ranking: Math.round((item.ios + item.android) / 2)
      }))
      .sort((a, b) => a.ranking - b.ranking)
      .slice(0, 5);
  };

  const generateConversionRateData = (platform, country) => {
    // Conversion rate by platform
    const baseData = [
      { name: 'iOS', value: 4.2 },
      { name: 'Android', value: 3.8 }
    ];

    if (platform === 'all') {
      return baseData;
    }
    
    return baseData.filter(item => item.name.toLowerCase() === platform);
  };

  const generateVisibilityScoreData = (platform, country) => {
    const baseData = [
      { month: 'Jan', ios: 65, android: 68 },
      { month: 'Feb', ios: 67, android: 70 },
      { month: 'Mar', ios: 70, android: 72 },
      { month: 'Apr', ios: 72, android: 75 },
      { month: 'May', ios: 75, android: 77 },
      { month: 'Jun', ios: 85, android: 88 }, // Boost from Season 3
      { month: 'Jul', ios: 83, android: 85 },
      { month: 'Aug', ios: 80, android: 82 },
      { month: 'Sep', ios: 78, android: 80 },
      { month: 'Oct', ios: 87, android: 90 }, // Boost from WWE launch
      { month: 'Nov', ios: 85, android: 87 },
      { month: 'Dec', ios: 84, android: 86 }
    ];

    if (platform === 'ios' || platform === 'android') {
      return baseData.map(item => ({
        month: item.month,
        score: item[platform]
      }));
    }

    return baseData.map(item => ({
      month: item.month,
      score: Math.round((item.ios + item.android) / 2)
    }));
  };

  // Generate data based on filters
  const installData = generateInstallData(selectedPlatform, selectedCountry, selectedGame);
  const keywordRankingData = generateKeywordRankingData(selectedPlatform, selectedCountry);
  const conversionRateData = generateConversionRateData(selectedPlatform, selectedCountry);
  const visibilityScoreData = generateVisibilityScoreData(selectedPlatform, selectedCountry);

  const COLORS = ['#e50914', '#831010', '#ff6b6b', '#b81d24', '#f5f5f1'];

  return (
    <div className="flex flex-col p-6 bg-gray-100 min-h-screen" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
      <GoogleFonts />
      
      {/* Header */}
      <div className="bg-black text-white p-6 rounded-lg shadow-lg mb-6">
        <h1 className="text-3xl mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Netflix Games ASO Dashboard</h1>
        <p className="text-gray-300">Monitor and optimize App Store presence for Netflix Games</p>
      </div>
      
      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded"
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
            >
              {platforms.map(platform => (
                <option key={platform.id} value={platform.id}>{platform.name}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              {countries.map(country => (
                <option key={country.id} value={country.id}>{country.name}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Game</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded"
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
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 mb-1">Total Installs (2025)</h3>
          <p className="text-3xl font-bold">{selectedPlatform === 'ios' ? '420K' : selectedPlatform === 'android' ? '461K' : '881K'}</p>
          <p className="text-sm text-green-500">↑ 24% vs Last Year</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 mb-1">Avg Conversion Rate</h3>
          <p className="text-3xl font-bold">{selectedPlatform === 'ios' ? '4.2%' : selectedPlatform === 'android' ? '3.8%' : '4.0%'}</p>
          <p className="text-sm text-green-500">↑ 0.5% vs Last Period</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 mb-1">Keyword Ranking Avg</h3>
          <p className="text-3xl font-bold">{selectedPlatform === 'ios' ? '#8' : selectedPlatform === 'android' ? '#7' : '#7.5'}</p>
          <p className="text-sm text-green-500">↑ 3 positions vs Last Period</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 mb-1">ASO Visibility Score</h3>
          <p className="text-3xl font-bold">{selectedPlatform === 'ios' ? '78/100' : selectedPlatform === 'android' ? '82/100' : '80/100'}</p>
          <p className="text-sm text-green-500">↑ 12 points vs Last Period</p>
        </div>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Installs Over Time */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Installs Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={installData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="installs" stroke="#e50914" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 text-sm text-gray-500">
            <p>Key events marked:</p>
            <ul className="mt-2 list-disc pl-5">
              <li>June: Squid Game Season 3 release (Jun 27th)</li>
              <li>October: WWE 2K25 Mobile launch (Oct 1st)</li>
            </ul>
          </div>
        </div>
        
        {/* ASO Visibility Score */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>ASO Visibility Score</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={visibilityScoreData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="score" stroke="#831010" />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 text-sm text-gray-500">
            <p>ASO visibility score incorporates keyword rankings, browse traffic, and category rankings.</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Top Keywords */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Top 5 Keywords</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={keywordRankingData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 30]} />
              <YAxis dataKey="keyword" type="category" width={100} />
              <Tooltip />
              <Legend />
              <Bar dataKey="ranking" fill="#b81d24" name="Ranking" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 text-sm text-gray-500">
            <p>Lower ranking numbers indicate better positions in search results.</p>
          </div>
        </div>
        
        {/* Conversion Rate by Platform */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Conversion Rate by Platform</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={conversionRateData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {conversionRateData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 text-sm text-gray-500">
            <p>Conversion rate: Percentage of users who install after viewing the app page.</p>
          </div>
        </div>
      </div>
      
      {/* Country Performance */}
      {selectedCountry === 'global' && (
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
                {[
                  { id: 'us', name: 'United States', installs: '320K', conversion: '4.8%', keywordRank: '#5', visibility: '85/100' },
                  { id: 'uk', name: 'United Kingdom', installs: '95K', conversion: '4.5%', keywordRank: '#7', visibility: '82/100' },
                  { id: 'kr', name: 'South Korea', installs: '120K', conversion: '5.2%', keywordRank: '#3', visibility: '90/100' },
                  { id: 'jp', name: 'Japan', installs: '85K', conversion: '3.9%', keywordRank: '#8', visibility: '78/100' },
                  { id: 'br', name: 'Brazil', installs: '105K', conversion: '4.2%', keywordRank: '#6', visibility: '80/100' },
                  { id: 'fr', name: 'France', installs: '80K', conversion: '3.8%', keywordRank: '#9', visibility: '75/100' },
                  { id: 'de', name: 'Germany', installs: '76K', conversion: '3.7%', keywordRank: '#10', visibility: '74/100' }
                ].map(country => (
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
      )}
      
      {/* ASO Recommendations */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>ASO Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold mb-2">Keyword Optimization</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Add "multiplayer games" to title for Squid Game: Unleashed</li>
              <li>Incorporate "WWE Raw" in WWE 2K25 description (leveraging Netflix streaming rights)</li>
              <li>Test seasonal keywords for holiday period (Q4)</li>
              {selectedCountry === 'kr' && <li>Add Korean-specific terms related to Squid Game actors</li>}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Creative Optimization</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Update screenshots to highlight new Squid Game Season 3 content</li>
              <li>A/B test icon variations for WWE 2K25 Mobile</li>
              <li>Create promotional video featuring WWE Raw tie-ins</li>
              {selectedPlatform === 'ios' && <li>Optimize for iOS 17 features in preview assets</li>}
              {selectedPlatform === 'android' && <li>Utilize Google Play's larger screenshot slots for feature showcase</li>}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>Netflix Games ASO Dashboard | Data updated March 11, 2025</p>
      </div>
    </div>
  );
};

export default NetflixAsoDashboard;