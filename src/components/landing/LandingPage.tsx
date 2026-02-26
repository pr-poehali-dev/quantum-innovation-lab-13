import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Layout from './Layout'
import { sections, HeroSection, ProblemSection, ProjectsSection, StatsSection, EventsSection, CTASection } from './sections'

const sectionComponents = [HeroSection, ProblemSection, ProjectsSection, StatsSection, EventsSection, CTASection]

const navLabels = ['О проекте', 'Результаты', 'Проекты', 'Цифры', 'События', 'Контакты']

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newActiveSection = Math.round(scrollPosition / windowHeight)
        setActiveSection(Math.min(newActiveSection, sections.length - 1))
      }
    }
    const container = containerRef.current
    if (container) container.addEventListener('scroll', handleScroll)
    return () => { if (container) container.removeEventListener('scroll', handleScroll) }
  }, [])

  const handleNavClick = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: index * window.innerHeight, behavior: 'smooth' })
    }
  }

  return (
    <Layout>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 origin-left z-50"
        style={{ scaleX, background: 'linear-gradient(to right, #FFD100, #4ade80)' }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 md:px-16 py-4">
        <div className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="20" fill="#FFD100" />
            <ellipse cx="20" cy="22" rx="10" ry="12" fill="#1a1a1a" />
            <rect x="12" y="16" width="16" height="3" rx="1.5" fill="#FFD100" />
            <rect x="13" y="22" width="14" height="3" rx="1.5" fill="#FFD100" />
            <rect x="14" y="28" width="12" height="3" rx="1.5" fill="#FFD100" />
            <ellipse cx="13" cy="13" rx="5" ry="7" fill="rgba(255,255,255,0.3)" transform="rotate(-20, 13, 13)" />
            <ellipse cx="27" cy="13" rx="5" ry="7" fill="rgba(255,255,255,0.3)" transform="rotate(20, 27, 13)" />
          </svg>
          <span className="text-[#FFD100] font-bold text-lg tracking-widest uppercase hidden md:block">Билайн</span>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {navLabels.map((label, i) => (
            <button
              key={i}
              onClick={() => handleNavClick(i)}
              className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                activeSection === i
                  ? 'bg-white/15 text-white font-semibold'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <button className="bg-[#FFD100] text-black font-bold text-sm px-5 py-2 rounded-full hover:bg-[#f0c400] transition-all hover:scale-105">
          Стать участником
        </button>
      </header>

      {/* Side nav dots */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col justify-center z-40 gap-2">
        {sections.map((_, index) => (
          <button
            key={index}
            className={`rounded-full transition-all duration-300 ${
              index === activeSection
                ? 'w-2 h-6 bg-[#FFD100]'
                : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            }`}
            onClick={() => handleNavClick(index)}
          />
        ))}
      </nav>

      {/* Scrollable sections */}
      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-y snap-mandatory"
      >
        {sections.map((section, index) => {
          const SectionComponent = sectionComponents[index]
          return (
            <section
              key={section.id}
              id={section.id}
              className="relative h-screen w-full snap-start overflow-hidden"
              style={{ background: section.bg }}
            >
              <SectionComponent isActive={index === activeSection} />
            </section>
          )
        })}
      </div>
    </Layout>
  )
}
