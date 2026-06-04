import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Mr Taxi – Car Rental Web Application",
      tech: "HTML, CSS, JavaScript, PHP, MySQL",
      description:
        "Built a complete car rental web application with responsive frontend and backend booking management."
    },
    {
      title: "Online Event Planning System",
      tech: "Java, HTML, JavaScript, Bootstrap, MySQL, Apache Tomcat",
      description:
        "Developed an event planning management system with user management and database-driven scheduling."
    },
    {
      title: "Eco Cycle – Plastic Bottle Recycling System",
      tech: "MongoDB, Express.js, React.js, Node.js",
      description:
        "Created a MERN stack recycling management platform for inventory, collection, and recycling workflows."
    },
    {
      title: "Business Analytical Project",
      tech: "Power BI, SQL Server Management Studio, Excel, VS Code, Visual Studio",
      description:
        "Delivered BI dashboards and analytics reports for business insights under the DWBI module."
    },
    {
      title: "HR Analytical Research Project",
      tech: "R Studio",
      description:
        "Analyzed secondary employee data and produced statistical insights on transparent decision-making and employee trust."
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2
            }}
          >
            <h3>{project.title}</h3>

            <p
              style={{
                color: "#38bdf8",
                marginBottom: "10px",
                fontWeight: "bold"
              }}
            >
              Tech Stack: {project.tech}
            </p>

            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;