import { motion } from 'framer-motion'
import { PROJECTS } from '../utils/data'

const Projects = () => {
  return (
    <section id="projects" className="section section--darker projects scroll-mt-20">
      <div className="section__container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section__header"
        >
          <h2 className="heading-2 section__title text-primary">Featured Projects</h2>
          <p className="body-large section__description text-secondary">
            Showcasing my experience in building scalable, high-performance web applications.
          </p>
        </motion.div>
        <div className="projects__grid">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="project-card"
            >
              <div className="project-card__header">
                <span className="project-card__type">{project.type}</span>
                <h3 className="heading-4 project-card__title text-primary">{project.title}</h3>
                <p className="project-card__role">{project.role} <span className="text-secondary">@</span> {project.organization}</p>
              </div>

              <p className="body project-card__description text-secondary">{project.overview}</p>

              <div className="project-card__tech">
                {project.techStack.map((tech) => (
                  <span key={tech} className="project-card__tag">{tech}</span>
                ))}
              </div>

              {project.keyContributions && (
                <ul className="project-card__contributions">
                  {project.keyContributions.slice(0, 3).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
