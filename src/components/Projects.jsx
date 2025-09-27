const projects = [
  {
    name: 'Cars Analyzer – Sales & Profitability Intelligence',
    description:
      'A Cloudflare-hosted dashboard that blends manufacturer, pricing, and market data to surface actionable trends for automotive retailers.',
    highlights: ['React', 'Supabase', 'Apache ECharts', 'Storytelling dashboards'],
    link: 'https://cars-analyzer-react.pages.dev/',
  },
  {
    name: 'Observability-Driven Data Platform',
    description:
      'Designed an end-to-end monitoring layer capturing pipeline health, freshness, and anomaly detection across 150+ tables.',
    highlights: ['dbt tests', 'Monte Carlo', 'Alerting automation'],
    link: null,
  },
  {
    name: 'Customer 360 Experimentation Hub',
    description:
      'Unified marketing and product telemetry to power predictive models and targeted lifecycle campaigns.',
    highlights: ['Kafka', 'Snowflake', 'dbt', 'Reverse ETL'],
    link: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container py-4">
        <div className="row mb-5 align-items-center">
          <div className="col-lg-8">
            <span className="section-title">Selected work</span>
            <h2 className="display-6 fw-semibold">Data products that move the needle</h2>
          </div>
          <div className="col-lg-4">
            <p className="text-secondary mb-0">
              From interactive dashboards to resilient data platforms, I build solutions that business leaders trust
              for critical decisions.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.name} className="col-lg-4">
              <div className="card h-100 shadow-hover border-0">
                <div className="card-body p-4 d-flex flex-column">
                  <h3 className="h5 fw-semibold mb-3">{project.name}</h3>
                  <p className="text-secondary flex-grow-1">{project.description}</p>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.highlights.map((highlight) => (
                      <span key={highlight} className="badge rounded-pill bg-light text-primary border">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  {project.link ? (
                    <a
                      className="stretched-link fw-semibold"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Explore live project →
                    </a>
                  ) : (
                    <span className="text-secondary small">Details available upon request</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
