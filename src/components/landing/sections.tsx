import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

// ── Bee Logo helper ────────────────────────────────────────────────────────────
const BeeLogo = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="20" fill="#FFD100" />
    <ellipse cx="20" cy="22" rx="10" ry="12" fill="#1a1a1a" />
    <rect x="12" y="16" width="16" height="3" rx="1.5" fill="#FFD100" />
    <rect x="13" y="22" width="14" height="3" rx="1.5" fill="#FFD100" />
    <rect x="14" y="28" width="12" height="3" rx="1.5" fill="#FFD100" />
    <ellipse cx="13" cy="13" rx="5" ry="7" fill="rgba(255,255,255,0.3)" transform="rotate(-20, 13, 13)" />
    <ellipse cx="27" cy="13" rx="5" ry="7" fill="rgba(255,255,255,0.3)" transform="rotate(20, 27, 13)" />
  </svg>
)

// ── Hero Section ──────────────────────────────────────────────────────────────
export const HeroSection = ({ isActive }: { isActive: boolean }) => (
  <div className="relative w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #0d1b2a 0%, #1a3a2a 40%, #2d5a3d 70%, #1a4a2e 100%)'
      }} />
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ top: `${(i * 37) % 40}%`, left: `${(i * 53) % 100}%` }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: (i % 5) * 0.4 }}
        />
      ))}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMax slice">
        <g opacity="0.7">
          <rect x="120" y="100" width="8" height="300" fill="#2a3a2a" />
          <rect x="110" y="150" width="28" height="4" fill="#2a3a2a" />
          <rect x="110" y="200" width="28" height="4" fill="#2a3a2a" />
          <rect x="110" y="250" width="28" height="4" fill="#2a3a2a" />
          <circle cx="124" cy="95" r="6" fill="#34d058" opacity="0.8" />
          <ellipse cx="110" cy="155" rx="12" ry="6" fill="#2d6a3f" opacity="0.9" />
          <ellipse cx="138" cy="205" rx="10" ry="5" fill="#2d6a3f" opacity="0.9" />
        </g>
        <g opacity="0.5">
          <rect x="1280" y="60" width="8" height="340" fill="#2a3a2a" />
          <rect x="1268" y="100" width="32" height="4" fill="#2a3a2a" />
          <rect x="1268" y="160" width="32" height="4" fill="#2a3a2a" />
          <rect x="1268" y="220" width="32" height="4" fill="#2a3a2a" />
          <circle cx="1284" cy="55" r="6" fill="#34d058" opacity="0.8" />
          <ellipse cx="1268" cy="165" rx="14" ry="7" fill="#2d6a3f" opacity="0.9" />
        </g>
        <path d="M0,400 L0,280 Q40,220 80,260 Q120,200 160,250 Q200,190 240,240 Q280,180 320,230 Q360,170 400,220 Q440,160 480,210 Q520,150 560,200 Q600,145 640,190 Q680,140 720,185 Q760,135 800,180 Q840,130 880,175 Q920,125 960,170 Q1000,120 1040,165 Q1080,115 1120,160 Q1160,110 1200,155 Q1240,105 1280,150 Q1320,100 1360,145 L1440,120 L1440,400 Z" fill="#1a3d2a" />
        <path d="M0,400 L0,320 Q60,270 120,300 Q180,250 240,285 Q300,235 360,270 Q420,220 480,255 Q540,205 600,240 Q660,190 720,225 Q780,175 840,210 Q900,160 960,195 Q1020,145 1080,180 Q1140,130 1200,165 Q1260,115 1320,150 L1440,130 L1440,400 Z" fill="#234d32" />
        <ellipse cx="124" cy="93" rx="15" ry="8" fill="#3d2b1a" opacity="0.8" />
      </svg>
    </div>

    <div className="relative z-10">
      <motion.div
        className="mb-4 flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <BeeLogo size={40} />
        <span className="text-[#FFD100] font-bold text-xl tracking-widest uppercase">Билайн</span>
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-3xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Мы соединяем людей.{' '}
        <span className="text-[#4ade80]">И заботимся о том,</span>{' '}
        что их окружает
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl max-w-xl mt-6 text-neutral-300 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Экологические инициативы Билайн: от переработки техники до восстановления лесов
      </motion.p>

      <motion.div
        className="mt-10 flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <button className="bg-[#FFD100] text-black font-bold text-base px-8 py-3 rounded-full hover:bg-[#f0c400] transition-all hover:scale-105 shadow-lg shadow-yellow-500/20">
          Стать участником
        </button>
        <button className="border border-white/30 text-white text-base px-8 py-3 rounded-full hover:bg-white/10 transition-all">
          Узнать больше
        </button>
      </motion.div>
    </div>
  </div>
)

