import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      title: "BSc (Hons) in Data Science",
      institute:
        "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "2023 - Present",
      description:
        "Currently pursuing a degree in Data Science with focus on Data Analytics, Machine Learning, Business Intelligence, and Software Engineering."
    },
    {
      title: "G.C.E Advanced Level",
      institute: "Mathematics Stream",
      period: "Completed",
      description:
        "Studied Combined Mathematics, Physics, and Chemistry."
    },
    {
      title: "G.C.E Ordinary Level",
      institute: "Secondary Education",
      period: "Completed",
      description:
        "Successfully completed secondary education."
    }
  ];

  return (
    <section id="education">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div className="projects-grid">
        {education.map((item, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
          >
            <h3>{item.title}</h3>

            <p
              style={{
                color: "#38bdf8",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              {item.institute}
            </p>

            <p
              style={{
                color: "#94a3b8",
                margin: "10px 0",
              }}
            >
              {item.period}
            </p>

            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;