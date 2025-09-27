const skillGroups = [
  {
    title: 'Data Engineering',
    description:
      'Snowflake, BigQuery, Databricks, Apache Spark, Kafka, Fivetran, dbt, Airflow, Dagster, Terraform',
  },
  {
    title: 'Analytics Engineering',
    description: 'SQL, Python, Looker, Power BI, Tableau, Hex, Mode Analytics, reverse ETL, feature stores',
  },
  {
    title: 'Data Strategy & Enablement',
    description: 'Product analytics, experimentation, KPI design, stakeholder alignment, governance & quality',
  },
];

const certifications = [
  'Snowflake SnowPro Core',
  'dbt Advanced Analytics Engineer',
  'AWS Data Analytics Specialty',
];

export default function Skills() {
  return (
    <section id="skills" className="py-5 bg-white">
      <div className="container py-4">
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6">
            <span className="section-title">Skill set</span>
            <h2 className="display-6 fw-semibold">A toolbox built for modern data teams</h2>
          </div>
          <div className="col-lg-6">
            <p className="text-secondary mb-0">
              I mix engineering rigour with analytics empathy — partnering closely with business teams to ensure data
              is not only available but also actionable.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="col-md-4">
              <div className="card shadow-hover h-100 border-0">
                <div className="card-body p-4">
                  <h3 className="h5 fw-semibold mb-3">{group.title}</h3>
                  <p className="text-secondary mb-0">{group.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <span className="section-title d-block mb-3">Certifications</span>
          <div className="d-flex flex-wrap gap-3">
            {certifications.map((certification) => (
              <span key={certification} className="badge rounded-pill badge-tag px-3 py-2">
                {certification}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
