import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

// Sample data - would be replaced with real API data
const installData = [
  { date: '2025-04-01', squidGame: 25000, wwe: 0 },
  { date: '2025-04-15', squidGame: 28500, wwe: 0 },
  { date: '2025-05-01', squidGame: 32000, wwe: 0 },
  { date: '2025-05-15', squidGame: 35000, wwe: 0 },
  { date: '2025-06-01', squidGame: 40000, wwe: 0 },
  { date: '2025-06-20', squidGame: 45000, wwe: 0 },
  { date: '2025-06-27', squidGame: 95000, wwe: 0 }, // Season 3 release spike
  { date: '2025-07-15', squidGame: 80000, wwe: 0 },
  { date: '2025-08-01', squidGame: 70000, wwe: 5000 }, // WWE pre-launch
  { date: '2025-09-01', squidGame: 65000, wwe: 15000 },
  { date: '2025-10-01', squidGame: 60000, wwe: 85000 }, // WWE launch
  { date: '2025-11-01', squidGame: 55000, wwe: 70000 },
  { date: '2025-12-01', squidGame: 50000, wwe: 60000 },
];

const conversionData = [
  { date: '2025-04-01', squidGameCVR: 2.5, wweCVR: 0 },
  { date: '2025-05-01', squidGameCVR: 2.8, wweCVR: 0 },
  { date: '2025-06-01', squidGameCVR: 3.2, wweCVR: 0 },
  { date: '2025-06-27', squidGameCVR: 8.5, wweCVR: 0 }, // Season 3 release spike
  { date: '2025-07-15', squidGameCVR: 7.1, wweCVR: 0 },
  { date: '2025-08-01', squidGameCVR: 6.5, wweCVR: 2.1 },
  { date: '2025-09-01', squidGameCVR: 6.0, wweCVR: 3.2 },
  { date: '2025-10-01', squidGameCVR: 5.5, wweCVR: 7.8 }, // WWE launch
  { date: '2025-11-01', squidGameCVR: 5.2, wweCVR: 6.5 },
  { date: '2025-12-01', squidGameCVR: 5.0, wweCVR: 6.0 },
];

const keywordPerformance = [
  { keyword: 'squid game', volume: 8500, ranking: 1, installs: 42000 },
  { keyword: 'netflix games', volume: 5200, ranking: 1, installs: 28000 },
  { keyword: 'battle royale', volume: 6500, ranking: 8, installs: 15000 },
  { keyword: 'party games', volume: 4200, ranking: 5, installs: 12000 },
  { keyword: 'multiplayer games', volume: 7800, ranking: 12, installs: 9500 },
];

const wweKeywordPerformance = [
  { keyword: 'wwe', volume: 12000, ranking: 2, installs: 38000 },
  { keyword: 'wrestling games', volume: 8500, ranking: 1, installs: 32000 },
  { keyword: 'wwe 2k', volume: 7200, ranking: 1, installs: 29000 },
  { keyword: 'raw wrestling', volume: 6500, ranking: 3, installs: 17000 },
  { keyword: 'sports games', volume: 9500, ranking: 15, installs: 8500 },
];

const storeDistribution = [
  { name: 'Apple App Store', value: 65 },
  { name: 'Google Play Store', value: 35 },
];

const COLORS = ['#0088FE', '#00C49F'];

// Direct image URLs
const NETFLIX_LOGO_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png';
const SQUID_GAME_ICON_URL = 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a8/52/99/a85299f9-f946-cd17-5e8a-80b90f5c7ad9/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/1024x1024bb.jpg';

