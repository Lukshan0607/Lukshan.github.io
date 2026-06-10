import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiOpenjdk,
  SiSpringboot,
  SiMongodb,
  SiGit,
  SiGithub,
  SiAndroidstudio,
  SiPostman,
  SiFigma,
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiJupyter,
  SiDatabricks,
  SiDatacamp,
  SiDataiku,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss },
        { name: "JavaScript", icon: SiJavascript },
        { name: "React", icon: SiReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Bootstrap", icon: SiBootstrap },
      ],
    },
    {
      title: "Data Science & ML",
      skills: [
        { name: "Python", icon: SiPython },
        { name: "Pandas", icon: SiPandas },
        { name: "NumPy", icon: SiNumpy },
        { name: "Scikit-learn", icon: SiScikitlearn },
        { name: "TensorFlow", icon: SiTensorflow },
        { name: "Jupyter", icon: SiJupyter },
      ],
    },
    {
      title: "Data Visualization",
      skills: [
        { name: "Power BI", icon: SiDatabricks },
        { name: "Tableau", icon: SiDatacamp },
        { name: "Matplotlib", icon: SiDataiku },
        { name: "Seaborn", icon: SiDatabricks },
      ],
    },
    {
      title: "Tools & IDEs",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "VS Code", icon: VscVscode },
        { name: "Android Studio", icon: SiAndroidstudio },
        { name: "Postman", icon: SiPostman },
        { name: "Figma", icon: SiFigma },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <p className="section-label">What I Do</p>
        <h2>Skills & Tools</h2>
      </div>

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-cards-grid">
              {group.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div className="skill-card" key={skill.name}>
                    <Icon className="skill-icon" />
                    <span className="skill-label">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
