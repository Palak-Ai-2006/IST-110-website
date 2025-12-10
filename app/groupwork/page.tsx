import ProjectCard from '@/components/ProjectCard'

const assignments = [
  {
    title: 'Group Assignment 1',
    description: 'Placeholder description for collaborative project outcomes and goals.',
    groupMates: 'Add group members',
  },
  {
    title: 'Group Assignment 2',
    description: 'Placeholder description for planning, research, and execution steps.',
    groupMates: 'Add group members',
  },
  {
    title: 'Group Assignment 3',
    description: 'Placeholder description for final presentation or prototype details.',
    groupMates: 'Add group members',
  },
]

export default function GroupWorkPage() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-gradient-to-b from-black via-black to-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">IST 110</p>
          <h1 className="text-4xl md:text-5xl font-light metallic-text">Group Work</h1>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {assignments.map((assignment, index) => (
            <ProjectCard
              key={assignment.title}
              title={assignment.title}
              description={assignment.description}
              tags={['IST 110', 'Collaboration']}
              slideFrom={index % 2 === 0 ? 'left' : 'right'}
              isVisible
              meta={[{ label: 'Group Mates', value: assignment.groupMates }]}
              reflection="Add a quick note about what your team learned together."
              showPlaceholders
              imagePlaceholder={
                <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-wide text-white/50">
                  Add screenshot
                </div>
              }
            />
          ))}
        </div>
      </div>
    </main>
  )
}


