import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, bgFrom, bgTo, customSection }: SectionProps) {
  const bg = bgFrom && bgTo
    ? `linear-gradient(to bottom, ${bgFrom}, ${bgTo})`
    : bgFrom
      ? bgFrom
      : 'linear-gradient(to bottom, #0a0a0a, #111827)'

  return (
    <section
      id={id}
      className="relative h-screen w-full snap-start flex flex-col justify-center overflow-hidden"
      style={{ background: bg }}
    >
      {/* Decorative noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px'
        }}
      />

      {customSection ? (
        <motion.div
          className="relative z-10 w-full h-full"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {customSection}
        </motion.div>
      ) : (
        <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl">
          {subtitle && (
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {subtitle}
            </motion.div>
          )}
          <motion.h2
            className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          {content && (
            <motion.div
              className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content}
            </motion.div>
          )}
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 md:mt-16"
            >
              <Button
                size="lg"
                className="bg-[#FFD100] text-black hover:bg-[#f0c400] font-bold text-base px-8 py-6 rounded-full transition-all hover:scale-105 shadow-lg shadow-yellow-500/20"
              >
                {buttonText}
              </Button>
            </motion.div>
          )}
        </div>
      )}
    </section>
  )
}
