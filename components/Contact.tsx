'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaSkype } from 'react-icons/fa';

const ContactInfo = () => (
  <div className="space-y-4">
    <div className="flex items-center space-x-4">
      <FaEnvelope className="text-blue-600 text-xl" />
      <a href="mailto:contact@adrixa.com" className="text-gray-600 hover:text-blue-600">
        contact@adrixa.com
      </a>
    </div>
    <div className="flex items-center space-x-4">
      <FaWhatsapp className="text-blue-600 text-xl" />
      <a href="https://wa.me/1234567890" className="text-gray-600 hover:text-blue-600">
        +1 (234) 567-890
      </a>
    </div>
    <div className="flex items-center space-x-4">
      <FaSkype className="text-blue-600 text-xl" />
      <a href="skype:adrixa.marketing" className="text-gray-600 hover:text-blue-600">
        adrixa.marketing
      </a>
    </div>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        Send Message
      </button>
    </form>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Ready to elevate your brand? Let's discuss how we can help.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <ContactInfo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;