function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Namal University Mianwali',
      year: '2022 - 2026',
      grade: 'CGPA: 3.15 / 4.00'
    },
    {
      degree: 'Intermediate (FSc. - ICS)',
      institution: 'F.G. Sir Syed College, The Mall, Rawalpindi',
      year: '2020 - 2022',
      grade: '974 / 1100 — 88.55%'
    },
    {
      degree: 'Matric (Science)',
      institution: 'AM Anglo Montessori And High School, 286/5 Peshawar Road, Rawalpindi Cantt',
      year: '2018 - 2020',
      grade: '1025 / 1100 — 93.18%'
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
