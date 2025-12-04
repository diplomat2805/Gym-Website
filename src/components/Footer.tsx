import { Link } from 'react-router-dom';
import { Dumbbell, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#FFD400] rounded-lg flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl">Fit Camp Gym</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transform your body and ignite your strength with expert trainers and premium facilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#FFD400] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Facebook className="w-5 h-5 text-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#FFD400] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Instagram className="w-5 h-5 text-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#FFD400] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Twitter className="w-5 h-5 text-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#FFD400] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Youtube className="w-5 h-5 text-black" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#FFD400] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#FFD400] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#FFD400] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-[#FFD400] transition-colors duration-300">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/trainers" className="text-gray-400 hover:text-[#FFD400] transition-colors duration-300">
                  Trainers
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-[#FFD400] transition-colors duration-300">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-[#FFD400] mb-4">Programs</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Weight Training</li>
              <li className="text-gray-400">Cardio Fitness</li>
              <li className="text-gray-400">Yoga Classes</li>
              <li className="text-gray-400">CrossFit</li>
              <li className="text-gray-400">Personal Training</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#FFD400] mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#FFD400] flex-shrink-0 mt-1" />
                <span>123 Fitness Street, Wellness Plaza, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#FFD400]" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#FFD400]" />
                <span>info@fitcampgym.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Fit Camp Gym. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <Link to="#" className="hover:text-[#FFD400] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-[#FFD400] transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
