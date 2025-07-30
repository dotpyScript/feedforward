import { 
  MapPinIcon, 
  PlusIcon, 
  HeartIcon 
} from '@heroicons/react/24/outline';

const About = () => {
  const features = [
    {
      icon: <MapPinIcon className="w-8 h-8" />,
      title: "Find Food Nearby",
      description: "Locate free meals and food donations in your area with our real-time map and search functionality."
    },
    {
      icon: <PlusIcon className="w-8 h-8" />,
      title: "Share Your Cooking",
      description: "Home cooks and small vendors can list their meals and reach customers in their locality."
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: "Support Communities",
      description: "Partner with NGOs and contribute to making food accessible to everyone who needs it."
    }
  ];

  const values = [
    {
      title: "Inclusivity",
      description: "We believe food is a basic human right that should be accessible to all, regardless of economic status."
    },
    {
      title: "Community",
      description: "Building stronger communities through the universal language of food and shared meals."
    },
    {
      title: "Sustainability",
      description: "Reducing food waste while creating economic opportunities for home cooks and small vendors."
    },
    {
      title: "Transparency",
      description: "Open and honest platform where users can trust the food sources and donation processes."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-green-50 via-white to-orange-50 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle gradient orbs */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-green-200/30 to-green-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-orange-200/30 to-orange-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-orange-50/30"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100/80 to-orange-100/80 border border-green-200/50 text-green-800 text-sm font-medium mb-6 shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-orange-500 rounded-full mr-2 animate-pulse"></div>
            About FeedForward
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Making Food a 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-orange-600"> Global Right</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            FeedForward is more than just a food sharing platform. We're a movement dedicated to 
            ensuring that no one goes hungry while creating opportunities for communities to thrive.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We envision a world where food waste is eliminated, communities are strengthened, 
              and everyone has access to nutritious meals. Through technology and human connection, 
              we're building bridges between those who have food to share and those who need it.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Whether you're a home cook looking to share your passion, someone in need of a meal, 
              or an organization wanting to make a difference, FeedForward provides the platform 
              to connect and create positive change.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-1 bg-gradient-to-r from-green-500 via-green-400 to-orange-500 rounded-full shadow-lg"></div>
              <span className="text-sm text-gray-500 font-medium">Join our mission</span>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Community kitchen" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-green-500 to-orange-500 p-8 rounded-2xl shadow-xl text-white">
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="text-sm opacity-90">Lives Impacted</div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">How FeedForward Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-green-50/80 to-orange-50/80 p-8 rounded-3xl text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-green-200/50 backdrop-blur-sm">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-orange-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-gradient-to-br from-green-100/50 via-white to-orange-100/50 rounded-3xl p-12 border border-green-200/50">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-green-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-green-200 group-hover:to-orange-200 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-orange-500 rounded-lg"></div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 