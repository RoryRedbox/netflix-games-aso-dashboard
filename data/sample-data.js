// Sample ASO data for Netflix Games dashboard

// Game metadata
export const games = [
  { id: 'squid-game', name: 'Squid Game: Unleashed' },
  { id: 'wwe-2k25', name: 'WWE 2K25 Mobile' },
  { id: 'netflix-puzzled', name: 'Netflix Puzzled' }
];

// Platform options
export const platforms = [
  { id: 'all', name: 'All Platforms' },
  { id: 'ios', name: 'iOS' },
  { id: 'android', name: 'Android' }
];

// Country options
export const countries = [
  { id: 'global', name: 'Global' },
  { id: 'us', name: 'United States' },
  { id: 'uk', name: 'United Kingdom' },
  { id: 'jp', name: 'Japan' },
  { id: 'kr', name: 'South Korea' },
  { id: 'br', name: 'Brazil' },
  { id: 'fr', name: 'France' },
  { id: 'de', name: 'Germany' }
];

// Monthly install data
export const monthlyInstallData = [
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

// Keyword ranking data
export const keywordRankings = [
  { keyword: 'squid game', ios: 2, android: 3 },
  { keyword: 'battle royale', ios: 15, android: 12 },
  { keyword: 'party game', ios: 8, android: 10 },
  { keyword: 'netflix games', ios: 1, android: 1 },
  { keyword: 'multiplayer', ios: 20, android: 18 },
  { keyword: 'wwe', ios: 5, android: 4 },
  { keyword: 'wrestling', ios: 10, android: 8 },
  { keyword: 'puzzle games', ios: 12, android: 15 }
];

// Conversion rates by platform
export const conversionRateData = [
  { name: 'iOS', value: 4.2 },
  { name: 'Android', value: 3.8 }
];

// ASO visibility score data
export const visibilityScoreData = [
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

// Country performance data
export const countryPerformanceData = [
  { id: 'us', name: 'United States', installs: '320K', conversion: '4.8%', keywordRank: '#5', visibility: '85/100' },
  { id: 'uk', name: 'United Kingdom', installs: '95K', conversion: '4.5%', keywordRank: '#7', visibility: '82/100' },
  { id: 'kr', name: 'South Korea', installs: '120K', conversion: '5.2%', keywordRank: '#3', visibility: '90/100' },
  { id: 'jp', name: 'Japan', installs: '85K', conversion: '3.9%', keywordRank: '#8', visibility: '78/100' },
  { id: 'br', name: 'Brazil', installs: '105K', conversion: '4.2%', keywordRank: '#6', visibility: '80/100' },
  { id: 'fr', name: 'France', installs: '80K', conversion: '3.8%', keywordRank: '#9', visibility: '75/100' },
  { id: 'de', name: 'Germany', installs: '76K', conversion: '3.7%', keywordRank: '#10', visibility: '74/100' }
];

// Game-specific performance data
export const gamePerformanceData = {
  'squid-game': {
    installs: { total: '580K', ios: '275K', android: '305K' },
    conversion: { ios: '4.5%', android: '4.0%' },
    keywordRank: { ios: '#4', android: '#5' },
    visibility: { ios: '82/100', android: '85/100' }
  },
  'wwe-2k25': {
    installs: { total: '210K', ios: '95K', android: '115K' },
    conversion: { ios: '3.8%', android: '3.5%' },
    keywordRank: { ios: '#8', android: '#6' },
    visibility: { ios: '75/100', android: '80/100' }
  },
  'netflix-puzzled': {
    installs: { total: '91K', ios: '50K', android: '41K' },
    conversion: { ios: '3.5%', android: '3.2%' },
    keywordRank: { ios: '#12', android: '#15' },
    visibility: { ios: '68/100', android: '70/100' }
  }
};
