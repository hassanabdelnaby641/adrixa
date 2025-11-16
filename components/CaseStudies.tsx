export default function CaseStudies() {
  'use client';
  
  const cases = [
    {
      title: 'Beauty Brand Campaign',
      metrics: { engagement: '25%', reach: '2M+', roi: '350%' },
      image: '/case1.jpg'
    },
    {
      title: 'Tech Product Launch',
      metrics: { engagement: '32%', reach: '1.5M+', roi: '280%' },
      image: '/case2.jpg'
    },
    {
      title: 'Fashion Collection',
      metrics: { engagement: '28%', reach: '3M+', roi: '420%' },
      image: '/case3.jpg'
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Our Success Stories</h2>
        <p className="section-subtitle">
          Discover how we've helped brands achieve remarkable results
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <div className="space-y-2">
                  <p>Engagement Rate: {item.metrics.engagement}</p>
                  <p>Total Reach: {item.metrics.reach}</p>
                  <p>ROI: {item.metrics.roi}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}