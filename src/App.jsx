import { HelmetProvider } from "react-helmet-async"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

import Hero from "./sections/Hero/Hero"
import Work from "./sections/Work/Work"
import Services from "./sections/Services/Services"
import Plans from "./sections/Plans/Plans"
import Founder from "./sections/Founder/Founder"
import Contact from "./sections/Contact/Contact"

import SEO from "./seo/SEO"

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <Navbar />

      <main>
        <Hero />
        <Work />
        <Services />
        <Plans />
        <Founder />
        <Contact />
      </main>

      <Footer />
    </HelmetProvider>
  )
}

export default App
