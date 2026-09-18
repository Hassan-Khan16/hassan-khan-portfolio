import { useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { motion } from 'motion/react'
import { profile } from '@/data/content'
import { reveal } from '@/lib/motion'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { Section } from '@/components/ui/section'
import { Text } from '@/components/ui/text'
import { GithubIcon, LinkedinIcon } from './Icons'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Section tone="accent" id="contact">
      <Container>
        <motion.div
          className="flex flex-col items-center text-center"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center gap-6">
            <Text variant="eyebrowOnPrimary" as="span" className="block">
              06 / Contact
            </Text>
            <div className="flex flex-col items-center gap-8">
              <Heading variant="contact" className="block">
                Have a project in mind?
              </Heading>
              <Text variant="contactBody" className="block">
                Let's turn your idea into a product people enjoy using.
              </Text>
            </div>
          </div>
          <a
            className="mt-[14px] inline-flex items-center gap-3 border-b-2 border-primary-foreground/30 pb-[5px] text-[clamp(1rem,2.5vw,1.7rem)] font-semibold hover:border-primary-foreground"
            href={`mailto:${profile.email}`}
          >
            {profile.email} <ArrowUpRight />
          </a>
          <Button variant="copy" type="button" onClick={onCopy}>
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? 'Copied' : 'Copy email'}
          </Button>
        </motion.div>
        <div className="mt-[120px] flex items-center justify-end gap-5 border-t border-primary-foreground/22 pt-7 font-mono text-[11px] font-medium max-[640px]:mt-20 max-[640px]:flex max-[640px]:items-start max-[640px]:justify-center max-[640px]:gap-5">
          <a className="flex items-center gap-3" href={profile.github} target="_blank" rel="noreferrer">
            <GithubIcon size={17} /> GitHub
          </a>
          <a className="flex items-center gap-3" href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedinIcon size={17} /> LinkedIn
          </a>
        </div>
      </Container>
    </Section>
  )
}
