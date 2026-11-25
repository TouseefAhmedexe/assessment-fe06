function Projects() {
  const projects = [
    {
      title: 'IntelliFYP: AI-Powered Final Year Project Lifecycle Automation & Archival System',
      description: 'Designed and developed a full-stack application to automate final-year project allocation, supervision, milestone management, evaluation, and archival workflows. Received the Best Final Year Project Award at Namal University Open House 2026.',
      tech: 'C#, .NET 9, Angular 20, Python, FastAPI, Microsoft SQL Server, REST APIs, Docker, Kubernetes, Microsoft Azure, Git'
    },
    {
      title: 'Movie Genre Classifier with Azure Machine Learning',
      description: 'Developed a machine learning application to classify movie genres using Python and Azure Machine Learning. Achieved 87% classification accuracy and deployed the model through Azure App Service.',
      tech: 'Python, Azure Machine Learning, Azure App Service, Scikit-learn'
    },
    {
      title: 'Azure Shop: E-Commerce Platform',
      description: 'Designed, developed, and deployed a full-stack e-commerce application with backend APIs, relational database integration, role-based access control, and Azure cloud deployment.',
      tech: 'C#, .NET, Angular, Microsoft Azure, SQL Server'
    },
    {
      title: 'Parallel Web Server Logs Analyzer',
      description: 'Developed a Python-based log analysis tool using multiprocessing and custom chunking algorithms. Processed more than one million web server log entries through parallel processing.',
      tech: 'Python, Multiprocessing, Concurrency'
    },
    {
      title: 'Interactive C++ OpenGL Ludo Game Engine',
      description: 'Developed an interactive graphical Ludo game engine using C++ and OpenGL with custom data structures, graph-based path traversal, recursive algorithms, heuristic AI, and event-driven game logic.',
      tech: 'C++, OpenGL, DSA, OOP'
    },
    {
      title: 'Student Management System',
      description: 'Developed a console-based student management application using C++ and OOP with CRUD operations, file handling, searching, sorting, and modular program design.',
      tech: 'C++, OOP, File Handling'
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
