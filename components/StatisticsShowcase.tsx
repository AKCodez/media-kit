import Image from 'next/image'

export default function StatisticsShowcase() {
  const stats = [
    { src: '/statistics/IMG_3042.PNG', alt: 'Professional Dashboard' },
    { src: '/statistics/IMG_3043.PNG', alt: 'Follower Growth' },
    { src: '/statistics/IMG_3044.PNG', alt: 'Top Locations' },
    { src: '/statistics/IMG_3045.PNG', alt: 'Age Demographics' },
    { src: '/statistics/IMG_3046.PNG', alt: 'Gender Demographics' },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-purple-900/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Analytics Dashboard</span>
        </h2>
        <p className="text-center text-gray-400 mb-16">Oct 13 - Nov 12, 2024</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`glass-effect rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <Image 
                src={stat.src} 
                alt={stat.alt} 
                width={800}
                height={1200}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
