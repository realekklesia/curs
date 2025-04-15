'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { FeatureCard } from '@/components/feature-card'
import { FEATURES, SITE_CONFIG } from '@/lib/constants'
import { toast } from 'sonner'

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(false)

  const handleGetStarted = async () => {
    setIsLoading(true)
    try {
      await toast.promise(
        new Promise((resolve) => setTimeout(resolve, 1000)),
        {
          loading: 'Setting up your workspace...',
          success: 'Welcome to the platform!',
          error: 'Something went wrong.',
        }
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl font-bold tracking-tight sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Welcome to{' '}
            <span className="text-primary">{SITE_CONFIG.name}</span>
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {SITE_CONFIG.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-x-6"
        >
          <Button 
            size="lg" 
            className="rounded-full"
            onClick={handleGetStarted}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Get Started'}
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full"
            onClick={() => toast.info('Learn more clicked!')}
          >
            Learn More
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </motion.div>
      </div>
    </main>
  )
} 