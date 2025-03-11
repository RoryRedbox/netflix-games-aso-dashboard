// API route to serve dashboard data
import { 
  monthlyInstallData, 
  keywordRankings, 
  conversionRateData,
  visibilityScoreData,
  countryPerformanceData,
  gamePerformanceData
} from '../../data/sample-data';

export default function handler(req, res) {
  const { platform = 'all', country = 'global', game = 'all' } = req.query;
  
  // Process data based on filters
  let installData;
  if (platform === 'ios' || platform === 'android') {
    installData = monthlyInstallData.map(item => ({
      month: item.month,
      installs: item[platform]
    }));
  } else {
    installData = monthlyInstallData.map(item => ({
      month: item.month,
      installs: item.ios + item.android
    }));
  }

  // Process keyword rankings
  let keywordData;
  if (platform === 'ios' || platform === 'android') {
    keywordData = keywordRankings
      .map(item => ({
        keyword: item.keyword,
        ranking: item[platform]
      }))
      .sort((a, b) => a.ranking - b.ranking)
      .slice(0, 5);
  } else {
    keywordData = keywordRankings
      .map(item => ({
        keyword: item.keyword,
        ranking: Math.round((item.ios + item.android) / 2)
      }))
      .sort((a, b) => a.ranking - b.ranking)
      .slice(0, 5);
  }

  // Process conversion rate data
  let conversionData;
  if (platform === 'all') {
    conversionData = conversionRateData;
  } else {
    conversionData = conversionRateData.filter(item => item.name.toLowerCase() === platform);
  }

  // Process visibility score data
  let visibilityData;
  if (platform === 'ios' || platform === 'android') {
    visibilityData = visibilityScoreData.map(item => ({
      month: item.month,
      score: item[platform]
    }));
  } else {
    visibilityData = visibilityScoreData.map(item => ({
      month: item.month,
      score: Math.round((item.ios + item.android) / 2)
    }));
  }

  // Return filtered data
  res.status(200).json({
    installData,
    keywordData,
    conversionData,
    visibilityData,
    countryData: country === 'global' ? countryPerformanceData : countryPerformanceData.filter(c => c.id === country),
    gameSpecificData: game === 'all' ? null : gamePerformanceData[game]
  });
}
