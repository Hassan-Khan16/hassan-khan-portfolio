import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { motion } from 'motion/react'
import { profile } from '@/data/content'
import { reveal } from '@/lib/motion'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { copyEmail } from '@/store/thunks'
import { Button } from '@/components/ui/button'
import { GithubIcon, LinkedinIcon } from './Icons'

export function Contact() {
  const dispatch = useAppDispatch()
  const copied = useAppSelector((state) => state.ui.emailCopied)

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
          <Button
            className="copy-button"
            variant="copy"
            type="button"
            onClick={() => dispatch(copyEmail())}
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? 'Copied' : 'Copy email'}
          </Button>
        </motion.div>
        <div className="contact-details">
          <a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon size={17} /> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={17} /> LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
