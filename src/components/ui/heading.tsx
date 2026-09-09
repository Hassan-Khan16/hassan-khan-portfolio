import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const headingVariants = cva('text-foreground font-sans', {
  variants: {
    variant: {
      display:
        'max-w-[1050px] my-[30px] text-[clamp(3.2rem,7.5vw,7.2rem)] max-[640px]:text-[clamp(2.6rem,13vw,4.2rem)] leading-[0.97] tracking-[-0.065em] font-semibold [&_span]:text-transparent [&_span]:[-webkit-text-stroke:1px_rgba(238,243,239,0.45)]',
      section:
        'm-0 max-w-[800px] text-[clamp(2.6rem,5vw,5rem)] max-[640px]:text-[2.65rem] leading-[1.05] tracking-[-0.055em] font-semibold',
      contact:
        'block text-[clamp(2rem,5vw,5rem)] leading-[1.05] tracking-[-0.065em] font-semibold text-primary-foreground',
      page:
        'max-w-[900px] my-4 text-[clamp(2.8rem,6vw,5.6rem)] leading-[0.98] tracking-[-0.06em] font-semibold',
      card: 'm-0 mb-3 text-[28px] tracking-[-0.04em] font-semibold',
      skill: 'mt-[45px] mb-[25px] max-[640px]:mt-[30px] max-[640px]:mb-5 text-[27px] tracking-[-0.04em] font-semibold',
      passion: 'mt-2.5 mb-0 text-[32px] font-semibold',
      role: 'mt-[18px] mb-[3px] text-[30px] tracking-[-0.04em] font-semibold',
      company: 'm-0 mb-5 text-primary font-mono text-[12px] font-normal',
      credential: 'my-2.5 mb-[5px] text-[16px] font-semibold',
      repo: 'm-0 mb-[5px] text-foreground text-[15px] font-semibold [overflow-wrap:anywhere]',
      detail: 'mt-9 mb-3.5 text-[28px] tracking-[-0.04em] font-semibold first:mt-0',
      more: 'm-0 mb-[22px] text-[22px] font-semibold',
      meta: 'text-[16px] font-semibold',
      related: 'text-[18px] font-semibold',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
    font: {
      sans: 'font-sans',
      mono: 'font-mono',
    },
  },
  defaultVariants: {
    variant: 'section',
    font: 'sans',
  },
})

const defaultAs: Record<NonNullable<VariantProps<typeof headingVariants>['variant']>, HeadingElement> = {
  display: 'h1',
  section: 'h2',
  contact: 'h2',
  page: 'h1',
  card: 'h3',
  skill: 'h3',
  passion: 'h3',
  role: 'h3',
  company: 'h4',
  credential: 'h3',
  repo: 'h4',
  detail: 'h2',
  more: 'h2',
  meta: 'h3',
  related: 'h3',
}

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HeadingProps = React.ComponentProps<'h1'> &
  VariantProps<typeof headingVariants> & {
    as?: HeadingElement
    asChild?: boolean
  }

function Heading({
  className,
  variant = 'section',
  weight,
  font,
  as,
  asChild = false,
  ...props
}: HeadingProps) {
  const Tag = as ?? defaultAs[variant ?? 'section']
  const Comp = asChild ? Slot : Tag

  return (
    <Comp
      data-slot="heading"
      data-variant={variant}
      className={cn(headingVariants({ variant, weight, font }), className)}
      {...props}
    />
  )
}

export { Heading, headingVariants }
