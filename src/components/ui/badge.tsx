import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center border border-[var(--line)] px-[11px] py-2 font-[400] text-[10px] font-[family-name:var(--mono)] text-[var(--muted)] transition-[color,border-color]',
  {
    variants: {
      variant: {
        default: 'rounded-[7px]',
        tag: 'rounded-[7px]',
        skill: 'rounded-[7px]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
