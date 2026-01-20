import { motion } from 'framer-motion'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState({ type: '', message: '' })

  // Initialize EmailJS
  const initEmailJS = () => {
    if (!window.emailjsInitialized) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      window.emailjsInitialized = true
    }
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFeedback({ type: 'error', message: 'Please fill in all fields.' })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFeedback({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }

    setLoading(true)
    setFeedback({ type: '', message: '' })
    initEmailJS()

    try {
      // Prepare email data
      const templateParams = {
        from_name: formData.name,
        name: formData.name, // Fallback if template uses {{name}}
        reply_to: formData.email, // Standard EmailJS field
        from_email: formData.email,
        message: formData.message,
        to_name: 'Nikhil',
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      )
      if (response.status === 200) {
        setFeedback({
          type: 'success',
          message: 'Message sent successfully!'
        })
        setFormData({ name: '', email: '', message: '' })
        formRef.current?.reset()
      }
    } catch (error) {
      console.error('Email send error:', error)
      setFeedback({
        type: 'error',
        message: 'Failed to send email. Please try again or contact directly at gnikhilkumar295@gmail.com'
      })
    } finally {
      setLoading(false)
      // Clear feedback after 5 seconds
      setTimeout(() => setFeedback({ type: '', message: '' }), 5000)
    }
  }

  return (
    <section id="contact" className="section section--dark contact scroll-mt-20">
      <div className="section__container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section__header"
        >
          <h2 className="heading-1 section__title text-primary">Get In Touch</h2>
          <p className="body-large section__description text-secondary">
            I'm always interested in new opportunities and collaborations.
          </p>
        </motion.div>
        <motion.form
          ref={formRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact__form"
          onSubmit={handleSubmit}
        >

          {/* Form Groups with Staggered Animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1
                }
              }
            }}
            className="space-y-6"
          >
            {/* Name Field */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="form-group group relative"
            >
              <label htmlFor="name" className="form-label label text-secondary block mb-2 transition-colors duration-300">
                Name
              </label>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-400/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-400/20 group-hover:to-blue-500/10 rounded-lg blur transition-all duration-300 pointer-events-none" />
                <input
                  type="text"
                  id="name"
                  className="form-input relative w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-300 focus:ring-2 focus:ring-blue-400/20"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                />
              </motion.div>
            </motion.div>

            {/* Email Field */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="form-group group relative"
            >
              <label htmlFor="email" className="form-label label text-secondary block mb-2 transition-colors duration-300">
                Email
              </label>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-400/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-pink-400/20 group-hover:to-purple-500/10 rounded-lg blur transition-all duration-300 pointer-events-none" />
                <input
                  type="email"
                  id="email"
                  className="form-input relative w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300 focus:ring-2 focus:ring-purple-400/20"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                />
              </motion.div>
            </motion.div>

            {/* Message Field */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="form-group group relative"
            >
              <label htmlFor="message" className="form-label label text-secondary block mb-2 transition-colors duration-300">
                Message
              </label>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-400/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-400/20 group-hover:to-cyan-500/10 rounded-lg blur transition-all duration-300 pointer-events-none" />
                <textarea
                  id="message"
                  rows={4}
                  className="form-textarea relative w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300 focus:ring-2 focus:ring-cyan-400/20 resize-none"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                />
              </motion.div>
            </motion.div>
          </motion.div>
          <button
            type="submit"
            disabled={loading}
            className="btn-neon"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {loading ? (
              'Sending...'
            ) : (
              <>
                Contact Me
              </>
            )}
          </button>

          {feedback.message && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="mt-8 relative rounded-2xl p-[1px] overflow-hidden"
            >
              {/* Spinning Multicolor Border - Only for success state */}
              {feedback.type === 'success' && (
                <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite]"
                  style={{
                    background: 'conic-gradient(from 90deg at 50% 50%, #00000000 50%, #10b981 60%, #3b82f6 70%, #8b5cf6 80%, #ef4444 90%, #10b981 100%)'
                  }}
                />
              )}

              {/* Card Content Container */}
              <div className={`relative h-full w-full rounded-2xl p-6 ${feedback.type === 'success'
                ? 'bg-slate-900/90 backdrop-blur-xl'
                : 'bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/20'
                }`}>
                {/* Background Glow for Success */}
                {feedback.type === 'success' && (
                  <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 blur-xl" />
                )}

                <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                    className={`p-3 rounded-full ${feedback.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}
                  >
                    {feedback.type === 'success' ? <CheckCircle2 size={32} /> : <AlertCircle size={32} />}
                  </motion.div>

                  <div className="space-y-1">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className={feedback.type === 'success' ? 'text-slate-200' : 'text-red-100'}
                    >
                      {feedback.message}
                    </motion.p>
                    {feedback.type === 'success' && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-sm text-slate-400 mt-2"
                      >
                        I'll get back to you shortly.
                      </motion.p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}


        </motion.form>
      </div>
    </section>
  )
}

export default Contact
