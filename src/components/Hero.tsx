import { ArrowDown, Mail, MapPin } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import portrait from '../assets/portrait.jpg'
import { profile } from '../data/content'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { GithubIcon, LinkedinIcon } from './Icons'

export function Hero() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 700], [0, reduceMotion ? 0 : 120])

  return (
    <section
      className="relative flex min-h-svh items-center overflow-hidden pt-[150px] pb-[70px] max-[640px]:pt-[130px]"
      id="top"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.36] bg-[length:72px_72px] bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]"
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute top-[110px] -right-[120px] size-[540px] rounded-full bg-[var(--orb)] blur-[90px]"
        style={{ y: heroY }}
        aria-hidden="true"
      />
      <Container className="relative z-1">
        <div className="grid grid-cols-[1.2fr_0.8fr] items-center gap-12 max-[900px]:grid-cols-1">
          <div>
            <motion.div
              className="inline-flex items-center gap-2.5 font-mono text-[11px] font-normal tracking-[0.12em] text-muted-foreground uppercase"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <span className="size-[7px] animate-[pulse-dot_2s_ease_infinite] rounded-full bg-primary shadow-[0_0_0_5px_var(--pulse-ring),0_0_18px_var(--primary)]" />
              Available for meaningful projects
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
            >
              <Heading variant="display" as="h1">
                I build digital products
                <br />
                <span>that work beautifully.</span>
              </Heading>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
            >
              <Text variant="lead">
                I'm {profile.shortName}, a full-stack software engineer turning complex requirements
                into fast, reliable, and human-centered web experiences.
              </Text>
            </motion.div>
            <motion.div
              className="mt-[38px] flex items-center gap-3 max-[640px]:flex-col max-[640px]:items-stretch"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button variant="default" asChild>
                <a href="#projects">
                  Explore my work <ArrowDown size={17} />
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href={`mailto:${profile.email}`}>
                  <Mail size={17} /> Get in touch
                </a>
              </Button>
            </motion.div>
          </div>
          <motion.figure
            className="relative m-0 rounded-[28px] border border-border bg-[var(--portrait-bg)] p-3 shadow-[var(--portrait-shadow)] max-[900px]:max-w-[420px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <span
              className="pointer-events-none absolute right-[18px] bottom-[72px] size-[72px] rounded-full border border-primary/40"
              aria-hidden="true"
            />
            <img
              className="block aspect-4/5 w-full rounded-[18px] object-cover object-[50%_18%]"
              src={portrait}
              alt={`${profile.shortName}, software engineer`}
            />
            <figcaption className="mt-3.5 flex justify-between gap-3 px-2 pb-1 font-mono text-[12px] font-medium text-foreground">
              {profile.shortName}
              <span className="font-normal text-muted-foreground">Builder. Learner. Dreamer.</span>
            </figcaption>
          </motion.figure>
        </div>
        <motion.div
          className="mt-[72px] flex items-center justify-between border-t border-border pt-[25px] max-[640px]:mt-[45px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          <div className="flex items-center gap-2 font-mono text-[11px] font-normal text-muted-foreground">
            <MapPin size={16} /> {profile.location}
          </div>
          <div className="flex gap-2.5">
            <a
              className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition duration-250 hover:-translate-y-[3px] hover:border-primary hover:text-primary"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon size={19} />
            </a>
            <a
              className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition duration-250 hover:-translate-y-[3px] hover:border-primary hover:text-primary"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={19} />
            </a>
          </div>
        </motion.div>
      </Container>
      <a
        className="absolute right-8 bottom-[42px] flex origin-right items-center gap-3 rotate-90 font-mono text-[10px] font-normal tracking-[0.15em] text-muted-foreground uppercase max-[640px]:hidden"
        href="#about"
        aria-label="Scroll to about"
      >
        Scroll <span className="block h-px w-[50px] bg-border" />
      </a>
    </section>
  )
}
