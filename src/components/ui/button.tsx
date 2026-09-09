import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap transition-[transform,border-color,background,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'h-[50px] rounded-[10px] border border-[var(--accent)] bg-[var(--accent)] px-5 font-[500] text-[12px] font-[family-name:var(--mono)] text-[#07110d] hover:-translate-y-[3px]',
        ghost:
          'h-[50px] rounded-[10px] border border-[var(--line)] bg-transparent px-5 font-[500] text-[12px] font-[family-name:var(--mono)] text-[var(--text)] hover:-translate-y-[3px] hover:border-[var(--accent)] hover:bg-[rgba(101,245,189,0.05)]',
        cta:
          'h-auto rounded-[10px] border-0 bg-[var(--accent)] px-4 py-3 font-[500] text-[12px] font-[family-name:var(--mono)] text-[#06110c] hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(101,245,189,0.18)]',
        filter:
          'h-auto rounded-[99px] border border-[var(--line)] bg-transparent px-[14px] py-[9px] font-[400] text-[10px] font-[family-name:var(--mono)] text-[var(--muted)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#06110c]',
        filterActive:
          'h-auto rounded-[99px] border border-[var(--accent)] bg-[var(--accent)] px-[14px] py-[9px] font-[400] text-[10px] font-[family-name:var(--mono)] text-[#06110c]',
        copy:
          'mx-auto mt-5 flex h-auto items-center gap-[7px] rounded-[99px] border border-[rgba(7,17,13,0.25)] bg-transparent px-3 py-2 font-[500] text-[10px] font-[family-name:var(--mono)] text-[#07110d]',
        icon:
          'grid size-auto place-items-center border-0 bg-transparent p-0 text-[var(--text)]',
        link: 'h-auto border-0 bg-transparent p-0 text-inherit',
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
