import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { getProjectBySlug, projects } from '../data/content'

export function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return <Navigate to="/#projects" replace />
  }

  const others = projects.filter((item) => item.slug !== project.slug).slice(0, 3)

  return (
    <article className="project-page">
      <div className="container">
        <Link className="back-link" to="/#projects">
          <ArrowLeft size={16} /> Back to work
        </Link>
        <p className="eyebrow">{project.type}</p>
        <h1>{project.name}</h1>
        <p className="project-lead">{project.description}</p>
        <div className="project-meta">
          <div>
            <span>Role</span>
            <strong>{project.role}</strong>
          </div>
          <div>
            <span>Company</span>
            <strong>{project.company}</strong>
          </div>
          {project.url && (
            <a className="button button-primary" href={project.url} target="_blank" rel="noreferrer">
              Visit live site <ArrowUpRight size={16} />
            </a>
          )}
        </div>
        <div className="tag-list">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <section className="project-detail-body">
          <h2>Overview</h2>
          <p>{project.overview}</p>
          <h2>What I contributed</h2>
          <ul>
            {project.contributions.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
        <section className="more-projects">
          <h2>More work</h2>
          <div className="more-project-list">
            {others.map((item) => (
              <Link to={`/projects/${item.slug}`} key={item.slug}>
                <span>{item.type}</span>
                <strong>{item.name}</strong>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  )
}
