import { motion } from "framer-motion";

function Certifications() {
  const certifications = [
    {
      title: "Dean's List - SLIIT",
      issuer: "Sri Lanka Institute of Information Technology",
      description:
        "Awarded for outstanding academic performance during 1st Year - 1st Semester."
    },
    {
      title: "Python for Beginners",
      issuer: "University of Moratuwa",
      description: "Certificate ID: HA12S9Kb58"
    },
    {
      title: "Web Design for Beginners",
      issuer: "University of Moratuwa",
      description: "Certificate ID: FLXNbMyy8H"
    },
    {
      title: "MongoDB Atlas Administrator Path",
      issuer: "MongoDB",
      description: "Successfully completed the course."
    }
  ];

  return (
    <section id="certifications">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Certifications & Achievements
      </motion.h2>

      <div className="projects-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
          >
            <h3>{cert.title}</h3>

            <p
              style={{
                color: "#38bdf8",
                margin: "10px 0",
                fontWeight: "bold",
              }}
            >
              {cert.issuer}
            </p>

            <p>{cert.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;