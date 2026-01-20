import { motion } from 'framer-motion'
import { useState } from 'react'

const Header = () => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="header"
    >
      <nav className="header__nav">
        <div className="header__content">
          <motion.a
            href="#hero"
            className="logo-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated glow background */}
            <motion.div
              className="logo-glow"
              animate={{
                opacity: isHovered ? [0.3, 0.6, 0.3] : 0.2,
                scale: isHovered ? [1, 1.1, 1] : 1,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Logo image */}
            <motion.img
              src="/logo.png"
              alt="Nikhil Kumar"
              className="logo-image"
              animate={{
                filter: isHovered
                  ? [
                    'drop-shadow(0 0 10px rgba(37, 99, 235, 0.6))',
                    'drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))',
                    'drop-shadow(0 0 15px rgba(96, 165, 250, 0.6))',
                    'drop-shadow(0 0 10px rgba(37, 99, 235, 0.6))'
                  ]
                  : 'drop-shadow(0 0 5px rgba(37, 99, 235, 0.3))'
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.a>
          <div className="header__menu">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="header__link"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header
