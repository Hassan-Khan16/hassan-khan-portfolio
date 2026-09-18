import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { fypProject } from '@/data/content'
import { reveal } from '@/lib/motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Text } from '@/components/ui/text'
import { SectionHeading } from './SectionHeading'
import { GithubIcon } from './Icons'

export function FinalYearProject() {
  return (
    <Section tone="surface" id="fyp">
      <Container>
        <SectionHeading
          eyebrow="04 / Final year project"
          title={fypProject.name}
          description={fypProject.problem}
        />

        <motion.div
          className="mb-10 flex flex-wrap gap-2"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {fypProject.tags.map((tag) => (
            <Badge variant="tag" key={tag}>{tag}</Badge>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-3 max-[640px]:grid-cols-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.08 }}
        >
          {fypProject.architecture.map((pillar) => (
            <motion.div key={pillar.title} variants={reveal}>
              <Card className="flex h-full flex-col gap-3 rounded-xl p-[26px] max-[640px]:p-5">
                <Text variant="label">{pillar.title}</Text>
                <Text variant="muted" className="m-0 text-[14px] leading-[1.65]">
                  {pillar.body}
                </Text>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-10 max-[640px]:grid-cols-1 max-[640px]:gap-6"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-5">
            <div>
              <Text variant="label" className="mb-1.5 block">Team</Text>
              <Text variant="bodySm" className="m-0 text-foreground">{fypProject.team}</Text>
            </div>
            <div>
              <Text variant="label" className="mb-1.5 block">University</Text>
              <Text variant="bodySm" className="m-0 text-foreground">{fypProject.university}</Text>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <Text variant="label" className="mb-1.5 block">Supervisor</Text>
              <Text variant="bodySm" className="m-0 text-foreground">{fypProject.supervisor}</Text>
            </div>
            <div>
              <Text variant="label" className="mb-1.5 block">Year</Text>
              <Text variant="bodySm" className="m-0 text-foreground">{fypProject.period}</Text>
            </div>
          </div>
        </motion.div>

        <Text variant="caption" className="mt-6 block max-w-[640px] leading-[1.6]">
          {fypProject.pecNote}
        </Text>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-3"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Button variant="default" asChild>
            <Link to={`/projects/${fypProject.slug}`} className="pt-[1px]">
              View case study <ArrowUpRight size={17} />
            </Link>
          </Button>
          {fypProject.url && (
            <Button variant="ghost" asChild>
              <a href={fypProject.url} target="_blank" rel="noreferrer">
                <GithubIcon size={17} /> View on GitHub
              </a>
            </Button>
          )}
        </motion.div>
      </Container>
    </Section>
  )
}
