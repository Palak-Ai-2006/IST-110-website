import ProjectCard from '@/components/ProjectCard'

const assignments = [
  {
    title: 'Group Assignment 1',
    description: 'Placeholder description for collaborative project outcomes and goals.',
    groupMates: 'Kelcey Avau',
    image: '/groupwork/groupwork1.png',
    link:'https://pennstateoffice365-my.sharepoint.com/:w:/r/personal/pkc5358_psu_edu/Documents/IST%20110%20Treasure%20Hunt.docx?d=wfa88eaaa234348e18d76263bebb693ec&csf=1&web=1&e=v9eQkc',
    reflection: '',
  },
  {
    title: 'OSINT',
    description: 'Placeholder description for planning, research, and execution steps.',
    groupMates: 'Kelcey Avau',
    image: '/groupwork/groupwork2.png',
    link:'https://pennstateoffice365-my.sharepoint.com/:p:/g/personal/pkc5358_psu_edu/IQCVyNzRBV_CQ7YteDLuIe88AdsqghffNRXmHd72Yjefwwk?e=VKlY0D',
    reflection: '',
  },
  {
    title: 'Cryptography',
    description: 'Placeholder description for final presentation or prototype details.',
    groupMates: 'Kelcey Avau',
    image: '/groupwork/groupwork3.png',
    link: 'https://pennstateoffice365-my.sharepoint.com/:i:/g/personal/pkc5358_psu_edu/IQC0sXRFc8HxQ4ufsLfsXdtKAWasMEGuU59fCmRb8HUGm3I?e=gF7usP',
    reflection: '',
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
              image={assignment.image}  // ADD THIS: Pass the image prop
              link={assignment.link}
              meta={[{ label: 'Group Mates', value: assignment.groupMates }]}
              reflection="Add a quick note about what your team learned together."
              showPlaceholders
              
            />
          ))}
        </div>
      </div>
    </main>
  )
}



