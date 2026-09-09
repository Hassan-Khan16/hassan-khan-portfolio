import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const sectionVariants = cva('border-t border-border py-[140px] max-[900px]:py-[100px]', {
  variants: {
    tone: {
      default: 'bg-background',
      surface: 'bg-card',
      accent: 'border-0 bg-primary text-primary-foreground py-[30px] pt-[180px] max-[640px]:py-[80px] max-[640px]:pb-[30px]',
      none: 'border-0 bg-transparent py-0',
    },
  },
  defaultVariants: {
    tone: 'default',
  },
})

type SectionProps = React.ComponentProps<'section'> &
  VariantProps<typeof sectionVariants> & {
    asChild?: boolean
  }

function Section({
  className,
  tone,
  asChild = false,
  ...props
}: SectionProps) {
  const Comp = asChild ? Slot : 'section'
  return (
    <Comp
      data-slot="section"
      className={cn(sectionVariants({ tone }), className)}
      {...props}
    />
  )
}

export { Section, sectionVariants }
