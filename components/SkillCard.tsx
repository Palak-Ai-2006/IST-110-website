'use client'

import { ReactNode } from 'react'

interface SkillCardProps {
  title: string
  icon: ReactNode
  description?: string
}

export default function SkillCard({ title, icon, description }: SkillCardProps) {
  return (
    <div className="group relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-sm p-6 transition-all duration-300 hover:scale-105 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:via-white/5 group-hover:to-white/5 transition-all duration-300 opacity-0 group-hover:opacity-100" />
      
      {/* Additional glow ring */}
      <div className="absolute inset-0 rounded-sm border border-white/0 group-hover:border-white/20 transition-all duration-300" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        {/* Icon placeholder */}
        <div className="w-16 h-16 flex items-center justify-center border border-white/20 rounded-sm bg-black/40 group-hover:border-white/40 transition-all duration-300">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="text-lg md:text-xl font-light tracking-wide text-white group-hover:metallic-text transition-all duration-300">
          {title}
        </h3>
        
        {/* Description */}
        {description && (
          <p className="text-sm text-white/60 font-light leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-1 h-1 bg-white/20 group-hover:bg-white/50 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 w-1 h-1 bg-white/20 group-hover:bg-white/50 transition-all duration-300" />
    </div>
  )
}

