
import Layout from '@/components/Layout';
import { Search, Plus, FileText, Calendar, Clock, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Blogs = () => {
  const [activeTab, setActiveTab] = useState<'current' | 'upcoming' | 'past'>('current');

  // Mock data for demonstration
  const currentBlogs = [
    {
      id: 1,
      title: 'Advanced React Patterns',
      description: 'Deep dive into compound components and render props',
      startedDate: '2024-01-08',
      category: 'Tutorial',
      estimatedReadTime: '12 min read',
      progress: 70,
      wordCount: 1250,
      targetWords: 1800
    },
    {
      id: 2,
      title: 'My DevOps Journey',
      description: 'Learning Docker and Kubernetes in production',
      startedDate: '2024-01-11',
      category: 'Experience',
      estimatedReadTime: '7 min read',
      progress: 45,
      wordCount: 800,
      targetWords: 1500
    }
  ];

  const upcomingBlogs = [
    {
      id: 3,
      title: 'React Best Practices 2024',
      description: 'Comprehensive guide to modern React development patterns',
      dueDate: '2024-01-25',
      category: 'Tutorial',
      estimatedReadTime: '8 min read'
    },
    {
      id: 4,
      title: 'My Journey with TypeScript',
      description: 'Personal experience transitioning from JavaScript to TypeScript',
      dueDate: '2024-01-30',
      category: 'Experience',
      estimatedReadTime: '5 min read'
    }
  ];

  const pastBlogs = [
    {
      id: 5,
      title: 'Building Responsive Layouts',
      description: 'Tips and tricks for creating mobile-first designs',
      publishedDate: '2023-12-20',
      category: 'Tutorial',
      views: 1250,
      likes: 89,
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Debugging JavaScript Like a Pro',
      description: 'Advanced debugging techniques and tools',
      publishedDate: '2023-12-18',
      category: 'Tutorial',
      views: 850,
      likes: 67,
      readTime: '4 min read'
    }
  ];

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
          <p className="text-[#A1A1A1]">Share your knowledge and learn from others through blog posts.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#A1A1A1] w-5 h-5" />
            <input
              type="text"
              placeholder="Search Blogs"
              className="w-full bg-[#131313] border border-[#2B2B2B] rounded-lg pl-12 pr-4 py-3 text-[#F1F1F1] placeholder-[#A1A1A1] focus:outline-none focus:border-[#E3583D]"
            />
          </div>
          <select className="bg-[#131313] border border-[#2B2B2B] rounded-lg px-4 py-3 text-[#F1F1F1] focus:outline-none focus:border-[#E3583D] min-w-[150px]">
            <option>All Categories</option>
            <option>Tutorial</option>
            <option>Experience</option>
            <option>Review</option>
          </select>
        </div>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('current')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'current'
                ? 'bg-gradient-to-r from-[#E3583D] to-[#E4593D] text-white'
                : 'text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#131313]'
            }`}
          >
            <Play className="w-4 h-4 inline mr-2" />
            Current ({currentBlogs.length})
          </button>
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'upcoming'
                ? 'bg-gradient-to-r from-[#E3583D] to-[#E4593D] text-white'
                : 'text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#131313]'
            }`}
          >
            <Calendar className="w-4 h-4 inline mr-2" />
            Upcoming ({upcomingBlogs.length})
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'past'
                ? 'bg-gradient-to-r from-[#E3583D] to-[#E4593D] text-white'
                : 'text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#131313]'
            }`}
          >
            <Clock className="w-4 h-4 inline mr-2" />
            Past ({pastBlogs.length})
          </button>
        </div>

        {activeTab === 'current' && (
          <div className="space-y-4">
            {currentBlogs.map((blog) => (
              <div key={blog.id} className="bg-[#131313] border border-[#2B2B2B] rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#F1F1F1] mb-2">{blog.title}</h3>
                    <p className="text-[#A1A1A1] mb-3">{blog.description}</p>
                    <div className="flex items-center gap-4 text-sm mb-3">
                      <span className="bg-[#E3583D]/20 text-[#E3583D] px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                      <span className="text-[#A1A1A1]">Started: {blog.startedDate}</span>
                      <span className="text-[#A1A1A1]">{blog.estimatedReadTime}</span>
                    </div>
                    <div className="flex items-center gap-4">
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
                  </div>
                  <Button className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 text-white">
                    Continue Writing
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'upcoming' && (
          <div className="space-y-4">
            {upcomingBlogs.map((blog) => (
              <div key={blog.id} className="bg-[#131313] border border-[#2B2B2B] rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#F1F1F1] mb-2">{blog.title}</h3>
                    <p className="text-[#A1A1A1] mb-3">{blog.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="bg-[#E3583D]/20 text-[#E3583D] px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                      <span className="text-[#A1A1A1]">Due: {blog.dueDate}</span>
                      <span className="text-[#A1A1A1]">{blog.estimatedReadTime}</span>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 text-white">
                    Start Writing
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'past' && (
          <div className="space-y-4">
            {pastBlogs.map((blog) => (
              <div key={blog.id} className="bg-[#131313] border border-[#2B2B2B] rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#F1F1F1] mb-2">{blog.title}</h3>
                    <p className="text-[#A1A1A1] mb-3">{blog.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="bg-[#E3583D]/20 text-[#E3583D] px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                      <span className="text-[#A1A1A1]">Published: {blog.publishedDate}</span>
                      <span className="text-[#A1A1A1]">{blog.readTime}</span>
                      <span className="text-blue-400">{blog.views} views</span>
                      <span className="text-red-400">❤️ {blog.likes}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="border-[#2B2B2B] text-[#A1A1A1] hover:text-[#F1F1F1]">
                    View Post
                  </Button>
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
