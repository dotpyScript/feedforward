import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Button from './Button';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-green-500 to-orange-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full opacity-10"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full opacity-5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main CTA */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Change the World?
            </h2>
            <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of people who are already making a difference. 
              Every meal shared is a life touched, every connection made is a community strengthened.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              variant="secondary" 
              size="xl"
              className="bg-white text-gray-900 hover:bg-gray-100 border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Sharing Food
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900"
            >
              Find Food Nearby
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-white opacity-80 text-sm">Meals Shared</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-white opacity-80 text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-white opacity-80 text-sm">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4.9★</div>
              <div className="text-white opacity-80 text-sm">User Rating</div>
            </div>
          </div>

          {/* Download App Section */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Get the FeedForward App</h3>
            <p className="text-white opacity-90 mb-6">
              Download our mobile app for the best experience. Available on iOS and Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-black text-white hover:bg-gray-800 border-0"
              >
                <div className="w-6 h-6 mr-2 bg-white rounded flex items-center justify-center">
                  <span className="text-black text-xs font-bold">📱</span>
                </div>
                App Store
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-black text-white hover:bg-gray-800 border-0"
              >
                <div className="w-6 h-6 mr-2 bg-white rounded flex items-center justify-center">
                  <span className="text-black text-xs font-bold">🤖</span>
                </div>
                Google Play
              </Button>
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-12">
            <p className="text-white opacity-75 text-lg">
              Together, we can make food a global right for all living beings.
            </p>
            <div className="flex items-center justify-center mt-4 space-x-2">
              <span className="text-white opacity-75">Join the movement</span>
              <ArrowRightIcon className="w-5 h-5 text-white opacity-75" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 