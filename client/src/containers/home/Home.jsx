import { 
  Projects, 
  Courses, 
  Services, 
  Footer, 
  Header,
  Contact
} from '../../components'
import { useEffect } from 'react';
import {useSanity} from "../../lib/useSanity";
import { Transition } from '../../components';

const Home = () => {

  const { homeContent, getHome } = useSanity();
  useEffect(() => {
    if(!homeContent) getHome()
  })

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