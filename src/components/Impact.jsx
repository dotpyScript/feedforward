import { 
  CheckCircleIcon, 
  UsersIcon, 
  CurrencyDollarIcon, 
  MapPinIcon, 
  HeartIcon, 
  ArrowTrendingUpIcon,
  StarIcon,
  CakeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/solid';
import Button from './Button';

const Impact = () => {
  const stats = [
    {
      number: "50,000+",
      label: "Meals Shared",
      description: "Free meals distributed to those in need",
      icon: <CakeIcon className="w-6 h-6 text-green-600" />
    },
    {
      number: "10,000+",
      label: "Active Users",
      description: "Community members making a difference",
      icon: <UsersIcon className="w-6 h-6 text-orange-600" />
    },
    {
      number: "100+",
      label: "Cities",
      description: "Communities served across the globe",
      icon: <GlobeAltIcon className="w-6 h-6 text-green-700" />
    },
    {
      number: "1M+",
      label: "Lives Impacted",
      description: "People who benefited from our platform",
      icon: <HeartIcon className="w-6 h-6 text-orange-700" />
    }
  ];

  const impactStories = [
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Sarah's Kitchen",
      location: "New York, NY",
      story: "Sarah, a retired teacher, now shares her home-cooked meals with 20+ families weekly, creating a sense of community in her neighborhood.",
      meals: "500+ meals shared"
    },
    {
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Community Food Bank",
      location: "Los Angeles, CA",
      story: "Partnering with local restaurants to reduce food waste and feed thousands of families in need every month.",
      meals: "10,000+ meals rescued"
    },
    {
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Maria's Home Cooking",
      location: "Miami, FL",
      story: "Maria turned her passion for cooking into a small business, serving authentic Cuban cuisine to her community.",
      meals: "1,000+ happy customers"
    }
  ];

  const achievements = [
    {
      icon: <CheckCircleIcon className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Zero Food Waste",
      description: "Reduced food waste by 85% in partner restaurants",
      color: "from-green-500 to-green-700"
    },
    {
      icon: <UsersIcon className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Community Growth",
      description: "Connected 50,000+ people across 100+ cities",
      color: "from-orange-500 to-orange-700"
    },
    {
      icon: <CurrencyDollarIcon className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Economic Impact",
      description: "Generated $2M+ in additional income for home cooks",
      color: "from-green-600 to-orange-600"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-green-50 via-white to-orange-50 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-200/40 to-green-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-200/40 to-orange-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/40 via-transparent to-orange-50/40"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:70px_70px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100/80 to-orange-100/80 border border-green-200/50 text-green-800 text-sm font-medium mb-6 shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-orange-500 rounded-full mr-2 animate-pulse"></div>
            Our Impact
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Real Change, 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-orange-600"> Real Stories</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Every number represents a life changed, a meal shared, and a community strengthened. 
            See the real impact we're making together.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="group bg-gradient-to-br from-green-50/80 to-orange-50/80 p-8 rounded-3xl text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-green-200/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-orange-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
              <div className="text-gray-600 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Impact Stories */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Success Stories</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-green-200/50">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      {story.meals}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPinIcon className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-500">{story.location}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">{story.story}</p>
                  <div className="flex items-center space-x-2 text-green-600 font-medium">
                    <ArrowTrendingUpIcon className="w-4 h-4" />
                    <span className="text-sm">Read Full Story</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-br from-green-100/50 via-white to-orange-100/50 rounded-3xl p-12 border border-green-200/50">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-green-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{achievement.title}</h4>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500 to-orange-500 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Join the Movement</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Be part of the solution. Every meal shared makes a difference in someone's life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 border-0 shadow-lg hover:shadow-xl"
              >
                Start Sharing
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact; 