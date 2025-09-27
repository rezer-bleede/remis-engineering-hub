import { useEffect, useState } from 'react';

const sections = [
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top py-3 ${scrolled ? 'navbar-blur' : 'bg-transparent'}`}
    >
      <div className="container">
        <a className="navbar-brand fw-semibold" href="#top">
          Remi Sharoon
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
            {sections.map((section) => (
              <li key={section.id} className="nav-item">
                <a className="nav-link" href={`#${section.id}`}>
                  {section.label}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <a
                className="btn btn-primary btn-sm ms-lg-2"
                href="https://flowcv.com/resume/b0fwhmcs9u"
                target="_blank"
                rel="noreferrer"
              >
                View résumé
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
