export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-animated bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 opacity-50"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headshot */}
        <div className="mb-8 flex justify-center animate-float">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-full blur-2xl opacity-50"></div>
            <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 border-4 border-white/20 shadow-2xl flex items-center justify-center backdrop-blur-sm">
              <span className="text-6xl font-black">AC</span>
            </div>
          </div>
        </div>
        
        {/* Name */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            @AriaCodez
          </span>
        </h1>
        
        {/* Tagline */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-lg sm:text-xl">
          <span className="px-4 py-2 glass-effect rounded-full">Tech</span>
          <span className="px-4 py-2 glass-effect rounded-full">Productivity</span>
          <span className="px-4 py-2 glass-effect rounded-full">Lifestyle</span>
        </div>
        
        {/* About */}
        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
          Full-stack engineer and content creator focused on technology, productivity, and the &quot;work-from-anywhere&quot; lifestyle. My audience consists of highly-engaged developers, tech professionals, and digital nomads who are passionate about high-value tools and experiences.
        </p>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
