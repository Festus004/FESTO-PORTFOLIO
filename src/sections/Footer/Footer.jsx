import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section" id="footer">
      <div className="footer-shell">
        <div className="footer-brand">
          <h3>FESTO ERICK MAPUNDA</h3>
          <p>Computer & Communication Engineering Student</p>
        </div>

        <div className="footer-meta">
          <p>© 2026 All Rights Reserved.</p>
          <p>Designed & Developed by FESTO ERICK MAPUNDA</p>
        </div>

        <div className="footer-socials" aria-label="Social links">
          <a href="https://github.com/Festus004" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.38-3.88-1.38-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.8 10.8 0 0 1 5.73 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.24 2.75.12 3.04.73.81 1.18 1.84 1.18 3.1 0 4.45-2.7 5.41-5.27 5.7.41.35.78 1.04.78 2.1 0 1.52-.01 2.75-.01 3.12 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/FESTO ERICK MAPUNDA" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38a1.56 1.56 0 0 0 0 3.12ZM5.5 9.44h2.88V18.5H5.5zM10.04 9.44h2.76v1.2h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.44 1.91 3.44 4.39V18.5h-2.88v-7.69c0-1.83-.03-4.19-2.56-4.19-2.56 0-2.95 2-2.95 4.06V18.5H10.04z" />
            </svg>
          </a>
          <a href="mailto:Festuserick4@gmail.com" aria-label="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5zM6.5 6a.5.5 0 0 0-.5.5v.18l6 4.29 6-4.29V6.5a.5.5 0 0 0-.5-.5zM18 8.32l-5.4 3.85a1 1 0 0 1-1.1 0L6 8.32v8.68a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
