import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Download, Mail, MapPin, Calendar } from 'lucide-react'

export function Resume() {
  return (
    <>
      <Helmet>
        <title>Resume - Luke Grady</title>
        <meta
          name="description"
          content="Software engineer and data scientist with experience in full-stack development and analytics."
        />
      </Helmet>

      <div className="pt-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  Luke Grady
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  Full Stack Engineer & Data Scientist
                </p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    luke@example.com
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Worcester, MA
                  </div>
                </div>
              </div>
              <a
                href="/resume.pdf"
                download
                className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
                  Education
                </h2>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        Bachelor of Science in Computer Science
                      </h3>
                      <p className="text-primary font-medium">
                        Worcester Polytechnic Institute
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      2022 - 2026
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Focus on Data Science, Machine Learning, and Software Engineering
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li className="text-sm text-muted-foreground">• Dean's List (3 semesters)</li>
                    <li className="text-sm text-muted-foreground">• CS Major GPA: 3.8/4.0</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
                  Experience
                </h2>
                <div className="space-y-6">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          Data Analytics Intern
                        </h3>
                        <p className="text-primary font-medium">
                          Mass General Brigham
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Jun 2024 - Aug 2024
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Built Epic Signal → Snowflake → Tableau analytics pipeline optimizing physician workflows
                    </p>
                    <ul className="space-y-1">
                      <li className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                        Reduced physician in-basket processing time by 25%
                      </li>
                      <li className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                        Processed 50M+ Epic Signal records with Python ETL pipelines
                      </li>
                      <li className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                        Created executive dashboards viewed by 100+ stakeholders
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          Co-Founder & Lead Engineer
                        </h3>
                        <p className="text-primary font-medium">Roomify</p>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Jan 2024 - Present
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Student housing marketplace connecting subletters with tenants
                    </p>
                    <ul className="space-y-1">
                      <li className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                        Achieved 500+ active users in first semester
                      </li>
                      <li className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                        Built React + Node.js full-stack application
                      </li>
                      <li className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                        Integrated Google Maps API and payment processing
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-3">Languages</h3>
                    <p className="text-sm text-muted-foreground">
                      Python, TypeScript/JavaScript, Go, Java, SQL, R
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-3">Frontend</h3>
                    <p className="text-sm text-muted-foreground">
                      React, Next.js, Tailwind CSS, HTML/CSS
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-3">Backend & Data</h3>
                    <p className="text-sm text-muted-foreground">
                      Node.js, PostgreSQL, Snowflake, MongoDB
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-3">ML & Analytics</h3>
                    <p className="text-sm text-muted-foreground">
                      Pandas, Scikit-learn, Tableau, MLflow
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}