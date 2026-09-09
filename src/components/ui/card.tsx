import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const cardVariants = cva('border border-border', {
  variants: {
    variant: {
      default: 'rounded-[14px] bg-background',
      project:
        'flex min-h-[480px] flex-col overflow-hidden rounded-[14px] bg-background p-7 transition-[border-color,transform] duration-300 hover:-translate-y-[5px] hover:border-primary/32 max-[640px]:min-h-[460px] max-[640px]:p-5',
      stat: 'rounded-xl bg-background px-[18px] py-[26px] max-[640px]:flex max-[640px]:items-center max-[640px]:justify-between',
      credential: 'flex items-start gap-[18px] rounded-xl p-[26px] max-[640px]:p-5 [&_svg]:shrink-0 [&_svg]:text-primary [&_h3_a:hover]:text-primary',
      related: 'flex flex-col gap-2 rounded-xl p-[22px] transition-[border-color,transform] duration-250 hover:-translate-y-[3px] hover:border-primary/32',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type CardProps = React.ComponentProps<'div'> &
  VariantProps<typeof cardVariants> & {
    asChild?: boolean
  }

function Card({
  className,
  variant,
  asChild = false,
  ...props
}: CardProps) {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      data-slot="card"
      data-variant={variant}
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Card, cardVariants }
