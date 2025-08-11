import { useState } from 'react';
import { 
  RocketLaunchIcon, 
  HeartIcon, 
  GlobeAltIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Team from '../components/Team';
import Footer from '../components/Footer';

const Aboutpage = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const tabs = [
    { id: 'mission', name: 'Our Mission', icon: <RocketLaunchIcon className="w-5 h-5" /> },
    { id: 'values', name: 'Core Values', icon: <HeartIcon className="w-5 h-5" /> },
    { id: 'impact', name: 'Global Impact', icon: <GlobeAltIcon className="w-5 h-5" /> }
  ];

  const content = {
    mission: {
      title: "Revolutionizing Food Distribution",
      description: "At FeedForward, we're on a mission to create a world where surplus food finds its way to those who need it most. Through innovative technology and community engagement, we're building bridges between food providers and communities, ensuring that no meal goes to waste and no person goes hungry.",
      stats: [
        { number: "1M+", label: "Meals Shared" },
        { number: "500+", label: "Partner Organizations" },
        { number: "50K+", label: "Active Users" },
        { number: "100+", label: "Cities Reached" }
      ]
    },
    values: {
      title: "Our Core Values",
      values: [
        {
          title: "Sustainability First",
          description: "We believe in creating lasting solutions that benefit both our communities and our planet."
        },
        {
          title: "Community-Driven",
          description: "Every decision we make is guided by the needs and feedback of our diverse community."
        },
        {
          title: "Innovation & Accessibility",
          description: "We leverage technology to make food sharing simple, efficient, and accessible to everyone."
        },
        {
          title: "Transparency & Trust",
          description: "We maintain open communication and build trust through reliable, secure systems."
        }
      ]
    },
    impact: {
      title: "Making a Global Impact",
      highlights: [
        {
          title: "Environmental Impact",
          stats: "Reduced 500K+ kg CO2",
          description: "By reducing food waste, we're actively fighting climate change."
        },
        {
          title: "Community Support",
          stats: "Helped 100K+ Families",
          description: "Direct support to families and individuals in need across communities."
        },
        {
          title: "Economic Value",
          stats: "$2M+ Value Preserved",
          description: "Preserving economic value while supporting sustainable practices."
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-orange-500/5"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-orange-100 border border-green-200/50 mb-6">
            <SparklesIcon className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-800 font-medium">About FeedForward</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Connecting Communities
            <span className="block bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
              Through Food Sharing
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're building a future where technology and community come together to eliminate food waste
            and ensure everyone has access to nutritious meals.
          </p>
        </div>
      </section>

      {/* Mission, Values, and Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center px-6 py-3 rounded-xl font-medium text-base transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-green-500 to-orange-500 text-white shadow-lg shadow-green-500/25'
                    : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Mission Content */}
          {activeTab === 'mission' && (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.mission.title}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">{content.mission.description}</p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {content.mission.stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Values Content */}
          {activeTab === 'values' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{content.values.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {content.values.values.map((value, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Impact Content */}
          {activeTab === 'impact' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{content.impact.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {content.impact.highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                    <div className="text-2xl font-bold text-green-600 mb-4">{highlight.stats}</div>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Team Section */}
      <Team />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Aboutpage;