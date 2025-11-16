'use client';

import { motion } from 'framer-motion';

const brands = [
  'Brand 1',
  'Brand 2',
  'Brand 3',
  'Brand 4',
  'Brand 5',
];

const BrandCarousel = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="flex justify-around items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="text-gray-400 font-semibold"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;