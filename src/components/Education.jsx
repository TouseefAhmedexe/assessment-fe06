function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of the Punjab',
      year: '2021 - 2025',
      grade: '3.5 / 4.0 GPA'
    },
    {
      degree: 'Intermediate (Pre-Engineering)',
      institution: 'Government College Lahore',
      year: '2019 - 2021',
      grade: '85%'
    }
  ]

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((item, index) => (
          <div key={index} className="education-item">
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
            <p>{item.year}</p>
            <p>{item.grade}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
