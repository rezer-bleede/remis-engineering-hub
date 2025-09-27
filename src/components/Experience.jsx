const experiences = [
  {
    company: 'Remis Engineering Hub',
    role: 'Lead Data Engineer',
    period: '2022 — Present',
    achievements: [
      'Architected a modern data stack with dbt, Airflow, and Snowflake that serves as the backbone for BI teams and ML workloads.',
      'Introduced automated data quality tests and lineage tracking, lifting stakeholder trust scores by 35%.',
      'Shipped an experimentation-ready analytics layer consumed by 40+ product managers across the organisation.',
    ],
  },
  {
    company: 'NextGen Analytics',
    role: 'Senior Analytics Engineer',
    period: '2019 — 2022',
    achievements: [
      'Delivered a near real-time customer 360 data mart that powered churn prediction and marketing personalisation.',
      'Optimised batch workloads, cutting cloud spend by 28% while improving SLAs for executive dashboards.',
      'Mentored a distributed team of engineers, introducing coding standards and CI/CD practices for analytics code.',
    ],
  },
  {
    company: 'DataCraft Labs',
    role: 'Data Engineer',
    period: '2016 — 2019',
    achievements: [
      'Built ingestion pipelines that processed 5+ TB of IoT telemetry daily with Apache Kafka and Spark.',
      'Partnered with product and finance teams to define trustworthy KPIs and automated executive reporting.',
      'Implemented infrastructure-as-code and monitoring that reduced incident response times by 45%.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-5">
      <div className="container py-4">
        <div className="row justify-content-between align-items-center mb-5">
          <div className="col-lg-6">
            <span className="section-title">Experience</span>
            <h2 className="display-6 fw-semibold">Impact across industries and data maturity levels</h2>
          </div>
          <div className="col-lg-5">
            <p className="text-secondary mb-0">
              I thrive in the messy middle—connecting stakeholders, data scientists, and engineers. From greenfield
              platforms to re-imagining legacy stacks, my focus is on resilient architecture, data trust, and
              measurable business outcomes.
            </p>
          </div>
        </div>
        <div className="timeline">
          {experiences.map((experience) => (
            <div key={`${experience.company}-${experience.period}`} className="timeline-item">
              <div className="d-flex flex-wrap justify-content-between align-items-start mb-2">
                <div>
                  <h3 className="h4 fw-semibold mb-1">{experience.role}</h3>
                  <p className="text-secondary mb-0">{experience.company}</p>
                </div>
                <span className="badge rounded-pill bg-dark-subtle text-dark-emphasis">
                  {experience.period}
                </span>
              </div>
              <ul className="text-secondary ps-3">
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className="mb-2">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
