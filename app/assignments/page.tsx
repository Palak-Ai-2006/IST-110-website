import ContentCard from '@/components/ContentCard'

const assignments = [
  { title: 'Assignment 1: Foundations' },
  { title: 'Assignment 2: Research Brief' },
  { title: 'Assignment 3: Prototype Planning' },
  { title: 'Assignment 4: User Testing' },
  { title: 'Assignment 5: Iteration' },
  { title: 'Assignment 6: Final Submission' },
]

export default function AssignmentsPage() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-gradient-to-b from-black via-black to-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">IST 110</p>
          <h1 className="text-4xl md:text-5xl font-light metallic-text">Individual Assignments</h1>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {assignments.map((assignment) => (
            <ContentCard
              key={assignment.title}
              title={assignment.title}
              description="Add a short description of the assignment goals."
              reflection="Add your personal takeaways or challenges."
              metadata={[
                { label: 'Screenshot', value: 'Add an image or link' },
                { label: 'Notes', value: 'Add tools, methods, or requirements' },
              ]}
              showPlaceholders
            />
          ))}
        </div>
      </div>
    </main>
  )
}


