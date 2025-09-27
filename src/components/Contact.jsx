export default function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container py-4">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <span className="section-title">Let&apos;s collaborate</span>
            <h2 className="display-6 fw-semibold mb-3">Ready to build something data-driven together?</h2>
            <p className="text-secondary mb-4">
              Whether you need to modernise your stack, unlock self-service analytics, or design dashboards your
              executives actually use, I&apos;d love to help. Tell me about your hardest data challenge.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a
                className="btn btn-primary btn-lg"
                href="http://linkedin.com/in/remisharoon"
                target="_blank"
                rel="noreferrer"
              >
                Schedule a conversation
              </a>
              <a
                className="btn btn-outline-primary btn-lg"
                href="https://flowcv.com/resume/b0fwhmcs9u"
                target="_blank"
                rel="noreferrer"
              >
                Download résumé
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-4">
                <h3 className="h5 fw-semibold mb-3">How we can partner</h3>
                <p className="text-secondary">
                  I typically respond within one business day. Share a bit about your goals, timelines, and what
                  success looks like for your team.
                </p>
                <ul className="list-unstyled text-secondary small mb-0">
                  <li className="mb-2">✔️ Fractional data engineering leadership</li>
                  <li className="mb-2">✔️ Dashboard and analytics accelerators</li>
                  <li>✔️ Data platform architecture reviews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
