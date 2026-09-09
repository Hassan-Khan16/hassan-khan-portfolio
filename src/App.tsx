import { useEffect, useMemo, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Copy,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from 'lucide-react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'
import {
  certifications,
  education,
  experience,
  passionProjects,
  profile,
  projects,
  skillGroups,
  stats,
} from './data/content'
import aboutArt from './assets/about-art.jpg'
import portrait from './assets/portrait.jpg'

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.23c-3.23.7-3.91-1.37-3.91-1.37-.53-1.35-1.3-1.7-1.3-1.7-1.05-.73.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.58-.3-5.29-1.29-5.29-5.7 0-1.27.45-2.3 1.2-3.11-.12-.3-.52-1.48.11-3.08 0 0 .98-.31 3.16 1.19a10.9 10.9 0 0 1 5.76 0c2.19-1.5 3.16-1.19 3.16-1.19.63 1.6.23 2.79.11 3.08.75.82 1.2 1.84 1.2 3.11 0 4.43-2.72 5.4-5.3 5.7.42.36.79 1.06.79 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  )
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.2 7.7H1V21h4.2V7.7ZM3.1 1A2.45 2.45 0 1 0 3.1 5.9 2.45 2.45 0 0 0 3.1 1ZM21 13.4c0-4-2.1-5.9-5-5.9-2.3 0-3.4 1.3-3.9 2.2v-2H7.9V21h4.2v-6.6c0-1.7.3-3.4 2.5-3.4 2.2 0 2.2 2 2.2 3.5V21H21v-7.6Z" />
    </svg>
  )
}

const navItems = ['about', 'skills', 'experience', 'projects', 'contact']

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <motion.div
      className="section-heading"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-30% 0px -60%', threshold: 0 },
    )
    navItems.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Back to top">
        HK<span>.</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a className={active === item ? 'active' : ''} href={`#${item}`} key={item}>
            {item}
          </a>
        ))}
      </nav>
      <a className="header-cta" href={`mailto:${profile.email}`}>
        Let's talk <ArrowUpRight size={15} />
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <motion.nav
          className="mobile-nav"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a href={`#${item}`} key={item} onClick={() => setOpen(false)}>
              {item}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  )
}

