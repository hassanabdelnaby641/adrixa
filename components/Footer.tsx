import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Adrixa</h3>
            <p className="text-gray-400">
              Connecting brands with influential voices for maximum impact.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#case-studies" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Adrixa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;