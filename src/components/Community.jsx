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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTypes.map((type, index) => (
              <div key={index} className={`relative group ${type.popular ? 'md:scale-105' : ''}`}>
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="bg-gradient-to-br from-green-50/80 to-orange-50/80 p-8 rounded-3xl border border-green-200/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                    <p className="text-gray-600 mb-6">{type.description}</p>
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
                      {type.price}
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={type.popular ? "gradient" : "outline"}
                    size="lg"
                    className={`w-full ${type.popular ? 'bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl' : 'border-2 border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600'}`}
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

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">What Our Community Says</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-green-200/50">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

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