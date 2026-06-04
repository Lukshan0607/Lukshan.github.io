function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <p className="section-label">About Me</p>
        <h2>Professional Summary</h2>
      </div>

      <div className="about-grid">
        <div className="card about-card">
          <p>
            I am a motivated and detail-oriented undergraduate Data Science
            student at SLIIT with strong experience in Full Stack Development,
            Data Analytics, and Business Intelligence.
          </p>
          <p>
            I enjoy building responsive web applications, analytical dashboards,
            and data-driven systems using modern technologies like React,
            Node.js, Python, and Power BI.
          </p>
          <p>
            I am seeking opportunities in Data Science, Business Analytics, and
            Full Stack Development where I can apply technical expertise and
            deliver measurable value.
          </p>
        </div>

        <div className="card about-card skills-summary">
          <h3>Core Strengths</h3>
          <ul>
            <li>Full Stack Web Development</li>
            <li>Data Analytics & BI Reporting</li>
            <li>Machine Learning Fundamentals</li>
            <li>Database Design & SQL</li>
            <li>Problem Solving & Collaboration</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;