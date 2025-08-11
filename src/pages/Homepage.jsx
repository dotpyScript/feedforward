import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import LogoMarquee from '../components/LogoMarquee'
import Impact from '../components/Impact'
import News from '../components/News'
import Community from '../components/Community'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div className="Homepage">
      <Navbar />
      <Hero />
      <About />
      <LogoMarquee />
      <Impact />
      <News />
      <Community />
      <CTA />
      <Footer />
    </div>
  )
}

export default Homepage
