import './App.css'
import Profile from './components/Profile'

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

        <section id="education">
          <h2>Education</h2>
        </section>

        <section id="skills">
          <h2>Skills</h2>
        </section>

        <section id="projects">
          <h2>Projects</h2>
        </section>
      </main>

      <footer className="footer">
        <p>Touseef Ahmed &copy; 2024</p>
      </footer>
    </div>
  )
}

export default App
