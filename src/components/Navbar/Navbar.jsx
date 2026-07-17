import { useEffect, useState } from "react";
import "./Navbar.css";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    const onIntersect = () => {
      const sections = links
        .map((link) => document.getElementById(link.id))
        .filter(Boolean);

      const visible = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (visible) {
        setActiveSection(visible.id);
      }
    };

    onScroll();
    onIntersect();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onIntersect, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onIntersect);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="logo">FESTO ERICK MAPUNDA</div>

      <button
        className="menu-toggle"
        aria-label="Toggle navigation"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${mobileOpen ? "nav-links-open" : ""}`}>
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={activeSection === link.id ? "active" : ""}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;