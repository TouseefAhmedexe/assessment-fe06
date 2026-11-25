import './App.css'
import Profile from './components/Profile'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Touseef Ahmed</h1>
        <nav>
          <a href="#profile">Profile</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>
      </header>

      <main className="main">
        <Profile />

        <Education />

        <Skills />

        <Projects />
      </main>

      <footer className="footer">
        <p>Touseef Ahmed &copy; 2026</p>
      </footer>
    </div>
  )
}

export default App
