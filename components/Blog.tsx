'use client';

import { motion } from 'framer-motion';

const posts = [
  {
    title: 'The Future of Influencer Marketing',
    excerpt: 'Discover the emerging trends shaping influencer marketing in 2024.',
    date: 'Oct 15, 2023'
  },
  {
    title: 'Maximizing ROI in Influencer Campaigns',
    excerpt: 'Learn how to optimize your influencer marketing budget for better returns.',
    date: 'Oct 12, 2023'
  },
  {
    title: 'Choosing the Right Influencers',
    excerpt: 'Key factors to consider when selecting influencers for your brand.',
    date: 'Oct 10, 2023'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Latest Insights</h2>
        <p className="section-subtitle">
          Stay updated with the latest trends in influencer marketing
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <time className="text-sm text-gray-500">{post.date}</time>
              <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">
                Read more →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};