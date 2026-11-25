function Profile() {
  const name = 'Touseef Ahmed'
  const role = 'Frontend Developer'
  const description = 'I am a frontend developer with a passion for building clean and responsive web applications. I enjoy working with React and modern JavaScript.'
  const email = 'touseef@example.com'
  const phone = '+92 300 1234567'
  const location = 'Lahore, Pakistan'
  const github = 'https://github.com/touseef'
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
            {github && <li>GitHub: <a href={github}>{github}</a></li>}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Profile
