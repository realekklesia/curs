'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Icons } from '@/components/icons'
import { Feature } from '@/types'

interface FeatureCardProps extends Feature {
  index: number
}

export function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
  const Icon = Icons[icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="p-6 transition-colors hover:bg-accent/50">
        <Icon className="h-8 w-8 text-primary transition-colors group-hover:text-primary/80" />
        <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </Card>
    </motion.div>
  )
} 