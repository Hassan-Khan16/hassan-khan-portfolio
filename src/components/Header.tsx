import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navItems, profile } from '@/data/content'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

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
    <header className="fixed top-[18px] left-1/2 z-[90] flex h-[62px] w-[min(1160px,calc(100%-32px))] -translate-x-1/2 items-center justify-between rounded-2xl border border-border bg-[rgba(9,11,11,0.82)] py-0 pr-2.5 pl-5 shadow-[0_16px_50px_rgba(0,0,0,0.25)] backdrop-blur-[18px] max-[640px]:top-2.5 max-[640px]:w-[calc(100%-20px)]">
      <a className="text-[21px] font-extrabold tracking-[-1px]" href={hrefFor('top')} aria-label="Back to home">
        HK<span className="text-primary">.</span>
      </a>
      <nav className="hidden items-center gap-2 min-[901px]:flex" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            className={cn(
              'relative px-[13px] py-2.5 font-mono text-[12px] font-normal capitalize text-muted-foreground transition-colors duration-250 after:absolute after:right-[13px] after:bottom-[3px] after:left-[13px] after:h-px after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-250 hover:text-foreground hover:after:scale-x-100',
              active === item && 'text-foreground after:scale-x-100',
            )}
            href={hrefFor(item)}
            key={item}
          >
            {item}
          </a>
        ))}
      </nav>
      <Button variant="cta" asChild>
        <a href={`mailto:${profile.email}`}>
          Let's talk <ArrowUpRight size={15} />
        </a>
      </Button>
      <Button
        variant="icon"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="top">
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                className="block px-[13px] py-[13px] font-mono text-[12px] font-normal capitalize text-muted-foreground"
                href={hrefFor(item)}
                key={item}
                onClick={() => setOpen(false)}
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
