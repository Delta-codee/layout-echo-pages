
import Layout from '@/components/Layout';
import { Search, Users, Plus, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PeerReviews = () => {
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
              placeholder="Search Assignments"
              className="w-full bg-[#131313] border border-[#2B2B2B] rounded-lg pl-12 pr-4 py-3 text-[#F1F1F1] placeholder-[#A1A1A1] focus:outline-none focus:border-[#E3583D]"
            />
          </div>
          <select className="bg-[#131313] border border-[#2B2B2B] rounded-lg px-4 py-3 text-[#F1F1F1] focus:outline-none focus:border-[#E3583D] min-w-[150px]">
            <option>All Batches</option>
          </select>
          <select className="bg-[#131313] border border-[#2B2B2B] rounded-lg px-4 py-3 text-[#F1F1F1] focus:outline-none focus:border-[#E3583D] min-w-[150px]">
            <option>All Categories</option>
          </select>
        </div>

        <div className="flex gap-4 mb-8">
          <button className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] text-white px-6 py-3 rounded-lg font-medium">
            Live (3)
          </button>
          <button className="text-[#A1A1A1] px-6 py-3 rounded-lg font-medium hover:text-[#F1F1F1] hover:bg-[#131313]">
            Upcoming (5)
          </button>
          <button className="text-[#A1A1A1] px-6 py-3 rounded-lg font-medium hover:text-[#F1F1F1] hover:bg-[#131313]">
            Past (12)
          </button>
        </div>

        <div className="bg-[#131313] border border-[#2B2B2B] rounded-lg min-h-[400px] flex flex-col items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#2B2B2B] rounded-lg mx-auto mb-6 flex items-center justify-center">
              <Users className="w-8 h-8 text-[#A1A1A1]" />
            </div>
            <h3 className="text-xl font-bold text-[#F1F1F1] mb-4">No assignments available</h3>
            <p className="text-[#A1A1A1] mb-8 max-w-md">
              There are currently no assignments in this category. 
              Check back later or try a different filter.
            </p>
            <Button className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Create New Assignment
            </Button>
          </div>
        </div>

        <button className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 rounded-full flex items-center justify-center shadow-lg transition-colors">
          <Plus className="w-6 h-6 text-white" />
        </button>
      </div>
    </Layout>
  );
};

export default PeerReviews;
