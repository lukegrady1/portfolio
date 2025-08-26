import { motion } from 'framer-motion'
import { Code, Database, Brain, Cloud } from 'lucide-react'

const skillCategories = [
  {
    icon: Code,
    category: 'Frontend',
    skills: [
      { name: 'React', proficiency: 95 },
      { name: 'TypeScript', proficiency: 90 },
      { name: 'Tailwind CSS', proficiency: 85 },
      { name: 'Next.js', proficiency: 80 },
    ],
  },
  {
    icon: Database,
    category: 'Backend & Data',
    skills: [
      { name: 'Python', proficiency: 95 },
      { name: 'Go', proficiency: 85 },
      { name: 'Snowflake', proficiency: 90 },
      { name: 'PostgreSQL', proficiency: 85 },
    ],
  },
  {
    icon: Brain,
    category: 'ML & Analytics',
    skills: [
      { name: 'Pandas', proficiency: 95 },
      { name: 'Scikit-learn', proficiency: 90 },
      { name: 'Tableau', proficiency: 85 },
      { name: 'MLflow', proficiency: 75 },
    ],
  },
  {
    icon: Cloud,
    category: 'DevOps & Tools',
    skills: [
      { name: 'Docker', proficiency: 80 },
      { name: 'Git', proficiency: 95 },
      { name: 'GitHub Actions', proficiency: 75 },
      { name: 'AWS', proficiency: 70 },
    ],
  },
]

export function Skills() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack engineering with a focus on data-driven solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <category.icon className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold text-foreground">
                  {category.category}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}