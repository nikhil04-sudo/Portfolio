import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
  ]

  return (
    <footer className="footer">
      <div className="footer__container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="footer__content"
        >
          <div className="footer__socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          <p className="footer__copyright">
            &copy; {currentYear} Nikhil Kumar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
