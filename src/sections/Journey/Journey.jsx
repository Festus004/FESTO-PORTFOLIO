import { motion, useReducedMotion } from 'framer-motion';
import './Journey.css';

const journeySteps = [
  {
    title: 'Computer & Communication Engineering',
    institution: 'Sri Eshwar College of Engineering',
    description: 'Started building a strong foundation in programming, problem-solving, and computer systems.'
  },
  {
    title: 'Software Development',
    institution: 'Personal Learning & Coursework',
    description: 'Learned Python, Java, C++, JavaScript, and modern programming practices through coursework and personal projects.'
  },
  {
    title: 'Full Stack Development',
    institution: 'Web Applications & Product Building',
    description: 'Built complete web applications using React, Node.js, Express.js, and MongoDB.'
  },
  {
    title: 'Cloud Computing',
    institution: 'Cloud & DevOps Exploration',
    description: 'Started exploring AWS, Docker, Linux, deployment workflows, and scalable application architecture.'
  },
  {
    title: 'Generative AI',
    institution: 'AI Product Integration',
    description: 'Integrated LLMs and Gemini AI into real-world applications while learning Prompt Engineering and Retrieval-Augmented Generation (RAG).'
  },
  {
    title: 'Future Goal',
    institution: 'Placement Focus & Growth',
    description: 'Preparing for placement opportunities as a Data Engineer while continuing to expand my knowledge of cloud-native data platforms and AI systems.'
  }
];

function Journey() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className="journey-section"
      id="journey"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="journey-shell">
        <motion.div
          className="journey-heading"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="journey-kicker">Engineering Journey</p>
          <h2>Engineering Journey</h2>
          <p className="journey-subtitle">
            My path from learning software development to pursuing Data Engineering, Cloud Computing, and Generative AI.
          </p>
        </motion.div>

        <motion.div
          className="timeline"
          aria-label="Engineering journey timeline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {journeySteps.map((step, index) => (
            <motion.div
              className="timeline-item"
              key={step.title}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 } } }}
            >
              <motion.div className="timeline-marker" aria-hidden="true" />
              <motion.article
                className={`timeline-card ${index % 2 === 0 ? 'timeline-card-left' : 'timeline-card-right'}`}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              >
                <div className="timeline-card-top">
                  <span className="timeline-index">0{index + 1}</span>
                  <h3>{step.title}</h3>
                </div>
                <p className="timeline-institution">{step.institution}</p>
                <p className="timeline-description">{step.description}</p>
              </motion.article>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Journey;
