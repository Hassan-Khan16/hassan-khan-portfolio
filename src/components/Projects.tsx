import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { motion } from 'motion/react'
import { passionProjects, profile, projects } from '@/data/content'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Section } from '@/components/ui/section'
import { Text } from '@/components/ui/text'
import { GithubIcon } from './Icons'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', ...Array.from(new Set(projects.flatMap((project) => project.tags))).filter(
    (tag) => ['Laravel', 'Next.js', 'NestJS', 'React'].includes(tag),
  )]
  const filtered = useMemo(
    () => filter === 'All' ? projects : projects.filter((project) => project.tags.includes(filter)),
    [filter],
  )

  return (
    <Section tone="surface" id="projects">
      <Container>
        <SectionHeading
          eyebrow="04 / Production work"
          title="Products, not just projects."
          description="A selection of platforms I've helped shape, ship, and scale."
        />
        <div className="-mt-[25px] mb-[35px] flex flex-wrap gap-2" role="group" aria-label="Filter projects by technology">
          {filters.map((item) => (
            <Button
              key={item}
              type="button"
              variant={filter === item ? 'filterActive' : 'filter'}
              onClick={() => setFilter(item)}
            >
              {item}
            </Button>
          ))}
        </div>
        <motion.div className="grid grid-cols-2 gap-3 max-[640px]:grid-cols-1" layout>
          {filtered.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card variant="project" asChild>
                <article>
                  <div className="flex items-center justify-between font-mono text-[10px] font-normal text-muted-foreground uppercase">
                    <span>0{index + 1} / {project.type}</span>
                    {project.url && (
                      <a
                        className="grid size-[39px] place-items-center rounded-full border border-border text-foreground hover:bg-primary hover:text-primary-foreground"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit ${project.name}`}
                      >
                        <ArrowUpRight />
                      </a>
                    )}
                  </div>
                  <Link className="flex flex-1 flex-col text-inherit" to={`/projects/${project.slug}`}>
                    <div
                      className="relative my-[26px] grid h-[170px] place-items-center overflow-hidden rounded-[10px] border border-border bg-[radial-gradient(circle_at_80%_20%,rgba(101,245,189,0.18),transparent_40%),var(--card)]"
                      aria-hidden="true"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-[length:28px_28px] bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] opacity-35" />
                      <span className="relative text-[70px] font-extrabold text-primary opacity-90">
                        {project.name.charAt(0)}
                      </span>
                      <div className="absolute bottom-[18px] left-[18px] flex gap-[5px]">
                        <i className="block h-[3px] w-[30px] bg-primary opacity-50" />
                        <i className="block h-[3px] w-[30px] bg-primary opacity-50" />
                        <i className="block h-[3px] w-[30px] bg-primary opacity-50" />
                      </div>
                    </div>
                    <Heading variant="card">{project.name}</Heading>
                    <Text variant="bodySm" className="mb-[22px] flex-1">
                      {project.description}
                    </Text>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge variant="tag" key={tag}>{tag}</Badge>
                      ))}
                    </div>
                    <Text variant="projectMore">View case study →</Text>
                  </Link>
                </article>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-[110px] mb-7 flex items-end justify-between max-[640px]:mt-[75px] max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-5">
          <div>
            <Text variant="eyebrow">Passion projects</Text>
            <Heading variant="passion">Built in public.</Heading>
          </div>
          <a
            className="flex items-center gap-2 font-mono text-[11px] font-normal text-muted-foreground hover:text-primary"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            All repositories <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="border-t border-border">
          {passionProjects.map((repo) => (
            <a
              className="grid grid-cols-[40px_1fr_minmax(72px,110px)_20px] items-center gap-4 border-b border-border px-2.5 py-[25px] transition-[padding,color] duration-250 hover:pl-5 hover:text-primary max-[640px]:grid-cols-[28px_1fr_18px] max-[640px]:[&>[data-slot=text]]:hidden"
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              key={repo.name}
            >
              <GithubIcon size={20} />
              <div>
                <Heading variant="repo">{repo.name}</Heading>
                <Text variant="repoBody">{repo.description}</Text>
              </div>
              <Text variant="caption">{repo.language}</Text>
              <ExternalLink size={16} />
            </a>
          ))}
        </div>
      </Container>
    </Section>
  )
}
