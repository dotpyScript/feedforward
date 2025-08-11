import { ArrowRightIcon } from '@heroicons/react/24/outline';
import CountUp from 'react-countup';
import Button from './Button';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-green-500 to-orange-500 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full opacity-5 animate-ping" style={{animationDelay: '1s'}}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400/20 to-green-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-orange-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 via-transparent to-orange-500/30"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main CTA */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Ready to Change the World?
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-white opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join thousands of people who are already making a difference. 
              Every meal shared is a life touched, every connection made is a community strengthened.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              variant="secondary" 
              size="xl"
              className="bg-white text-gray-900 hover:bg-gray-100 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Sharing Food
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Find Food Nearby
            </Button>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
            {[
              { number: 50000, format: "K", label: "Meals Shared" },
              { number: 10000, format: "K", label: "Active Users" },
              { number: 100, suffix: "+", label: "Cities" },
              { number: 4.9, decimals: 1, suffix: "", label: "User Rating", customRender: true }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.format === "K" ? (
                    <CountUp
                      start={0}
                      end={stat.number / 1000}
                      duration={2.5}
                      suffix="K+"
                      enableScrollSpy={true}
                      scrollSpyOnce={true}
                    />
                  ) : stat.customRender ? (
                    <div className="flex items-center justify-center space-x-2">
                      <CountUp
                        start={0}
                        end={stat.number}
                        duration={2.5}
                        decimals={stat.decimals || 0}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                      />
                      <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
            </div>
                  ) : (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2.5}
                      decimals={stat.decimals || 0}
                      suffix={stat.suffix || ""}
                      enableScrollSpy={true}
                      scrollSpyOnce={true}
                    />
                  )}
            </div>
                <div className="text-white opacity-80 text-sm md:text-base">{stat.label}</div>
            </div>
            ))}
          </div>

          {/* Enhanced Download App Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-3xl mx-auto border border-white/20 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Get the FeedForward App</h3>
            <p className="text-white opacity-90 mb-8 text-lg">
              Download our mobile app for the best experience. Available on iOS and Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-black text-white hover:bg-gray-800 border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-6 h-6 mr-3 bg-white rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                App Store
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-black text-white hover:bg-gray-800 border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-6 h-6 mr-3 bg-white rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                Google Play
              </Button>
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-12">
            <p className="text-white opacity-75 text-lg md:text-xl">
              Together, we can make food a global right for all living beings.
            </p>
            <div className="flex items-center justify-center mt-6 space-x-2 group cursor-pointer">
              <span className="text-white opacity-75 group-hover:opacity-100 transition-opacity duration-300">Join the movement</span>
              <ArrowRightIcon className="w-5 h-5 text-white opacity-75 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 