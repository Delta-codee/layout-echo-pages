
import Layout from '@/components/Layout';
import { Search, FileText } from 'lucide-react';
import { useState, useMemo } from 'react';
import BlogCreator from '@/components/BlogCreator';
import BlogCard from '@/components/BlogCard';

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for demonstration - will be replaced with Supabase data
  const allBlogs = [
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      content: '# React Hooks Revolution\n\nReact Hooks have **completely transformed** how we write React components. Here\'s what you need to know:\n\n## Why Hooks Matter\n\nHooks allow us to use state and other React features without writing a class component.',
      author: {
        name: 'Sarah Johnson',
        username: 'sarahdev',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b668f5c4?w=400',
        followers: 1250,
        totalBlogs: 23
      },
      publishedAt: '2h',
      likes: 156,
      comments: 24,
      views: 892,
      isLiked: false
    },
    {
      id: 2,
      title: 'The Future of Web Development',
      content: '## Web Development in 2024\n\nThe landscape is changing rapidly. Here are the **key trends** to watch:\n\n### 1. AI Integration\n### 2. Performance Optimization\n### 3. Accessibility First',
      author: {
        name: 'Alex Chen',
        username: 'alexcodes',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
        followers: 3200,
        totalBlogs: 45
      },
      publishedAt: '5h',
      likes: 234,
      comments: 67,
      views: 1420,
      isLiked: true
    },
    {
      id: 3,
      title: 'TypeScript Best Practices',
      content: '# TypeScript Best Practices\n\nAfter working with TypeScript for **3 years**, here are my top recommendations:\n\n## 1. Always Use Strict Mode\n## 2. Leverage Union Types\n## 3. Create Reusable Interfaces',
      author: {
        name: 'Mike Rodriguez',
        username: 'miketech',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        followers: 890,
        totalBlogs: 12
      },
      publishedAt: '1d',
      likes: 89,
      comments: 15,
      views: 567,
      isLiked: false
    }
  ];

  const filteredBlogs = useMemo(() => {
    if (!searchQuery.trim()) return allBlogs;
    
    return allBlogs.filter(blog =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <Layout>
      <div className="p-8 bg-[#0B0B0B] min-h-screen">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-[#F1F1F1]">Blogs</h1>
            </div>
            <p className="text-[#A1A1A1]">Share your thoughts and discover insights from the community.</p>
          </div>

          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#A1A1A1] w-5 h-5" />
            <input
              type="text"
              placeholder="Search blogs, authors, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#131313] border border-[#2B2B2B] rounded-lg pl-12 pr-4 py-3 text-[#F1F1F1] placeholder-[#A1A1A1] focus:outline-none focus:border-[#E3583D]"
            />
          </div>

          <BlogCreator />

          {filteredBlogs.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-[#A1A1A1] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#F1F1F1] mb-2">No blogs found</h3>
              <p className="text-[#A1A1A1]">Try adjusting your search or be the first to write about this topic.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} {...blog} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
