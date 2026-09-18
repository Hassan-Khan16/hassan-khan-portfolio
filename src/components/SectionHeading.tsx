import { motion } from 'motion/react'
import { reveal } from '../lib/motion'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  descriptionClassName,
}: {
  eyebrow: string
  title: string
  description?: string
  descriptionClassName?: string
}) {
  return (
    <motion.div
      className="mb-[72px] grid grid-cols-[1fr_2.4fr] max-[900px]:mb-12 max-[900px]:grid-cols-1 max-[900px]:gap-[22px] max-[640px]:mb-12"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <Text variant="eyebrow">{eyebrow}</Text>
      <Heading variant="section" as="h2">
        {title}
      </Heading>
      {description && (
        <Text
          variant="muted"
          className={cn(
            'col-start-2 mt-6 max-w-[600px] max-[900px]:col-start-1',
            descriptionClassName,
          )}
        >
          {description}
        </Text>
      )}
    </motion.div>
  )
}
