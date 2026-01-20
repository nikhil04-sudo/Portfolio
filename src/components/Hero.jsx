import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = 'Senior Frontend Engineer'
  const [showCursor, setShowCursor] = useState(true)

  // Typing animation effect
  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
        setShowCursor(false)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  // Floating icons data
  const floatingIcons = [
    { icon: '⚛️', delay: 0, x: '10%', y: '20%' },
    { icon: '💻', delay: 0.5, x: '85%', y: '15%' },
    { icon: '🎨', delay: 1, x: '15%', y: '70%' },
    { icon: '⚡', delay: 1.5, x: '80%', y: '65%' },
    { icon: '🚀', delay: 2, x: '90%', y: '40%' },
    { icon: '☕', delay: 2.5, x: '5%', y: '45%' },
  ]

  // Animated background shapes
  const shapes = [
    { size: 300, x: '10%', y: '10%', delay: 0 },
    { size: 200, x: '80%', y: '20%', delay: 1 },
    { size: 250, x: '15%', y: '75%', delay: 2 },
  ]

  return (
    <section className="hero-enhanced">
      {/* Animated background shapes */}
      <div className="hero-enhanced__shapes">
        {shapes.map((shape, index) => (
          <motion.div
            key={index}
            className="hero-enhanced__shape"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              delay: shape.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              width: shape.size,
              height: shape.size,
              left: shape.x,
              top: shape.y,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="hero-enhanced__particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="hero-enhanced__particle"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Floating icons */}
      <div className="hero-enhanced__floating-icons">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="hero-enhanced__icon"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              delay: item.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: item.x,
              top: item.y,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="hero-enhanced__container">
        <div className="hero-enhanced__wrapper">
          <motion.div
            className="hero-enhanced__content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting Pill */}
            <motion.div
              className="hero-enhanced__greeting-pill"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="hero-enhanced__wave">👋</span>
              <span className="hero-enhanced__greeting-text">Hi There! I'm Nikhil</span>
            </motion.div>

            {/* Name with gradient */}
            <motion.h1
              className="hero-enhanced__name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="hero-enhanced__name-text">Nikhil Kumar</span>
            </motion.h1>

            {/* Animated title */}
            <motion.div
              className="hero-enhanced__title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <span className="hero-enhanced__title-prefix">A </span>
              <span className="hero-enhanced__title-main">
                {text}
                {showCursor && <span className="hero-enhanced__cursor">|</span>}
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="hero-enhanced__description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Building <span className="hero-enhanced__highlight">exceptional</span> digital
              experiences with <span className="hero-enhanced__highlight">modern</span> web
              technologies. I help startups <span className="hero-enhanced__highlight">launch</span> and
              grow their products.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              className="hero-enhanced__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="hero-enhanced__btn hero-enhanced__btn--primary"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Projects</span>
                <span className="hero-enhanced__btn-icon">→</span>
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download="Nikhil_Kumar_Resume.pdf"
                className="hero-enhanced__btn hero-enhanced__btn--outline"
                whileHover={{ y: -5, background: 'rgba(37, 99, 235, 0.1)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Download Resume</span>
                <span className="hero-enhanced__btn-icon">↓</span>
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="hero-enhanced__social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <motion.a href="https://github.com/nikhil04-sudo" target="_blank" className="hero-enhanced__social-link" whileHover={{ y: -3 }}>GitHub</motion.a>
              <motion.a href="https://www.linkedin.com/in/nikhil-kumar-g-b84886192/" target="_blank" className="hero-enhanced__social-link" whileHover={{ y: -3 }}>LinkedIn</motion.a>
              <motion.a href="mailto:gnikhilkumar295@gmail.com" className="hero-enhanced__social-link" whileHover={{ y: -3 }}>Email</motion.a>
            </motion.div>
          </motion.div>

          {/* New: Visual Element / Illustration Placeholder */}
          <motion.div
            className="hero-enhanced__visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <div className="hero-enhanced__visual-inner">
              <div className="hero-enhanced__code-mockup">
                <div className="hero-enhanced__code-header">
                  <div className="hero-enhanced__dot hero-enhanced__dot--red" />
                  <div className="hero-enhanced__dot hero-enhanced__dot--yellow" />
                  <div className="hero-enhanced__dot hero-enhanced__dot--green" />
                </div>
                <div className="hero-enhanced__code-body">
                  <pre>
                    <code>{`const developer = {
  name: 'Nikhil Kumar',
  role: 'Frontend Engineer',
  skills: ['React', 'UI/UX'],
  status: 'Available'
};`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="hero-enhanced__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2.5, duration: 0.8 },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <span>Scroll Down</span>
          <div className="hero-enhanced__scroll-line" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
