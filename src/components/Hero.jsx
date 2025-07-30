import { useState, useEffect } from 'react';
import { 
  ArrowRightIcon, 
  ArrowDownTrayIcon, 
  BoltIcon, 
  ShieldCheckIcon, 
  StarIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  GlobeAltIcon, 
  UsersIcon, 
  CakeIcon,
  HeartIcon,
  RocketLaunchIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  SparklesIcon
} from '@heroicons/react/24/solid';
import Button from './Button';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // High-quality food sharing images with different scenarios
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Community Kitchen",
      subtitle: "Bringing neighborhoods together",
      icon: <UsersIcon className="w-6 h-6" />
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Home Cooking",
      subtitle: "Share your passion with others",
      icon: <HeartIcon className="w-6 h-6" />
    },
    {
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Food Distribution",
      subtitle: "Making impact where it matters",
      icon: <MapPinIcon className="w-6 h-6" />
    },
    {
      url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Restaurant Partners",
      subtitle: "Reducing waste, feeding hope",
      icon: <CakeIcon className="w-6 h-6" />
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  // Entrance animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typewriter effect with continuous loop
  useEffect(() => {
    const fullText = "The world's first AI-powered food sharing ecosystem that connects communities, eliminates waste, and feeds hope.";
    let currentIndex = 0;
    let isDeleting = false;
    
    const typewriterTimer = setInterval(() => {
      if (!isDeleting) {
        // Typing phase
        if (currentIndex <= fullText.length) {
          setTypewriterText(fullText.slice(0, currentIndex));
          currentIndex++;
          setShowCursor(true);
        } else {
          // Pause at end before starting to delete
          setTimeout(() => {
            isDeleting = true;
          }, 2000); // Pause for 2 seconds at the end
        }
      } else {
        // Deleting phase
        if (currentIndex > 0) {
          setTypewriterText(fullText.slice(0, currentIndex - 1));
          currentIndex--;
        } else {
          // Reset to start typing again
          isDeleting = false;
          setTimeout(() => {
            // Small pause before restarting
          }, 500);
        }
      }
    }, isDeleting ? 30 : 50); // Faster deletion speed

    return () => clearInterval(typewriterTimer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // Function to render text with AI-powered highlight
  const renderTypewriterText = (text) => {
    const aiPoweredIndex = text.indexOf('AI-powered');
    if (aiPoweredIndex === -1) {
      return text;
    }

    const beforeAI = text.slice(0, aiPoweredIndex);
    const aiPowered = text.slice(aiPoweredIndex, aiPoweredIndex + 10);
    const afterAI = text.slice(aiPoweredIndex + 10);

    return (
      <>
        {beforeAI}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-600 font-semibold inline-flex items-center gap-1">
          <SparklesIcon className="w-4 sm:w-5 h-4 sm:h-5 text-orange-600" />
          {aiPowered}
        </span>
        {afterAI}
      </>
    );
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        {/* Primary Gradient Orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-green-200/40 to-green-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-200/40 to-orange-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Secondary Accent Orbs */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-green-100/30 to-orange-100/30 rounded-full blur-2xl animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-orange-100/20 to-green-100/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Subtle Mesh Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-orange-50/50"></div>
        
        {/* Elegant Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-green-500 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen">
          
          {/* Left Content - Enhanced Design */}
          <div className={`lg:col-span-6 space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            
            {/* Enhanced Status Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100/80 to-orange-100/80 border border-green-200/50 backdrop-blur-sm shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-orange-500 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-green-500 to-orange-500 rounded-full"></div>
                </div>
                <GlobeAltIcon className="w-5 h-5 text-green-600" />
                <span className="text-gray-800 font-medium text-base">Live in 100+ Cities</span>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full border-2 border-white shadow-sm"></div>
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full border-2 border-white shadow-sm"></div>
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-orange-500 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-xs text-white font-bold">+</div>
                </div>
              </div>
            </div>

            {/* Enhanced Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-green-600 via-green-500 to-orange-600 bg-clip-text text-transparent animate-pulse">
                  FeedForward
                </span>
                <SparklesIcon className="inline-block ml-3 w-8 sm:w-10 h-8 sm:h-10 text-orange-500 animate-bounce" />
              </h1>
              
              <div className="relative">
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 leading-relaxed max-w-2xl min-h-[8rem] sm:min-h-[9rem] md:min-h-[10rem]">
                  <span className="inline-block">
                    {renderTypewriterText(typewriterText)}
                    {showCursor && <span className="animate-pulse text-green-600 font-bold ml-1">|</span>}
                  </span>
                </p>
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-green-500 via-green-400 to-orange-500 rounded-full shadow-lg"></div>
              </div>
            </div>

            {/* Enhanced Key Features */}
            <div className="space-y-4">
              {[
                { icon: <CheckCircleIcon className="w-5 h-5 text-green-600" />, text: "Free for everyone", bg: "from-green-50 to-green-100" },
                { icon: <MapPinIcon className="w-5 h-5 text-orange-600" />, text: "Real-time location tracking", bg: "from-orange-50 to-orange-100" },
                { icon: <ShieldCheckIcon className="w-5 h-5 text-green-700" />, text: "Community verified & safe", bg: "from-green-100 to-green-200" }
              ].map((feature, index) => (
                <div key={index} className={`flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r ${feature.bg} border border-green-200/50 shadow-sm hover:shadow-md transition-all duration-300`}>
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {feature.icon}
                  </div>
                  <span className="text-base font-medium text-gray-800">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Enhanced Interactive Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "50K+", label: "Meals", icon: <CakeIcon className="w-6 h-6" />, color: "from-green-500 to-green-700", bg: "from-green-50 to-green-100" },
                { number: "10K+", label: "Users", icon: <UsersIcon className="w-6 h-6" />, color: "from-orange-500 to-orange-700", bg: "from-orange-50 to-orange-100" },
                { number: "100+", label: "Cities", icon: <GlobeAltIcon className="w-6 h-6" />, color: "from-green-600 to-orange-600", bg: "from-green-100 to-orange-100" }
              ].map((stat, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className={`bg-gradient-to-br ${stat.bg} backdrop-blur-sm rounded-2xl p-4 border border-green-200/50 hover:border-green-300 hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                    <div className="text-center space-y-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-white mx-auto shadow-lg`}>
                        {stat.icon}
                      </div>
                      <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.number}
                      </div>
                      <div className="text-gray-700 text-sm font-medium">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="xl" 
                variant="gradient"
                className="group bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 shadow-xl hover:shadow-2xl"
              >
                <RocketLaunchIcon className="w-5 h-5 flex-shrink-0" />
                <span className="whitespace-nowrap">Start Journey</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
              </Button>
              
              <Button 
                size="xl" 
                variant="outline"
                className="group border-2 border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600"
              >
                <ArrowDownTrayIcon className="w-5 h-5 flex-shrink-0" />
                <span className="whitespace-nowrap">Get App</span>
                <div className="flex space-x-1 flex-shrink-0">
                  <div className="w-4 h-4 bg-current rounded group-hover:scale-110 transition-transform duration-200"></div>
                  <div className="w-4 h-4 bg-current rounded group-hover:scale-110 transition-transform duration-200"></div>
                </div>
              </Button>
            </div>
          </div>

          {/* Right Content - Enhanced Carousel */}
          <div className={`lg:col-span-6 relative transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            
            {/* Enhanced Carousel Container */}
            <div className="relative w-full h-96 md:h-[500px] lg:h-[550px] xl:h-[600px] rounded-3xl overflow-hidden mt-20 shadow-2xl">
              
              {/* Image Stack */}
              <div className="relative w-full h-full">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentSlide
                        ? 'opacity-100 scale-100 z-20'
                        : index === (currentSlide - 1 + carouselImages.length) % carouselImages.length
                        ? 'opacity-30 scale-95 -translate-x-4 z-10'
                        : index === (currentSlide + 1) % carouselImages.length
                        ? 'opacity-30 scale-95 translate-x-4 z-10'
                        : 'opacity-0 scale-90 z-0'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover rounded-3xl"
                      loading="lazy"
                    />
                    
                    {/* Enhanced Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-3xl"></div>
                    
                    {/* Enhanced Image Info */}
                    {index === currentSlide && (
                      <div className="absolute bottom-8 left-8 text-white space-y-3 animate-fade-in">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                            {image.icon}
                          </div>
                          <h3 className="text-3xl font-bold">{image.title}</h3>
                        </div>
                        <p className="text-gray-200 text-lg">{image.subtitle}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Enhanced Navigation Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 z-30 group shadow-lg"
              >
                <ChevronLeftIcon className="w-7 h-7 group-hover:-translate-x-1 transition-transform duration-200" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 z-30 group shadow-lg"
              >
                <ChevronRightIcon className="w-7 h-7 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              {/* Enhanced Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-gradient-to-r from-green-500 to-orange-500 scale-125 shadow-lg'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-green-200/50">
          <p className="text-center text-base text-gray-600 mb-6">Trusted by communities worldwide</p>
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-6">
            {[
              { icon: <CakeIcon className="w-6 h-6" />, label: "Local Restaurants" },
              { icon: <HeartIcon className="w-6 h-6" />, label: "Home Cooks" },
              { icon: <CakeIcon className="w-6 h-6" />, label: "NGOs" },
              { icon: <UsersIcon className="w-6 h-6" />, label: "Communities" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 text-gray-600 hover:text-green-600 transition-colors duration-200 p-3 rounded-lg hover:bg-green-50/50">
                <div className="p-2 bg-gradient-to-r from-green-100 to-orange-100 rounded-lg">
                  {item.icon}
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-green-500 to-orange-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
