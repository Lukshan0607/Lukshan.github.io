import {
  SiPython,
  SiMysql,
  SiReact,
  SiTensorflow,
  SiDatabricks,
  SiOpenjdk,
  SiMongodb,
  SiGit,
  SiAirtable,
  SiJavascript,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "Python", level: 90, icon: SiPython },
    { name: "SQL", level: 85, icon: SiMysql },
    { name: "React", level: 80, icon: SiReact },
    { name: "JavaScript", level: 85, icon: SiJavascript },
    { name: "Machine Learning", level: 85, icon: SiTensorflow },
    { name: "Power BI", level: 75, icon: SiDatabricks },
    { name: "Java", level: 70, icon: SiOpenjdk },
    { name: "MongoDB", level: 65, icon: SiMongodb },
    { name: "Git", level: 80, icon: SiGit },
    { name: "Tableau", level: 75, icon: SiAirtable },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <p className="section-label">What I Do</p>
        <h2>Skills & Tools</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div className="skill-card" key={skill.name}>
              <div className="skill-title">
                <div className="skill-meta">
                  <Icon className="skill-icon" />
                  <span>{skill.name}</span>
                </div>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
