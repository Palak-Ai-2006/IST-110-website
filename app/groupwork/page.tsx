import ProjectCard from '@/components/ProjectCard'

const assignments = [
  {
    title: 'Treasure Hunt',
    description: "A collaborative activity where our group analyzed three research articles on information overload, digital literacy, and decision-making. We summarized key findings and connected them to real-world information management challenges.",
    groupMates: 'Kelcey Avau',
    image: '/groupwork/groupwork1.png',
    link:'https://pennstateoffice365-my.sharepoint.com/:w:/g/personal/pkc5358_psu_edu/IQCq6oj6QyPhSI12JjvrtpPsAeYm7prXR7PYL4Rkjwtn4pM?e=jbN25w',
    reflection:'This project strengthened my research and synthesis skills. Working with my team helped me understand how information overload affects productivity and decision-making, and it showed me the value of communicating complex ideas clearly.',
  },
  {
    title: 'OSINT',
    description: 'A group presentation introducing OSINT tools such as WHOIS, Shodan, and the Wayback Machine. We covered how social media analytics and domain research support cybersecurity, marketing, and investigative work.',
    groupMates: 'Kelcey Avau',
    image: '/groupwork/groupwork2.png',
    link:'https://pennstateoffice365-my.sharepoint.com/:p:/g/personal/pkc5358_psu_edu/IQCVyNzRBV_CQ7YteDLuIe88AdsqghffNRXmHd72Yjefwwk?e=neaxab',
    reflection: 'This project improved my understanding of how publicly available data can be used ethically and effectively. It also helped me build confidence in explaining technical concepts and collaborating on a professional-style presentation.',
  },
  {
    title: 'Cryptography',
    description: 'A teamwork-based assignment focused on analyzing a class topic and presenting the information visually. Our group combined research, discussion, and design to create an easy-to-understand overview.',
    groupMates: 'Kelcey Avau',
    image: '/groupwork/groupwork3.png',
    link: 'https://pennstateoffice365-my.sharepoint.com/:i:/g/personal/pkc5358_psu_edu/IQC0sXRFc8HxQ4ufsLfsXdtKAWasMEGuU59fCmRb8HUGm3I?e=gF7usP',
    reflection: 'This project emphasized the importance of communication and collaboration. I learned how to divide tasks efficiently and contribute to a clear, cohesive final product.',
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
              reflection={assignment.reflection}
              showPlaceholders={!assignment.reflection}
              
            />
          ))}
        </div>
      </div>
    </main>
  )
}



