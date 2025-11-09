'use client'

import { useEffect, useRef, useState } from 'react'
import GeometricPattern from '@/components/GeometricPattern'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="scene relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-16 md:py-20"
    >
      {/* Left side - Text content */}
      <div
        ref={contentRef}
        className={`w-full md:w-1/2 space-y-8 transition-all duration-1000 ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-10'
        }`}
      >
        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-light tracking-tight metallic-text">
            About
          </h2>
          
          <div className="space-y-6 text-white/80 font-light leading-relaxed">
            <p className="text-lg md:text-xl lg:text-2xl">
              I'm a Computer Science student with a deep passion for robotics and artificial intelligence.
            </p>
            
            <p className="text-base md:text-lg lg:text-xl text-white/70">
              Exploring the intersection of code and intelligent systems, I'm fascinated by how machines can learn, adapt, and interact with the world around them.
            </p>
            
            <p className="text-base md:text-lg lg:text-xl text-white/70">
              Through my studies and projects, I'm building the foundation to create innovative solutions that bridge the gap between human intelligence and machine capabilities.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Geometric pattern */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center mt-12 md:mt-0">
        <div className="w-full max-w-md h-96 md:h-[500px] relative">
          <GeometricPattern />
        </div>
      </div>

      {/* Subtle background accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
