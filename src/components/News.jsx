import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Button from './Button';

const News = () => {
  const newsArticles = [
    {
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Community",
      title: "FeedForward Reaches 100 Cities Milestone",
      excerpt: "Our platform has now connected communities in 100 cities across the globe, making food sharing accessible to millions more people.",
      date: "March 15, 2024",
      readTime: "3 min read",
      author: "Sarah Johnson"
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Success Story",
      title: "From Home Cook to Community Leader: Maria's Journey",
      excerpt: "How one woman's passion for cooking turned into a thriving community business serving authentic Cuban cuisine.",
      date: "March 12, 2024",
      readTime: "5 min read",
      author: "David Chen"
    },
    {
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Partnership",
      title: "New Partnership with Major Restaurant Chains",
      excerpt: "FeedForward announces strategic partnerships with leading restaurant chains to reduce food waste and feed more families.",
      date: "March 10, 2024",
      readTime: "4 min read",
      author: "Emily Rodriguez"
    },
    {
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Technology",
      title: "New App Features Enhance User Experience",
      excerpt: "Latest app update includes real-time notifications, improved search, and enhanced safety features for our community.",
      date: "March 8, 2024",
      readTime: "2 min read",
      author: "Tech Team"
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Impact",
      title: "50,000 Meals Milestone: Community Celebration",
      excerpt: "Our community celebrates reaching 50,000 shared meals, marking a significant milestone in our mission to end hunger.",
      date: "March 5, 2024",
      readTime: "4 min read",
      author: "Community Team"
    },
    {
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Education",
      title: "Food Safety Guidelines: Best Practices for Sharing",
      excerpt: "Essential guidelines and best practices for safely sharing food in your community while maintaining quality standards.",
      date: "March 3, 2024",
      readTime: "6 min read",
      author: "Safety Team"
    }
  ];

  const featuredArticle = newsArticles[0];

  return (
    <section id="news" className="py-20 bg-gradient-to-br from-green-50 via-white to-orange-50 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-green-200/30 to-green-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-orange-200/30 to-orange-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-orange-50/30"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:75px_75px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100/80 to-orange-100/80 border border-green-200/50 text-green-800 text-sm font-medium mb-6 shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-orange-500 rounded-full mr-2 animate-pulse"></div>
            Latest News
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Stay Updated with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-orange-600"> FeedForward</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the latest stories, updates, and community highlights from our growing network 
            of food sharers and changemakers.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-green-50/80 to-orange-50/80 rounded-3xl overflow-hidden shadow-2xl border border-green-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    {featuredArticle.category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                  <span>•</span>
                  <span>{featuredArticle.author}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <button className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors duration-200 group">
                  Read Full Article
                  <ChevronRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsArticles.slice(1, 7).map((article, index) => (
            <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-green-200/50">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {article.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.author}</span>
                  <button className="text-green-600 hover:text-green-700 font-medium text-sm transition-colors duration-200 group">
                    Read More
                    <ChevronRightIcon className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-green-500 to-orange-500 rounded-3xl p-12 text-white shadow-2xl">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected</h3>
            <p className="text-xl mb-8 opacity-90">
              Get the latest updates, success stories, and community news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 border-0 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News; 