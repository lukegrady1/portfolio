import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

export function Uses() {
  return (
    <>
      <Helmet>
        <title>Uses - Luke Grady</title>
        <meta
          name="description"
          content="Tools, software, and hardware I use for development and productivity."
        />
      </Helmet>

      <div className="pt-16 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <h1 className="text-4xl font-bold text-foreground mb-6">Uses</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Coming soon - detailed breakdown of my development tools, hardware setup, and productivity stack.
          </p>
        </motion.div>
      </div>
    </>
  )
}