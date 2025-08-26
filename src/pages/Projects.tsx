import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

export function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects - Luke Grady</title>
        <meta
          name="description"
          content="Explore my portfolio of data analytics, machine learning, and full-stack engineering projects."
        />
      </Helmet>

      <div className="pt-16 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <h1 className="text-4xl font-bold text-foreground mb-6">Projects</h1>
          <p className="text-lg text-muted-foreground">
            Coming soon - detailed project showcase with case studies, live demos, and source code.
          </p>
        </motion.div>
      </div>
    </>
  )
}