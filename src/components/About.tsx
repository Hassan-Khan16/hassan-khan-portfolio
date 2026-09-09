import { Code2, GraduationCap } from 'lucide-react'
import { motion } from 'motion/react'
import aboutArt from '../assets/about-art.jpg'
import { certifications, education, profile, stats } from '../data/content'
import { reveal } from '../lib/motion'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Section } from '@/components/ui/section'
import { Text } from '@/components/ui/text'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <Section tone="surface" id="about">
      <Container>
        <SectionHeading eyebrow="01 / About" title="Engineering with purpose." />
        <div className="grid grid-cols-[1.1fr_1fr] gap-20 max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <motion.div
            className="[&>[data-slot=text]]:mb-[25px] [&>[data-slot=text]+[data-slot=text]]:max-w-[620px]"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Text variant="bodyLg">{profile.summary}</Text>
            <Text variant="muted" className="text-[16px]">
              I enjoy working at the intersection of product, design, and engineering—building
              systems that are maintainable behind the scenes and effortless in the browser.
            </Text>
          </motion.div>
          <motion.div
            className="grid grid-cols-3 content-start gap-2.5 max-[640px]:grid-cols-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {stats.map((stat) => (
              <motion.div variants={reveal} key={stat.label}>
                <Card variant="stat">
                  <strong className="block text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.06em] text-primary">
                    {stat.value}
                  </strong>
                  <Text variant="statLabel">{stat.label}</Text>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="mt-[70px] grid grid-cols-[minmax(0,1fr)_minmax(0,620px)] items-start gap-9 max-[900px]:mt-[50px] max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <div className="grid grid-cols-1 content-start gap-3">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card variant="credential">
                <GraduationCap />
                <div>
                  <Text variant="label">Education</Text>
                  <Heading variant="credential">{education.degree}</Heading>
                  <Text variant="credentialBody">
                    {education.institution} · {education.period}
                  </Text>
                </div>
              </Card>
            </motion.div>
            {certifications.map((item) => (
              <motion.div
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={item.name}
              >
                <Card variant="credential">
                  <Code2 />
                  <div>
                    <Text variant="label">Certification</Text>
                    <Heading variant="credential">
                      {item.url ? (
                        <a href={item.url} target="_blank" rel="noreferrer">
                          {item.name}
                        </a>
                      ) : (
                        item.name
                      )}
                    </Heading>
                    <Text variant="credentialBody">
                      {item.issuer} · {item.date}
                    </Text>
                    {item.skills && <Text variant="credentialMeta">{item.skills}</Text>}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.figure
            className="m-0 max-[900px]:max-w-[640px] max-[640px]:max-w-none"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              className="block h-auto w-full rounded-[18px] border border-border"
              src={aboutArt}
              alt="Illustrated portrait map of Hassan Khan: builder, learner, dreamer."
            />
            <figcaption className="mt-3 font-mono text-[11px] leading-[1.6] font-normal text-muted-foreground">
              A personal map — values, craft, and the work that keeps me going.
            </figcaption>
          </motion.figure>
        </div>
      </Container>
    </Section>
  )
}
