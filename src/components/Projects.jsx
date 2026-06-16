import { motion } from "framer-motion";
import { FaGithub, FaFileExcel, FaDatabase, FaMicrosoft, FaChartBar } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiStreamlit,
  SiR,
  SiBootstrap,
  SiMysql,
  SiPhp,
  SiFigma,
  SiKotlin,
  SiAndroidstudio
} from "react-icons/si";
import spaImg from "../assets/projects/spa.svg";
import BAImg from "../assets/projects/business-analytics.svg";
import hrImg from "../assets/projects/hr-research.svg";
import campusImg from "../assets/projects/smart-campus.svg";
import ecoImg from "../assets/projects/eco-cycle.svg";
import habitgoImg from "../assets/projects/habitgo.svg";
import aiTherapistImg from "../assets/projects/ai-therapist.svg";
import hotelEaseImg from "../assets/projects/hotelease.svg";
import eventPlanningImg from "../assets/projects/event-planning.svg";
import mrTaxiImg from "../assets/projects/mr-taxi.svg";

function Projects() {
  const iconMap = {
    MongoDB: SiMongodb,
    Express: SiExpress,
    React: SiReact,
    "Node.js": SiNodedotjs,
    Python: SiPython,
    Streamlit: SiStreamlit,
    R: SiR,
    Bootstrap: SiBootstrap,
    MySQL: SiMysql,
    PHP: SiPhp,
    Figma: SiFigma,
    "React Native": SiReact,
    "Power BI": FaChartBar,
    Excel: FaFileExcel,
    "Visual Studio": FaMicrosoft,
    "SQL Server": FaDatabase,
    "SQL Management Studio": FaDatabase,
    Kotlin: SiKotlin,
    "Android Studio": SiAndroidstudio
  };

  const projects = [
    {
      title: "Student Performance Analytics (Individual Project)",
      tags: ["Python", "pandas", "scikit-learn", "Streamlit"],
      stack: ["Python", "Streamlit"],
      description:
        "Analyzed student performance data, built predictive models, and generated actionable insights for academic improvement.",
      github: "https://github.com/Lukshan0607/Student-Performance-Analytics",
      image: spaImg
    },
    {
      title: "Business Analytical Project",
      tags: ["Power BI", "SQL Server", "Excel", "Visual Studio"],
      stack: ["Power BI", "Excel", "Visual Studio", "SQL Server"],
      description:
        "Delivered business intelligence dashboards and analytics reports for data-driven decision making.",
      image: BAImg
    },
    {
      title: "HR Analytical Research Project",
      tags: ["R", "Statistics", "Employee Trust"],
      stack: ["R"],
      description:
        "Analyzed employee trust and engagement data, producing statistical insights for transparent HR decision-making.",
      github: "https://github.com/Lukshan0607/employee-trust-statistical-analysis-y3-s1",
      image: hrImg
    },
    {
      title: "Smart Campus Web Application (Group Project)",
      tags: ["React", "Node.js", "MongoDB", "Campus"],
      stack: ["MongoDB", "Express", "React", "Node.js"],
      description:
        "Built a smart campus platform for students and staff to manage campus services and information in one place.",
      github: "https://github.com/Lukshan0607/it3030-paf-2026-smart-campus-group-115",
      image: campusImg
    },
    {
      title: "Eco Cycle – Plastic Bottle Recycling System",
      tags: ["MERN", "Sustainability", "Recycling"],
      stack: ["MongoDB", "Express", "React", "Node.js"],
      description:
        "Created a MERN stack recycling platform for inventory, collection, and recycling workflows.",
      github: "https://github.com/Lukshan0607/ECO-CYCLE",
      image: ecoImg
    },
    {
      title: "HabitGo Mobile Application",
      tags: ["Kotlin", "Android Studio", "Mobile", "Habits"],
      stack: ["Kotlin", "Android Studio"],
      description:
        "Developed a mobile habit tracking app using Kotlin and Android Studio to help users build healthy routines and monitor progress.",
      github: "https://github.com/Lukshan0607/MAD_Lab3",
      image: habitgoImg
    },
    {
      title: "AIT AI Therapist Mobile Application",
      tags: ["Kotlin", "Android Studio", "AI", "Wellness"],
      stack: ["Kotlin", "Android Studio"],
      description:
        "Built an AI-assisted therapist app using Kotlin and Android Studio for mental wellness, conversation support, and mood tracking.",
      github: "https://github.com/Lukshan0607/MAD_Lab2",
      image: aiTherapistImg
    },
    {
      title: "Hotel Booking Mobile App UI Design (HotelEase)",
      tags: ["UI Design", "Figma", "Mobile"],
      stack: ["Figma"],
      description:
        "Designed a modern hotel booking app experience with clean UI and simple booking workflows.",
      github: "https://github.com/Lukshan0607/MAD_Lab1",
      image: hotelEaseImg
    },
    {
      title: "Online Event Planning System",
      tags: ["Java", "Bootstrap", "MySQL", "Events"],
      stack: ["Java", "Bootstrap", "MySQL"],
      description:
        "Developed an event planning management system with user management and database-driven scheduling.",
      image: eventPlanningImg
    },
    {
      title: "Mr Taxi – Car Rental Web Application",
      tags: ["PHP", "MySQL", "Booking", "Cars"],
      stack: ["PHP", "MySQL"],
      description:
        "Built a complete car rental web application with responsive frontend and backend booking management.",
      github: "https://github.com/Shalitha-Lakshan/IWT-Project",
      image: mrTaxiImg
    }
  ];

  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-label">Projects</span>
        <h2>Featured Work</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.12
            }}
          >
            <div className="project-card-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-card-image"
              />
            </div>

            <div className="project-card-top">
              <div className="project-chip">Featured</div>
            </div>

            {project.stack && (
              <div className="project-stack-list">
                {project.stack.map((stackItem) => {
                  const Icon = iconMap[stackItem];
                  return (
                    <span key={stackItem} className="project-stack-item">
                      {Icon ? <Icon /> : stackItem}
                    </span>
                  );
                })}
              </div>
            )}

            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-badges">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="project-badge">
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-actions">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <FaGithub />
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link project-link-accent"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;