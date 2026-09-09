import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const textVariants = cva('font-sans', {
  variants: {
    variant: {
      body: 'text-foreground text-base leading-[1.7]',
      bodySm: 'text-muted-foreground text-[14px] leading-[1.65]',
      bodyLg:
        'text-foreground text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.65] tracking-[-0.025em]',
      muted: 'text-muted-foreground leading-[1.7]',
      lead: 'text-muted-foreground text-[18px] max-[640px]:text-[15px] leading-[1.75] max-w-[660px]',
      projectLead: 'text-muted-foreground text-[18px] leading-[1.7] max-w-[720px]',
      eyebrow:
        'text-primary font-mono text-[11px] font-normal uppercase tracking-[0.14em]',
      eyebrowOnPrimary:
        'text-primary-deep font-mono text-[11px] font-normal uppercase tracking-[0.14em]',
      label:
        'text-muted-foreground font-mono text-[10px] font-normal uppercase tracking-[0.12em]',
      caption: 'text-muted-foreground font-mono text-[10px] font-normal',
      mono: 'text-muted-foreground font-mono text-[12px] font-normal',
      index: 'text-primary font-mono text-[10px] font-normal',
      contactBody: 'text-[17px] text-primary-foreground/72',
      projectMore: 'mt-[18px] text-primary font-mono text-[11px] font-medium',
      credentialBody: 'm-0 text-muted-foreground text-[13px]',
      credentialMeta: 'mt-1 text-muted-foreground font-mono text-[10px]',
      repoBody: 'm-0 text-muted-foreground text-[12px]',
      statLabel: 'block mt-[9px] text-muted-foreground font-mono text-[10px] leading-[1.5]',
      timelineDate: 'pt-3.5 text-muted-foreground font-mono text-[10px]',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    font: {
      sans: 'font-sans',
      mono: 'font-mono',
    },
  },
  defaultVariants: {
    variant: 'body',
    font: 'sans',
  },
})

type TextElement = 'p' | 'span' | 'div'

type TextProps = React.ComponentProps<'p'> &
  VariantProps<typeof textVariants> & {
    as?: TextElement
    asChild?: boolean
  }

function Text({
  className,
  variant = 'body',
  weight,
  font,
  as,
  asChild = false,
  ...props
}: TextProps) {
  const Tag = as ?? (variant === 'eyebrow' || variant === 'eyebrowOnPrimary' || variant === 'label' || variant === 'caption' || variant === 'mono' || variant === 'index' || variant === 'statLabel' || variant === 'projectMore' ? 'span' : 'p')
  const Comp = asChild ? Slot : Tag

  return (
    <Comp
      data-slot="text"
      data-variant={variant}
      className={cn(textVariants({ variant, weight, font }), className)}
      {...props}
    />
  )
}

export { Text, textVariants }
