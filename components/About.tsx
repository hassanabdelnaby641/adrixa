'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaHandshake, FaChartLine } from 'react-icons/fa';

const features = [
  {
    icon: FaTrophy,
    title: 'Industry Expertise',
    description: 'Over a decade of experience in influencer marketing'
  },
  {
    icon: FaHandshake,
    title: 'Strong Relationships',
    description: 'Network of verified influencers across various niches'
  },
  {
    icon: FaChartLine,
    title: 'Data-Driven Results',
    description: 'Advanced analytics and performance tracking'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">
          We're passionate about connecting brands with their perfect influencer match
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <feature.icon className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};