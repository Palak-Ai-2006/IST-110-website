import Navigation from '@/components/Navigation'
import ISTNavbar from '@/components/ISTNavbar'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Projects from '@/sections/Projects'
import Contact from '@/sections/Contact'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <section
          id="ist110"
          className="scene relative flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-20 scroll-mt-32"
        >
          <div className="w-full max-w-6xl">
            <h2 className="text-4xl font-bold mb-6 text-center">IST110</h2>
            <ISTNavbar />
          </div>
        </section>
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

