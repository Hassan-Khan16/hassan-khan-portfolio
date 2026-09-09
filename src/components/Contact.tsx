import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Phone } from 'lucide-react'
import { motion } from 'motion/react'
import { profile } from '../data/content'
import { reveal } from '../lib/motion'
import { GithubIcon, LinkedinIcon } from './Icons'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.div
          className="contact-inner"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="eyebrow">05 / Contact</span>
          <h2>Have a project in mind?</h2>
          <p>Let's turn your idea into a product people enjoy using.</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email} <ArrowUpRight />
          </a>
          <button className="copy-button" type="button" onClick={copyEmail}>
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? 'Copied' : 'Copy email'}
          </button>
        </motion.div>
        <div className="contact-details">
          <a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon size={17} /> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={17} /> LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
