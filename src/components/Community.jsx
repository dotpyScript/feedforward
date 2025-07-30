import { 
  UsersIcon, 
  BookOpenIcon, 
  ChartBarIcon, 
  ChatBubbleLeftRightIcon,
  CheckIcon 
} from '@heroicons/react/24/outline';
import Button from './Button';

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

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Home Cook",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      quote: "FeedForward helped me turn my passion for cooking into a way to help my community. I've shared over 500 meals and made so many new friends!"
    },
    {
      name: "David L.",
      role: "Community Member",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      quote: "As someone who was struggling, FeedForward provided not just food, but hope and a sense of belonging. This community is truly amazing."
    },
    {
      name: "Maria R.",
      role: "NGO Partner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      quote: "Partnering with FeedForward has allowed us to reach more families in need. The platform's efficiency and community focus are unmatched."
    }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-green-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            Join Our Community
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Be Part of Something 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-600"> Bigger</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you want to share food, find meals, or support our mission, there's a place for you 
            in the FeedForward community. Join thousands of others making a difference.
          </p>
        </div>

        {/* Membership Types */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Choose Your Path</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTypes.map((type, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${type.popular ? 'ring-2 ring-green-500' : ''}`}>
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{type.title}</h4>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-600 mb-8">
                    {type.price}
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={type.popular ? "primary" : "outline"}
                    size="md"
                    className="w-full"
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
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Community Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Community Says</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500 to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join our community today and start sharing, connecting, and making an impact in your neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 border-0"
              >
                Join as Food Sharer
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900"
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