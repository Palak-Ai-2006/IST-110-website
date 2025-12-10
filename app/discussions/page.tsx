import ContentCard from '@/components/ContentCard'

const discussions = [
  { title: 'Discussion Post 1' },
  { title: 'Discussion Post 2' },
  { title: 'Discussion Post 3' },
  { title: 'Discussion Post 4' },
  { title: 'Discussion Post 5' },
  { title: 'Discussion Post 6' },
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
              description="Add your summary or prompt response."
              reflection="Add follow-up ideas or next steps."
              metadata={[{ label: 'Link', value: 'Add a link to your work or resource' }]}
              showPlaceholders
            />
          ))}
        </div>
      </div>
    </main>
  )
}


