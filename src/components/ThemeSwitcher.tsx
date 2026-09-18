import { useEffect, useRef, useState } from 'react'
import { Check, Palette } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { themeGroups, type ThemeId } from '@/lib/theme'

export function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme, themes } = useTheme()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const select = (id: ThemeId) => {
    setTheme(id)
    setOpen(false)
  }

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      <Button
        type="button"
        variant="theme"
        aria-label="Choose theme"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((value) => !value)}
      >
        <Palette size={16} />
      </Button>
      {open && (
        <div
          role="listbox"
          aria-label="Themes"
          className="absolute top-[calc(100%+10px)] right-0 z-[100] min-w-[200px] rounded-xl border border-border bg-popover p-2 shadow-[var(--header-shadow)]"
        >
          {themeGroups.map((group, groupIndex) => {
            const items = themes.filter((item) => item.group === group.id)
            return (
              <div
                key={group.id}
                className={cn(groupIndex > 0 && 'mt-1.5 border-t border-border pt-1.5')}
              >
                <p className="px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                  {group.label}
                </p>
                {items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    role="option"
                    aria-selected={theme === item.id}
                    className={cn(
                      'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left font-mono text-[11px] text-foreground transition-colors hover:bg-secondary',
                      theme === item.id && 'bg-secondary',
                    )}
                    onClick={() => select(item.id)}
                  >
                    <span
                      className="size-3.5 shrink-0 rounded-full border border-border"
                      style={{ background: item.swatch }}
                      aria-hidden="true"
                    />
                    <span className="flex-1">{item.label}</span>
                    {theme === item.id && <Check size={14} className="text-primary" />}
                  </button>
                ))}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
