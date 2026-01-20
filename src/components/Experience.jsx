import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const Experience = () => {
    const experiences = [
        {
            company: 'TATA Consultancy Services (TCS)',
            role: 'System Engineer',
            period: '2023 — 2025',
            description: 'Lead ownership of complex frontend enhancements for high-traffic enterprise platforms. Designed and developed an Advanced Chatbot-Based Frontend Platform featuring document-driven UI workflows and role-based access control (RBAC).',
            achievements: [
                'Built a multi-section interface with Source Documents, Prompt Library, and Session-Based Chat History.',
                'Implemented UI-level reference indicators displaying document sources used in AI responses.',
                'Optimized frontend assets (PNG/JPEG to WebM), improving page speed by ~10%.',
                'Integrated Redux/Context API for real-time state management in high-concurrency modules.'
            ],
            skills: ['React', 'Redux', 'CI/CD', 'RBAC', 'UI Architecture', 'WebM']
        },
        {
            company: 'Codilar Technologies',
            role: 'Front-End Developer',
            period: '2020 — 2023',
            description: 'Engineered responsive and modular frontend systems for major eCommerce platforms. Led architectural migrations and refactored legacy codebases to improve performance and maintainability.',
            achievements: [
                'Led migration from Magento to Scandi PWA (React.js), reducing support tickets by 25%.',
                'Refactored legacy architecture, reducing codebase size by 40%.',
                'Developed reusable UI components that accelerated development time by 20%.',
                'Utilized Shadow DOM and CSS encapsulation to prevent styling leakage.'
            ],
            skills: ['React.js', 'JavaScript', 'Scandi PWA', 'Magento', 'Shadow DOM', 'UI/UX']
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    }

    const handleMouseMove = (e) => {
        const item = e.currentTarget
        const rect = item.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        item.style.setProperty('--mouse-x', `${x}px`)
        item.style.setProperty('--mouse-y', `${y}px`)
    }

    return (
        <section id="experience" className="experience scroll-mt-20 py-24 md:py-32">
            <div className="section__container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">
                        Experience
                    </h2>
                    <h3 className="heading-1 text-primary">
                        Professional Journey
                    </h3>
                </motion.div>

                <motion.div
                    className="experience__list"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="experience__item group"
                            onMouseMove={(e) => handleMouseMove(e)}
                        >
                            <div className="experience__grid">
                                {/* Left Side: Period */}
                                <div className="experience__period-col">
                                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        {exp.period}
                                    </span>
                                </div>

                                {/* Right Side: Content */}
                                <div className="experience__content-col">
                                    <div className="experience__header">
                                        <h4 className="text-lg font-bold text-slate-200 group-hover:text-blue-400 transition-colors flex items-center gap-1">
                                            {exp.role} · {exp.company}
                                            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                        </h4>
                                    </div>

                                    <p className="text-slate-400 text-base leading-relaxed mb-4">
                                        {exp.description}
                                    </p>

                                    <ul className="space-y-3 mb-6">
                                        {exp.achievements.map((item, i) => (
                                            <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-center gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0 flex-none" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="experience__overlay" />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

export default Experience
