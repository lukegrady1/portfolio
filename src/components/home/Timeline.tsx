import { motion } from 'framer-motion'
import { Calendar, MapPin, Award } from 'lucide-react'

const timelineItems = [
  {
    type: 'education',
    institution: 'Worcester Polytechnic Institute',
    role: 'B.S. Computer Science',
    startDate: '2022',
    endDate: '2026',
    location: 'Worcester, MA',
    description: 'Focus on Data Science, Machine Learning, and Software Engineering',
    achievements: [
      'Dean\'s List (3 semesters)',
      'CS Major GPA: 3.8/4.0',
      'Relevant Coursework: Data Structures, Algorithms, Database Systems, Machine Learning'
    ],
  },
  {
    type: 'experience',
    institution: 'Mass General Brigham',
    role: 'Data Analytics Intern',
    startDate: 'Jun 2024',
    endDate: 'Aug 2024',
    location: 'Boston, MA',
    description: 'Built Epic Signal → Snowflake → Tableau analytics pipeline optimizing in-basket workflows',
    achievements: [
      'Reduced physician in-basket processing time by 25%',
      'Processed 50M+ Epic Signal records',
      'Created executive dashboards viewed by 100+ stakeholders'
    ],
  },
  {
    type: 'experience',
    institution: 'Roomify',
    role: 'Co-Founder & Lead Engineer',
    startDate: 'Jan 2024',
    endDate: 'Present',
    location: 'Worcester, MA',
    description: 'Student housing marketplace connecting subletters with tenants',
    achievements: [
      '500+ active users in first semester',
      'React + Node.js full-stack application',
      'Integrated Google Maps API and payment processing'
    ],
  },
  {
    type: 'project',
    institution: 'MLB Betting Analytics',
    role: 'Solo Project',
    startDate: 'Mar 2024',
    endDate: 'May 2024',
    location: 'Personal Project',
    description: 'End-to-end ML pipeline for positive expected value baseball betting',
    achievements: [
      '15% ROI over 200+ game sample',
      'Feature engineering from MLB Statcast data',
      'MLflow experiment tracking and model deployment'
    ],
  },
]

export function Timeline() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground">
            Building experience across data, engineering, and product
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                
                <div className="ml-16 bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                      item.type === 'education' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      item.type === 'experience' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                    }`}>
                      {item.type === 'education' ? <Award className="w-3 h-3 mr-1" /> :
                       item.type === 'experience' ? <Calendar className="w-3 h-3 mr-1" /> :
                       <Calendar className="w-3 h-3 mr-1" />}
                      {item.type}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {item.startDate} - {item.endDate}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {item.location}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {item.role}
                  </h3>
                  <h4 className="text-primary font-medium mb-3">
                    {item.institution}
                  </h4>
                  
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  
                  <ul className="space-y-1">
                    {item.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}