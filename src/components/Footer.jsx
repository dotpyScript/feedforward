import { 
  GlobeAltIcon, 
  ChatBubbleLeftRightIcon, 
  UsersIcon, 
  LinkIcon 
} from '@heroicons/react/24/outline';
import Button from './Button';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Find Food", href: "#" },
      { name: "Share Food", href: "#" },
      { name: "Safety Guidelines", href: "#" },
      { name: "Mobile App", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Mission", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" }
    ],
    community: [
      { name: "Success Stories", href: "#impact" },
      { name: "Events", href: "#" },
      { name: "Volunteer", href: "#" },
      { name: "Partners", href: "#" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Safety", href: "#" },
      { name: "Report Issue", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", href: "#", icon: "facebook" },
    { name: "Twitter", href: "#", icon: "twitter" },
    { name: "Instagram", href: "#", icon: "instagram" },
    { name: "LinkedIn", href: "#", icon: "linkedin" }
  ];

  const getSocialIcon = (icon) => {
    switch (icon) {
      case "facebook":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        );
      case "twitter":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case "instagram":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.012.401a6.522 6.522 0 0 0-2.357 1.535A6.527 6.527 0 0 0 .119 5.294c-.197.508-.319 1.082-.353 2.03C-.048 8.273-.061 8.679-.061 12.301s.013 4.028.048 4.976c.034.948.156 1.522.353 2.03a6.521 6.521 0 0 0 1.535 2.357 6.527 6.527 0 0 0 2.357 1.535c.508.197 1.082.319 2.03.353.947.035 1.354.048 4.976.048s4.029-.013 4.976-.048c.948-.034 1.522-.156 2.03-.353a6.521 6.521 0 0 0 2.357-1.535 6.527 6.527 0 0 0 1.535-2.357c.197-.508.319-1.082.353-2.03.035-.947.048-1.354.048-4.976s-.013-4.028-.048-4.976c-.034-.948-.156-1.522-.353-2.03a6.522 6.522 0 0 0-1.535-2.357A6.527 6.527 0 0 0 19.294.401c-.508-.197-1.082-.319-2.03-.353C16.317.013 15.911 0 12.017 0zM12.017 2.162c3.573 0 3.998.014 5.407.048.847.039 1.307.18 1.613.298.405.157.694.346.997.649.303.303.492.592.649.997.118.306.259.766.298 1.613.034 1.409.048 1.834.048 5.407s-.014 3.998-.048 5.407c-.039.847-.18 1.307-.298 1.613-.157.405-.346.694-.649.997-.303.303-.592.492-.997.649-.306.118-.766.259-1.613.298-1.409.034-1.834.048-5.407.048s-3.998-.014-5.407-.048c-.847-.039-1.307-.18-1.613-.298a2.678 2.678 0 0 1-.997-.649 2.678 2.678 0 0 1-.649-.997c-.118-.306-.259-.766-.298-1.613-.034-1.409-.048-1.834-.048-5.407s.014-3.998.048-5.407c.039-.847.18-1.307.298-1.613.157-.405.346-.694.649-.997.303-.303.592-.492.997-.649.306-.118.766-.259 1.613-.298 1.409-.034 1.834-.048 5.407-.048z"/>
            <path d="M12.017 5.838a6.163 6.163 0 1 0 0 12.326 6.163 6.163 0 0 0 0-12.326zM12.017 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
            <path d="M19.846 5.595a1.441 1.441 0 1 1-2.883 0 1.441 1.441 0 0 1 2.883 0z"/>
          </svg>
        );
      case "linkedin":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      default:
        return <GlobeAltIcon className="w-5 h-5" />;
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-transparent to-orange-600/5"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {/* Brand Section */}
            <div className="col-span-2 lg:col-span-2 mb-8 sm:mb-0">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm sm:text-base">FF</span>
                </div>
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">FeedForward</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base max-w-md">
                Making food a global right for all living beings. Connect, share, and nourish 
                communities through our innovative food sharing platform.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/80 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-green-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl border border-gray-700 hover:border-transparent"
                    aria-label={social.name}
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div className="mb-4 sm:mb-0">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-orange-500 rounded-full mr-2"></div>
                Product
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1 transform text-sm sm:text-base group flex items-center">
                      <span className="w-1 h-1 bg-gray-600 rounded-full mr-2 group-hover:bg-green-500 transition-colors duration-200"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="mb-4 sm:mb-0">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-orange-500 rounded-full mr-2"></div>
                Company
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1 transform text-sm sm:text-base group flex items-center">
                      <span className="w-1 h-1 bg-gray-600 rounded-full mr-2 group-hover:bg-green-500 transition-colors duration-200"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Links */}
            <div className="mb-4 sm:mb-0">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-orange-500 rounded-full mr-2"></div>
                Community
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1 transform text-sm sm:text-base group flex items-center">
                      <span className="w-1 h-1 bg-gray-600 rounded-full mr-2 group-hover:bg-green-500 transition-colors duration-200"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="mb-4 sm:mb-0">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-orange-500 rounded-full mr-2"></div>
                Support
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1 transform text-sm sm:text-base group flex items-center">
                      <span className="w-1 h-1 bg-gray-600 rounded-full mr-2 group-hover:bg-green-500 transition-colors duration-200"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800/50 py-6 sm:py-8">
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Stay Updated</h3>
                </div>
                <p className="text-gray-400 text-sm sm:text-base">Get the latest news and updates from FeedForward delivered to your inbox</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-[400px]">
                <div className="relative flex-1">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 sm:py-4 rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                </div>
                <Button 
                  variant="gradient"
                  size="md"
                  className="bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold"
                >
                  <span className="hidden sm:inline">Subscribe Now</span>
                  <span className="sm:hidden">Subscribe</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800/50 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-xs sm:text-sm flex items-center order-2 sm:order-1">
              <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-orange-500 rounded mr-2 flex items-center justify-center">
                <span className="text-white text-xs font-bold">©</span>
              </div>
              <span>2024 FeedForward. All rights reserved.</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm order-1 sm:order-2">
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-105 flex items-center group">
                <span className="w-1 h-1 bg-gray-600 rounded-full mr-2 group-hover:bg-green-500 transition-colors duration-200"></span>
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-105 flex items-center group">
                <span className="w-1 h-1 bg-gray-600 rounded-full mr-2 group-hover:bg-green-500 transition-colors duration-200"></span>
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-105 flex items-center group">
                <span className="w-1 h-1 bg-gray-600 rounded-full mr-2 group-hover:bg-green-500 transition-colors duration-200"></span>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 