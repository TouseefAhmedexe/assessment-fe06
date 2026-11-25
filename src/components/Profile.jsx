function Profile() {
  const name = 'Touseef Ahmed'
  const role = 'Computer Science Graduate | Full-Stack Developer'
  const description = 'Computer Science graduate from Namal University with hands-on experience in full-stack application development, software engineering, artificial intelligence, machine learning, and cloud technologies through academic projects and industry internship experience. Proficient in Python, C#, C++, JavaScript, TypeScript, Angular, .NET, FastAPI, RESTful APIs, and SQL.'
  const email = 'touseefahmed9119@gmail.com'
  const phone = '+92 312 5691991'
  const location = 'Rawalpindi, Pakistan'
  const linkedin = 'https://www.linkedin.com/in/touseefahmed503'
  const available = true

  return (
    <section id="profile" className="profile-section">
      <h2>Profile</h2>
      <div className="profile-card">
        <img
          src="https://placehold.co/120x120"
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-info">
          <h3>{name}</h3>
          <p className="profile-role">{role}</p>
          {available && <span className="badge">Open to Work</span>}
          <p>{description}</p>
          <ul className="contact-list">
            <li>Email: {email}</li>
            <li>Phone: {phone}</li>
            <li>Location: {location}</li>
            {linkedin && <li>LinkedIn: <a href={linkedin}>{linkedin}</a></li>}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Profile
