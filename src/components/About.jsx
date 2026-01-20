import { motion } from 'framer-motion'

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+', description: 'In frontend development' },
    { label: 'Performance Boost', value: '40%', description: 'Lighthouse score improvement' },
    { label: 'Enterprise Projects', value: '10+', description: 'Delivered successfully' },
    { label: 'Efficiency Gain', value: '30%', description: 'Increased via CI/CD automation' }
  ]

  return (
    <section id="about" className="section section--dark about scroll-mt-20">
      <div className="section__container">
        <div className="about__grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about__content"
          >
            <h2 className="heading-1 text-primary mb-md">About Me</h2>
            <p className="body-large text-secondary mb-md">
              I am a Senior Frontend Engineer with over 5 years of experience specializing in building
              high-performance, scalable web applications. My focus is on creating exceptional user
              experiences through clean code, optimized architectures, and modern UI systems.
            </p>
            <p className="body text-secondary">
              Throughout my career, I've worked on enterprise-level projects, driving technical
              decisions and mentoring teams to deliver robust solutions. I am passionate about
              bridging the gap between design and technology.
            </p>
          </motion.div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="stat-card"
              >
                <h3 className="stat-card__value display-2 text-primary">{stat.value}</h3>
                <p className="stat-card__label heading-6 text-secondary">{stat.label}</p>
                <p className="stat-card__description body-small text-secondary">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
