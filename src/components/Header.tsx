import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navItems, profile } from '@/data/content'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
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
      if (location.pathname.startsWith('/files')) setActive('files')
      else if (location.pathname.startsWith('/projects/')) setActive('projects')
      else setActive('')
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
  const links = [
    ...navItems.map((item) => ({ id: item, label: item, href: hrefFor(item), page: false })),
    { id: 'files', label: 'files', href: '/files', page: true },
  ]
  const desktopClass = (id: string) =>
    cn(
      'relative px-[13px] py-2.5 font-mono text-[12px] font-normal capitalize text-muted-foreground transition-colors duration-250 after:absolute after:right-[13px] after:bottom-[3px] after:left-[13px] after:h-px after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-250 hover:text-foreground hover:after:scale-x-100',
      active === id && 'text-foreground after:scale-x-100',
    )

  return (
    <header className="fixed top-[18px] left-1/2 z-[90] flex h-[62px] w-[min(1160px,calc(100%-32px))] -translate-x-1/2 items-center justify-between rounded-2xl border border-border bg-[var(--header-bg)] py-0 pr-2.5 pl-5 shadow-[var(--header-shadow)] backdrop-blur-[18px] max-[640px]:top-2.5 max-[640px]:w-[calc(100%-20px)]">
      <a className="text-[21px] font-extrabold tracking-[-1px]" href={hrefFor('top')} aria-label="Back to home">
        HK<span className="text-primary">.</span>
      </a>
      <nav className="hidden items-center gap-2 min-[901px]:flex" aria-label="Primary navigation">
        {links.map((item) =>
          item.page ? (
            <Link className={desktopClass(item.id)} to={item.href} key={item.id}>
              {item.label}
            </Link>
          ) : (
            <a className={desktopClass(item.id)} href={item.href} key={item.id}>
              {item.label}
            </a>
          ),
        )}
      </nav>
      <div className="flex items-center gap-2">
        <ThemeSwitcher className="hidden min-[901px]:block" />
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
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="top">
          <nav aria-label="Mobile navigation">
            {links.map((item) =>
              item.page ? (
                <Link
                  className="block px-[13px] py-[13px] font-mono text-[12px] font-normal capitalize text-muted-foreground"
                  to={item.href}
                  key={item.id}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  className="block px-[13px] py-[13px] font-mono text-[12px] font-normal capitalize text-muted-foreground"
                  href={item.href}
                  key={item.id}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>
          <div className="mt-3 border-t border-border px-[13px] pt-3 pb-1">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              Theme
            </p>
            <ThemeSwitcher />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
