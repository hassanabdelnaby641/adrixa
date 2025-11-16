'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp',
    content: 'Working with Adrixa transformed our influencer marketing strategy. The results exceeded our expectations.'
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StyleBrand',
    content: 'Their data-driven approach and industry expertise helped us reach new audiences effectively.'
  },
  {
    name: 'Emma Davis',
    role: 'Brand Manager',
    company: 'BeautyGlow',
    content: 'The team at Adrixa truly understands influencer marketing. They delivered exceptional results.'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Hear from brands that have transformed their digital presence with us
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};