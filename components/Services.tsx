export default function Services() {
  const services = [
    'Dedicated Instagram Reels & TikToks',
    'Authentic "Day in the Life" Story Content',
    'Cross-Platform Promotion',
    'Paid Content Usage Rights',
    'Brand Ambassadorship',
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-purple-900/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Collaboration Opportunities</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="glass-effect rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></span>
              Services Offered
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-start group">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-2 mr-3 group-hover:scale-150 transition-transform"></div>
                  <span className="text-base text-gray-300 group-hover:text-white transition-colors">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
