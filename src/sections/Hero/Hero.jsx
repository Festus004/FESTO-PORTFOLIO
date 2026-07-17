import { motion, useReducedMotion } from 'framer-motion';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import '../../components/ProfileImage/ProfileImage.css';
import './Hero.css';

function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className="hero-section"
      id="home"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="hero-shell">
        <motion.div
          className="hero-copy"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="hero-kicker"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            COMPUTER &amp; COMMUNICATION ENGINEERING STUDENT
          </motion.p>
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            FESTO ERICK MAPUNDA
          </motion.h1>
          <motion.p
            className="hero-roleline"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            Data Engineer • Cloud Engineer • Generative AI • Full Stack Developer
          </motion.p>
          <motion.p
            className="hero-description"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          >
            I design and build data-driven systems, cloud-native applications, and AI-powered solutions that transform complex ideas into practical software. As a Computer &amp; Communication Engineering student, I am preparing for a career in Data Engineering while continuously expanding my expertise in Cloud Computing, Generative AI, and Full Stack Development.
          </motion.p>

          <motion.div
            className="hero-focus"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="hero-focus-label">CURRENT FOCUS</p>
            <div className="hero-badges" aria-label="Current focus topics">
              <span>Data Engineering</span>
              <span>Cloud Computing</span>
              <span>Generative AI</span>
              <span>Full Stack</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ y: -2, scale: 1.01, boxShadow: '0 18px 34px rgba(95, 142, 255, 0.22)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              View Projects
            </motion.a>
       <motion.a
  href="/resume/FESTO_ERICK_MAPUNDA_Resume.pdf"
  className="btn btn-secondary"
  download
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ y: -2, scale: 1.01 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 220, damping: 18 }}
>
  Download Resume
</motion.a>
          </motion.div>

          <motion.div
            className="hero-socials"
            aria-label="Social links"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.46, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.a href="https://github.com/Festus004" target="_blank" rel="noreferrer" whileHover={{ y: -2 }}>GitHub</motion.a>
            <motion.a href="https://www.linkedin.com/in/festo-erick-mapunda-30965633a/" target="_blank" rel="noreferrer" whileHover={{ y: -2 }}>LinkedIn</motion.a>
            <motion.a href="mailto:Festuserick4@gmail.com" whileHover={{ y: -2 }}>Email</motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          aria-label="Professional profile overview"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="profile-card">
            <div className="profile-photo">
              <ProfileImage alt="Festo Erick Mapunda profile" fallbackText="FE" />
            </div>
            <div className="profile-content">
              <h2>Festo Erick Mapunda</h2>
              <p className="profile-school">Sri Eshwar College of Engineering</p>
              <p className="profile-major">Computer &amp; Communication Engineering</p>
              <p className="profile-location">India</p>
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <strong>5+</strong>
                <span>Projects</span>
              </div>
              <div className="stat-card">
                <strong>3rd</strong>
                <span>Year Student</span>
              </div>
              <div className="stat-card">
                <strong>Data</strong>
                <span>Engineering</span>
              </div>
              <div className="stat-card">
                <strong>Cloud</strong>
                <span>GenAI</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
