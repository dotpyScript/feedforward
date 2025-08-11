import { useState } from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon,
  MapPinIcon,
  AcademicCapIcon,
  StarIcon,
  HeartIcon,
  UsersIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';
import {
  LinkedInIcon,
  TwitterIcon,
  GitHubIcon
} from '@heroicons/react/24/solid';

const Team = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      department: "leadership",
      image: "https://images.unsplash.com/photo-1494790108755-2616c527598d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Passionate about creating sustainable food systems and eliminating food waste through innovative technology solutions.",
      expertise: ["Strategic Planning", "Sustainability", "Team Leadership"],
      experience: "8+ years",
      education: "MBA Stanford, BS Environmental Science",
      location: "San Francisco, CA",
      email: "sarah@feedforward.com",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      achievements: ["Forbes 30 Under 30", "Sustainability Award 2023"],
      quote: "Every meal shared is a step towards a more connected world."
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      department: "engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Full-stack engineer with expertise in scalable systems, AI/ML, and mobile development. Building the future of food sharing.",
      expertise: ["React/Node.js", "AI/ML", "System Architecture"],
      experience: "10+ years",
      education: "MS Computer Science MIT",
      location: "Austin, TX",
      email: "marcus@feedforward.com",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      achievements: ["Tech Innovation Award", "Open Source Contributor"],
      quote: "Technology should serve humanity, not the other way around."
    },
    {
      id: 3,
      name: "Dr. Amelia Thompson",
      role: "Head of Community Relations",
      department: "community",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Social impact specialist focused on building meaningful connections between food providers and communities in need.",
      expertise: ["Community Building", "Social Impact", "Partnership Development"],
      experience: "6+ years",
      education: "PhD Social Work Columbia",
      location: "New York, NY",
      email: "amelia@feedforward.com",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      achievements: ["Community Hero Award", "Social Impact Fellowship"],
      quote: "Building bridges through food, one community at a time."
    },
    {
      id: 4,
      name: "David Kim",
      role: "Senior Product Designer",
      department: "design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "UX/UI designer passionate about creating intuitive, accessible experiences that make food sharing effortless for everyone.",
      expertise: ["UX/UI Design", "Design Systems", "Accessibility"],
      experience: "7+ years",
      education: "MFA Design RISD",
      location: "Seattle, WA",
      email: "david@feedforward.com",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      achievements: ["Design Excellence Award", "Accessibility Champion"],
      quote: "Great design is invisible - it just works."
    },
    {
      id: 5,
      name: "Lisa Zhang",
      role: "Data Science Lead",
      department: "engineering",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Data scientist leveraging machine learning to optimize food distribution and predict community needs with precision.",
      expertise: ["Machine Learning", "Data Analytics", "Python/R"],
      experience: "5+ years",
      education: "PhD Statistics Berkeley",
      location: "San Jose, CA",
      email: "lisa@feedforward.com",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      achievements: ["AI Research Award", "Data Science Excellence"],
      quote: "Data tells stories that can change the world."
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Operations Manager",
      department: "operations",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Operations expert ensuring seamless food distribution logistics and maintaining the highest safety standards across all platforms.",
      expertise: ["Operations Management", "Logistics", "Quality Assurance"],
      experience: "9+ years",
      education: "MBA Operations UCLA",
      location: "Los Angeles, CA",
      email: "james@feedforward.com",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      achievements: ["Operations Excellence Award", "Safety Champion"],
      quote: "Excellence in execution creates lasting impact."
    }
  ];

  const departments = [
    { id: 'all', name: 'All Team', icon: <UsersIcon className="w-5 h-5" />, count: teamMembers.length },
    { id: 'leadership', name: 'Leadership', icon: <TrophyIcon className="w-5 h-5" />, count: teamMembers.filter(m => m.department === 'leadership').length },
    { id: 'engineering', name: 'Engineering', icon: <AcademicCapIcon className="w-5 h-5" />, count: teamMembers.filter(m => m.department === 'engineering').length },
    { id: 'design', name: 'Design', icon: <StarIcon className="w-5 h-5" />, count: teamMembers.filter(m => m.department === 'design').length },
    { id: 'community', name: 'Community', icon: <HeartIcon className="w-5 h-5" />, count: teamMembers.filter(m => m.department === 'community').length },
    { id: 'operations', name: 'Operations', icon: <MapPinIcon className="w-5 h-5" />, count: teamMembers.filter(m => m.department === 'operations').length }
  ];

  const filteredMembers = activeFilter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === activeFilter);

  const getSocialIcon = (platform) => {
    const iconClass = "w-4 h-4";
    switch (platform) {
      case 'linkedin':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case 'github':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-green-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-orange-500/5"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-orange-100 border border-green-200/50 mb-6">
            <UsersIcon className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-800 font-medium text-sm">Meet Our Team</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The People Behind
            <span className="block bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
              FeedForward
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A diverse team of passionate individuals working together to create a world where 
            no meal goes to waste and no person goes hungry.
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveFilter(dept.id)}
              className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${
                activeFilter === dept.id
                  ? 'bg-gradient-to-r from-green-500 to-orange-500 text-white shadow-lg shadow-green-500/25'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-green-50 border border-gray-200 hover:border-green-300'
              }`}
            >
              {dept.icon}
              <span className="ml-2">{dept.name}</span>
              <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                activeFilter === dept.id
                  ? 'bg-white/20 text-white'
                  : 'bg-green-100 text-green-700'
              }`}>
                {dept.count}
              </span>
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredMembers.map((member, index) => (
            <div
              key={member.id}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-green-200 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Member Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Links Overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex space-x-3">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-green-500 hover:text-white transition-all duration-200 transform hover:scale-110"
                      >
                        {getSocialIcon(platform)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6 sm:p-8">
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-semibold text-sm sm:text-base mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{member.bio}</p>
                </div>

                {/* Quote */}
                <div className="bg-gradient-to-r from-green-50 to-orange-50 p-4 rounded-xl mb-6 border-l-4 border-green-500">
                  <p className="text-gray-700 italic text-sm sm:text-base">"{member.quote}"</p>
                </div>

                {/* Expertise Tags */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <TrophyIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>{member.experience} experience</span>
                  </div>
                  <div className="flex items-center">
                    <AcademicCapIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>{member.education}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>{member.location}</span>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <a href={`mailto:${member.email}`} className="text-green-600 hover:text-green-700 transition-colors">
                      {member.email}
                    </a>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Recent Achievements</h4>
                  <div className="space-y-2">
                    {member.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center text-sm text-gray-600">
                        <StarIcon className="w-3 h-3 text-orange-500 mr-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 sm:mt-20">
          <div className="bg-gradient-to-r from-green-600 to-orange-600 rounded-2xl p-8 sm:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Team by the Numbers</h3>
              <p className="text-green-100 text-lg">Diverse talents united by a common mission</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-2">{teamMembers.length}</div>
                <div className="text-green-100">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-2">{departments.length - 1}</div>
                <div className="text-green-100">Departments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-2">6</div>
                <div className="text-green-100">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-2">50+</div>
                <div className="text-green-100">Years Combined</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;