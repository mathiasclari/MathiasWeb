import './App.css'
import AboutInfo from './components/AboutInfo'
import WebFooter from './components/Footer'
import Projects from './components/Projects'
import WebHeader from './components/WebHeader'
import PastProjects from './components/PastProjects'

function App() {

  return (
    <>
      <WebHeader />
      <AboutInfo />
      <Projects />
      <PastProjects />
      <WebFooter />
    </>
  )
}

export default App
