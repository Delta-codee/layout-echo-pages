
import Layout from '@/components/Layout';
import { Search, Plus, FileText, Calendar, Clock, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useMemo } from 'react';

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Combined mock data for all blog posts
  const allBlogs = [
    // Current/In Progress
    {
      id: 1,
      title: 'Advanced React Patterns',
      description: 'Deep dive into compound components and render props',
      date: '2024-01-08',
      category: 'Tutorial',
      estimatedReadTime: '12 min read',
      status: 'draft',
      progress: 70,
      wordCount: 1250,
      targetWords: 1800,
      author: 'John Doe',
      views: 0,
      likes: 0
    },
    {
      id: 2,
      title: 'My DevOps Journey',
      description: 'Learning Docker and Kubernetes in production',
      date: '2024-01-11',
      category: 'Experience',
      estimatedReadTime: '7 min read',
      status: 'draft',
      progress: 45,
      wordCount: 800,
      targetWords: 1500,
      author: 'Jane Smith',
      views: 0,
      likes: 0
    },
    // Upcoming
    {
      id: 3,
      title: 'React Best Practices 2024',
      description: 'Comprehensive guide to modern React development patterns',
      date: '2024-01-25',
      category: 'Tutorial',
      estimatedReadTime: '8 min read',
      status: 'scheduled',
      author: 'Mike Johnson',
      views: 0,
      likes: 0
    },
    {
      id: 4,
      title: 'My Journey with TypeScript',
      description: 'Personal experience transitioning from JavaScript to TypeScript',
      date: '2024-01-30',
      category: 'Experience',
      estimatedReadTime: '5 min read',
      status: 'scheduled',
      author: 'Sarah Wilson',
      views: 0,
      likes: 0
    },
    // Published
    {
      id: 5,
      title: 'Building Responsive Layouts',
      description: 'Tips and tricks for creating mobile-first designs',
      date: '2023-12-20',
      category: 'Tutorial',
      views: 1250,
      likes: 89,
      readTime: '6 min read',
      status: 'published',
      author: 'Alex Brown'
    },
    {
      id: 6,
      title: 'Debugging JavaScript Like a Pro',
      description: 'Advanced debugging techniques and tools',
      date: '2023-12-18',
      category: 'Tutorial',
      views: 850,
      likes: 67,
      readTime: '4 min read',
      status: 'published',
      author: 'Emma Davis'
    },
    {
      id: 7,
      title: 'CSS Grid vs Flexbox: A Complete Guide',
      description: 'Understanding when to use Grid vs Flexbox in modern web development',
      date: '2023-12-15',
      category: 'Tutorial',
      views: 2100,
      likes: 156,
      readTime: '10 min read',
      status: 'published',
      author: 'Chris Lee'
    },
    {
      id: 8,
      title: 'My First Year as a Frontend Developer',
      description: 'Lessons learned, challenges faced, and growth achieved',
      date: '2023-12-10',
      category: 'Experience',
      views: 1800,
      likes: 234,
      readTime: '8 min read',
      status: 'published',
      author: 'Lisa Garcia'
    },
    {
      id: 9,
      title: 'API Integration Best Practices',
      description: 'How to handle REST APIs efficiently in React applications',
      date: '2023-12-05',
      category: 'Tutorial',
      views: 1650,
      likes: 112,
      readTime: '9 min read',
      status: 'published',
      author: 'David Kim'
    },
    {
      id: 10,
      title: 'State Management in React: Context vs Redux',
      description: 'Comparing different state management solutions and when to use each',
      date: '2023-12-01',
      category: 'Tutorial',
      views: 2800,
      likes: 298,
      readTime: '15 min read',
      status: 'published',
      author: 'Maria Rodriguez'
    }
  ];

  // Filter blogs based on search query
  const filteredBlogs = useMemo(() => {
    if (!searchQuery.trim()) return allBlogs;
    
    return allBlogs.filter(blog =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'draft':
        return <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">Draft</span>;
      case 'scheduled':
        return <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Scheduled</span>;
      case 'published':
        return <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Published</span>;
      default:
        return null;
    }
  };

  const getActionButton = (blog: any) => {
    switch (blog.status) {
      case 'draft':
        return (
          <Button className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 text-white">
            Continue Writing
          </Button>
        );
      case 'scheduled':
        return (
          <Button className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 text-white">
            Edit Draft
          </Button>
        );
      case 'published':
        return (
          <Button variant="outline" className="border-[#2B2B2B] text-[#A1A1A1] hover:text-[#F1F1F1]">
            View Post
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="p-8 bg-[#0B0B0B] min-h-screen">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-[#F1F1F1]">Blogs</h1>
          </div>
          <p className="text-[#A1A1A1]">Discover and share knowledge through blog posts from our community.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#A1A1A1] w-5 h-5" />
            <input
              type="text"
              placeholder="Search blogs by title, description, category, or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#131313] border border-[#2B2B2B] rounded-lg pl-12 pr-4 py-3 text-[#F1F1F1] placeholder-[#A1A1A1] focus:outline-none focus:border-[#E3583D]"
            />
          </div>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-[#A1A1A1] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#F1F1F1] mb-2">No blogs found</h3>
            <p className="text-[#A1A1A1]">Try adjusting your search query or browse all available blogs.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBlogs.map((blog) => (
              <div key={blog.id} className="bg-[#131313] border border-[#2B2B2B] rounded-lg p-6 hover:border-[#E3583D]/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[#F1F1F1]">{blog.title}</h3>
                      {getStatusBadge(blog.status)}
                    </div>
                    <p className="text-[#A1A1A1] mb-3">{blog.description}</p>
                    <div className="flex items-center gap-4 text-sm mb-3">
                      <span className="bg-[#E3583D]/20 text-[#E3583D] px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                      <span className="text-[#A1A1A1] flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {blog.status === 'scheduled' ? 'Due: ' : blog.status === 'draft' ? 'Started: ' : 'Published: '}
                        {blog.date}
                      </span>
                      <span className="text-[#A1A1A1] flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blog.estimatedReadTime || blog.readTime}
                      </span>
                      <span className="text-[#A1A1A1]">by {blog.author}</span>
                    </div>
                    
                    {blog.status === 'draft' && (
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-[#2B2B2B] rounded-full h-2 w-32">
                            <div 
                              className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] h-2 rounded-full"
                              style={{ width: `${blog.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-[#A1A1A1]">{blog.progress}%</span>
                        </div>
                        <span className="text-sm text-[#A1A1A1]">
                          {blog.wordCount}/{blog.targetWords} words
                        </span>
                      </div>
                    )}

                    {blog.status === 'published' && (
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-blue-400 flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {blog.views} views
                        </span>
                        <span className="text-red-400 flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {blog.likes} likes
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="ml-4">
                    {getActionButton(blog)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <button className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 rounded-full flex items-center justify-center shadow-lg transition-colors">
          <Plus className="w-6 h-6 text-white" />
        </button>
      </div>
    </Layout>
  );
};

export default Blogs;
