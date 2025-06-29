
import Layout from '@/components/Layout';
import { Search, Users, Plus, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const PeerReviews = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  // Mock data for demonstration
  const upcomingReviews = [
    {
      id: 1,
      title: 'React Component Review',
      author: 'Sarah Johnson',
      description: 'Review reusable button component implementation',
      dueDate: '2024-01-18',
      category: 'Frontend',
      reviewsNeeded: 3
    },
    {
      id: 2,
      title: 'API Integration Code Review',
      author: 'Mike Chen',
      description: 'Review REST API integration with error handling',
      dueDate: '2024-01-22',
      category: 'Backend',
      reviewsNeeded: 2
    }
  ];

  const pastReviews = [
    {
      id: 3,
      title: 'Database Schema Review',
      author: 'Alex Rivera',
      description: 'User management system database design',
      completedDate: '2023-12-15',
      category: 'Database',
      myRating: 4,
      avgRating: 4.2
    },
    {
      id: 4,
      title: 'CSS Animation Review',
      author: 'Emma Davis',
      description: 'Smooth transitions and micro-interactions',
      completedDate: '2023-12-12',
      category: 'Frontend',
      myRating: 5,
      avgRating: 4.8
    }
  ];

  return (
    <Layout>
      <div className="p-8 bg-[#0B0B0B] min-h-screen">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-[#F1F1F1]">Peer Reviews</h1>
          </div>
          <p className="text-[#A1A1A1]">Submit your work and receive detailed feedback from peers.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#A1A1A1] w-5 h-5" />
            <input
              type="text"
              placeholder="Search Reviews"
              className="w-full bg-[#131313] border border-[#2B2B2B] rounded-lg pl-12 pr-4 py-3 text-[#F1F1F1] placeholder-[#A1A1A1] focus:outline-none focus:border-[#E3583D]"
            />
          </div>
          <select className="bg-[#131313] border border-[#2B2B2B] rounded-lg px-4 py-3 text-[#F1F1F1] focus:outline-none focus:border-[#E3583D] min-w-[150px]">
            <option>All Categories</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Database</option>
          </select>
        </div>

        <div className="flex gap-4 mb-8">
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
            Past ({pastReviews.length})
          </button>
        </div>

        {activeTab === 'upcoming' && (
          <div className="space-y-4">
            {upcomingReviews.map((review) => (
              <div key={review.id} className="bg-[#131313] border border-[#2B2B2B] rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#F1F1F1] mb-2">{review.title}</h3>
                    <p className="text-[#A1A1A1] mb-2">by {review.author}</p>
                    <p className="text-[#A1A1A1] mb-3">{review.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="bg-[#E3583D]/20 text-[#E3583D] px-3 py-1 rounded-full">
                        {review.category}
                      </span>
                      <span className="text-[#A1A1A1]">Due: {review.dueDate}</span>
                      <span className="text-[#A1A1A1]">Reviews needed: {review.reviewsNeeded}</span>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 text-white">
                    Review Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'past' && (
          <div className="space-y-4">
            {pastReviews.map((review) => (
              <div key={review.id} className="bg-[#131313] border border-[#2B2B2B] rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#F1F1F1] mb-2">{review.title}</h3>
                    <p className="text-[#A1A1A1] mb-2">by {review.author}</p>
                    <p className="text-[#A1A1A1] mb-3">{review.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="bg-[#E3583D]/20 text-[#E3583D] px-3 py-1 rounded-full">
                        {review.category}
                      </span>
                      <span className="text-[#A1A1A1]">Completed: {review.completedDate}</span>
                      <span className="text-yellow-400">My Rating: {review.myRating}⭐</span>
                      <span className="text-green-400">Avg Rating: {review.avgRating}⭐</span>
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

        <button className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 rounded-full flex items-center justify-center shadow-lg transition-colors">
          <Plus className="w-6 h-6 text-white" />
        </button>
      </div>
    </Layout>
  );
};

export default PeerReviews;
