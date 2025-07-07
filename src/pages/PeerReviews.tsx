
import Layout from '@/components/Layout';
import { Search, Users, Calendar, Clock, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ProjectUploader from '@/components/ProjectUploader';

const PeerReviews = () => {
  const [activeTab, setActiveTab] = useState<'current' | 'upcoming' | 'past'>('current');

  // Mock data for demonstration - will be replaced with Supabase data
  const currentReviews = [
    {
      id: 1,
      title: 'E-commerce React App',
      author: {
        name: 'John Smith',
        username: 'johndev',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
      },
      description: 'Full-stack e-commerce application with cart functionality',
      submittedDate: '2024-01-10',
      category: 'Full Stack',
      timeRemaining: '2 days',
      reviewsCompleted: 1,
      reviewsNeeded: 3,
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Personal Portfolio Website',
      author: {
        name: 'Lisa Wang',
        username: 'lisacodes',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b668f5c4?w=400'
      },
      description: 'Responsive portfolio website with animations',
      submittedDate: '2024-01-12',
      category: 'Frontend',
      timeRemaining: '4 days',
      reviewsCompleted: 0,
      reviewsNeeded: 2,
      technologies: ['React', 'Tailwind', 'Framer Motion']
    }
  ];

  const upcomingReviews = [
    {
      id: 3,
      title: 'Chat Application',
      author: {
        name: 'Sarah Johnson',
        username: 'sarahtech',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b668f5c4?w=400'
      },
      description: 'Real-time chat app with Socket.io',
      dueDate: '2024-01-18',
      category: 'Full Stack',
      reviewsNeeded: 3,
      technologies: ['React', 'Socket.io', 'Express']
    }
  ];

  const pastReviews = [
    {
      id: 4,
      title: 'Weather Dashboard',
      author: {
        name: 'Alex Rivera',
        username: 'alexdev',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
      },
      description: 'Weather app with API integration',
      completedDate: '2023-12-15',
      category: 'Frontend',
      myRating: 4,
      avgRating: 4.2,
      feedback: 'Great UI design and clean code structure!',
      technologies: ['React', 'OpenWeather API']
    }
  ];

  return (
    <Layout>
      <div className="p-8 bg-[#0B0B0B] min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-[#F1F1F1]">Peer Reviews</h1>
            </div>
            <p className="text-[#A1A1A1]">Submit your projects and provide feedback to help each other grow.</p>
          </div>

          <ProjectUploader />

          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#A1A1A1] w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects by title, author, or technology..."
                className="w-full bg-[#131313] border border-[#2B2B2B] rounded-lg pl-12 pr-4 py-3 text-[#F1F1F1] placeholder-[#A1A1A1] focus:outline-none focus:border-[#E3583D]"
              />
            </div>
            <select className="bg-[#131313] border border-[#2B2B2B] rounded-lg px-4 py-3 text-[#F1F1F1] focus:outline-none focus:border-[#E3583D] min-w-[150px]">
              <option>All Categories</option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>Full Stack</option>
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
              Available Reviews ({currentReviews.length})
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
              Upcoming ({upcomingReviews.length})
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
              Completed ({pastReviews.length})
            </button>
          </div>

          {activeTab === 'current' && (
            <div className="space-y-6">
              {currentReviews.map((review) => (
                <div key={review.id} className="bg-[#131313] border border-[#2B2B2B] rounded-lg p-6 hover:border-[#E3583D]/30 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={review.author.avatar}
                      alt={review.author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-[#F1F1F1]">{review.title}</h3>
                        <span className="bg-[#E3583D]/20 text-[#E3583D] px-3 py-1 rounded-full text-sm">
                          {review.category}
                        </span>
                      </div>
                      <p className="text-[#A1A1A1] mb-2">by {review.author.name} (@{review.author.username})</p>
                      <p className="text-[#A1A1A1] mb-3">{review.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {review.technologies.map((tech, index) => (
                          <span key={index} className="bg-[#2B2B2B] text-[#A1A1A1] px-2 py-1 rounded text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-[#A1A1A1]">Submitted: {review.submittedDate}</span>
                        <span className="text-orange-400">{review.timeRemaining} left</span>
                        <span className="text-[#A1A1A1]">
                          Reviews: {review.reviewsCompleted}/{review.reviewsNeeded}
                        </span>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 text-white">
                      Start Review
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'upcoming' && (
            <div className="space-y-6">
              {upcomingReviews.map((review) => (
                <div key={review.id} className="bg-[#131313] border border-[#2B2B2B] rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={review.author.avatar}
                      alt={review.author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-[#F1F1F1]">{review.title}</h3>
                        <span className="bg-[#E3583D]/20 text-[#E3583D] px-3 py-1 rounded-full text-sm">
                          {review.category}
                        </span>
                      </div>
                      <p className="text-[#A1A1A1] mb-2">by {review.author.name} (@{review.author.username})</p>
                      <p className="text-[#A1A1A1] mb-3">{review.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {review.technologies.map((tech, index) => (
                          <span key={index} className="bg-[#2B2B2B] text-[#A1A1A1] px-2 py-1 rounded text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-[#A1A1A1]">Available: {review.dueDate}</span>
                        <span className="text-[#A1A1A1]">Reviews needed: {review.reviewsNeeded}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'past' && (
            <div className="space-y-6">
              {pastReviews.map((review) => (
                <div key={review.id} className="bg-[#131313] border border-[#2B2B2B] rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={review.author.avatar}
                      alt={review.author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-[#F1F1F1]">{review.title}</h3>
                        <span className="bg-[#E3583D]/20 text-[#E3583D] px-3 py-1 rounded-full text-sm">
                          {review.category}
                        </span>
                      </div>
                      <p className="text-[#A1A1A1] mb-2">by {review.author.name} (@{review.author.username})</p>
                      <p className="text-[#A1A1A1] mb-3">{review.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {review.technologies.map((tech, index) => (
                          <span key={index} className="bg-[#2B2B2B] text-[#A1A1A1] px-2 py-1 rounded text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm mb-3">
                        <span className="text-[#A1A1A1]">Completed: {review.completedDate}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-yellow-400">My Rating: {review.myRating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-green-400 fill-current" />
                          <span className="text-green-400">Avg: {review.avgRating}</span>
                        </div>
                      </div>
                      
                      <div className="bg-[#0B0B0B] border border-[#2B2B2B] rounded-lg p-3">
                        <p className="text-[#A1A1A1] text-sm italic">"{review.feedback}"</p>
                      </div>
                    </div>
                    <Button variant="outline" className="border-[#2B2B2B] text-[#A1A1A1] hover:text-[#F1F1F1]">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PeerReviews;
