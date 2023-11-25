import React from 'react'
import { 
  Projects, 
  Courses, 
  Services, 
  Footer, 
  Header,
  Contact
} from '../../components'

const Home = () => {
  return (
    <>
      <Header />
      <Courses />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default Home