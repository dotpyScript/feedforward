import React from 'react';
import Marquee from 'react-fast-marquee';
import CountUp from 'react-countup';

const LogoMarquee = () => {
  // Partner companies with clean SVG-style logos
  const partners = [
    {
      name: "FoodBank Network",
      category: "NGO",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path d="M2 17L12 22L22 17" />
          <path d="M2 12L12 17L22 12" />
        </svg>
      )
    },
    {
      name: "GreenMeals",
      category: "Restaurant",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.1 13.34L9 16.74L13.5 12.24L8.1 13.34Z" />
          <path d="M14.88 11.53C14.21 9.77 13.06 8.23 11.53 7.05L10.55 6.22L9.57 7.05C8.04 8.23 6.89 9.77 6.22 11.53L14.88 11.53Z" />
          <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2Z" />
        </svg>
      )
    },
    {
      name: "Community Kitchen",
      category: "Local",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" />
          <path d="M7 10H9V14H7V10ZM11 10H13V14H11V10ZM15 10H17V14H15V10Z" />
        </svg>
      )
    },
    {
      name: "Fresh Foods Co",
      category: "Supplier",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 6H16L14 4H10L8 6H4C2.9 6 2 6.9 2 8V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V8C22 6.9 21.1 6 20 6ZM20 19H4V8H20V19Z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      )
    },
    {
      name: "Urban Harvest",
      category: "Farm",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" />
          <path d="M21 9V7L15 6L13 7H11L9 6L3 7V9L9 10L11 11H13L15 10L21 9Z" />
          <path d="M22 16V14L20 13L18 14V16L20 17L22 16Z" />
          <path d="M6 16V14L4 13L2 14V16L4 17L6 16Z" />
          <path d="M16 20V18L14 17L12 18V20L14 21L16 20Z" />
          <path d="M10 20V18L8 17L6 18V20L8 21L10 20Z" />
        </svg>
      )
    },
    {
      name: "Wellness Hub",
      category: "Health",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" />
        </svg>
      )
    },
    {
      name: "Local Bistro",
      category: "Restaurant",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.5 8.5C8.5 7.67 9.17 7 10 7S11.5 7.67 11.5 8.5S10.83 10 10 10S8.5 9.33 8.5 8.5ZM10 12C11.93 12 13.5 10.43 13.5 8.5S11.93 5 10 5S6.5 6.57 6.5 8.5S8.07 12 10 12Z" />
          <path d="M18 9V7C18 5.34 16.66 4 15 4S12 5.34 12 7V9C12 10.66 13.34 12 15 12S18 10.66 18 9ZM15 10C14.45 10 14 9.55 14 9V7C14 6.45 14.45 6 15 6S16 6.45 16 7V9C16 9.55 15.55 10 15 10Z" />
          <path d="M9 16H15L14 14H10L9 16ZM7 18V20H17V18L15 16H9L7 18Z" />
        </svg>
      )
    },
    {
      name: "Eco Market",
      category: "Market",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22S9 21.1 9 20S8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5H5.21L4.27 3H1Z" />
          <path d="M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22S19 21.1 19 20S18.1 18 17 18Z" />
        </svg>
      )
    },
    {
      name: "Care Foundation",
      category: "NGO",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 4C18.2 4 20 5.8 20 8C20 10.2 18.2 12 16 12C13.8 12 12 10.2 12 8C12 5.8 13.8 4 16 4ZM16 14C18.67 14 22 15.33 22 18V20H10V18C10 15.33 13.33 14 16 14Z" />
          <path d="M8 12C10.21 12 12 10.21 12 8C12 5.79 10.21 4 8 4C5.79 4 4 5.79 4 8C4 10.21 5.79 12 8 12ZM8 14C5.33 14 0 15.34 0 18V20H8V18C8 16.9 8.29 15.85 8.8 15C8.54 14.99 8.27 14.99 8 14Z" />
        </svg>
      )
    },
    {
      name: "Healthy Eats",
      category: "Restaurant",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
      logo: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 11H15L13.5 7.5C13.09 6.67 12.6 6 12 6S10.91 6.67 10.5 7.5L9 11ZM12 2L13.09 8.26L22 9L16 14.74L17.18 22L12 19.77L6.82 22L8 14.74L2 9L10.91 8.26L12 2Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-32 h-32 bg-gradient-to-r from-green-200/20 to-orange-200/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-gradient-to-r from-orange-200/20 to-green-200/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.01)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100/80 to-orange-100/80 border border-green-200/50 text-green-800 text-sm font-medium mb-6 shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-orange-500 rounded-full mr-2 animate-pulse"></div>
            Trusted Partners
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Partnering with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-orange-600"> Leading Organizations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We collaborate with restaurants, NGOs, community kitchens, and food suppliers to create a sustainable food sharing ecosystem.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Fade Effects */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          {/* React Fast Marquee */}
          <Marquee 
            pauseOnHover={true}
            speed={50}
            gradient={false}
            className="py-4"
          >
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-8 group"
              >
                <div className={`relative ${partner.bgColor} backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:border-white transition-all duration-500 hover:shadow-2xl hover:scale-110 hover:-translate-y-2 w-48 h-32 group-hover:rotate-1`}>
                  {/* Floating Animation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute -top-2 -right-2 z-10">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium shadow-lg border border-white/50 ${
                      partner.category === 'NGO' 
                        ? 'bg-blue-500 text-white' 
                        : partner.category === 'Restaurant'
                        ? 'bg-orange-500 text-white'
                        : partner.category === 'Farm'
                        ? 'bg-green-500 text-white'
                        : partner.category === 'Health'
                        ? 'bg-purple-500 text-white'
                        : partner.category === 'Local'
                        ? 'bg-emerald-500 text-white'
                        : partner.category === 'Supplier'
                        ? 'bg-indigo-500 text-white'
                        : partner.category === 'Market'
                        ? 'bg-teal-500 text-white'
                        : 'bg-gray-500 text-white'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      {partner.category}
                    </span>
                  </div>
                  
                  {/* Logo Container with Modern Design */}
                  <div className="flex items-center justify-center h-16 mb-3 relative">
                    <div className={`w-16 h-16 rounded-xl ${partner.bgColor} border-2 border-white/50 flex items-center justify-center group-hover:rotate-6 transition-all duration-300 shadow-lg ${partner.iconColor}`}>
                      {partner.logo}
                    </div>
                    
                    {/* Animated Ring */}
                    <div className="absolute inset-0 w-16 h-16 mx-auto my-auto border-2 border-transparent group-hover:border-white/30 rounded-xl transition-all duration-300 group-hover:scale-125"></div>
                  </div>
                  
                  {/* Partner Name */}
                  <h3 className={`text-center text-sm font-bold ${partner.iconColor} group-hover:text-gray-800 transition-colors duration-300 drop-shadow-sm`}>
                    {partner.name}
                  </h3>
                  
                  {/* Floating Particles Effect */}
                  <div className="absolute top-2 left-2 w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 right-2 w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Partnership Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { 
              number: 150, 
              displayNumber: "150+", 
              label: "Partner Organizations", 
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              ), 
              color: "from-blue-500 to-blue-600", 
              suffix: "+" 
            },
            { 
              number: 50, 
              displayNumber: "50+", 
              label: "Restaurant Partners", 
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              ), 
              color: "from-orange-500 to-orange-600", 
              suffix: "+" 
            },
            { 
              number: 25, 
              displayNumber: "25+", 
              label: "NGO Collaborations", 
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ), 
              color: "from-green-500 to-green-600", 
              suffix: "+" 
            },
            { 
              number: 10, 
              displayNumber: "10+", 
              label: "Cities Covered", 
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ), 
              color: "from-purple-500 to-purple-600", 
              suffix: "+" 
            }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 border border-white/50 hover:border-white transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.color} p-3 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {stat.icon}
                </div>
                
                {/* Number */}
                <div className={`text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2}
                    suffix={stat.suffix}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                
                {/* Label */}
                <div className="text-sm text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                  {stat.label}
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" style={{animationDelay: '0.3s'}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;