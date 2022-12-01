import React from 'react'
import {About, Contact, Projects, Footer, Home, Navbar } from '../components'

const index = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default index
