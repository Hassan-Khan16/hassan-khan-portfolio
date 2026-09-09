import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { motion } from 'motion/react'
import { passionProjects, profile, projects } from '../data/content'
import { GithubIcon } from './Icons'
import { SectionHeading } from './SectionHeading'

export function Projects() {
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
              key={project.slug}
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
              <Link className="project-body" to={`/projects/${project.slug}`}>
                <div className="project-visual" aria-hidden="true">
                  <span>{project.name.charAt(0)}</span>
                  <div className="visual-lines"><i /><i /><i /></div>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <span className="project-more">View case study →</span>
              </Link>
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