function Hero() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 700], [0, reduceMotion ? 0 : 120])

  return (
    <section className="hero-section" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <motion.div className="hero-orb" style={{ y: heroY }} aria-hidden="true" />
      <div className="container hero-content">
        <div className="hero-split">
          <div>
            <motion.div
              className="availability"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <span />
              Available for meaningful projects
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
            >
              I build digital products
              <br />
              <span>that work beautifully.</span>
            </motion.h1>
            <motion.p
              className="hero-copy"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
            >
              I'm {profile.shortName}, a full-stack software engineer turning complex requirements
              into fast, reliable, and human-centered web experiences.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowDown size={17} />
              </a>
              <a className="button button-ghost" href={`mailto:${profile.email}`}>
                <Mail size={17} /> Get in touch
              </a>
            </motion.div>
          </div>
          <motion.figure
            className="portrait-wrap"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <img src={portrait} alt={`${profile.shortName}, software engineer`} />
            <figcaption>
              {profile.shortName}
              <span>Builder. Learner. Dreamer.</span>
            </figcaption>
          </motion.figure>
        </div>
        <motion.div
          className="hero-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          <div className="location">
            <MapPin size={16} /> {profile.location}
          </div>
          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon size={19} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={19} />
            </a>
          </div>
        </motion.div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about">
        Scroll <span />
      </a>
    </section>
  )
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <SectionHeading eyebrow="01 / About" title="Engineering with purpose." />
        <div className="about-layout">
          <motion.div
            className="about-copy"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>{profile.summary}</p>
            <p>
              I enjoy working at the intersection of product, design, and engineering—building
              systems that are maintainable behind the scenes and effortless in the browser.
            </p>
          </motion.div>
          <motion.div
            className="stats-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {stats.map((stat) => (
              <motion.div className="stat-card" variants={reveal} key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="about-showcase">
          <div className="credentials">
          <motion.div
            className="credential-card"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <GraduationCap />
            <div>
              <span>Education</span>
              <h3>{education.degree}</h3>
              <p>{education.institution} · {education.period}</p>
            </div>
          </motion.div>
            {certifications.map((item) => (
              <motion.div
                className="credential-card"
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={item.name}
              >
                <Code2 />
                <div>
                  <span>Certification</span>
                  <h3>
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noreferrer">
                        {item.name}
                      </a>
                    ) : item.name}
                  </h3>
                  <p>{item.issuer} · {item.date}</p>
                  {item.skills && <p>{item.skills}</p>}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.figure
            className="about-art"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src={aboutArt} alt="Illustrated portrait map of Hassan Khan: builder, learner, dreamer." />
            <figcaption>
              A personal map — values, craft, and the work that keeps me going.
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="02 / Capabilities"
          title="A full-stack toolkit."
          description="Technologies I use to take products from first commit to production."
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              className="skill-group"
              key={group.title}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.08 }}
            >
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="03 / Experience"
          title="Building for the real world."
          description="Professional experience delivering production software and measurable product value."
        />
        <div className="timeline">
          {experience.map((item, index) => (
            <motion.article
              className="timeline-item"
              key={`${item.company}-${item.period}`}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-70px' }}
            >
              <div className="timeline-marker"><BriefcaseBusiness size={18} /></div>
              <div className="timeline-date">{item.period}</div>
              <div className="timeline-content">
                <span>0{index + 1}</span>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.description}</p>
                <ul>
                  {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const filters = ['All', ...Array.from(new Set(projects.flatMap((project) => project.tags))).filter(
    (tag) => ['Laravel', 'Next.js', 'NestJS', 'React'].includes(tag),
  )]
  const [filter, setFilter] = useState('All')
  const filtered = useMemo(
    () => filter === 'All' ? projects : projects.filter((project) => project.tags.includes(filter)),
    [filter],
  )

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="04 / Selected work"
          title="Products, not just projects."
          description="A selection of platforms I've helped shape, ship, and scale."
        />
        <div className="project-filters" role="group" aria-label="Filter projects by technology">
          {filters.map((item) => (
            <button
              className={filter === item ? 'active' : ''}
              type="button"
              onClick={() => setFilter(item)}
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
        <motion.div className="projects-grid" layout>
          {filtered.map((project, index) => (
            <motion.article
              className={`project-card ${project.featured ? 'featured' : ''}`}
              key={project.name}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-top">
                <span>0{index + 1} / {project.type}</span>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>
                    <ArrowUpRight />
                  </a>
                )}
              </div>
              <div className="project-visual" aria-hidden="true">
                <span>{project.name.charAt(0)}</span>
                <div className="visual-lines"><i /><i /><i /></div>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="open-source-header">
          <div>
            <span className="eyebrow">Passion projects</span>
            <h3>Built in public.</h3>
          </div>
          <a href={profile.github} target="_blank" rel="noreferrer">
            All repositories <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="repo-grid">
          {passionProjects.map((repo) => (
            <a className="repo-card" href={repo.url} target="_blank" rel="noreferrer" key={repo.name}>
              <GithubIcon size={20} />
              <div><h4>{repo.name}</h4><p>{repo.description}</p></div>
              <span>{repo.language}</span>
              <ExternalLink size={16} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.div
          className="contact-inner"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="eyebrow">05 / Contact</span>
          <h2>Have a project in mind?</h2>
          <p>Let's turn your idea into a product people enjoy using.</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email} <ArrowUpRight />
          </a>
          <button className="copy-button" type="button" onClick={copyEmail}>
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? 'Copied' : 'Copy email'}
          </button>
        </motion.div>
        <div className="contact-details">
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone size={16} /> {profile.phone}</a>
          <div>
            <a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon size={17} /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={17} /> LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 30, restDelta: 0.001 })

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer>
        <div className="container">
          <span>© {new Date().getFullYear()} {profile.shortName}</span>
          <span>Designed & built with intention.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
