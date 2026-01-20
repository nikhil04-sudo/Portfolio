import { useEffect } from 'react'
import { Header, Hero, About, Skills, Experience, Projects, Contact, Footer } from './components'

function App() {
  // Enable smooth scrolling for anchor links
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (target) {
        e.preventDefault()
        const element = document.querySelector(target.getAttribute('href'))
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
          window.history.pushState(null, null, target.getAttribute('href'))
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="app">
      <Header />
      <main className="main">
        <section id="hero" className="scroll-mt-20">
          <Hero />
        </section>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
