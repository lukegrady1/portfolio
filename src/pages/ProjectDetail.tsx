import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <>
      <Helmet>
        <title>Project Details - Luke Grady</title>
        <meta name="description" content="Detailed case study and project analysis." />
      </Helmet>

      <div className="pt-16 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Project: {slug}
          </h1>
          <p className="text-lg text-muted-foreground">
            Coming soon - detailed case study for this project.
          </p>
        </motion.div>
      </div>
    </>
  )
}