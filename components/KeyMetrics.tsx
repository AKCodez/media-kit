export default function KeyMetrics() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Performance Metrics</span>
          <span className="flex items-center gap-3">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </span>
        </h2>
        
        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Followers */}
          <div className="stat-card glass-effect rounded-2xl p-8 text-center">
            <div className="text-5xl sm:text-6xl font-black mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">120K+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider mb-3">Total Followers</div>
            <div className="text-green-400 text-sm font-semibold">Across All Platforms</div>
          </div>
          
          {/* Views */}
          <div className="stat-card glass-effect rounded-2xl p-8 text-center">
            <div className="text-5xl sm:text-6xl font-black mb-2 bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent">7.5M+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider mb-3">Total Views</div>
            <div className="text-green-400 text-sm font-semibold">↑ Trending</div>
          </div>
          
          {/* Interactions */}
          <div className="stat-card glass-effect rounded-2xl p-8 text-center">
            <div className="text-5xl sm:text-6xl font-black mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">1.2M+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider mb-3">Interactions</div>
            <div className="text-green-400 text-sm font-semibold">↑ Trending</div>
          </div>
          
          {/* New Followers */}
          <div className="stat-card glass-effect rounded-2xl p-8 text-center">
            <div className="text-5xl sm:text-6xl font-black mb-2 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">125K+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider mb-3">New Followers</div>
            <div className="text-gray-500 text-xs">Last 30 days</div>
          </div>
        </div>
        
        {/* Platforms */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Active Platforms</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://instagram.com/ariacodez" target="_blank" rel="noopener noreferrer" className="px-6 py-3 glass-effect rounded-full font-semibold hover:scale-105 transition-transform cursor-pointer">Instagram</a>
            <a href="https://tiktok.com/@ariacodez" target="_blank" rel="noopener noreferrer" className="px-6 py-3 glass-effect rounded-full font-semibold hover:scale-105 transition-transform cursor-pointer">TikTok</a>
            <a href="https://youtube.com/@ariacodez" target="_blank" rel="noopener noreferrer" className="px-6 py-3 glass-effect rounded-full font-semibold hover:scale-105 transition-transform cursor-pointer">YouTube Shorts</a>
          </div>
        </div>
      </div>
    </section>
  )
}
