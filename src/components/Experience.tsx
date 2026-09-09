import { BriefcaseBusiness } from 'lucide-react'
import { motion } from 'motion/react'
import { experience } from '../data/content'
import { reveal } from '../lib/motion'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Section } from '@/components/ui/section'
import { Text } from '@/components/ui/text'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <Section tone="default" id="experience">
      <Container>
        <SectionHeading
          eyebrow="03 / Experience"
          title="Building for the real world."
          description="Professional experience delivering production software and measurable product value."
        />
        <div className="relative">
          <div
            className="absolute top-0 bottom-0 left-1/4 w-px bg-border max-[900px]:left-0"
            aria-hidden="true"
          />
          {experience.map((item, index) => (
            <motion.article
              className="relative grid min-h-[310px] grid-cols-[25%_1fr] pb-[60px] max-[900px]:grid-cols-1 max-[900px]:pl-[45px]"
              key={`${item.company}-${item.period}`}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-70px' }}
            >
              <div className="absolute top-0 left-1/4 grid size-[46px] -translate-x-1/2 place-items-center rounded-full border border-border bg-background text-primary max-[900px]:left-0">
                <BriefcaseBusiness size={18} />
              </div>
              <Text
                variant="timelineDate"
                as="div"
                className="pt-3.5 max-[900px]:pt-[60px]"
              >
                {item.period}
              </Text>
              <div className="col-start-2 max-w-[770px] pl-[65px] max-[900px]:col-start-1 max-[900px]:pt-[15px] max-[900px]:pl-0">
                <Text variant="caption">0{index + 1}</Text>
                <Heading variant="role">{item.role}</Heading>
                <Heading variant="company">{item.company}</Heading>
                <Text variant="muted">{item.description}</Text>
                <ul className="list-none p-0">
                  {item.highlights.map((highlight) => (
                    <li
                      className="relative my-2.5 pl-[18px] text-sm text-list-muted before:absolute before:top-2 before:left-0 before:size-[5px] before:bg-primary"
                      key={highlight}
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
