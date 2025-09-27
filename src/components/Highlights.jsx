const highlights = [
  { value: '15+', label: 'enterprise data platforms launched' },
  { value: '50TB', label: 'of pipelines orchestrated daily' },
  { value: '40+', label: 'executive dashboards delivered' },
  { value: '4x', label: 'faster insight delivery for partners' },
];

export default function Highlights() {
  return (
    <section className="py-5 bg-white">
      <div className="container py-4">
        <div className="row g-4 text-center">
          {highlights.map((item) => (
            <div key={item.label} className="col-6 col-md-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="display-6 fw-bold gradient-text">{item.value}</div>
                  <p className="text-secondary mb-0 text-capitalize small">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
