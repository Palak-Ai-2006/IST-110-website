'use client'

export default function Contact() {
  return (
    <section
      id="contact"
      className="scene flex flex-col items-center justify-center px-6 py-16 md:py-20"
    >
      <div className="max-w-4xl mx-auto space-y-10 text-center">
        <div className="space-y-4">
          <h2 className="metallic-text font-light tracking-tight text-4xl md:text-5xl">
            Contact
          </h2>
          <p className="text-white/70 font-light">
            Let&apos;s connect
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          <a
            href="mailto:palakchauhan.niyati@gmail.com"
            className="group relative overflow-hidden rounded-sm border border-white/10 bg-black/40 px-4 py-6 transition-all duration-300 hover:border-white/30 hover:bg-white/5"
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-xs uppercase tracking-[0.35em] text-white/50">
                Email
              </span>
              <span className="text-white/80 group-hover:text-white text-sm md:text-base break-all">
                palakchauhan.niyati@gmail.com
              </span>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-5 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
          </a>

          <a
            href="https://github.com/Palak-Ai-2006"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-sm border border-white/10 bg-black/40 px-4 py-6 transition-all duration-300 hover:border-white/30 hover:bg-white/5"
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-xs uppercase tracking-[0.35em] text-white/50">
                GitHub
              </span>
              <span className="text-white/80 group-hover:text-white text-sm md:text-base">
                Palak-Ai-2006
              </span>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-5 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
          </a>

          <a
            href="https://www.linkedin.com/in/palak-chauhan-126978318"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-sm border border-white/10 bg-black/40 px-4 py-6 transition-all duration-300 hover:border-white/30 hover:bg-white/5"
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-xs uppercase tracking-[0.35em] text-white/50">
                LinkedIn
              </span>
              <span className="text-white/80 group-hover:text-white text-sm md:text-base break-words text-center">
                palak-chauhan-126978318
              </span>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-5 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
          </a>
        </div>
      </div>
    </section>
  )
}

