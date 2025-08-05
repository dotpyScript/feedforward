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
    <section id="news" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-green-50 via-white to-orange-50 relative overflow-hidden">
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
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-green-100/80 to-orange-100/80 border border-green-200/50 text-green-800 text-sm font-medium mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-orange-500 rounded-full mr-2 animate-pulse"></div>
            Latest News
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Stay Updated with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-orange-600"> FeedForward</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Discover the latest stories, updates, and community highlights from our growing network 
            of food sharers and changemakers.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12 md:mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden border border-green-200/50 transition-all duration-300 hover:border-green-300/70">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]">
              <div className="relative order-2 lg:order-1">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title} 
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                  <span className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                    {featuredArticle.category}
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-500 mb-4">
                  <span>{featuredArticle.date}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{featuredArticle.readTime}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="text-green-600 font-medium">{featuredArticle.author}</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                  {featuredArticle.excerpt}
                </p>
                <button className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors duration-200 group self-start">
                  <span>Read Full Article</span>
                  <ChevronRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 md:mb-16">
          {newsArticles.slice(1, 7).map((article, index) => (
            <article key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden border border-green-200/50 transition-all duration-300 hover:border-green-300/70 hover:scale-[1.02]">
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500 mb-3">
                  <span>{article.date}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{article.readTime}</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-green-600 font-medium">{article.author}</span>
                  <button className="text-green-600 hover:text-green-700 font-medium text-sm transition-colors duration-200 group/btn flex items-center">
                    <span>Read</span>
                    <ChevronRightIcon className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-green-500 to-orange-500 rounded-2xl md:rounded-3xl p-8 sm:p-12 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Stay Connected</h3>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
              Get the latest updates, success stories, and community news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base"
              />
              <Button 
                variant="secondary" 
                size="md"
                className="bg-white text-gray-900 hover:bg-gray-100 border-0 px-6 sm:px-8 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-xs sm:text-sm opacity-75 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;