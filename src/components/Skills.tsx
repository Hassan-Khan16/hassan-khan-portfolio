import { motion } from 'motion/react'
import { skillGroups } from '../data/content'
import { reveal } from '../lib/motion'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Section } from '@/components/ui/section'
import { Text } from '@/components/ui/text'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <Section tone="default" id="skills">
      <Container>
        <SectionHeading
          eyebrow="02 / Capabilities"
          title="A full-stack toolkit."
          description="Technologies I use to take products from first commit to production."
        />
        <div className="grid grid-cols-2 border border-border max-[640px]:grid-cols-1">
          {skillGroups.map((group, index) => (
            <motion.article
              className="min-h-[300px] border-r border-b border-border p-[35px] transition-colors duration-300 odd:max-[640px]:border-r-0 even:border-r-0 hover:bg-card [&:nth-last-child(-n+2)]:border-b-0 max-[640px]:min-h-0 max-[640px]:border-r-0 max-[640px]:p-[25px] max-[640px]:[&:nth-last-child(2)]:border-b max-[640px]:[&:nth-last-child(2)]:border-border hover:[&_[data-slot=badge]]:border-primary/25 hover:[&_[data-slot=badge]]:text-foreground"
              key={group.title}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.08 }}
            >
              <Text variant="index">0{index + 1}</Text>
              <Heading variant="skill">{group.title}</Heading>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge variant="skill" key={item}>{item}</Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
