import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function DocumentDownload({
  href,
  fileName,
  label,
  className,
}: {
  href: string
  fileName: string
  label: string
  className?: string
}) {
  return (
    <Button variant="ghost" className={cn(className)} asChild>
      <a href={href} download={fileName}>
        <Download size={16} /> {label}
      </a>
    </Button>
  )
}
