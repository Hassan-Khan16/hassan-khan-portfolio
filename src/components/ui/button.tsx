import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono transition-[transform,border-color,background,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'h-[50px] rounded-[10px] border border-primary bg-primary px-5 text-[12px] font-medium text-primary-foreground hover:-translate-y-[3px] max-[640px]:justify-center',
        ghost:
          'h-[50px] rounded-[10px] border border-border bg-transparent px-5 text-[12px] font-medium text-foreground hover:-translate-y-[3px] hover:border-primary hover:bg-primary/5 max-[640px]:justify-center',
        cta:
          'hidden h-auto rounded-[10px] border-0 bg-primary px-4 py-3 text-[12px] font-medium text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(101,245,189,0.18)] min-[901px]:inline-flex',
        filter:
          'h-auto cursor-pointer rounded-[99px] border border-border bg-transparent px-[14px] py-[9px] text-[10px] font-normal text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground',
        filterActive:
          'h-auto cursor-pointer rounded-[99px] border border-primary bg-primary px-[14px] py-[9px] text-[10px] font-normal text-primary-foreground',
        copy:
          'mx-auto mt-5 flex h-auto cursor-pointer items-center gap-[7px] rounded-[99px] border border-primary-foreground/25 bg-transparent px-3 py-2 text-[10px] font-medium text-primary-foreground',
        icon:
          'hidden size-auto place-items-center border-0 bg-transparent p-0 text-foreground max-[900px]:grid',
        link: 'h-auto border-0 bg-transparent p-0 font-inherit text-inherit hover:text-primary',
      },
      size: {
        default: '',
        icon: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
