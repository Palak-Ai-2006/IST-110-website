interface ContentCardProps {
  title: string
  description?: string
  reflection?: string
  image?: string
  link?: string
  metadata?: { label: string; value: string }[]
  showPlaceholders?: boolean
}

export default function ContentCard({
  title,
  description,
  reflection,
  image,
  link,
  metadata,
  showPlaceholders = true,
}: ContentCardProps) {
  return (
    <div className="group flex flex-col gap-4 rounded-sm border border-white/10 bg-black/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20">
      <div className="relative w-full overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-white/5 to-white/0">
        <div className="aspect-video w-full">
          {image ? (
            <img
              src={image}
              alt={`${title} visual`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-white/50">
              Add your screenshot or drop a link preview
            </div>
          )}
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xl font-light tracking-tight metallic-text">{title}</h3>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        <p className="text-sm text-white/70 leading-relaxed">
          {description ||
            (showPlaceholders
              ? 'Add a short description of this work or assignment.'
              : '')}
        </p>

        {(metadata?.length || showPlaceholders) && (
          <div className="space-y-2 rounded-sm border border-white/5 bg-white/5 px-4 py-3">
            <div className="text-[11px] uppercase tracking-wide text-white/50">
              Details
            </div>
            {(metadata && metadata.length > 0 ? metadata : [{ label: 'Notes', value: 'Add teammates, tools, or key info here.' }]).map((item) => (
              <div key={`${item.label}-${item.value}`} className="flex items-start justify-between gap-3 text-sm text-white/70">
                <span className="text-white/60">{item.label}</span>
                <span className="text-right">{item.value}</span>
              </div>
            ))}
          </div>
        )}

        {(reflection || showPlaceholders) && (
          <div className="rounded-sm border border-white/5 px-4 py-3">
            <div className="text-[11px] uppercase tracking-wide text-white/50 mb-2">
              Reflection
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              {reflection || 'Add what you learned or would improve next time.'}
            </p>
          </div>
        )}

        {(link || showPlaceholders) && (
          <div className="flex items-center justify-between text-sm text-white/70">
            <span className="text-white/50 uppercase tracking-wide text-[11px]">Link</span>
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-white/80 underline decoration-white/40 hover:decoration-white"
              >
                Open resource
              </a>
            ) : (
              <span className="text-white/50">Add a link or reference</span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}


