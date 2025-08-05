import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Home Cook",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      quote: "FeedForward helped me turn my passion for cooking into a way to help my community. I've shared over 500 meals and made so many new friends!",
      rating: 5,
      impact: "500+ meals shared"
    },
    {
      name: "David L.",
      role: "Community Member",
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      quote: "As someone who was struggling, FeedForward provided not just food, but hope and a sense of belonging. This community is truly amazing.",
      rating: 5,
      impact: "150+ meals received"
    },
    {
      name: "Maria R.",
      role: "NGO Partner",
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      quote: "Partnering with FeedForward has allowed us to reach more families in need. The platform's efficiency and community focus are unmatched.",
      rating: 5,
      impact: "2000+ families helped"
    },
    {
      name: "James K.",
      role: "Restaurant Owner",
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      quote: "Through FeedForward, we've reduced our food waste by 80% while feeding hundreds of people. It's a win-win for everyone involved.",
      rating: 5,
      impact: "80% waste reduction"
    }
  ];

  // Simple transition function for immediate changes
  const changeTestimonial = (newIndex) => {
    if (newIndex === currentTestimonial) return;
    setCurrentTestimonial(newIndex);
  };

  // Auto-advance carousel with animation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 transition-all duration-300 ${
          i < rating ? 'text-yellow-400 scale-110' : 'text-gray-300'
        } animate-pulse`}
        fill="currentColor"
        viewBox="0 0 20 20"
        style={{
          animationDelay: `${i * 100}ms`
        }}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="mb-20">
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">What Our Community Says</h3>
      
      <div className="relative max-w-5xl mx-auto">
        {/* Carousel Container */}
        <div className="bg-gradient-to-br from-white/90 to-green-50/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-200/50 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500">
          
          {/* Enhanced Background Decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-green-200/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-100/10 to-orange-100/10 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
          
          {/* Testimonial Content with Enhanced Animations */}
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6 transition-all duration-500 opacity-100 transform scale-100">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed mb-8 italic transition-all duration-500 transform opacity-100 translate-y-0 scale-100">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 transition-all duration-500 transform opacity-100 translate-y-0 scale-100">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 text-xl mb-1">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-green-600 font-semibold">{testimonials[currentTestimonial].role}</p>
                  <p className="text-gray-500 text-sm flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105">
                {testimonials[currentTestimonial].impact}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation Buttons */}
        <button
          onClick={prevTestimonial}

          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110  group"
        >
          <ChevronLeftIcon className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-200" />
        </button>
        
        <button
          onClick={nextTestimonial}

          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110  group"
        >
          <ChevronRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
        </button>

        {/* Enhanced Progress Bar */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-orange-500 rounded-full transition-all duration-6000 ease-linear"
            style={{
              width: '100%',
              transition: 'width 6s linear'
            }}
          />
        </div>

        {/* Enhanced Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
    
              className={`relative transition-all duration-300 ${
                index === currentTestimonial
                  ? 'w-8 h-3 bg-gradient-to-r from-green-500 to-orange-500 rounded-full'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full hover:scale-125'
              } `}
            >
              {index === currentTestimonial && (
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-orange-400 rounded-full animate-pulse opacity-75" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;