import React, { useState, useEffect } from 'react';
import DashboardHeader from './DashboardHeader';
import FilterBar from './FilterBar';
import SummaryCards from './SummaryCards';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import CountryPerformanceTable from './CountryPerformanceTable';
import AsoRecommendations from './AsoRecommendations';
import { gamePerformanceData } from '../data/sample-data';

// Add Google Fonts
const GoogleFonts = () => (
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
);

const ModularDashboard = () => {
  // State for filters
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('global');
  const [selectedGame, setSelectedGame] = useState('all');
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data based on filters
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // In a real implementation, this would fetch from the API
        // const response = await fetch(`/api/data?platform=${selectedPlatform}&country=${selectedCountry}&game=${selectedGame}`);
        // const data = await response.json();
        
        // For demo purposes, simulate API call with local data generation
        const data = await generateDashboardData();
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedPlatform, selectedCountry, selectedGame]);

  // Sample data generation functions (would be replaced by API calls)
  const generateDashboardData = async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));

    // Generate install data
    const installData = generateInstallData();
    const keywordRankingData = generateKeywordRankingData();
    const conversionRateData = generateConversionRateData();
    const visibilityScoreData = generateVisibilityScoreData();

    return {
      installData,
      keywordRankingData,
      conversionRateData,
      visibilityScoreData,
      gameSpecificData: selectedGame === 'all' ? null : gamePerformanceData[selectedGame]
    };
  };

  // Sample data for charts
  const generateInstallData = () => {
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
    if (selectedPlatform === 'ios' || selectedPlatform === 'android') {
      return baseData.map(item => ({
        month: item.month,
        installs: item[selectedPlatform]
      }));
    }

    // If all platforms, combine the data
    return baseData.map(item => ({
      month: item.month,
      installs: item.ios + item.android
    }));
  };

  const generateKeywordRankingData = () => {
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

    if (selectedPlatform === 'ios' || selectedPlatform === 'android') {
      return rankings
        .map(item => ({
          keyword: item.keyword,
          ranking: item[selectedPlatform]
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

  const generateConversionRateData = () => {
    // Conversion rate by platform
    const baseData = [
      { name: 'iOS', value: 4.2 },
      { name: 'Android', value: 3.8 }
    ];

    if (selectedPlatform === 'all') {
      return baseData;
    }
    
    return baseData.filter(item => item.name.toLowerCase() === selectedPlatform);
  };

  const generateVisibilityScoreData = () => {
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

    if (selectedPlatform === 'ios' || selectedPlatform === 'android') {
      return baseData.map(item => ({
        month: item.month,
        score: item[selectedPlatform]
      }));
    }

    return baseData.map(item => ({
      month: item.month,
      score: Math.round((item.ios + item.android) / 2)
    }));
  };

  // Colors for charts - Netflix palette
  const COLORS = ['#e50914', '#b81d24', '#ff0084', '#01c3dd', '#11b980'];

  if (loading || !dashboardData) {
    return (
      <div className="flex flex-col p-6 bg-gray-900 min-h-screen items-center justify-center">
        <div className="netflix-loading"></div>
        <p className="text-lg mt-4 text-white">Loading dashboard data...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-6 bg-gray-900 min-h-screen" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
      <GoogleFonts />
      
      {/* Header */}
      <DashboardHeader />
      
      {/* Filters */}
      <FilterBar 
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedGame={selectedGame}
        setSelectedGame={setSelectedGame}
      />
      
      {/* Summary Cards */}
      <SummaryCards 
        selectedPlatform={selectedPlatform} 
        gameSpecificData={dashboardData.gameSpecificData}
      />
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Installs Over Time */}
        <div className="netflix-card bg-gray-900 text-white p-6 rounded-lg shadow netflix-chart">
          <h2 className="text-xl mb-4 text-netflix-red" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Installs Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dashboardData.installData}>
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
        <div className="netflix-card bg-gray-900 text-white p-6 rounded-lg shadow netflix-chart">
          <h2 className="text-xl mb-4 text-netflix-red" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>ASO Visibility Score</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dashboardData.visibilityScoreData}>
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
        <div className="netflix-card bg-gray-900 text-white p-6 rounded-lg shadow netflix-chart">
          <h2 className="text-xl mb-4 text-netflix-red" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Top 5 Keywords</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dashboardData.keywordRankingData} layout="vertical">
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
        <div className="netflix-card bg-gray-900 text-white p-6 rounded-lg shadow netflix-chart">
          <h2 className="text-xl mb-4 text-netflix-red" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Conversion Rate by Platform</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dashboardData.conversionRateData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {dashboardData.conversionRateData.map((entry, index) => (
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
      <div className="netflix-card bg-gray-900 text-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl mb-4 text-netflix-red" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>ASO Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold mb-2 text-pink-500">Keyword Optimization</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Add "multiplayer games" to title for Squid Game: Unleashed</li>
              <li>Incorporate "WWE Raw" in WWE 2K25 description (leveraging Netflix streaming rights)</li>
              <li>Test seasonal keywords for holiday period (Q4)</li>
              {selectedCountry === 'kr' && <li>Add Korean-specific terms related to Squid Game actors</li>}
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