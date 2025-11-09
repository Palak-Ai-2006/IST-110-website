'use client'

import { ReactNode, useEffect, useRef } from 'react'

interface FloatingPanelProps {
  children: ReactNode
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  delay?: number
  parallaxSpeed?: number
}

export default function FloatingPanel({ 
  children, 
  position, 
  delay = 0,
  parallaxSpeed = 0.2 
}: FloatingPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  const positionClasses = {
    'top-left': 'top-10 left-10',
    'top-right': 'top-10 right-10',
    'bottom-left': 'bottom-10 left-10',
    'bottom-right': 'bottom-10 right-10',
  }

  useEffect(() => {
    const handleScroll = () => {
      if (panelRef.current) {
        const scrolled = window.scrollY
        panelRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [parallaxSpeed])

  return (
    <div
      ref={panelRef}
      className={`absolute ${positionClasses[position]} w-48 md:w-64 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-sm animate-slide-up`}
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: 'both',
      }}
    >
      {/* Panel header */}
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-white/60" />
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent" />
      </div>
      
      {/* Panel content */}
      <div className="text-white/70 text-xs font-light tracking-wider">
        {children}
      </div>

      {/* Glowing corner accent */}
      <div className="absolute top-0 right-0 w-1 h-1 bg-white/50 shadow-sm shadow-white/50" />
    </div>
  )
}


