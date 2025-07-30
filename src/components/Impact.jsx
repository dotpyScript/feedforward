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
      icon: <CakeIcon className="w-6 h-6 text-[color:var(--primary-600)]" />
    },
    {
      number: "10,000+",
      label: "Active Users",
      description: "Community members making a difference",
      icon: <UsersIcon className="w-6 h-6 text-[color:var(--secondary-600)]" />
    },
    {
      number: "100+",
      label: "Cities",
      description: "Communities served across the globe",
      icon: <GlobeAltIcon className="w-6 h-6 text-[color:var(--accent-600)]" />
    },
    {
      number: "1M+",
      label: "Lives Impacted",
      description: "People who benefited from our platform",
      icon: <HeartIcon className="w-6 h-6 text-[color:var(--error-500)]" />
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
      color: "from-[color:var(--success-400)] to-[color:var(--success-600)]"
    },
    {
      icon: <UsersIcon className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Community Growth",
      description: "Connected 50,000+ people across 100+ cities",
      color: "from-[color:var(--secondary-400)] to-[color:var(--secondary-600)]"
    },
    {
      icon: <CurrencyDollarIcon className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Economic Impact",
      description: "Generated $2M+ in additional income for home cooks",
      color: "from-[color:var(--accent-400)] to-[color:var(--accent-600)]"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-[color:var(--secondary-50)] via-[color:var(--neutral-0)] to-[color:var(--accent-50)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[color:var(--secondary-100)] text-[color:var(--secondary-800)] text-sm font-medium mb-4">
            Our Impact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[color:var(--neutral-900)] mb-6">
            Real Change, 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--secondary-600)] to-[color:var(--accent-600)]"> Real Stories</span>
          </h2>
          <p className="text-xl text-[color:var(--neutral-600)] max-w-3xl mx-auto leading-relaxed">
            Every number represents a life changed, a meal shared, and a community strengthened. 
            Here's how FeedForward is making a difference.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-[color:var(--neutral-0)] p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-oklch hover-lift border border-[color:var(--neutral-200)]">
                <div className="flex justify-center mb-2 sm:mb-4">{stat.icon}</div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--primary-600)] to-[color:var(--accent-600)] mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-[color:var(--neutral-900)] mb-1 sm:mb-2">{stat.label}</div>
                <div className="text-xs sm:text-sm text-[color:var(--neutral-600)] leading-tight">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stories */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-[color:var(--neutral-900)] text-center mb-8 sm:mb-12">Stories of Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {impactStories.map((story, index) => (
              <div key={index} className="bg-[color:var(--neutral-0)] rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-oklch hover-lift border border-[color:var(--neutral-200)]">
                <div className="relative">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-40 sm:h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[color:var(--secondary-500)] text-[color:var(--neutral-0)] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {story.meals}
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-semibold text-[color:var(--neutral-900)] mb-2">{story.title}</h4>
                  <div className="flex items-center text-[color:var(--secondary-600)] text-xs sm:text-sm font-medium mb-3">
                    <MapPinIcon className="w-3 sm:w-4 h-3 sm:h-4 mr-1 flex-shrink-0" />
                    {story.location}
                  </div>
                  <p className="text-[color:var(--neutral-600)] leading-relaxed mb-4 text-sm sm:text-base">{story.story}</p>
                  <div className="flex items-center text-xs sm:text-sm text-[color:var(--neutral-500)]">
                    <HeartIcon className="w-3 sm:w-4 h-3 sm:h-4 mr-1 flex-shrink-0 text-[color:var(--error-500)]" />
                    Verified Impact Story
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[color:var(--neutral-900)] text-center mb-8 sm:mb-12">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-[color:var(--neutral-0)] p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg text-center hover:shadow-xl transition-oklch group hover-lift border border-[color:var(--neutral-200)]">
                <div className={`w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center text-[color:var(--neutral-0)] mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-[color:var(--neutral-900)] mb-3 sm:mb-4">{achievement.title}</h4>
                <p className="text-[color:var(--neutral-600)] leading-relaxed text-sm sm:text-base">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-[color:var(--secondary-500)] to-[color:var(--accent-500)] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-[color:var(--neutral-0)]">
            <div className="flex items-center justify-center mb-4">
              <ArrowTrendingUpIcon className="w-6 sm:w-8 h-6 sm:h-8 mr-2 sm:mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold">Be Part of the Change</h3>
            </div>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 opacity-90 leading-relaxed max-w-2xl mx-auto">
              Join thousands of others who are making a difference in their communities through food sharing.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="inline-flex items-center gap-2 bg-[color:var(--neutral-0)] text-[color:var(--neutral-900)] hover:bg-[color:var(--neutral-100)] border-0"
            >
              <StarIcon className="w-4 h-4" />
              Start Sharing Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact; 