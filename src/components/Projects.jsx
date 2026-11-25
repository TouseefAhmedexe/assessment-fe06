function Projects() {
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A personal portfolio website built with React and Vite to showcase my skills and projects.',
      tech: 'React, Vite, CSS'
    },
    {
      title: 'To-Do List App',
      description: 'A simple to-do list application where users can add, complete, and delete tasks.',
      tech: 'HTML, CSS, JavaScript'
    },
    {
      title: 'Weather App',
      description: 'A weather application that fetches and displays current weather data for any city.',
      tech: 'HTML, CSS, JavaScript, API'
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="project-tech">{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
