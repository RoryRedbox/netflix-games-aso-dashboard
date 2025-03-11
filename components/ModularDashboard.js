import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Add Google Fonts
const GoogleFonts = () => (
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
);

const ModularDashboard = ({ squidTheme = true }) => {
  // Sample data
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

  const games = [
    { id: 'squid-game', name: 'Squid Game: Unleashed' },
    { id: 'wwe-2k25', name: 'WWE 2K25 Mobile' },
    { id: 'netflix-puzzled', name: 'Netflix Puzzled' }
  ];

  // State
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('global');
  const [selectedGame, setSelectedGame] = useState('all');
  const [loading, setLoading] = useState(false);

  // Installation data
  const installData = [
    { month: 'Jan', installs: 55000 },
    { month: 'Feb', installs: 60000 },
    { month: 'Mar', installs: 67000 },
    { month: 'Apr', installs: 63000 },
    { month: 'May', installs: 73000 },
    { month: 'Jun', installs: 95000 },
    { month: 'Jul', installs: 90000 },
    { month: 'Aug', installs: 85000 },
    { month: 'Sep', installs: 81000 },
    { month: 'Oct', installs: 105000 },
    { month: 'Nov', installs: 100000 },
    { month: 'Dec', installs: 97000 }
  ];

  // Keyword ranking data
  const keywordRankingData = [
    { keyword: 'squid game', ranking: 2 },
    { keyword: 'netflix games', ranking: 1 },
    { keyword: 'wwe', ranking: 5 },
    { keyword: 'party game', ranking: 8 },
    { keyword: 'wrestling', ranking: 10 }
  ];

  // Conversion rate data
  const conversionRateData = [
    { name: 'iOS', value: 4.2 },
    { name: 'Android', value: 3.8 }
  ];

  // Visibility score data
  const visibilityScoreData = [
    { month: 'Jan', score: 67 },
    { month: 'Feb', score: 69 },
    { month: 'Mar', score: 71 },
    { month: 'Apr', score: 74 },
    { month: 'May', score: 76 },
    { month: 'Jun', score: 87 },
    { month: 'Jul', score: 84 },
    { month: 'Aug', score: 81 },
    { month: 'Sep', score: 79 },
    { month: 'Oct', score: 89 },
    { month: 'Nov', score: 86 },
    { month: 'Dec', score: 85 }
  ];

  // Colors for charts
  const COLORS = ['#e50914', '#b81d24', '#ff0084', '#01c3dd', '#11b980'];

  return (
    <div className="flex flex-col p-6 bg-gray-900 min-h-screen" style={{ 
      fontFamily: '"Roboto", sans-serif', 
      fontWeight: 400,
    }}>
      <GoogleFonts />
      
      {/* Header */}
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
        <div className="absolute top-0 right-0 w-24 h-24 opacity-10 rounded-bl-full bg-pink-500"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 opacity-10 rounded-tr-full bg-blue-400"></div>
      </div>
      
      {/* Filters */}
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
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-gray-400 mb-1">Total Installs (2025)</h3>
            <p className="text-3xl font-bold">881K</p>
            <p className="text-sm text-green-500">↑ 24% vs Last Year</p>
          </div>
        </div>
        
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-gray-400 mb-1">Avg Conversion Rate</h3>
            <p className="text-3xl font-bold">4.0%</p>
            <p className="text-sm text-green-500">↑ 0.5% vs Last Period</p>
          </div>
        </div>
        
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-gray-400 mb-1">Keyword Ranking Avg</h3>
            <p className="text-3xl font-bold">#7.5</p>
            <p className="text-sm text-green-500">↑ 3 positions vs Last Period</p>
          </div>
        </div>
        
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-gray-400 mb-1">ASO Visibility Score</h3>
            <p className="text-3xl font-bold">80/100</p>
            <p className="text-sm text-green-500">↑ 12 points vs Last Period</p>
          </div>
        </div>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Installs Over Time */}
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow">
          <h2 className="text-xl mb-4 text-red-600" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Installs Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={installData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="month" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(20, 20, 20, 0.9)', border: '1px solid #e50914' }}
                labelStyle={{ color: '#e50914' }}
              />
              <Legend />
              <Line type="monotone" dataKey="installs" stroke="#e50914" activeDot={{ r: 8 }} strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 text-sm text-gray-400">
            <p>Key events marked:</p>
            <ul className="mt-2 list-disc pl-5">
              <li>June: <span className="text-pink-500">Squid Game Season 3</span> release (Jun 27th)</li>
              <li>October: <span className="text-blue-400">WWE 2K25 Mobile</span> launch (Oct 1st)</li>
            </ul>
          </div>
        </div>
        
        {/* ASO Visibility Score */}
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow">
          <h2 className="text-xl mb-4 text-red-600" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>ASO Visibility Score</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={visibilityScoreData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="month" stroke="#aaa" />
              <YAxis domain={[0, 100]} stroke="#aaa" />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(20, 20, 20, 0.9)', border: '1px solid #e50914' }}
                labelStyle={{ color: '#e50914' }}
              />
              <Legend />
              <Line type="monotone" dataKey="score" stroke="#01c3dd" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 text-sm text-gray-400">
            <p>ASO visibility score incorporates keyword rankings, browse traffic, and category rankings.</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Top Keywords */}
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow">
          <h2 className="text-xl mb-4 text-red-600" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Top 5 Keywords</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={keywordRankingData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis type="number" domain={[0, 30]} stroke="#aaa" />
              <YAxis dataKey="keyword" type="category" width={100} stroke="#aaa" />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(20, 20, 20, 0.9)', border: '1px solid #e50914' }}
                labelStyle={{ color: '#e50914' }}
              />
              <Legend />
              <Bar dataKey="ranking" fill="#ff0084" name="Ranking" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 text-sm text-gray-400">
            <p>Lower ranking numbers indicate better positions in search results.</p>
          </div>
        </div>
        
        {/* Conversion Rate by Platform */}
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow">
          <h2 className="text-xl mb-4 text-red-600" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Conversion Rate by Platform</h2>
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
              <Tooltip 
                formatter={(value) => `${value}%`}
                contentStyle={{ backgroundColor: 'rgba(20, 20, 20, 0.9)', border: '1px solid #e50914' }}
                labelStyle={{ color: '#e50914' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 text-sm text-gray-400">
            <p>Conversion rate: Percentage of users who install after viewing the app page.</p>
          </div>
        </div>
      </div>
      
      {/* Country Performance */}
      {selectedCountry === 'global' && (
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl mb-4 text-red-600" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Performance by Country</h2>
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
                {[
                  { id: 'us', name: 'United States', installs: '320K', conversion: '4.8%', keywordRank: '#5', visibility: '85/100' },
                  { id: 'uk', name: 'United Kingdom', installs: '95K', conversion: '4.5%', keywordRank: '#7', visibility: '82/100' },
                  { id: 'kr', name: 'South Korea', installs: '120K', conversion: '5.2%', keywordRank: '#3', visibility: '90/100' },
                  { id: 'jp', name: 'Japan', installs: '85K', conversion: '3.9%', keywordRank: '#8', visibility: '78/100' },
                  { id: 'br', name: 'Brazil', installs: '105K', conversion: '4.2%', keywordRank: '#6', visibility: '80/100' },
                  { id: 'fr', name: 'France', installs: '80K', conversion: '3.8%', keywordRank: '#9', visibility: '75/100' },
                  { id: 'de', name: 'Germany', installs: '76K', conversion: '3.7%', keywordRank: '#10', visibility: '74/100' }
                ].map(country => (
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
      )}
      
      {/* ASO Recommendations */}
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl mb-4 text-red-600" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>ASO Recommendations</h2>
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
      
      {/* Footer */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>Netflix Games ASO Dashboard | Data updated March 11, 2025</p>
      </div>
    </div>
  );
};

export default ModularDashboard;