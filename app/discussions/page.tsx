import ContentCard from '@/components/ContentCard'

type Discussion = {
  title: string
  description: string
  reflection: string
  image?: string
  preview?: string
  link?: string
  metadata?: { label: string; value: string }[]
}

const discussions: Discussion[] = [
  {
    title: 'Discussion 1',
    description: 'This discussion examined how databases collect personal information and how different generations perceive privacy risks.',
    reflection: 'I learned that young people do care about privacy, but they balance it with convenience. Research helped me understand how widespread data concerns are and why stronger protections and transparency are needed in modern digital systems.',
    image: '/discussions/Diss 1.png',
    link: '/discussions/Diss 1.png',
    metadata: [
      { label: 'Date', value: 'November 8, 2025' },
      { label: 'Topic', value: 'Database Technology and Privacy Issues' },
    ],
  },
  {
    title: 'Discussion 2',
    description: 'This post explored the difference between the Internet’s network infrastructure and the Web as a service built on top of it.',
    reflection: 'Writing this helped me understand how the Internet enables global communication while the Web shapes how we share and interact with content. The historical evolution from ARPANET to today’s dynamic Web showed how profoundly these technologies have changed society.',
    image: '/discussions/Diss 2.png',
    link: '/discussions/Diss 2.png',
    metadata: [
      { label: 'Date', value: 'November 2, 2025' },
      { label: 'Topic', value: 'The Internet and the Web' },
    ],
  },
  {
    title: 'Discussion 3',
    description: 'This discussion focused on creating an Excel macro that automates formatting tasks to improve efficiency and consistency.',
    reflection: 'Building the macro showed me how small automations can save time and eliminate repetitive work. I also learned the importance of understanding macros for productivity, along with being cautious when enabling them in unfamiliar files.',
    image: '/discussions/Diss 3 .png',
    link: '/discussions/Diss 3 .png',
    metadata: [
      { label: 'Date', value: 'October 19,2025' },
      { label: 'Topic', value: 'Data Organization' },
    ],
  },
  {
    title: 'Discussion 4',
    description: 'This post explained differences between machine language, assembly language, and high-level languages, and their roles in modern software development.',
    reflection: 'I gained a clearer understanding of how programming abstractions evolved to make development easier while still relying on low-level languages for performance-critical tasks. It showed me why high-level languages dominate everyday software but hardware-specific languages remain essential in systems programming.',
    image: '/discussions/Diss 4.png',
    link: '/discussions/Diss 4.png',
    metadata: [
      { label: 'Date', value: 'October 11, 2025' },
      { label: 'Topic', value: 'Programming Languages' },
    ],
  },
  {
    title: 'Discussion 5',
    description: 'This discussion used a creative letter to explain why YouTube Music is meaningful and how digital tools shape everyday routines.',
    reflection: 'Reflecting on this app made me realize how integrated technology is in my daily life. Writing the letter helped me appreciate how software influences mood, habits, and the overall experience of moving through the day.',
    image: '/discussions/Diss 5.png',
    link: '/discussions/Diss 5.png',
    metadata: [
      { label: 'Date', value: 'October 12, 2025' },
      { label: 'Topic', value: 'Operating Systems' },
    ],
  },
  {
    title: 'Discussion Post 6',
    description: 'This post outlined major hardware components—CPU, RAM, storage, and I/O devices—and described how hardware has evolved over time.',
    reflection: 'Summarizing these components strengthened my understanding of how computers function and how hardware improvements drive performance. Seeing the evolution from large early machines to today’s compact devices highlighted the pace of technological advancement.',
    image: '/discussions/Diss 6.png',
    link: '/discussions/Diss 6.png',
    metadata: [
      { label: 'Date', value: 'September 27, 2025' },
      { label: 'Topic', value: 'Hardware' },
    ],
  },
]

export default function DiscussionsPage() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-gradient-to-b from-black via-black to-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">IST 110</p>
          <h1 className="text-4xl md:text-5xl font-light metallic-text">Discussion Posts</h1>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {discussions.map((post) => (
            <ContentCard
              key={post.title}
              title={post.title}
              description={post.description}
              reflection={post.reflection}
              image={post.image}
              preview={post.preview}
              link={post.link}
              metadata={post.metadata}
              showPlaceholders={!post.description}
            />
          ))}
        </div>
      </div>
    </main>
  )
}




