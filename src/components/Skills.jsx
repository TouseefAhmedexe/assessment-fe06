function Skills() {
  const skills = [
    'Python',
    'C#',
    'C++',
    'JavaScript',
    'TypeScript',
    'SQL',
    'HTML',
    'CSS',
    'Angular',
    '.NET 9',
    'ASP.NET Core',
    'FastAPI',
    'RESTful APIs',
    'React',
    'Microsoft SQL Server',
    'MySQL',
    'Azure SQL Database',
    'Microsoft Azure',
    'AWS',
    'Docker',
    'Kubernetes',
    'Git',
    'GitHub',
    'Machine Learning',
    'Scikit-learn',
    'TensorFlow',
    'PyTorch',
    'NumPy',
    'Pandas',
    'Object-Oriented Programming',
    'Data Structures and Algorithms',
    'Agile Methodology',
    'CI/CD',
    'Linux',
    'Bash Scripting'
  ]

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
