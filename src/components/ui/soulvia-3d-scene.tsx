'use client'

import { SplineScene } from '@/components/ui/splite'
import { Shield, Lock, Eye, Users } from 'lucide-react'

export function Soulvia3DScene() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black overflow-hidden">
      {/* 3D Scene Background */}
      <div className="absolute inset-0">
        <SplineScene 
          scene="https://prod.spline.design/6Wq5p4LZ2zSIzKal/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-purple-200 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Experience Soulvia in 3D
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-white to-blue-400">
                Anonymous
              </span>
              <br />
              <span className="text-white">
                Communication
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Reimagined
              </span>
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Step into the future of private communication. Experience true digital freedom 
              with military-grade encryption and complete anonymity.
            </p>
          </div>
          
          {/* Feature Pills */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Lock, label: "End-to-End Encrypted" },
              { icon: Eye, label: "Zero Data Collection" },
              { icon: Users, label: "Anonymous Groups" },
              { icon: Shield, label: "Military Grade Security" }
            ].map((feature, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <feature.icon className="w-5 h-5 text-purple-300 mr-2" />
                <span className="text-sm text-white font-medium">{feature.label}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25">
              Start Anonymous Chat
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300">
              Explore Features
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-8 left-8 text-white/60 text-sm">
        <p>Drag to rotate • Scroll to zoom</p>
      </div>
      
      <div className="absolute top-8 right-8 text-white/60 text-sm">
        <p className="flex items-center">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
          Live 3D Experience
        </p>
      </div>
    </div>
  )
}