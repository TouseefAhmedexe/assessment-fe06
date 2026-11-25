function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Git',
    'GitHub',
    'Vite',
    'Responsive Design'
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
