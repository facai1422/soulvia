'use client'

import React, { useState, useEffect } from 'react'
import { Shield, Lock, Eye, EyeOff, Users, MessageCircle } from 'lucide-react'
import { GeometricBackground } from '@/components/ui/geometric-background'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentFeature, setCurrentFeature] = useState(0)
  
  const features = [
    { icon: Shield, text: "Military-grade encryption" },
    { icon: EyeOff, text: "True anonymity guaranteed" },
    { icon: Lock, text: "Zero data collection" },
    { icon: Users, text: "Anonymous group chats" }
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-[#030303] overflow-hidden">
      {/* Geometric Background */}
      <GeometricBackground />

      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-full text-primary-300 text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Trusted by 500K+ users worldwide
              </div>
              
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight">
                Your Voice,
                <span className="block gradient-text">Your Privacy</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl">
                Experience true digital freedom with Soulvia. Share your authentic thoughts 
                without fear, connect anonymously, and protect your privacy with military-grade encryption.
              </p>
            </div>

            {/* Rotating features */}
            <div className="flex items-center space-x-3 h-12">
              <div className="flex items-center justify-center w-10 h-10 bg-primary-500/20 rounded-lg">
                {React.createElement(features[currentFeature].icon, { 
                  className: "w-5 h-5 text-primary-400" 
                })}
              </div>
              <span className="text-gray-300 font-medium">
                {features[currentFeature].text}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="https://apps.apple.com/us/app/soulvia/id6745585268?l=zh-Hans-CN"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-2xl shadow-primary-500/25 hover:shadow-primary-500/40 inline-block text-center"
              >
                Download Soulvia App
              </a>
              <a 
                href="/3d-experience" 
                className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Experience in 3D
              </a>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:space-x-6 lg:space-x-8 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">500K+</div>
                <div className="text-xs sm:text-sm text-gray-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">99.9%</div>
                <div className="text-xs sm:text-sm text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">0</div>
                <div className="text-xs sm:text-sm text-gray-400">Data Breaches</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative mt-8 lg:mt-0 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main device mockup */}
              <div className="relative z-10 bg-gradient-to-br from-dark-700 to-dark-800 rounded-3xl p-4 sm:p-6 shadow-2xl border border-gray-700/50">
                <div className="bg-dark-900 rounded-2xl p-3 sm:p-4 h-80 sm:h-96">
                  {/* Chat interface mockup */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm sm:text-base">Anonymous Room</div>
                          <div className="text-gray-400 text-xs sm:text-sm">24 members online</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-xs">Encrypted</span>
                      </div>
                    </div>
                    
                    {/* Mock messages */}
                    <div className="space-y-2 sm:space-y-3">
                      <div className="bg-primary-500/20 rounded-xl p-2 sm:p-3 max-w-xs">
                        <div className="text-gray-300 text-xs sm:text-sm">Finally a place where I can share my real thoughts...</div>
                        <div className="text-gray-500 text-xs mt-1">Anonymous • 2m ago</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-xl p-2 sm:p-3 max-w-xs ml-auto">
                        <div className="text-gray-300 text-xs sm:text-sm">This feels so liberating! 🎭</div>
                        <div className="text-gray-500 text-xs mt-1 text-right">You • now</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating security badges */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-green-500 text-white p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg animate-float">
                <Lock className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-primary-500 text-white p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <Shield className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}