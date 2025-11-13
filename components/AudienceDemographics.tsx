export default function AudienceDemographics() {
  const ageRanges = [
    { range: '35-44', percent: 39.4 },
    { range: '25-34', percent: 28.6 },
    { range: '45-54', percent: 17.4 },
    { range: '18-24', percent: 7.5 },
    { range: '55-64', percent: 5.0 },
    { range: '65+', percent: 2.1 },
  ]

  const genders = [
    { label: 'Men', percent: 94.2 },
    { label: 'Women', percent: 5.8 },
  ]

  const countries = [
    { name: '🇺🇸 United States', percent: 43.1 },
    { name: '🇮🇳 India', percent: 7.0 },
    { name: '🇬🇧 United Kingdom', percent: 6.5 },
    { name: '🇨🇦 Canada', percent: 3.9 },
    { name: '🇩🇪 Germany', percent: 3.2 },
  ]

  const cities = [
    { name: 'New York', percent: 1.8 },
    { name: 'Lagos', percent: 1.6 },
    { name: 'Los Angeles', percent: 1.5 },
    { name: 'London', percent: 1.4 },
    { name: 'Sydney', percent: 0.8 },
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Audience Insights</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Age Demographics */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></span>
              Age Range
            </h3>
            <div className="space-y-4">
              {ageRanges.map((age) => (
                <div key={age.range}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{age.range}</span>
                    <span className="font-bold text-white">{age.percent}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full progress-bar" 
                      style={{ width: `${age.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gender Demographics */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-pink-400 to-indigo-400 rounded-full mr-3"></span>
              Gender
            </h3>
            <div className="space-y-6">
              {genders.map((gender) => (
                <div key={gender.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{gender.label}</span>
                    <span className="font-bold text-white">{gender.percent}%</span>
                  </div>
                  <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full progress-bar ${
                        gender.label === 'Men' 
                          ? 'bg-gradient-to-r from-pink-500 to-purple-500' 
                          : 'bg-gradient-to-r from-purple-500 to-indigo-500'
                      }`}
                      style={{ width: `${gender.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Top Locations */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full mr-3"></span>
              Top Countries
            </h3>
            <div className="space-y-4">
              {countries.map((country) => (
                <div key={country.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{country.name}</span>
                    <span className="font-bold text-white">{country.percent}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full progress-bar" 
                      style={{ width: `${country.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-700">
              <h4 className="text-lg font-semibold mb-4">Top Cities</h4>
              <div className="space-y-2 text-sm">
                {cities.map((city) => (
                  <div key={city.name} className="flex justify-between">
                    <span className="text-gray-400">{city.name}</span>
                    <span className="text-white font-semibold">{city.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
