import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Hero } from '@/components/home/Hero'
import { Skills } from '@/components/home/Skills'
import { Timeline } from '@/components/home/Timeline'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'

export function Home() {
  return (
    <>
      <Helmet>
        <title>Luke Grady - Full Stack Engineer</title>
        <meta
          name="description"
          content="WPI CS student building production-grade analytics, ML, and full-stack products. Turning messy data into momentum."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-16"
      >
        <Hero />
        <FeaturedProjects />
        <Skills />
        <Timeline />
      </motion.div>
    </>
  )
}