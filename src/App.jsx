import Home from './components/Home/Home'
import './App.css'
import Overview from './components/Overview/Overview'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import { Footer } from './components/Footer/Footer'
import { useScrollDirection } from 'react-use-scroll-direction'

function App() {

  const {isScrollingUp, isScrollingDown} = useScrollDirection()
  
  return (
    <>
      <div className='home-background'>
        <div className='container'>
          <Home />
        </div>
      </div>
      <div className='container'>
        <Overview />
        <Projects direction = {isScrollingDown && "down" || isScrollingUp && "up" || "not scrolling"}/>
        <Resume />
        <Footer />
      </div>
  </>
  )
}

export default App
