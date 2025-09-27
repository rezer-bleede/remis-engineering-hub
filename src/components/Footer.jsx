export default function Footer() {
  return (
    <footer className="py-4 mt-5">
      <div className="container d-flex flex-wrap justify-content-between align-items-center gap-3">
        <p className="mb-0 text-secondary small">
          © {new Date().getFullYear()} Remi Sharoon. Built with React & Bootstrap.
        </p>
        <div className="d-flex gap-3 small">
          <a className="text-decoration-none" href="http://linkedin.com/in/remisharoon" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="text-decoration-none" href="https://medium.com/@remisharoon" target="_blank" rel="noreferrer">
            Medium
          </a>
          <a className="text-decoration-none" href="https://flowcv.com/resume/b0fwhmcs9u" target="_blank" rel="noreferrer">
            Résumé
          </a>
        </div>
      </div>
    </footer>
  );
}
