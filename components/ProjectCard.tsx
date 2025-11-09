'use client'

import { ReactNode } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imagePlaceholder?: ReactNode
  slideFrom: 'left' | 'right'
  isVisible: boolean
}

export default function ProjectCard({
  title,
  description,
  tags,
  imagePlaceholder,
  slideFrom,
  isVisible,
}: ProjectCardProps) {
  return (
    <div
      className={`flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8 bg-black/40 backdrop-blur-sm border border-white/10 rounded-sm transition-all duration-1000 ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : slideFrom === 'left'
          ? 'opacity-0 -translate-x-20'
          : 'opacity-0 translate-x-20'
      }`}
    >
      {/* Image placeholder area */}
      <div className="w-full md:w-1/3 flex-shrink-0">
        <div className="relative w-full aspect-video md:aspect-square border border-white/10 rounded-sm bg-gradient-to-br from-white/5 to-white/0 overflow-hidden">
          {imagePlaceholder || (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-white/20 rounded-sm flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white/20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          )}
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
            }}
          />
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-4">
          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-light tracking-tight metallic-text">
            {title}
          </h3>

          {/* Description */}
          <p className="text-white/70 text-base md:text-lg font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs md:text-sm font-light tracking-wide border border-white/20 rounded-sm bg-black/40 text-white/70 hover:border-white/40 hover:text-white transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 right-0 w-1 h-1 bg-white/20" />
      <div className="absolute bottom-0 left-0 w-1 h-1 bg-white/20" />
    </div>
  )
}


