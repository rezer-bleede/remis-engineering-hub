export default function Hero() {
  return (
    <section id="top" className="hero py-5 border-bottom">
      <div className="container py-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <span className="badge rounded-pill badge-tag mb-3">Data Engineering Leader</span>
            <h1 className="display-4 fw-bold mb-3">
              Building reliable data ecosystems that power{' '}
              <span className="gradient-text">insightful decisions</span>
            </h1>
            <p className="lead text-secondary">
              Hi, I&apos;m Remi Sharoon — a data engineer who turns messy, siloed data into production-grade
              analytics products. I specialize in modern data stacks, automation, and storytelling dashboards
              that make stakeholders say “wow”.
            </p>
            <div className="d-flex flex-wrap gap-3 hero-cta mt-4">
              <a
                className="btn btn-primary btn-lg"
                href="https://flowcv.com/resume/b0fwhmcs9u"
                target="_blank"
                rel="noreferrer"
              >
                Download Résumé
              </a>
              <a
                className="btn btn-outline-primary btn-lg"
                href="https://cars-analyzer-react.pages.dev/"
                target="_blank"
                rel="noreferrer"
              >
                View Live Dashboard
              </a>
              <a
                className="btn btn-light btn-lg border"
                href="http://linkedin.com/in/remisharoon"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card shadow-lg border-0">
              <div className="card-body p-4 p-lg-5">
                <h2 className="h4 fw-semibold mb-3">What I bring to the table</h2>
                <ul className="list-unstyled mb-0 text-secondary">
                  <li className="mb-3 d-flex align-items-start gap-2">
                    <span className="badge rounded-pill bg-primary-subtle text-primary">01</span>
                    <span>
                      End-to-end pipelines — from data ingestion to serving analytics-ready datasets with modern
                      tooling and automation.
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start gap-2">
                    <span className="badge rounded-pill bg-primary-subtle text-primary">02</span>
                    <span>
                      Observability-first mindset to guarantee trust, data quality, and compliance in regulated
                      environments.
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <span className="badge rounded-pill bg-primary-subtle text-primary">03</span>
                    <span>
                      Beautiful storytelling dashboards that translate complex data into insights leaders can act
                      on instantly.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
