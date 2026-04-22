import { ThemeProvider } from './context/ThemeContext'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import Install from './components/Install'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center">
        <Hero />
        <Features />
        <Stats />
        <Install />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App