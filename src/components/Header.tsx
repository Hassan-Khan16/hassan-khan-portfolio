import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navItems, profile } from '@/data/content'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setActiveSection, setMobileNavOpen } from '@/store/uiSlice'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent } from '@/components/ui/sheet'

export function Header() {
  const dispatch = useAppDispatch()
  const open = useAppSelector((state) => state.ui.mobileNavOpen)
  const active = useAppSelector((state) => state.ui.activeSection)
  const location = useLocation()
  const onHome = location.pathname === '/'

  useEffect(() => {
    dispatch(setMobileNavOpen(false))
  }, [location.pathname, dispatch])

  useEffect(() => {
    if (!onHome) {
      dispatch(setActiveSection(location.pathname.startsWith('/projects/') ? 'projects' : ''))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) dispatch(setActiveSection(visible.target.id))
      },
      { rootMargin: '-30% 0px -60%', threshold: 0 },
    )
    navItems.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [onHome, location.pathname, dispatch])

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
      <Button variant="cta" className="header-cta" asChild>
        <a href={`mailto:${profile.email}`}>
          Let's talk <ArrowUpRight size={15} />
        </a>
      </Button>
      <Button
        className="menu-button"
        variant="icon"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => dispatch(setMobileNavOpen(!open))}
      >
        {open ? <X /> : <Menu />}
      </Button>
      <Sheet open={open} onOpenChange={(value) => dispatch(setMobileNavOpen(value))}>
        <SheetContent className="mobile-nav-sheet" side="top">
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                href={hrefFor(item)}
                key={item}
                onClick={() => dispatch(setMobileNavOpen(false))}
              >
                {item}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