// ── Problem/Solution Section ───────────────────────────────────────────────────
export const ProblemSection = ({ isActive }: { isActive: boolean }) => {
  const cards = [
    {
      icon: 'Server',
      problem: 'Цифровой след',
      problemDesc: 'Даём интернет, но серверы потребляют энергию',
      solution: 'Перевод ЦОДов на «зелёную» энергию, снижение углеродного следа',
      color: '#4ade80',
    },
    {
      icon: 'Smartphone',
      problem: 'Электронный мусор',
      problemDesc: 'Миллионы старых смартфонов оседают на свалках',
      solution: 'Программа трейд-ин и утилизация — дайте технике вторую жизнь',
      color: '#FFD100',
    },
    {
      icon: 'FileText',
      problem: 'Бумажная волокита',
      problemDesc: 'Счета и договоры уничтожают тысячи деревьев',
      solution: '100% цифровой документооборот (ЭДО) для абонентов',
      color: '#60a5fa',
    },
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-[#4ade80] text-sm font-semibold tracking-widest uppercase mb-2">Как мы помогаем</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Как наши технологии<br />помогают экологии
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-white/20 transition-all"
            initial={{ opacity: 0, y: 40 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${card.color}22` }}>
              <Icon name={card.icon} size={20} style={{ color: card.color }} />
            </div>
            <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: card.color }}>Проблема</div>
            <h3 className="text-lg font-bold text-white mb-1">{card.problem}</h3>
            <p className="text-sm text-neutral-400 mb-4">{card.problemDesc}</p>
            <div className="border-t border-white/10 pt-4">
              <div className="text-xs font-semibold tracking-widest uppercase mb-2 text-[#FFD100]">Решение Билайн</div>
              <p className="text-sm text-neutral-300">{card.solution}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ── Projects Section ───────────────────────────────────────────────────────────
export const ProjectsSection = ({ isActive }: { isActive: boolean }) => {
  const projects = [
    {
      tag: 'Офисы',
      title: 'Zero Waste в офисах',
      desc: 'Внутренняя программа раздельного сбора отходов, отказ от пластиковой посуды, сбор макулатуры.',
      stat: '10 тонн',
      statLabel: 'батареек собрано за год',
      color: '#4ade80',
      icon: 'Recycle',
    },
    {
      tag: 'Социальное',
      title: 'Техника на пенсии',
      desc: 'Партнёрство с фондами. Корпоративные ноутбуки после апгрейда передаются в школы и детские дома.',
      stat: '1 200+',
      statLabel: 'устройств передано детям',
      color: '#60a5fa',
      icon: 'Laptop',
    },
    {
      tag: 'IT & Экология',
      title: 'Зелёные хакатоны',
      desc: 'IT-специалисты Билайн разрабатывают приложения для мониторинга качества воздуха и воды.',
      stat: '8',
      statLabel: 'приложений разработано',
      color: '#FFD100',
      icon: 'Code2',
    },
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-[#FFD100] text-sm font-semibold tracking-widest uppercase mb-2">Наши инициативы</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Наша зелёная карта</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            initial={{ opacity: 0, x: 40 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: `${p.color}22`, color: p.color }}>
                {p.tag}
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${p.color}22` }}>
              <Icon name={p.icon} size={20} style={{ color: p.color }} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">{p.desc}</p>
            <div className="border-t border-white/10 pt-4">
              <div className="text-3xl font-bold" style={{ color: p.color }}>{p.stat}</div>
              <div className="text-xs text-neutral-400 mt-1">{p.statLabel}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ── Stats Section ──────────────────────────────────────────────────────────────
export const StatsSection = ({ isActive }: { isActive: boolean }) => {
  const stats = [
    { value: '42 000', unit: 'тонн CO₂', label: 'не выброшено в атмосферу благодаря видеоконференциям', icon: 'Wind', color: '#4ade80' },
    { value: '3,2 млн', unit: 'деревьев', label: 'сохранено при переходе на электронный документооборот', icon: 'TreePine', color: '#34d399' },
    { value: '680', unit: 'тонн', label: 'старых телефонов и устройств получили вторую жизнь', icon: 'RefreshCw', color: '#FFD100' },
    { value: '100%', unit: 'офисов', label: 'Билайн охвачены программой раздельного сбора отходов', icon: 'Building2', color: '#60a5fa' },
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-[#4ade80] text-sm font-semibold tracking-widest uppercase mb-2">Измеримый результат</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Природа в цифре</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${s.color}22` }}>
              <Icon name={s.icon} size={20} style={{ color: s.color }} />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-0.5">{s.value}</div>
            <div className="text-sm font-semibold mb-2" style={{ color: s.color }}>{s.unit}</div>
            <p className="text-xs text-neutral-400 leading-relaxed">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ── Events Section ─────────────────────────────────────────────────────────────
export const EventsSection = ({ isActive }: { isActive: boolean }) => {
  const events = [
    {
      date: '15 мая',
      title: 'Субботник в Серебряном бору',
      desc: 'Команда Билайн провела субботник. Собрали 2 тонны мусора и высадили 500 саженцев.',
      tag: 'Волонтёрство',
      color: '#4ade80',
    },
    {
      date: '22 мая',
      title: 'Вебинар «Утилизация гаджетов»',
      desc: 'Узнайте, как правильно утилизировать старые телефоны и технику без вреда для природы.',
      tag: 'Обучение',
      color: '#FFD100',
    },
    {
      date: '1 июня',
      title: 'Старт сбора крышечек',
      desc: 'В офисах продаж Билайн стартует акция по сбору пластиковых крышек в помощь благотворительным фондам.',
      tag: 'Акция',
      color: '#60a5fa',
    },
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-[#FFD100] text-sm font-semibold tracking-widest uppercase mb-2">Будь в теме</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">В ритме событий</h2>
      </motion.div>

      <div className="flex flex-col gap-4 max-w-2xl">
        {events.map((e, i) => (
          <motion.div
            key={i}
            className="flex gap-6 rounded-2xl p-5 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            initial={{ opacity: 0, x: -40 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
          >
            <div className="min-w-[64px] text-center">
              <div className="text-2xl font-bold text-white leading-tight">{e.date.split(' ')[0]}</div>
              <div className="text-xs text-neutral-400">{e.date.split(' ')[1]}</div>
            </div>
            <div className="border-l border-white/10 pl-6">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full mb-2 inline-block" style={{ background: `${e.color}22`, color: e.color }}>
                {e.tag}
              </span>
              <h3 className="text-base font-bold text-white mb-1">{e.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{e.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ── CTA Section ────────────────────────────────────────────────────────────────
export const CTASection = ({ isActive }: { isActive: boolean }) => (
  <div className="w-full h-full flex flex-col justify-center items-center text-center px-8 md:px-16">
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute bottom-0 left-0 w-full opacity-30" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMax slice">
        <path d="M0,400 L0,200 Q100,120 200,180 Q300,100 400,160 Q500,80 600,140 Q700,60 800,120 Q900,50 1000,110 Q1100,40 1200,100 Q1300,30 1440,90 L1440,400 Z" fill="#1a3d2a" />
        <path d="M0,400 L0,260 Q120,180 240,240 Q360,160 480,220 Q600,140 720,200 Q840,120 960,180 Q1080,100 1200,160 Q1320,80 1440,140 L1440,400 Z" fill="#234d32" />
      </svg>
    </div>

    <motion.div
      className="relative z-10 max-w-2xl"
      initial={{ opacity: 0, y: 40 }}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex justify-center mb-8"
        animate={isActive ? { rotate: [0, -5, 5, -5, 0] } : {}}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <BeeLogo size={64} />
      </motion.div>

      <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
        Стань частью{' '}
        <span className="text-[#4ade80]">ритма</span>
      </h2>
      <p className="text-lg text-neutral-300 mb-4 leading-relaxed">
        Не знаешь, как помочь экологии прямо сейчас? Наш бот «Эко-навигатор» подскажет:
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 text-sm text-neutral-400">
        {['Где ближайший пункт приёма батареек', 'Как утилизировать старый телефон', 'Запись на волонтёрскую акцию'].map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shrink-0" />
            <span>{item}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <button className="bg-[#FFD100] text-black font-bold text-base px-8 py-4 rounded-full hover:bg-[#f0c400] transition-all hover:scale-105 shadow-lg shadow-yellow-500/30">
          Перейти в чат-бот
        </button>
        <button className="border border-white/30 text-white text-base px-8 py-4 rounded-full hover:bg-white/10 transition-all">
          Стать участником
        </button>
      </motion.div>
    </motion.div>
  </div>
)

// ── Sections config ────────────────────────────────────────────────────────────
export const sections = [
  { id: 'hero',     bg: 'linear-gradient(180deg, #0d1b2a, #1a3a2a)' },
  { id: 'problems', bg: 'linear-gradient(180deg, #111827, #0f2118)' },
  { id: 'projects', bg: 'linear-gradient(180deg, #0f2118, #1a2f1a)' },
  { id: 'stats',    bg: 'linear-gradient(180deg, #0a1628, #0f2118)' },
  { id: 'events',   bg: 'linear-gradient(180deg, #1a2f1a, #111827)' },
  { id: 'cta',      bg: 'linear-gradient(180deg, #0d1b2a, #1a3a2a)' },
]
