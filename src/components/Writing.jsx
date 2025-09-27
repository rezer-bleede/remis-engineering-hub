const articles = [
  {
    title: 'Designing trustworthy metrics in fast-moving organisations',
    summary:
      'A practical framework to align data, product, and leadership teams on a shared definition of success.',
    link: 'https://medium.com/@remisharoon',
  },
  {
    title: 'A data engineer’s guide to observability-first platforms',
    summary: 'Lessons learned from rolling out automated testing, lineage, and incident response workflows.',
    link: 'https://medium.com/@remisharoon',
  },
  {
    title: 'Elevating stakeholder storytelling with actionable dashboards',
    summary:
      'How to move beyond charts and craft data experiences that influence strategy and day-to-day execution.',
    link: 'https://cars-analyzer-react.pages.dev/',
  },
];

export default function Writing() {
  return (
    <section id="writing" className="py-5 bg-white">
      <div className="container py-4">
        <div className="row mb-5 align-items-center">
          <div className="col-lg-8">
            <span className="section-title">Thought leadership</span>
            <h2 className="display-6 fw-semibold">Sharing playbooks for data-driven cultures</h2>
          </div>
          <div className="col-lg-4">
            <p className="text-secondary mb-0">
              I write about the real-world lessons behind building scalable data foundations, and how to make the
              humans around the data successful.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {articles.map((article) => (
            <div key={article.title} className="col-md-4">
              <div className="card h-100 shadow-hover border-0">
                <div className="card-body p-4 d-flex flex-column">
                  <h3 className="h5 fw-semibold mb-3">{article.title}</h3>
                  <p className="text-secondary flex-grow-1">{article.summary}</p>
                  <a className="fw-semibold stretched-link" href={article.link} target="_blank" rel="noreferrer">
                    Read article →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
