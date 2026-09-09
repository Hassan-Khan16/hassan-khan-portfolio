import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { getProjectBySlug, projects } from '../data/content'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

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
    <article className="min-h-[70svh] py-[140px] pb-20 max-[640px]:pt-[120px]">
      <Container>
        <Button
          variant="link"
          className="mb-9 inline-flex items-center gap-2 font-mono text-[12px] font-medium text-muted-foreground hover:text-primary"
          asChild
        >
          <Link to="/#projects">
            <ArrowLeft size={16} /> Back to work
          </Link>
        </Button>
        <Text variant="eyebrow">{project.type}</Text>
        <Heading variant="page">{project.name}</Heading>
        <Text variant="projectLead">{project.description}</Text>
        <div className="my-9 flex flex-wrap items-end gap-7">
          <div>
            <Text variant="label" className="mb-1.5 block">Role</Text>
            <strong className="text-base">{project.role}</strong>
          </div>
          <div>
            <Text variant="label" className="mb-1.5 block">Company</Text>
            <strong className="text-base">{project.company}</strong>
          </div>
          {project.url && (
            <Button variant="default" asChild>
              <a href={project.url} target="_blank" rel="noreferrer">
                Visit live site <ArrowUpRight size={16} />
              </a>
            </Button>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge variant="tag" key={tag}>{tag}</Badge>
          ))}
        </div>
        <section className="mt-14 max-w-[760px]">
          <Heading variant="detail">Overview</Heading>
          <Text variant="muted" className="leading-[1.75]">{project.overview}</Text>
          <Heading variant="detail">What I contributed</Heading>
          <ul className="list-none p-0">
            {project.contributions.map((item) => (
              <li
                className="relative my-3 pl-[18px] text-muted-foreground leading-[1.75] before:absolute before:top-2.5 before:left-0 before:size-1.5 before:bg-primary"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-20 border-t border-border pt-9">
          <Heading variant="more">More work</Heading>
          <div className="grid grid-cols-3 gap-3 max-[640px]:grid-cols-1">
            {others.map((item) => (
              <Card key={item.slug} variant="related" asChild>
                <Link to={`/projects/${item.slug}`}>
                  <Text variant="label">{item.type}</Text>
                  <Heading variant="related" as="h3">
                    {item.name}
                  </Heading>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </article>
  )
}
