import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Button from './Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-orange-500 rounded-xl flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105 shadow-lg">
                <span className="text-white font-bold text-lg">FF</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                FeedForward
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {[
                { name: 'Home', href: '/', type: 'route' },
                { name: 'About', href: '/about', type: 'route' },
                { name: 'News', href: '/news', type: 'route' },
                { name: 'Impact', href: '#impact', type: 'anchor' },
                { name: 'Community', href: '#community', type: 'anchor' }
              ].map((item) => (
                item.type === 'route' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative px-5 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-green-50/50 group ${
                      location.pathname === item.href 
                        ? 'text-green-600' 
                        : 'text-gray-700 hover:text-green-600'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-orange-500 transition-all duration-200 ${
                      location.pathname === item.href 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative px-5 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-200 rounded-lg hover:bg-green-50/50 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-orange-500 transition-all duration-200 group-hover:w-full"></span>
                  </a>
                )
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-700 hover:text-green-600 hover:bg-green-50/50 border-2 border-transparent hover:border-green-200 transition-all duration-200"
            >
              Sign In
            </Button>
            <Button 
              variant="gradient"
              size="sm"
              className="bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50/50 focus:outline-none transition-colors duration-200"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="absolute w-full bg-white/80 backdrop-blur-lg border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {[
              { name: 'Home', href: '/', type: 'route' },
              { name: 'About', href: '/about', type: 'route' },
              { name: 'News', href: '/news', type: 'route' },
              { name: 'Impact', href: '#impact', type: 'anchor' },
              { name: 'Community', href: '#community', type: 'anchor' }
            ].map((item) => (
              item.type === 'route' ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-lg hover:bg-green-50/50 transition-all duration-200 ${
                    location.pathname === item.href 
                      ? 'text-green-600 bg-green-50/50' 
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50/50 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full text-gray-700 hover:text-green-600 hover:bg-green-50/50 border-2 border-transparent hover:border-green-200"
              >
                Sign In
              </Button>
              <Button 
                variant="gradient" 
                size="sm" 
                className="w-full bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white shadow-md"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 