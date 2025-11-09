'use client'

import { useEffect, useRef } from 'react'
import FuturisticDevice from '@/components/FuturisticDevice'
import FloatingPanel from '@/components/FloatingPanel'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current && heroRef.current) {
        const scrolled = window.scrollY
        const heroHeight = heroRef.current.offsetHeight
        const scrollProgress = Math.min(scrolled / heroHeight, 1)
        
        // Parallax effect for text
        textRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
        textRef.current.style.opacity = `${1 - scrollProgress * 0.5}`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="scene relative overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Glowing lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>

      {/* Center device */}
      <div className="relative z-10 mb-8">
        <FuturisticDevice />
      </div>

      {/* Main text */}
      <div 
        ref={textRef}
        className="relative z-10 text-center px-6 animate-fade-in"
        style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
      >
        <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-light tracking-tighter mb-4 metallic-text leading-none">
          MAESTRO
        </h1>
        <p className="text-xs md:text-sm lg:text-base text-white/60 font-light tracking-widest uppercase mt-2">
          Designed & Engineered by Palak
        </p>
      </div>

      {/* Floating UI Panels */}
      <FloatingPanel position="top-left" delay={0.6} parallaxSpeed={0.15}>
        <div className="space-y-2">
          <div className="text-white/50 text-[10px] uppercase tracking-widest">System Status</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400/50 animate-pulse" />
            <span className="text-white/70">Operational</span>
          </div>
        </div>
      </FloatingPanel>

      <FloatingPanel position="top-right" delay={0.8} parallaxSpeed={0.25}>
        <div className="space-y-2">
          <div className="text-white/50 text-[10px] uppercase tracking-widest">Connection</div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-white/20">
              <div className="h-full w-3/4 bg-white/40 animate-pulse" />
            </div>
            <span className="text-white/70 text-[10px]">75%</span>
          </div>
        </div>
      </FloatingPanel>

      <FloatingPanel position="bottom-left" delay={1.0} parallaxSpeed={0.2}>
        <div className="space-y-2">
          <div className="text-white/50 text-[10px] uppercase tracking-widest">Energy Level</div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex-1 h-1 bg-white/20"
                style={{
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div 
                  className="h-full bg-white/60 animate-pulse"
                  style={{
                    width: `${(i + 1) * 20}%`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </FloatingPanel>

      <FloatingPanel position="bottom-right" delay={1.2} parallaxSpeed={0.18}>
        <div className="space-y-2">
          <div className="text-white/50 text-[10px] uppercase tracking-widest">Protocol</div>
          <div className="font-mono text-white/70 text-[10px] tracking-wider">
            MAESTRO_v2.0
          </div>
        </div>
      </FloatingPanel>

      {/* Corner accent lines */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-white/10" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-white/10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-white/10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-white/10" />
    </section>
  )
}
