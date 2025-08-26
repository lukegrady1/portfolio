import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

export function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog - Luke Grady</title>
        <meta
          name="description"
          content="Technical articles about data engineering, machine learning, and full-stack development."
        />
      </Helmet>

      <div className="pt-16 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <h1 className="text-4xl font-bold text-foreground mb-6">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Coming soon - technical deep dives, tutorials, and insights from building production systems.
          </p>
        </motion.div>
      </div>
    </>
  )
}