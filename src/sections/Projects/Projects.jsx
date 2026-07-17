import { motion, useReducedMotion } from 'framer-motion';
import './Projects.css';
const projects = [
  {
    title: 'MUUNGANO X – AI-Powered Learning Platform',
    category: 'AI-Powered Learning Platform',
    overview:
      'MUUNGANO X is an AI-powered mobile-first educational platform that teaches the history, values and importance of the Union of Tanzania through personalized learning, gamification and interactive educational experiences.',
    problemSolved:
      'Traditional civic education is often static and less engaging for young learners.',
    solution:
      'Built a modern React application featuring AI-powered lessons, quizzes, XP rewards, badges, progress tracking, leaderboards and personalized learning.',
    impact:
      'Created an engaging digital civic education platform that combines AI and gamification to improve learning.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'Context API', 'Lucide React', 'Git'],
    image: null,
    github: 'https://github.com/Festus004/Muungano-X',
    demo: 'https://storied-torte-fb7cbe.netlify.app',
    video: 'https://drive.google.com/file/d/16HK9f1KpSlkCB_WrzTibmyI8_uTgGwjm/view?usp=drivesdk'
  },
  {
    title: 'NextGen LMS – AI-Powered Learning Management System',
    category: 'Adaptive Learning Platform',
    overview:
      'Full Stack • Generative AI | Designed and developed a modern Learning Management System that combines traditional e-learning with an AI-powered Smart Tutor to deliver personalized academic assistance.',
    problemSolved:
      'Students often struggle to receive immediate academic guidance outside classroom hours and need an engaging platform for learning and course management.',
    solution:
      'Developed a secure full-stack LMS featuring authentication, role-based dashboards, course management, certificate generation, and Gemini AI integration for intelligent tutoring.',
    impact:
      'Delivered a more personalized and scalable online learning experience across course delivery and student support.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Gemini AI', 'Netlify', 'Render'],
    image: null,
    github: 'https://github.com/Festus004/nextgen-lms',
    demo: 'https://example.com/nextgen-lms',
    video: '#'
  },
  {
    title: 'Smart City Complaint App',
    category: 'Civic Tech Platform',
    overview:
      'Built a responsive civic engagement app to simplify how residents report issues and track public service requests in a smart city environment.',
    problemSolved:
      'City residents needed a simpler way to report local issues and follow up on service requests.',
    solution:
      'Designed a streamlined complaint submission flow with status tracking, category filters, and a clear citizen experience for urban service reporting.',
    impact:
      'Improved the visibility and responsiveness of city reporting workflows for everyday service concerns.',
    stack: ['React', 'JavaScript', 'CSS', 'Vite'],
    image: null,
    github: '#',
    demo: '#',
    video: '#'
  },
  {
    title: 'Job Portal System',
    category: 'Recruitment Platform',
    overview:
      'Developed a recruitment platform connecting employers and job seekers through secure authentication and application workflows.',
    problemSolved:
      'Employers and applicants needed a streamlined hiring platform.',
    solution:
      'Designed separate recruiter and applicant dashboards with job posting and application management features.',
    impact:
      'Created a clearer job-matching experience that supports efficient collaboration between employers and candidates.',
    stack: ['C++', 'HTML', 'JavaScript'],
    image: null,
    github: '#',
    demo: '#',
    video: '#'
  }
];

function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className="projects-section"
      id="projects"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="projects-shell">
        <motion.div
          className="projects-heading"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="projects-kicker">Featured Engineering Projects</p>
          <h2>Featured Engineering Projects</h2>
          <p className="projects-subtitle">
            A selection of projects demonstrating my experience in Data Engineering, Cloud Computing, Generative AI, and Full Stack Development.
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
        >
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 } } }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <motion.a
                className="project-media"
                href={project.demo || '#'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={project.title}
                whileHover={{ scale: 1.03, y: -4, rotate: -0.6 }}
                transition={{ duration: 0.24, ease: 'easeOut' }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }}
                  />
                ) : (
                  <div className="project-media-inner">
                    <span>{project.category}</span>
                  </div>
                )}
              </motion.a>

              <div className="project-body">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-overview">{project.overview}</p>

                <div className="project-section">
                  <h4>Problem</h4>
                  <p>{project.problemSolved}</p>
                </div>

                <div className="project-section">
                  <h4>Solution</h4>
                  <p>{project.solution}</p>
                </div>

                <div className="project-section">
                  <h4>Impact</h4>
                  <p>{project.impact}</p>
                </div>

                <div className="project-badges" aria-label="Technology stack">
                  {Array.isArray(project.stack) && project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <motion.a
                    href={project.github || '#'}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo || '#'}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.video || '#'}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  >
                    Watch Demo
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;
