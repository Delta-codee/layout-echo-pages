
import Layout from '@/components/Layout';
import { Search, Folder, Plus, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  return (
    <Layout>
      <div className="p-8 bg-[#0B0B0B] min-h-screen">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-lg flex items-center justify-center">
                <Folder className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-[#F1F1F1]">Projects</h1>
            </div>
            <p className="text-[#A1A1A1]">Create and submit your projects before the deadline.</p>
          </div>
          <button className="text-[#A1A1A1] hover:text-[#F1F1F1] p-2 hover:bg-[#131313] rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#A1A1A1] w-5 h-5" />
            <input
              type="text"
              placeholder="Search Projects"
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
            Live (0)
          </button>
          <button className="text-[#A1A1A1] px-6 py-3 rounded-lg font-medium hover:text-[#F1F1F1] hover:bg-[#131313]">
            Upcoming (0)
          </button>
          <button className="text-[#A1A1A1] px-6 py-3 rounded-lg font-medium hover:text-[#F1F1F1] hover:bg-[#131313]">
            Past (0)
          </button>
        </div>

        <div className="bg-[#131313] border border-[#2B2B2B] rounded-lg min-h-[400px] flex flex-col items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-lg mx-auto mb-6 flex items-center justify-center">
              <Folder className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#F1F1F1] mb-4">No projects available in this category</h3>
            <p className="text-[#A1A1A1] mb-8 max-w-md">
              Start your learning journey by creating your first project. 
              Choose from various categories and showcase your skills.
            </p>
            <Button className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Create New Project
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
