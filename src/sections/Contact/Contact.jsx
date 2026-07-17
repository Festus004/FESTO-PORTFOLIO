import './Contact.css';

const contactOptions = [
  {
    label: 'Email',
    value: 'Festuserick4@gmail.com',
    href: 'mailto:Festuserick4@gmail.com?subject=Hello%20Festo',
    icon: '✉'
  },
  {
    label: 'LinkedIn',
    value: 'Festo Erick Mapunda',
    href: 'https://www.linkedin.com/in/festo-erick-mapunda-30965633a/',
    icon: 'in'
  },
  {
    label: 'GitHub',
    value: 'github.com/Festus004',
    href: 'https://github.com/Festus004',
    icon: '⌘'
  },
  {
    label: 'Resume',
    value: 'Download Resume',
    href: '/resume/FESTO_ERICK_MAPUNDA_Resume.pdf',
    icon: '📄'
  }
];

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-shell">
        <div className="contact-heading">
          <p className="contact-kicker">Contact</p>

          <h2>Let's Build Something Meaningful Together</h2>

          <p className="contact-subtitle">
            I'm always excited to connect with recruiters, engineers, and teams
            working on Data Engineering, Cloud Computing, Generative AI, and
            Full Stack Development.
          </p>
        </div>

        <div className="contact-grid">
          {contactOptions.map((option) => (
            <a
              key={option.label}
              className="contact-card"
              href={option.href}
              target={option.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={option.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            >
              <div className="contact-icon" aria-hidden="true">
                {option.icon}
              </div>

              <div className="contact-card-copy">
                <p className="contact-label">{option.label}</p>
                <p className="contact-value">{option.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="contact-actions">
          <a
            className="btn btn-primary contact-btn"
            href="mailto:Festuserick4@gmail.com?subject=Let's%20Connect"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;