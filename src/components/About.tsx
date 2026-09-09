import { Code2, GraduationCap } from 'lucide-react'
import { motion } from 'motion/react'
import aboutArt from '../assets/about-art.jpg'
import { certifications, education, profile, stats } from '../data/content'
import { reveal } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <SectionHeading eyebrow="01 / About" title="Engineering with purpose." />
        <div className="about-layout">
          <motion.div
            className="about-copy"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>{profile.summary}</p>
            <p>
              I enjoy working at the intersection of product, design, and engineering—building
              systems that are maintainable behind the scenes and effortless in the browser.
            </p>
          </motion.div>
          <motion.div
            className="stats-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {stats.map((stat) => (
              <motion.div className="stat-card" variants={reveal} key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="about-showcase">
          <div className="credentials">
            <motion.div
              className="credential-card"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <GraduationCap />
              <div>
                <span>Education</span>
                <h3>{education.degree}</h3>
                <p>{education.institution} · {education.period}</p>
              </div>
            </motion.div>
            {certifications.map((item) => (
              <motion.div
                className="credential-card"
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={item.name}
              >
                <Code2 />
                <div>
                  <span>Certification</span>
                  <h3>
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noreferrer">
                        {item.name}
                      </a>
                    ) : item.name}
                  </h3>
                  <p>{item.issuer} · {item.date}</p>
                  {item.skills && <p>{item.skills}</p>}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.figure
            className="about-art"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src={aboutArt} alt="Illustrated portrait map of Hassan Khan: builder, learner, dreamer." />
            <figcaption>
              A personal map — values, craft, and the work that keeps me going.
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}
