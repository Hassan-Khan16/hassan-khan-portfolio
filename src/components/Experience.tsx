import { BriefcaseBusiness } from 'lucide-react'
import { motion } from 'motion/react'
import { experience } from '../data/content'
import { reveal } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

export function Experience() {
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
