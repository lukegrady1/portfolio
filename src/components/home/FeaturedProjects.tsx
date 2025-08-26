import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Github, ExternalLink, TrendingUp, Users, Zap } from 'lucide-react'

const featuredProjects = [
  {
    title: 'MGB In-Basket Optimization',
    slug: 'mgb-inbox-optimization',
    summary: 'Epic Signal → Snowflake → Tableau pipeline reducing physician workload by 25%',
    tags: ['Data Engineering', 'Healthcare Analytics', 'Epic'],
    stack: ['Python', 'Snowflake', 'Tableau', 'Epic Signal'],
    kpis: [
      { icon: TrendingUp, label: 'Time Saved', value: '25%' },
      { icon: Users, label: 'Physicians', value: '100+' },
      { icon: Zap, label: 'Records', value: '50M+' },
    ],
    cover: '/images/projects/mgb-cover.jpg',
    repo: 'https://github.com/lukegrady1/mgb-analytics',
  },
  {
    title: 'Roomify',
    slug: 'roomify',
    summary: 'Student housing marketplace with 500+ users and React + Node.js stack',
    tags: ['Full Stack', 'Marketplace', 'React'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Google Maps API'],
    kpis: [
      { icon: Users, label: 'Active Users', value: '500+' },
      { icon: TrendingUp, label: 'Growth', value: '15%/mo' },
      { icon: Zap, label: 'Matches', value: '200+' },
    ],
    cover: '/images/projects/roomify-cover.jpg',
    repo: 'https://github.com/lukegrady1/roomify',
    live: 'https://roomify.app',
  },
  {
    title: 'MLB Betting Analytics',
    slug: 'mlb-betting-pipeline',
    summary: 'ML pipeline achieving 15% ROI with Statcast data and feature engineering',
    tags: ['Machine Learning', 'Sports Analytics', 'Python'],
    stack: ['Python', 'Scikit-learn', 'MLflow', 'Pandas'],
    kpis: [
      { icon: TrendingUp, label: 'ROI', value: '15%' },
      { icon: Zap, label: 'Features', value: '50+' },
      { icon: Users, label: 'Models', value: '12' },
    ],
    cover: '/images/projects/mlb-cover.jpg',
    repo: 'https://github.com/lukegrady1/mlb-analytics',
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Production systems that solve real problems with measurable impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <div className="text-4xl mb-2">🚀</div>
                  <div className="text-sm">Project Screenshot</div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.summary}
                </p>
                
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {project.kpis.map((kpi, kpiIndex) => (
                    <div key={kpiIndex} className="text-center">
                      <kpi.icon className="h-4 w-4 text-primary mx-auto mb-1" />
                      <div className="text-sm font-semibold text-foreground">
                        {kpi.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {kpi.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="text-xs text-muted-foreground px-2 py-1">
                      +{project.stack.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View source code"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  
                  <Link
                    to={`/projects/${project.slug}`}
                    className="text-sm text-primary hover:underline flex items-center"
                  >
                    View Case Study
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors group"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}