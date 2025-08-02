'use client'

import AnonymityCard from '@/components/AnonymityCard'
import { InteractiveRobot } from '@/components/ui/interactive-robot'
import { Sparkles } from 'lucide-react'

export function Anonymity3DShowcase() {
  return (
    <section className="relative py-20 min-h-screen overflow-hidden bg-black">
      {/* Content Layout - Split Left/Right */}
      <div className="relative z-10 container mx-auto px-4 h-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Featured: Interactive 3D Experience
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            True Anonymity in 
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              3D Space
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            Experience our anonymity features in an immersive 3D environment. 
            Interact with the scene while exploring privacy protection.
          </p>
        </div>
        
        {/* Split Layout: Card Left, 3D Robot Right */}
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[600px]">
          {/* Left Side - Anonymity Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-2xl rounded-3xl"></div>
              
              {/* Main card */}
              <div className="relative">
                <AnonymityCard />
              </div>
            </div>
          </div>
          
          {/* Right Side - Interactive 3D Robot */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm">
            <InteractiveRobot />
            
            {/* Subtle border and glow */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl pointer-events-none"></div>
          </div>
        </div>
        
        {/* Interactive hints */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 text-white/60 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
              Mouse over robot to interact
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              Drag to rotate view
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Scroll to zoom
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}