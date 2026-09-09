import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { motion } from 'motion/react'
import { navItems, profile } from '../data/content'

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const location = useLocation()
  const onHome = location.pathname === '/'

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!onHome) {
      setActive(location.pathname.startsWith('/projects/') ? 'projects' : '')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-30% 0px -60%', threshold: 0 },
    )
    navItems.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [onHome, location.pathname])

  const hrefFor = (item: string) => (onHome ? `#${item}` : `/#${item}`)

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Back to home">
        HK<span>.</span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a className={active === item ? 'active' : ''} href={hrefFor(item)} key={item}>
            {item}
          </a>
        ))}
      </nav>
      <a className="header-cta" href={`mailto:${profile.email}`}>
        Let's talk <ArrowUpRight size={15} />
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <motion.nav
          className="mobile-nav"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a href={hrefFor(item)} key={item} onClick={() => setOpen(false)}>
              {item}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  )
}
