import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

export function Playground() {
  return (
    <>
      <Helmet>
        <title>Playground - Luke Grady</title>
        <meta
          name="description"
          content="Interactive demos and experiments showcasing data visualization, ML models, and web technologies."
        />
      </Helmet>

      <div className="pt-16 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <h1 className="text-4xl font-bold text-foreground mb-6">Playground</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Coming soon - interactive demos, data visualizations, and mini-experiments.
          </p>
        </motion.div>
      </div>
    </>
  )
}