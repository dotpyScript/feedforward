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
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            Latest News
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stay Updated with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-600"> FeedForward</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest stories, updates, and community highlights from our growing network 
            of food sharers and changemakers.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-green-50 to-orange-50 rounded-3xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
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
                  <span>By {featuredArticle.author}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <button className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors duration-200">
                  Read Full Article
                  <ChevronRightIcon className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.slice(1).map((article, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
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
                <h4 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                  {article.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {article.author}</span>
                  <button className="text-green-600 hover:text-green-700 font-medium text-sm transition-colors duration-200">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500 to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-lg mb-6 opacity-90">
              Get the latest updates, success stories, and community news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button 
                variant="secondary" 
                size="md"
                className="bg-white text-gray-900 hover:bg-gray-100 border-0"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News; 