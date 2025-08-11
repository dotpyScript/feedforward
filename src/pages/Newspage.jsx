import { useState, useEffect } from 'react';
import { 
  MagnifyingGlassIcon, 
  FunnelIcon, 
  CalendarDaysIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  ArrowTrendingUpIcon,
  NewspaperIcon,
  ChevronRightIcon,
  ChevronLeftIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Newspage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [likedArticles, setLikedArticles] = useState(new Set());
  const articlesPerPage = 9;

  // Extended news data with more comprehensive information
  const newsData = [
    {
      id: 1,
      title: "Global Food Waste Reduction: FeedForward's International Expansion",
      excerpt: "Exploring how our platform is making a difference across continents with strategic partnerships and innovative solutions.",
      content: "FeedForward continues to expand its global footprint, now operating in over 150 cities worldwide. Our innovative approach to connecting food surplus with communities in need has proven successful across diverse cultural and economic landscapes.",
      category: "Global Impact",
      tags: ["expansion", "global", "partnerships", "sustainability"],
      author: "Dr. Sarah Chen",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616c527598d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      publishDate: "2024-03-20",
      readTime: "8 min read",
      views: 12500,
      likes: 847,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: "AI-Powered Food Matching: The Technology Behind Smart Distribution",
      excerpt: "Deep dive into the machine learning algorithms that optimize food distribution and predict community needs with 95% accuracy.",
      content: "Our proprietary AI system analyzes historical data, seasonal trends, and real-time community needs to create the most efficient food distribution network possible.",
      category: "Technology",
      tags: ["AI", "machine-learning", "innovation", "efficiency"],
      author: "Marcus Rodriguez",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      publishDate: "2024-03-18",
      readTime: "12 min read",
      views: 9800,
      likes: 623,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      trending: true
    },
    {
      id: 3,
      title: "Community Spotlight: How Local Heroes Are Changing Lives",
      excerpt: "Meet the incredible volunteers and community leaders who make FeedForward's mission possible in neighborhoods across America.",
      content: "From retired teachers organizing community kitchens to college students creating campus food pantries, discover the inspiring stories of everyday heroes making extraordinary differences.",
      category: "Community Stories",
      tags: ["volunteers", "heroes", "community", "inspiration"],
      author: "Dr. Amelia Thompson",
      authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      publishDate: "2024-03-16",
      readTime: "6 min read",
      views: 15200,
      likes: 1205,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      trending: false
    },
    {
      id: 4,
      title: "Sustainable Packaging Revolution: Eco-Friendly Food Sharing",
      excerpt: "How we're pioneering biodegradable and reusable packaging solutions to minimize environmental impact while maximizing food safety.",
      content: "Our commitment to sustainability extends beyond food waste reduction to include innovative packaging solutions that protect both food and the environment.",
      category: "Sustainability",
      tags: ["packaging", "environment", "innovation", "eco-friendly"],
      author: "Environmental Team",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      publishDate: "2024-03-14",
      readTime: "5 min read",
      views: 7600,
      likes: 432,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      trending: false
    },
    {
      id: 5,
      title: "Restaurant Partner Success: From Waste to Community Wealth",
      excerpt: "Discover how our restaurant partners are turning food surplus into community assets while reducing costs and environmental impact.",
      content: "Major restaurant chains and local eateries share their success stories of implementing FeedForward solutions, creating win-win scenarios for business and community.",
      category: "Business Partnerships",
      tags: ["restaurants", "partnerships", "success", "business"],
      author: "Partnership Team",
      authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      publishDate: "2024-03-12",
      readTime: "7 min read",
      views: 11300,
      likes: 789,
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      trending: true
    },
    {
      id: 6,
      title: "Food Safety Standards: Ensuring Quality in Every Shared Meal",
      excerpt: "Comprehensive overview of our rigorous food safety protocols and how we maintain the highest standards across our network.",
      content: "Safety is paramount in our food sharing ecosystem. Learn about our comprehensive protocols, training programs, and quality assurance measures.",
      category: "Safety & Guidelines",
      tags: ["safety", "guidelines", "quality", "standards"],
      author: "Safety Team",
      authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      publishDate: "2024-03-10",
      readTime: "10 min read",
      views: 6800,
      likes: 445,
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      trending: false
    },
    {
      id: 7,
      title: "The Economics of Food Sharing: Building Sustainable Communities",
      excerpt: "Analyzing the economic impact of food sharing platforms on local communities and the broader implications for social welfare.",
      content: "Economic research reveals the profound impact of food sharing on community resilience, local economies, and social cohesion.",
      category: "Research & Analysis",
      tags: ["economics", "research", "community", "analysis"],
      author: "Research Team",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      publishDate: "2024-03-08",
      readTime: "15 min read",
      views: 5400,
      likes: 367,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      trending: false
    },
    {
      id: 8,
      title: "Mobile App Evolution: New Features for Enhanced User Experience",
      excerpt: "Explore the latest app updates including real-time tracking, enhanced notifications, and improved accessibility features.",
      content: "Our mobile app continues to evolve with user feedback, incorporating cutting-edge features that make food sharing more accessible and intuitive than ever.",
      category: "Technology",
      tags: ["mobile", "app", "features", "UX"],
      author: "David Kim",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      publishDate: "2024-03-06",
      readTime: "4 min read",
      views: 8900,
      likes: 612,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      trending: true
    },
    {
      id: 9,
      title: "Youth Engagement: Empowering the Next Generation of Food Activists",
      excerpt: "How schools and youth organizations are integrating food sharing education into curricula and creating lasting social impact.",
      content: "Educational programs and youth initiatives are creating a new generation of environmentally conscious citizens who understand the importance of food sustainability.",
      category: "Education & Youth",
      tags: ["youth", "education", "schools", "activism"],
      author: "Education Team",
      authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      publishDate: "2024-03-04",
      readTime: "6 min read",
      views: 7200,
      likes: 523,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      trending: false
    },
    {
      id: 10,
      title: "Policy Impact: How FeedForward is Influencing Food Waste Legislation",
      excerpt: "Our role in shaping policy discussions around food waste reduction and the legislative changes happening nationwide.",
      content: "FeedForward's data and insights are helping inform policy makers as they craft legislation to address food waste at the systemic level.",
      category: "Policy & Advocacy",
      tags: ["policy", "legislation", "advocacy", "government"],
      author: "Policy Team",
      authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      publishDate: "2024-03-02",
      readTime: "9 min read",
      views: 4300,
      likes: 298,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      trending: false
    },
    {
      id: 11,
      title: "International Case Study: FeedForward's Success in Developing Nations",
      excerpt: "Examining our impact in emerging markets and how food sharing platforms can address hunger in resource-constrained environments.",
      content: "Success stories from developing nations demonstrate the universal applicability of food sharing solutions in addressing hunger and food insecurity.",
      category: "Global Impact",
      tags: ["international", "developing-nations", "case-study", "impact"],
      author: "Global Team",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616c527598d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      publishDate: "2024-02-28",
      readTime: "11 min read",
      views: 6100,
      likes: 445,
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      trending: false
    },
    {
      id: 12,
      title: "Data-Driven Insights: Understanding Food Waste Patterns",
      excerpt: "Comprehensive analysis of food waste data revealing surprising patterns and opportunities for intervention across different sectors.",
      content: "Our data analytics reveal fascinating insights about food waste patterns, helping communities and businesses make more informed decisions.",
      category: "Research & Analysis",
      tags: ["data", "analytics", "patterns", "insights"],
      author: "Lisa Zhang",
      authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      publishDate: "2024-02-26",
      readTime: "13 min read",
      views: 5800,
      likes: 401,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      trending: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Articles', count: newsData.length },
    { id: 'Global Impact', name: 'Global Impact', count: newsData.filter(item => item.category === 'Global Impact').length },
    { id: 'Technology', name: 'Technology', count: newsData.filter(item => item.category === 'Technology').length },
    { id: 'Community Stories', name: 'Community', count: newsData.filter(item => item.category === 'Community Stories').length },
    { id: 'Sustainability', name: 'Sustainability', count: newsData.filter(item => item.category === 'Sustainability').length },
    { id: 'Business Partnerships', name: 'Business', count: newsData.filter(item => item.category === 'Business Partnerships').length },
    { id: 'Safety & Guidelines', name: 'Safety', count: newsData.filter(item => item.category === 'Safety & Guidelines').length },
    { id: 'Research & Analysis', name: 'Research', count: newsData.filter(item => item.category === 'Research & Analysis').length },
  ];

  // Filter articles based on search and category
  const filteredArticles = newsData.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  // Trending articles
  const trendingArticles = newsData.filter(article => article.trending).slice(0, 5);

  // Featured articles
  const featuredArticles = newsData.filter(article => article.featured);

  const handleLike = (articleId) => {
    setLikedArticles(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(articleId)) {
        newLiked.delete(articleId);
      } else {
        newLiked.add(articleId);
      }
      return newLiked;
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-8 bg-gradient-to-br from-gray-50 via-white to-green-50/30 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-orange-50/30"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:75px_75px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100/80 to-orange-100/80 border border-green-200/50 text-green-800 text-sm font-medium mb-6">
              <NewspaperIcon className="w-5 h-5 mr-2" />
              FeedForward News
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Latest News & Updates
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest developments, success stories, and insights from our community.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filter Bar */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-green-200/50">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Search Input */}
                <div className="relative flex-1">
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all duration-200"
                  />
                </div>
                
                {/* Category Filter */}
                <div className="relative">
                  <FunnelIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-12 pr-8 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all duration-200 bg-white appearance-none cursor-pointer min-w-[200px]"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Results Info */}
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <span>
                  Showing {currentArticles.length} of {filteredArticles.length} articles
                  {searchTerm && ` for "${searchTerm}"`}
                  {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
                </span>
                {(searchTerm || selectedCategory !== 'all') && (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            </div>

            {/* Featured Articles Section */}
            {searchTerm === '' && selectedCategory === 'all' && (
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-orange-500 rounded-full mr-4"></div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Stories</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {featuredArticles.slice(0, 2).map((article) => (
                    <article key={article.id} className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-green-200/50 hover:border-green-300/70 transition-all duration-300 hover:shadow-xl">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                            Featured
                          </span>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <button
                            onClick={() => handleLike(article.id)}
                            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                          >
                            {likedArticles.has(article.id) ? (
                              <HeartSolidIcon className="w-5 h-5 text-red-500" />
                            ) : (
                              <HeartIcon className="w-5 h-5 text-gray-600" />
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                            {article.category}
                          </span>
                          <div className="flex items-center">
                            <CalendarDaysIcon className="w-4 h-4 mr-1" />
                            {formatDate(article.publishDate)}
                          </div>
                          <div className="flex items-center">
                            <ClockIcon className="w-4 h-4 mr-1" />
                            {article.readTime}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <img 
                              src={article.authorImage} 
                              alt={article.author}
                              className="w-8 h-8 rounded-full mr-3"
                            />
                            <span className="text-sm font-medium text-gray-900">{article.author}</span>
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <EyeIcon className="w-4 h-4 mr-1" />
                              {article.views.toLocaleString()}
                            </div>
                            <div className="flex items-center">
                              <HeartIcon className="w-4 h-4 mr-1" />
                              {article.likes}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* Articles Grid */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-orange-500 rounded-full mr-4"></div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.name}
                  </h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentArticles.map((article) => (
                  <article key={article.id} className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-green-200/50 hover:border-green-300/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <div className="absolute top-3 left-3">
                        <span className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {article.category}
                        </span>
                      </div>
                      {article.trending && (
                        <div className="absolute top-3 right-3">
                          <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                            <ArrowTrendingUpIcon className="w-3 h-3 mr-1" />
                            Trending
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <div className="flex items-center">
                          <CalendarDaysIcon className="w-3 h-3 mr-1" />
                          {formatDate(article.publishDate)}
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="w-3 h-3 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img 
                            src={article.authorImage} 
                            alt={article.author}
                            className="w-6 h-6 rounded-full mr-2"
                          />
                          <span className="text-xs font-medium text-gray-900">{article.author}</span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleLike(article.id)}
                            className="flex items-center text-gray-500 hover:text-red-500 transition-colors duration-200"
                          >
                            {likedArticles.has(article.id) ? (
                              <HeartSolidIcon className="w-4 h-4 text-red-500" />
                            ) : (
                              <HeartIcon className="w-4 h-4" />
                            )}
                            <span className="text-xs ml-1">{article.likes}</span>
                          </button>
                          
                          <button className="flex items-center text-gray-500 hover:text-green-500 transition-colors duration-200">
                            <ShareIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-1">
                        {article.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mb-8">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="flex items-center px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-green-50 hover:border-green-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeftIcon className="w-4 h-4 mr-1" />
                  Previous
                </button>
                
                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                        currentPage === page
                          ? 'bg-gradient-to-r from-green-500 to-orange-500 text-white'
                          : 'border border-gray-200 text-gray-600 hover:bg-green-50 hover:border-green-300'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="flex items-center px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-green-50 hover:border-green-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <ChevronRightIcon className="w-4 h-4 ml-1" />
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Trending Articles */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-green-200/50">
              <div className="flex items-center mb-6">
                <ArrowTrendingUpIcon className="w-6 h-6 text-orange-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Trending Now</h3>
              </div>
              
              <div className="space-y-4">
                {trendingArticles.map((article, index) => (
                  <div key={article.id} className="flex items-start space-x-3 group cursor-pointer">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-200 line-clamp-2 leading-tight">
                        {article.title}
                      </h4>
                      <div className="flex items-center mt-2 text-xs text-gray-500">
                        <EyeIcon className="w-3 h-3 mr-1" />
                        {article.views.toLocaleString()} views
                        <span className="mx-2">•</span>
                        {article.readTime}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-green-200/50">
              <div className="flex items-center mb-6">
                <TagIcon className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Categories</h3>
              </div>
              
              <div className="space-y-2">
                {categories.slice(1).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-green-100 to-orange-100 border border-green-200 text-green-800'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      selectedCategory === category.id
                        ? 'bg-green-200 text-green-800'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-green-500 to-orange-500 rounded-2xl p-6 text-white">
              <div className="text-center">
                <NewspaperIcon className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="text-sm opacity-90 mb-6 leading-relaxed">
                  Get the latest articles and updates delivered directly to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="w-full bg-white text-gray-900 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    Subscribe Now
                  </button>
                </div>
                <p className="text-xs opacity-75 mt-3">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Newspage;
