'use client'

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-black">
      {/* Animated floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-3/4 right-1/3 w-24 h-24 bg-blue-500/30 rounded-full blur-lg animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-cyan-500/25 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-md animate-bounce" style={{animationDelay: '0.5s'}}></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-16 left-16 w-2 h-2 bg-white/40 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
      <div className="absolute bottom-16 right-16 w-3 h-3 bg-purple-400/60 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 left-2/3 w-1 h-8 bg-gradient-to-b from-blue-400 to-transparent animate-pulse"></div>
      
      {/* Moving gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse" style={{animationDuration: '4s'}}></div>
      
      {/* Subtle mesh pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, purple 2px, transparent 2px),
                          radial-gradient(circle at 75% 75%, blue 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
    </div>
  )
}