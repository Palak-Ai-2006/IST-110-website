import ContentCard from '@/components/ContentCard'

type Assignment = {
  title: string
  description?: string
  reflection?: string
  image?: string
  preview?: string
  link?: string
  metadata?: { label: string; value: string }[]
}

const assignments: Assignment[] = [
  { 
    title: 'Assignment 1: Foundations', 
    description: 'This assignment introduced the fundamental concepts of information systems and technology.',
    reflection: 'This assignment helped me understand the core principles of IST.',
    // Use preview (OneDrive embed) - This will show an embedded preview
    preview: 'https://pennstateoffice365-my.sharepoint.com/personal/pkc5358_psu_edu/_layouts/15/Doc.aspx?sourcedoc={fa88eaaa-2343-48e1-8d76-263bebb693ec}&action=embedview&wdStartOn=1&wdEmbedCode=0&wdHideHeaders=1',
    link: 'https://pennstateoffice365-my.sharepoint.com/:w:/r/personal/pkc5358_psu_edu/Documents/IST%20110%20Treasure%20Hunt.docx?d=wfa88eaaa234348e18d76263bebb693ec&csf=1&web=1&e=v9eQkc',
    metadata: [
      { label: 'Format', value: 'Microsoft Word Document' },
      { label: 'Date Completed', value: 'January 15, 2024' },
    ]
  },
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
              description={assignment.description}
              reflection={assignment.reflection}
              image={assignment.image}
              preview={assignment.preview}
              link={assignment.link}
              metadata={assignment.metadata}
              showPlaceholders={!assignment.description}
            />
          ))}
        </div>
      </div>
    </main>
  )
}



