import { Link, useLocation } from "react-router-dom";
import { Menu, X, Dumbbell } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // 🟡 All navbar buttons including new Gallery
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },        // ⬅ ADDED HERE
    { name: "Trainers", path: "/trainers" },
    { name: "Pricing", path: "/pricing" },
    { name: "BMI Calculator", path: "/bmi-calculator" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#FFD400] rounded-lg flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl text-black font-semibold">Fit Camp Gym</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  text-black hover:text-[#FFD400] transition-colors duration-300 relative
                  ${isActive(link.path)
                    ? "after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#FFD400]"
                    : ""
                  }
                `}
              >
                {link.name}
              </Link>
            ))}

            {/* Join Button */}
            <Link
              to="/join-now"
              className="bg-[#FFD400] text-black px-6 py-2.5 rounded-full hover:shadow-lg transition-shadow duration-300"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`
                  block text-black hover:text-[#FFD400] py-2
                  ${isActive(link.path) ? "text-[#FFD400] font-semibold" : ""}
                `}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/join-now"
              onClick={() => setIsOpen(false)}
              className="block bg-[#FFD400] text-black px-6 py-2.5 rounded-full text-center hover:shadow-lg transition-shadow duration-300"
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
