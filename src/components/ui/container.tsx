import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const containerVariants = cva('w-[min(1180px,calc(100%-48px))] max-[640px]:w-[min(100%-28px,1180px)] mx-auto')

type ContainerProps = React.ComponentProps<'div'> &
  VariantProps<typeof containerVariants> & {
    asChild?: boolean
  }

function Container({ className, asChild = false, ...props }: ContainerProps) {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      data-slot="container"
      className={cn(containerVariants(), className)}
      {...props}
    />
  )
}

export { Container, containerVariants }
