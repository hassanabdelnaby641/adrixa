'use client';

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

export default ContactInfo;