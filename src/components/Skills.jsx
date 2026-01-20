import { motion } from 'framer-motion'
import { Code2, Cpu, Layers, Wrench } from 'lucide-react'

const Skills = () => {
    const categories = [
        {
            title: 'Frontend & UI',
            icon: Code2,
            gradient: 'from-blue-500 via-cyan-400 to-indigo-500',
            color: 'blue',
            skills: [
                'React.js',
                'JavaScript (ES6+)',
                'HTML5',
                'CSS3',
                'Tailwind CSS',
                'Sass / Less',
                'Bootstrap',
                'jQuery',
                'Ajax'
            ]
        },
        {
            title: 'Frontend Architecture',
            icon: Cpu,
            gradient: 'from-purple-500 via-fuchsia-400 to-violet-600',
            color: 'purple',
            skills: [
                'Performance Tuning',
                'Memory Optimization',
                'Component Reusability',
                'CSS Encapsulation',
                'Shadow DOM'
            ]
        },
        {
            title: 'Advanced UI Systems',
            icon: Layers,
            gradient: 'from-cyan-400 via-sky-400 to-blue-500',
            color: 'cyan',
            skills: [
                'Role-Based Access Control (RBAC)',
                'Document-Driven UI',
                'Session Management',
                'Prompt Workflows',
                'Chat History Systems'
            ]
        },
        {
            title: 'Backend & Tooling',
            icon: Wrench,
            gradient: 'from-emerald-400 via-teal-400 to-cyan-500',
            color: 'emerald',
            skills: [
                'MySQL (Working Knowledge)',
                'Basic Java',
                'Git',
                'GitLab',
                'Bitbucket',
                'Postman',
                'Yarn',
                'Visual Studio Code',
                'Ubuntu / Windows'
            ]
        }
    ];


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    }



    return (
        <section id="skills" className="relative mt-16 py-20 md:py-32 bg-[#0B0F14] overflow-hidden section section--darker projects scroll-mt-20">
            {/* Background Depth */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-[1240px] mx-auto px-6 section__container my-4">
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="heading-1 text-primary mt-4 mb-md">Skills & Expertise</h2>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="stats-grid gap-8 "
                >
                    {categories.map((category) => (
                        <motion.div
                            key={category.title}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="stat-card group relative overflow-hidden"
                        >
                            <div className="flex flex-col h-full relative z-10">
                                <h3 className="text-xl font-bold text-white mb-6 tracking-tight">
                                    {category.title}
                                </h3>

                                <div className="text-slate-400 text-sm leading-loose">
                                    {category.skills.map((skill, index) => (
                                        <span key={skill} className="hover:text-blue-400 transition-colors duration-200">
                                            {skill}{index < category.skills.length - 1 ? ', ' : '.'}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Hover Glow Background */}
                            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
