import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">ABOUT ME</p>

          <h2>
            Building the Future with
            <span> Data, Cloud & AI</span>
          </h2>

          <p className="about-intro">
            I am <strong>Festo Erick Mapunda</strong>, a Computer &
            Communication Engineering student at Sri Eshwar College of
            Engineering, India.

            My career goal is to become a world-class Data Engineer,
            specializing in scalable data platforms, cloud-native
            applications, Generative AI, and modern software engineering.

            I enjoy transforming ideas into practical products that solve
            real-world problems while continuously learning new technologies.
          </p>
        </motion.div>

        <div className="about-grid">

          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >
            <h3>Education</h3>

            <p>
              <strong>Sri Eshwar College of Engineering</strong>
            </p>

            <p>Computer & Communication Engineering</p>

            <p>Coimbatore, India 🇮🇳</p>

            <p>2024 - 2028</p>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >
            <h3>Career Vision</h3>

            <p>
              My mission is to build intelligent systems that combine
              Data Engineering, Cloud Computing and Artificial Intelligence
              to solve meaningful problems in education, healthcare,
              finance and public services.

              I aspire to work with global engineering teams where I can
              design scalable software and continuously innovate.
            </p>
          </motion.div>

        </div>

        <motion.div
          className="focus-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >

          <h3>Current Focus</h3>

          <div className="focus-grid">

            <span>Data Engineering</span>

            <span>Cloud Computing</span>

            <span>Generative AI</span>

            <span>React Development</span>

            <span>Apache Spark</span>

            <span>AWS</span>

            <span>Docker</span>

            <span>System Design</span>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;