export default function Home() {
  const [activeGame, setActiveGame] = useState('squidGame');
  const [dateRange, setDateRange] = useState('all');
  
  // Filter data based on date range
  const filteredInstallData = installData.filter(item => {
    if (dateRange === 'all') return true;
    if (dateRange === 'last3Months') {
      return new Date(item.date) > new Date('2025-09-01');
    }
    if (dateRange === 'squidGameS3') {
      return new Date(item.date) >= new Date('2025-06-20') && 
             new Date(item.date) <= new Date('2025-07-31');
    }
    if (dateRange === 'wweLaunch') {
      return new Date(item.date) >= new Date('2025-09-15') && 
             new Date(item.date) <= new Date('2025-10-31');
    }
    return true;
  });
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Netflix Games ASO Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
      </Head>

      <header className="bg-black text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src={NETFLIX_LOGO_URL} 
              alt="Netflix" 
              className="h-8 mr-3" 
              style={{ height: '32px', objectFit: 'contain' }}
            />
            <h1 className="text-2xl font-bold text-red-600" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>
              Games ASO Dashboard
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-800 text-white px-3 py-1 rounded">
              {activeGame === 'squidGame' && (
                <img 
                  src={SQUID_GAME_ICON_URL} 
                  alt="Squid Game Icon" 
                  className="h-6 w-6 mr-2" 
                  style={{ borderRadius: '4px' }}
                />
              )}
              <select 
                className="bg-gray-800 text-white appearance-none focus:outline-none"
                value={activeGame}
                onChange={(e) => setActiveGame(e.target.value)}
                style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
              >
                <option value="squidGame">Squid Game: Unleashed</option>
                <option value="wwe">WWE 2K25 Mobile</option>
              </select>
            </div>
            <select 
              className="bg-gray-800 text-white px-3 py-1 rounded"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
            >
              <option value="all">All Time</option>
              <option value="last3Months">Last 3 Months</option>
              <option value="squidGameS3">Squid Game S3 Period</option>
              <option value="wweLaunch">WWE Launch Period</option>
            </select>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
        {/* Game Title Banner */}
        <div className={`flex items-center mb-6 p-4 rounded-lg ${activeGame === 'squidGame' ? 'bg-gradient-to-r from-black to-pink-600' : 'bg-gradient-to-r from-black to-red-700'}`}>
          {activeGame === 'squidGame' && (
            <img 
              src={SQUID_GAME_ICON_URL} 
              alt="Squid Game: Unleashed" 
              className="h-12 w-12 mr-4" 
              style={{ borderRadius: '8px', border: '2px solid white' }}
            />
          )}
          <h1 className="text-3xl font-bold text-white" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>
            {activeGame === 'squidGame' ? 'Squid Game: Unleashed' : 'WWE 2K25 Mobile'} Performance
          </h1>
        </div>

        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-sm text-gray-500 uppercase">Total Installs</h3>
            <p className="text-3xl font-bold text-red-600">
              {activeGame === 'squidGame' 
                ? installData.reduce((sum, item) => sum + item.squidGame, 0).toLocaleString()
                : installData.reduce((sum, item) => sum + item.wwe, 0).toLocaleString()}
            </p>
            <p className="text-green-500 text-sm">+24.8% vs. Target</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-sm text-gray-500 uppercase">Current CVR (%)</h3>
            <p className="text-3xl font-bold text-red-600">
              {activeGame === 'squidGame' 
                ? conversionData[conversionData.length - 1].squidGameCVR.toFixed(1)
                : conversionData[conversionData.length - 1].wweCVR.toFixed(1)}%
            </p>
            <p className="text-green-500 text-sm">+1.2% vs. Last Month</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-sm text-gray-500 uppercase">Top Ranking Keywords</h3>
            <p className="text-3xl font-bold text-red-600">
              {activeGame === 'squidGame' 
                ? keywordPerformance.filter(k => k.ranking <= 3).length
                : wweKeywordPerformance.filter(k => k.ranking <= 3).length}
            </p>
            <p className="text-green-500 text-sm">+2 since campaign start</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-sm text-gray-500 uppercase">ASO-Driven Installs</h3>
            <p className="text-3xl font-bold text-red-600">
              {activeGame === 'squidGame' 
                ? '68%'
                : '72%'}
            </p>
            <p className="text-green-500 text-sm">+18% vs. pre-optimization</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Installs Over Time Chart */}
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Installs Over Time</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={filteredInstallData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="squidGame" 
                    name="Squid Game: Unleashed" 
                    stroke="#FF069D" 
                    strokeWidth={activeGame === 'squidGame' ? 3 : 1}
                    dot={{ r: 3 }}
                    activeDot={{ r: 8 }}
                    opacity={activeGame === 'squidGame' || activeGame === 'both' ? 1 : 0.3}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="wwe" 
                    name="WWE 2K25 Mobile" 
                    stroke="#E50914" 
                    strokeWidth={activeGame === 'wwe' ? 3 : 1}
                    dot={{ r: 3 }}
                    activeDot={{ r: 8 }}
                    opacity={activeGame === 'wwe' || activeGame === 'both' ? 1 : 0.3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Conversion Rate Chart */}
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Conversion Rate (%)</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={conversionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="squidGameCVR" 
                    name="Squid Game: Unleashed" 
                    stroke="#FF069D" 
                    strokeWidth={activeGame === 'squidGame' ? 3 : 1}
                    dot={{ r: 3 }}
                    activeDot={{ r: 8 }}
                    opacity={activeGame === 'squidGame' || activeGame === 'both' ? 1 : 0.3}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="wweCVR" 
                    name="WWE 2K25 Mobile" 
                    stroke="#E50914" 
                    strokeWidth={activeGame === 'wwe' ? 3 : 1}
                    dot={{ r: 3 }}
                    activeDot={{ r: 8 }}
                    opacity={activeGame === 'wwe' || activeGame === 'both' ? 1 : 0.3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Keyword Performance */}
        <div className="bg-white p-6 rounded shadow-md mb-8">
          <div className="flex items-center mb-4">
            {activeGame === 'squidGame' && (
              <img 
                src={SQUID_GAME_ICON_URL} 
                alt="Squid Game Icon" 
                className="h-8 w-8 mr-3" 
                style={{ borderRadius: '4px' }}
              />
            )}
            <h2 className="text-xl font-bold" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>
              Top Keyword Performance
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Keyword</th>
                  <th className="px-4 py-2 text-left">Search Volume</th>
                  <th className="px-4 py-2 text-left">App Ranking</th>
                  <th className="px-4 py-2 text-left">Estimated Installs</th>
                  <th className="px-4 py-2 text-left">Conversion</th>
                </tr>
              </thead>
              <tbody>
                {(activeGame === 'squidGame' ? keywordPerformance : wweKeywordPerformance).map((keyword, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2">{keyword.keyword}</td>
                    <td className="px-4 py-2">{keyword.volume.toLocaleString()}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded ${keyword.ranking <= 3 ? 'bg-green-100 text-green-800' : keyword.ranking <= 10 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                        #{keyword.ranking}
                      </span>
                    </td>
                    <td className="px-4 py-2">{keyword.installs.toLocaleString()}</td>
                    <td className="px-4 py-2">{((keyword.installs / keyword.volume) * 100).toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* App Store Distribution */}
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Store Distribution</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={storeDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {storeDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#0088FE' : '#00C49F'} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Creative Performance */}
          <div className="bg-white p-4 rounded shadow-md col-span-2">
            <div className="flex items-center mb-4">
              {activeGame === 'squidGame' && (
                <img 
                  src={SQUID_GAME_ICON_URL} 
                  alt="Squid Game Icon" 
                  className="h-8 w-8 mr-3" 
                  style={{ borderRadius: '4px' }}
                />
              )}
              <h2 className="text-xl font-bold" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>
                Creative Performance (CVR %)
              </h2>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { name: 'Screenshot 1', cvr: activeGame === 'squidGame' ? 3.8 : 4.2 },
                    { name: 'Screenshot 2', cvr: activeGame === 'squidGame' ? 4.5 : 5.1 },
                    { name: 'Screenshot 3', cvr: activeGame === 'squidGame' ? 2.9 : 3.8 },
                    { name: 'App Icon', cvr: activeGame === 'squidGame' ? 5.2 : 6.5 },
                    { name: 'Feature Graphic', cvr: activeGame === 'squidGame' ? 4.7 : 5.3 },
                    { name: 'Promo Video', cvr: activeGame === 'squidGame' ? 7.8 : 8.2 },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="cvr" fill={activeGame === 'squidGame' ? '#FF069D' : '#E50914'} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <img 
                src={NETFLIX_LOGO_URL} 
                alt="Netflix" 
                className="h-6 mr-3" 
                style={{ height: '24px', objectFit: 'contain' }}
              />
              <p>&copy; 2025 Netflix Games. All rights reserved.</p>
            </div>
            <p className="text-gray-400 mt-2 md:mt-0">Last updated: Mar 11, 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}