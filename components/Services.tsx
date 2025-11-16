'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCameraRetro, FaYoutube, FaChartLine } from 'react-icons/fa';

const services = [
  {
    icon: FaCameraRetro,
    title: 'Influencer Campaign Design & Management',
    description: 'Strategic planning and execution of influencer campaigns tailored to your brand goals.',
  },
  {
    icon: FaYoutube,
    title: 'YouTube Advertising',
    description: 'Targeted YouTube advertising campaigns that reach your ideal audience.',
  },
  {
    icon: FaChartLine,
    title: 'Analytics & Performance Tracking',
    description: 'Comprehensive tracking and analysis of campaign metrics for optimal ROI.',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive influencer marketing solutions to help your brand grow
        </p>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;