'use client'

import { useEffect, useState, useCallback } from 'react'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolling, setIsScrolling] = useState(false)

  const sections = ['hero', 'about', 'ist110', 'skills', 'projects', 'contact']

  const updateActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY
    const viewportHeight = window.innerHeight
    const threshold = viewportHeight * 0.3 // Lower threshold for better detection

    // Find which section is currently in view
    let currentSection = sections[0]
    
    for (let i = 0; i < sections.length; i++) {
      const sectionId = sections[i]
      const element = document.getElementById(sectionId)
      if (element) {
        const { offsetTop, offsetHeight } = element
        const sectionBottom = offsetTop + offsetHeight
        
        // Check if scroll position is within this section's bounds
        if (scrollPosition >= offsetTop - threshold && scrollPosition < sectionBottom) {
          currentSection = sectionId
          break
        }
      }
    }
    
    setActiveSection(currentSection)
  }, [sections])

  useEffect(() => {
    // Initial check
    updateActiveSection()

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection()
          ticking = false
        })
        ticking = true
      }
    }

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Also listen for scroll end to handle scroll-snap
    let scrollTimeout: NodeJS.Timeout
    const handleScrollWithSnap = () => {
      setIsScrolling(true)
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
        updateActiveSection()
      }, 150)
    }

    window.addEventListener('scroll', handleScrollWithSnap, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleScrollWithSnap)
      clearTimeout(scrollTimeout)
    }
  }, [updateActiveSection])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      setIsScrolling(true)
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      })
      
      // Update active section after scroll
      setTimeout(() => {
        setActiveSection(sectionId)
        setIsScrolling(false)
      }, 100)
    }
  }

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'ist110', label: 'IST110' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full transition-all duration-300">
      <div className="flex items-center gap-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative text-xs font-light tracking-wider transition-all duration-300 uppercase ${
              activeSection === item.id
                ? 'text-white'
                : 'text-white/40 hover:text-white/70'
            }`}
          >
            {item.label}
            {activeSection === item.id && (
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-white/50" />
            )}
          </button>
        ))}
      </div>
    </nav>
  )
}

