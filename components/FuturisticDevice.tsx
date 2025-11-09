'use client'

import { useEffect, useRef } from 'react'

export default function FuturisticDevice() {
  const deviceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (deviceRef.current) {
        const scrolled = window.scrollY
        const parallaxSpeed = 0.3
        deviceRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(${1 - scrolled * 0.0001})`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      ref={deviceRef}
      className="relative w-64 h-64 md:w-96 md:h-96 animate-fade-in"
      style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
    >
      {/* Main device structure */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outer ring */}
        <div className="absolute w-full h-full border-2 border-white/20 rounded-full animate-pulse-slow">
          <div className="absolute inset-0 border border-white/10 rounded-full" />
        </div>
        
        {/* Middle ring */}
        <div className="absolute w-3/4 h-3/4 border border-white/30 rounded-full">
          <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-slow" 
               style={{ animationDuration: '20s' }} />
        </div>
        
        {/* Inner core */}
        <div className="absolute w-1/2 h-1/2 bg-gradient-to-br from-white/10 to-white/5 rounded-full backdrop-blur-sm border border-white/20">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-full" />
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/50" />
        </div>
      </div>

      {/* Grid lines overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
          <defs>
            <pattern id="device-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#device-grid)" />
        </svg>
      </div>

      {/* Glowing corner accents */}
      {[
        { top: '10%', left: '10%' },
        { top: '10%', right: '10%' },
        { bottom: '10%', left: '10%' },
        { bottom: '10%', right: '10%' },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50 animate-pulse"
          style={{
            ...pos,
            animationDelay: `${i * 0.2}s`,
            animationDuration: '2s',
          }}
        />
      ))}

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <line
          x1="50%"
          y1="50%"
          x2="20%"
          y2="20%"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="animate-dash"
        />
        <line
          x1="50%"
          y1="50%"
          x2="80%"
          y2="20%"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="animate-dash"
          style={{ animationDelay: '0.5s' }}
        />
        <line
          x1="50%"
          y1="50%"
          x2="20%"
          y2="80%"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="animate-dash"
          style={{ animationDelay: '1s' }}
        />
        <line
          x1="50%"
          y1="50%"
          x2="80%"
          y2="80%"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="animate-dash"
          style={{ animationDelay: '1.5s' }}
        />
      </svg>
    </div>
  )
}

