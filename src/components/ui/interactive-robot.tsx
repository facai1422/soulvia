'use client'

import { useRef, useEffect, useState } from 'react'
import { SplineScene } from '@/components/ui/splite'

export function InteractiveRobot() {
  const containerRef = useRef<HTMLDivElement>(null)
  const robotRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1 // -1 到 1
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1 // -1 到 1
      
      setMousePosition({ x, y })
      
      // 让机器人容器跟随鼠标轻微移动
      if (robotRef.current) {
        const moveX = x * 10 // 限制移动范围
        const moveY = y * 10
        robotRef.current.style.transform = `translate(${moveX}px, ${moveY}px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`
      }
    }

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => {
      setIsHovered(false)
      setMousePosition({ x: 0, y: 0 })
      
      // 重置机器人位置
      if (robotRef.current) {
        robotRef.current.style.transform = 'translate(0px, 0px) rotateY(0deg) rotateX(0deg)'
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseenter', handleMouseEnter)
      container.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full cursor-pointer transition-all duration-300"
      style={{
        transform: isHovered ? 'scale(1.01)' : 'scale(1)',
      }}
    >
      {/* 3D Robot Scene with Movement */}
      <div 
        ref={robotRef}
        className="absolute inset-0 transition-transform duration-200 ease-out"
      >
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      
      {/* Mouse Tracking Particles */}
      {isHovered && (
        <>
          {/* Main cursor indicator */}
          <div 
            className="absolute w-3 h-3 bg-blue-400/60 rounded-full pointer-events-none transition-all duration-150 ease-out"
            style={{
              left: `${(mousePosition.x + 1) * 50}%`,
              top: `${(mousePosition.y + 1) * 50}%`,
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
            }}
          />
          
          {/* Trailing particles */}
          <div 
            className="absolute w-2 h-2 bg-purple-400/40 rounded-full pointer-events-none transition-all duration-300 ease-out"
            style={{
              left: `${(mousePosition.x + 1) * 50 - 2}%`,
              top: `${(mousePosition.y + 1) * 50 - 2}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
          <div 
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full pointer-events-none transition-all duration-500 ease-out"
            style={{
              left: `${(mousePosition.x + 1) * 50 - 4}%`,
              top: `${(mousePosition.y + 1) * 50 - 4}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        </>
      )}
      
      {/* Hover Effect Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Interactive Status */}
      <div className={`absolute top-4 left-4 text-white/70 text-xs transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <div className="flex items-center space-x-2 bg-black/50 px-3 py-2 rounded-full backdrop-blur-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Interactive Mode Active</span>
        </div>
      </div>
      
      {/* Mouse Position Debug (Optional) */}
      {isHovered && (
        <div className="absolute bottom-4 right-4 text-white/50 text-xs font-mono">
          <div className="bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
            X: {mousePosition.x.toFixed(2)} Y: {mousePosition.y.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  )
}