import { ArrowDown, Mail, MapPin } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import portrait from '../assets/portrait.jpg'
import { profile } from '../data/content'
import { Button } from '@/components/ui/button'
import { GithubIcon, LinkedinIcon } from './Icons'

export function Hero() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 700], [0, reduceMotion ? 0 : 120])

  return (
    <section className="hero-section" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <motion.div className="hero-orb" style={{ y: heroY }} aria-hidden="true" />
      <div className="container hero-content">
        <div className="hero-split">
          <div>
            <motion.div
              className="availability"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <span />
              Available for meaningful projects
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
            >
              I build digital products
              <br />
              <span>that work beautifully.</span>
            </motion.h1>
            <motion.p
              className="hero-copy"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
            >
              I'm {profile.shortName}, a full-stack software engineer turning complex requirements
              into fast, reliable, and human-centered web experiences.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button variant="default" className="button button-primary" asChild>
                <a href="#projects">
                  Explore my work <ArrowDown size={17} />
                </a>
              </Button>
              <Button variant="ghost" className="button button-ghost" asChild>
                <a href={`mailto:${profile.email}`}>
                  <Mail size={17} /> Get in touch
                </a>
              </Button>
            </motion.div>
          </div>
          <motion.figure
            className="portrait-wrap"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <img src={portrait} alt={`${profile.shortName}, software engineer`} />
            <figcaption>
              {profile.shortName}
              <span>Builder. Learner. Dreamer.</span>
            </figcaption>
          </motion.figure>
        </div>
        <motion.div
          className="hero-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          <div className="location">
            <MapPin size={16} /> {profile.location}
          </div>
          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon size={19} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={19} />
            </a>
          </div>
        </motion.div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about">
        Scroll <span />
      </a>
    </section>
  )
}
