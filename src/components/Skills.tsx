import { motion } from 'motion/react'
import { skillGroups } from '../data/content'
import { reveal } from '../lib/motion'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from './SectionHeading'

export function Skills() {
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
                {group.items.map((item) => (
                  <Badge variant="skill" key={item}>{item}</Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
