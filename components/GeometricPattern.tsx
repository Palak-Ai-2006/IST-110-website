'use client'

import { useEffect, useRef } from 'react'

export default function GeometricPattern() {
  const patternRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (patternRef.current) {
        const scrolled = window.scrollY
        const patternElement = patternRef.current.closest('section')
        if (patternElement) {
          const rect = patternElement.getBoundingClientRect()
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0
          
          if (isVisible) {
            const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))
            patternRef.current.style.opacity = String(scrollProgress)
            patternRef.current.style.transform = `translateY(${scrollProgress * 20}px)`
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={patternRef} className="relative w-full h-full opacity-0 transition-opacity duration-1000">
      <svg
        className="w-full h-full"
        viewBox="0 0 400 600"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
          </linearGradient>
        </defs>

        {/* Animated lines */}
        <g className="animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <line
            x1="50"
            y1="0"
            x2="50"
            y2="600"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-pulse-slow"
          />
          <line
            x1="150"
            y1="0"
            x2="150"
            y2="600"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-pulse-slow"
            style={{ animationDelay: '0.3s' }}
          />
          <line
            x1="250"
            y1="0"
            x2="250"
            y2="600"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-pulse-slow"
            style={{ animationDelay: '0.4s' }}
          />
          <line
            x1="350"
            y1="0"
            x2="350"
            y2="600"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-pulse-slow"
            style={{ animationDelay: '0.5s' }}
          />
        </g>

        {/* Geometric shapes */}
        <g className="animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          {/* Hexagon */}
          <polygon
            points="200,100 250,150 200,200 150,200 100,150 150,100"
            fill="none"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1"
            className="animate-spin-slow"
            style={{ transformOrigin: '200px 150px' }}
          />
          
          {/* Triangle */}
          <polygon
            points="300,300 350,400 250,400"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
            className="animate-pulse-slow"
            style={{ animationDelay: '0.8s' }}
          />
          
          {/* Square */}
          <rect
            x="50"
            y="400"
            width="80"
            height="80"
            fill="none"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1"
            className="animate-pulse-slow"
            style={{ animationDelay: '1s' }}
          />
        </g>

        {/* Connecting dots */}
        <g className="animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          {[
            { x: 100, y: 150 },
            { x: 200, y: 250 },
            { x: 300, y: 350 },
            { x: 150, y: 450 },
            { x: 250, y: 500 },
          ].map((point, i) => (
            <circle
              key={i}
              cx={point.x}
              cy={point.y}
              r="2"
              fill="rgba(255, 255, 255, 0.3)"
              className="animate-pulse"
              style={{ animationDelay: `${0.5 + i * 0.2}s` }}
            />
          ))}
        </g>
      </svg>
    </div>
  )
}


