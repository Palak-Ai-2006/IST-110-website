import Link from 'next/link'

const links = [
  { href: '/reflection', label: 'Reflection' },
  { href: '/groupwork', label: 'Group Work' },
  { href: '/assignments', label: 'Individual Assignments' },
  { href: '/discussions', label: 'Discussion Posts' },
]

export default function ISTNavbar() {
  return (
    <nav className="w-full">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-center gap-4 md:gap-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-sm px-4 md:px-6 py-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs md:text-sm font-light uppercase tracking-widest text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}



