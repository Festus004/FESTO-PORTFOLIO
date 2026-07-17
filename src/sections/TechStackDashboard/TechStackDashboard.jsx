import { motion, useReducedMotion } from 'framer-motion';
import './TechStackDashboard.css';

const categories = [
  {
    title: 'Data Engineering',
    items: [
      {
        name: 'Python',
        description: 'Building ETL pipelines, automation, APIs, and AI applications.'
      },
      {
        name: 'SQL',
        description: 'Querying and transforming data across relational systems and analytics workflows.'
      },
      {
        name: 'Apache Spark',
        description: 'Processing large-scale batch and streaming data with distributed compute.'
      },
      {
        name: 'ETL',
        description: 'Designing reliable ingestion and transformation workflows for production data pipelines.'
      },
      {
        name: 'Data Warehousing',
        description: 'Modeling and organizing analytical data for reporting and decision-making.'
      },
      {
        name: 'Pandas',
        description: 'Preparing, cleaning, and analyzing structured data quickly in Python.'
      }
    ]
  },
  {
    title: 'Cloud & DevOps',
    items: [
      {
        name: 'AWS',
        description: 'Deploying resilient cloud services and infrastructure for modern applications.'
      },
      {
        name: 'Docker',
        description: 'Packaging services consistently for reliable local development and deployment.'
      },
      {
        name: 'Linux',
        description: 'Managing servers, automation, and production environments with precision.'
      },
      {
        name: 'CI/CD',
        description: 'Automating build, testing and deployment workflows for reliable software delivery.'
},
      {
        name: 'Git',
        description: 'Version control for collaboration, branching, and safe release flows.'
      },
      {
        name: 'GitHub',
        description: 'Coordinating repositories, CI/CD, and team delivery workflows.'
      }
    ]
  },
  {
    title: 'Generative AI',
    items: [
      {
        name: 'Google Gemini',
        description: 'Designing AI experiences that reason over language and context.'
      },
      {
        name: 'Prompt Engineering',
        description: 'Crafting reliable interactions and system instructions for model behavior.'
      },
      {
        name: 'RAG',
        description: 'Connecting models to trusted knowledge sources for grounded responses.'
      },
      {
        name: 'Vector Databases',
        description: 'Indexing embeddings for fast semantic retrieval and similarity search.'
      },
      {
        name: 'LangChain',
        description: 'Orchestrating prompts, tools, and memory for production AI workflows.'
      }
    ]
  },
  {
    title: 'Full Stack',
    items: [
      {
        name: 'React',
        description: 'Building polished frontends with rich interactive user experiences.'
      },
      {
        name: 'JavaScript',
        description: 'Powering responsive interfaces and client-side application logic.'
      },
      {
        name: 'Node.js',
        description: 'Developing fast backend services and APIs.'
      },
      {
        name: 'MongoDB',
        description: 'Storing flexible document data for modern application needs.'
      },
      {
        name: 'REST APIs',
        description: 'Exposing application capabilities through clean, scalable interfaces.'
      }
    ]
  }
];

function TechStackDashboard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className="techstack-section"
      id="skills"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="techstack-shell">
        <motion.div
          className="techstack-heading"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="techstack-kicker">TECHNICAL SKILLS</p>
          <h2>Technical Skills & Technologies</h2>
         <p className="techstack-subtitle">
A comprehensive overview of the programming languages, frameworks, cloud platforms, AI technologies, and engineering tools I use to build modern, scalable software solutions.
</p>
        </motion.div>

        <motion.div
          className="techstack-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {categories.map((category, categoryIndex) => (
            <motion.div
              className="techstack-group"
              key={category.title}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: categoryIndex * 0.04 } } }}
            >
              <div className="techstack-group-heading">
                <h3>{category.title}</h3>
              </div>
              <div className="techstack-cards">
                {category.items.map((item, itemIndex) => (
                  <motion.article
                    className="tech-card"
                    key={item.name}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                    whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: itemIndex * 0.04 }}
                    whileHover={{ y: -4, scale: 1.01 }}
                  >
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default TechStackDashboard;
