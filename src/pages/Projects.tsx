import Layout from '@/components/Layout';
import { Search, Folder, Settings, Calendar, Clock, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'current' | 'upcoming' | 'past'>('current');

  // Mock data for demonstration
  const currentProjects = [
    {
      id: 1,
      title: 'Mobile App Redesign',
      description: 'Complete UI/UX redesign of the company mobile application',
      startedDate: '2024-01-05',
      category: 'UI/UX Design',
      difficulty: 'Advanced',
      progress: 65
    },
    {
      id: 2,
      title: 'Database Optimization',
      description: 'Optimize database queries and improve performance',
      startedDate: '2024-01-08',
      category: 'Backend Development',
      difficulty: 'Intermediate',
      progress: 40
    }
  ];

  const upcomingProjects = [
    {
      id: 3,
      title: 'React Portfolio Website',
      description: 'Build a responsive portfolio website using React and Tailwind CSS',
      dueDate: '2024-01-15',
      category: 'Frontend Development',
      difficulty: 'Intermediate'
    },
    {
      id: 4,
      title: 'E-commerce API Integration',
      description: 'Integrate payment gateway and product management system',
      dueDate: '2024-01-20',
      category: 'Full Stack',
      difficulty: 'Advanced'
    }
  ];

  const pastProjects = [
    {
      id: 5,
      title: 'Todo App with Redux',
      description: 'Simple todo application with state management',
      completedDate: '2023-12-10',
      category: 'Frontend Development',
      grade: 'A',
      difficulty: 'Beginner'
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'Weather app with API integration and data visualization',
      completedDate: '2023-12-05',
      category: 'Frontend Development',
      grade: 'B+',
      difficulty: 'Intermediate'
    }
  ];

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
            <option>All Categories</option>
            <option>Frontend Development</option>
            <option>Full Stack</option>
            <option>Backend Development</option>
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
            Current ({currentProjects.length})
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
            Upcoming ({upcomingProjects.length})
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
            Past ({pastProjects.length})
          </button>
        </div>

        {activeTab === 'current' && (
          <div className="space-y-4">
            {currentProjects.map((project) => (
              <div key={project.id} className="bg-[#131313] border border-[#2B2B2B] rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#F1F1F1] mb-2">{project.title}</h3>
                    <p className="text-[#A1A1A1] mb-3">{project.description}</p>
                    <div className="flex items-center gap-4 text-sm mb-3">
                      <span className="bg-[#E3583D]/20 text-[#E3583D] px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-[#A1A1A1]">Started: {project.startedDate}</span>
                      <span className="text-[#A1A1A1]">Difficulty: {project.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-[#2B2B2B] rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] h-2 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-[#A1A1A1]">{project.progress}%</span>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 text-white">
                    Continue Working
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'upcoming' && (
          <div className="space-y-4">
            {upcomingProjects.map((project) => (
              <div key={project.id} className="bg-[#131313] border border-[#2B2B2B] rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#F1F1F1] mb-2">{project.title}</h3>
                    <p className="text-[#A1A1A1] mb-3">{project.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="bg-[#E3583D]/20 text-[#E3583D] px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-[#A1A1A1]">Due: {project.dueDate}</span>
                      <span className="text-[#A1A1A1]">Difficulty: {project.difficulty}</span>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 text-white">
                    Start Project
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'past' && (
          <div className="space-y-4">
            {pastProjects.map((project) => (
              <div key={project.id} className="bg-[#131313] border border-[#2B2B2B] rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#F1F1F1] mb-2">{project.title}</h3>
                    <p className="text-[#A1A1A1] mb-3">{project.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="bg-[#E3583D]/20 text-[#E3583D] px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-[#A1A1A1]">Completed: {project.completedDate}</span>
                      <span className="text-[#A1A1A1]">Difficulty: {project.difficulty}</span>
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                        Grade: {project.grade}
                      </span>
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
    </Layout>
  );
};

export default Projects;
