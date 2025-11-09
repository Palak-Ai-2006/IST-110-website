'use client'

import { useEffect, useRef, useState } from 'react'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleCards((prev) => {
              const newSet = new Set(prev)
              newSet.add(index)
              return newSet
            })
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    const cardElements = sectionRef.current?.querySelectorAll('[data-index]')
    cardElements?.forEach((card) => observer.observe(card))

    return () => {
      cardElements?.forEach((card) => observer.unobserve(card))
    }
  }, [])

  const projects = [
    {
      title: 'Autonomous Navigation System',
      description:
        'Developed an AI-powered navigation system for autonomous robots using computer vision and machine learning algorithms. Implemented real-time obstacle detection and path planning.',
      tags: ['AI', 'Robotics', 'Python', 'Computer Vision'],
      slideFrom: 'left' as const,
    },
    {
      title: 'Neural Network Framework',
      description:
        'Built a custom deep learning framework from scratch to understand the fundamentals of neural networks. Includes implementations of various optimization algorithms and activation functions.',
      tags: ['AI/ML', 'Python', 'Deep Learning'],
      slideFrom: 'right' as const,
    },
    {
      title: 'Robotic Arm Controller',
      description:
        'Designed and implemented a control system for a 6-DOF robotic arm with inverse kinematics. Features real-time trajectory planning and smooth motion control.',
      tags: ['Robotics', 'C++', 'Control Systems'],
      slideFrom: 'left' as const,
    },
    {
      title: 'Web-Based AI Dashboard',
      description:
        'Created an interactive web dashboard for visualizing and managing AI model training. Features real-time metrics, model comparison, and experiment tracking.',
      tags: ['Web Development', 'AI', 'React', 'Python'],
      slideFrom: 'right' as const,
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="scene relative flex flex-col items-center justify-start px-6 md:px-12 lg:px-24 py-16 md:py-20"
    >
      {/* Section header */}
      <div className="w-full max-w-7xl mb-12">
        <h2 className="text-5xl md:text-7xl font-light tracking-tight metallic-text text-center mb-4">
          Projects
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto" />
      </div>

      {/* Projects grid */}
      <div className="w-full max-w-7xl space-y-8 md:space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            data-index={index}
            className="relative"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              slideFrom={project.slideFrom}
              isVisible={visibleCards.has(index)}
            />
          </div>
        ))}
      </div>

      {/* Subtle background accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
