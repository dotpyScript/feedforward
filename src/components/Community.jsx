import { 
  UsersIcon, 
  BookOpenIcon, 
  ChartBarIcon, 
  ChatBubbleLeftRightIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import Button from './Button';
import Testimonials from './Testimonials';

const Community = () => {

  const membershipTypes = [
    {
      title: "Food Seeker",
      description: "Find free meals and food donations in your area",
      features: [
        "Access to free meals nearby",
        "Real-time notifications",
        "Community support",
        "Safety verified listings"
      ],
      price: "Free",
      buttonText: "Join as Seeker",
      popular: false
    },
    {
      title: "Food Sharer",
      description: "Share your cooking and make a difference",
      features: [
        "List your meals for free",
        "Earn income from your cooking",
        "Build your community",
        "Access to business tools"
      ],
      price: "Free",
      buttonText: "Start Sharing",
      popular: true
    },
    {
      title: "Community Partner",
      description: "For NGOs and organizations making impact",
      features: [
        "Dedicated support team",
        "Analytics and reporting",
        "Partnership opportunities",
        "Priority access to resources"
      ],
      price: "Contact Us",
      buttonText: "Partner with Us",
      popular: false
    }
  ];

  const communityFeatures = [
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: "Community Events",
      description: "Join local food sharing events and meet fellow community members"
    },
    {
      icon: <BookOpenIcon className="w-8 h-8" />,
      title: "Learning Resources",
      description: "Access cooking tips, food safety guidelines, and community best practices"
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "Impact Tracking",
      description: "See your contribution to the community and track your impact over time"
    },
    {
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
      title: "Community Support",
      description: "24/7 support and guidance from our community team and fellow members"
    }
  ];



  return (
    <section id="community" className="py-20 bg-gradient-to-br from-green-50 via-white to-orange-50 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-green-200/40 to-green-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-200/40 to-orange-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/40 via-transparent to-orange-50/40"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100/80 to-orange-100/80 border border-green-200/50 text-green-800 text-sm font-medium mb-6 shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-orange-500 rounded-full mr-2 animate-pulse"></div>
            Join Our Community
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Build Something 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-orange-600"> Bigger</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join thousands of people who are making a difference in their communities. 
            Choose your path and start your journey with FeedForward.
          </p>
        </div>

        {/* Membership Types */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {membershipTypes.map((type, index) => (
              <div key={index} className="group relative transform transition-all duration-300 hover:scale-[1.02]">
                <div className={`h-full bg-white/80 backdrop-blur-sm p-8 rounded-3xl border-2 ${
                  type.popular 
                    ? 'border-green-500 bg-gradient-to-br from-green-50/50 to-orange-50/50' 
                    : 'border-green-200/50'
                } transition-all duration-300 group-hover:shadow-xl`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                    <p className="text-gray-600 mb-6">{type.description}</p>
                    <div className={`text-3xl font-bold mb-2 ${
                      type.popular 
                        ? 'bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent' 
                        : 'text-gray-900'
                    }`}>
                      {type.price}
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckIcon className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
                          type.popular ? 'text-green-500' : 'text-gray-400'
                        }`} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={type.popular ? "gradient" : "outline"}
                    size="lg"
                    className={`w-full ${
                      type.popular 
                        ? 'bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white' 
                        : 'border-2 border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600'
                    } transform transition-transform duration-300 hover:-translate-y-1`}
                  >
                    {type.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Features */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Community Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="group text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-green-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-green-200 group-hover:to-orange-200 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-orange-500 rounded-lg flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <Testimonials />

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-500 to-orange-500 rounded-3xl p-12 text-white shadow-2xl">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join our growing community of food sharers and changemakers. 
              Every meal shared is a life touched, every connection made is a community strengthened.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 border-0 shadow-lg hover:shadow-xl"
              >
                Start Sharing Food
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900"
              >
                Find Food Nearby
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;